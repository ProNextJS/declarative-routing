import path from "node:path";
import fs from "node:fs";
import { parseModule } from "magicast";
import boxen from "boxen";
import { diffLines } from "diff";
import { bold, green, red } from "kleur/colors";
import { glob } from "glob";

import { getConfig, Config } from "./config";

type RouteInfo = {
  importPath: string;
  importKey: string;
  verbs: string[];
  pathTemplate: string;
  pathArgs: string[];
};
const paths: Record<string, RouteInfo> = {};

const VERB_KEYS: Record<string, string[]> = {
  GET: ["result"],
  POST: ["body", "result"],
  DELETE: [],
  UPDATE: ["body", "result"],
};

function getDiffContent(input: string, output: string): string | null {
  let changes: string[] = [];
  for (const change of diffLines(input, output)) {
    let lines = change.value.trim().split("\n").slice(0, change.count);
    if (lines.length === 0) continue;
    if (change.added) {
      lines.forEach((line) => {
        changes.push(bold(green(line)));
      });
    }
    if (change.removed) {
      lines.forEach((line) => {
        changes.push(red(line));
      });
    }
  }

  return changes.join("\n");
}

const jsClean = (str: string) => str.replace(/[^a-zA-Z0-9]/g, "");

const absoluteFilePath = (config: Config, fpath: string) =>
  path.resolve(config.src, fpath);

const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function writeRoutes(silent: boolean = false) {
  const config = getConfig();
  const imports: Set<string> = new Set();
  for (const { verbs } of Object.values(paths)) {
    if (verbs.length > 0) {
      for (const verb of verbs) {
        imports.add(`make${upperFirst(verb.toLowerCase())}Route`);
      }
    } else {
      imports.add("makeRoute");
    }
  }

  const sortedPaths = Object.values(paths).sort((a, b) =>
    a.importKey.localeCompare(b.importKey)
  );

  let code = `// Automatically generated, do NOT edit
  
import { ${Array.from(imports).join(", ")} } from "./makeRoute";
export { z } from "./makeRoute";\n\n`;

  for (const { importPath, importKey } of sortedPaths) {
    code += `import * as ${importKey}Route from "${importPath}";\n`;
  }

  const exports: string[] = [];
  for (const { verbs, pathTemplate, pathArgs, importKey } of sortedPaths) {
    if (verbs.length === 0) {
      const args = pathArgs.length ? `{ ${pathArgs.join(", ")} }` : "";
      exports.push(`export const ${importKey} = makeRoute({
  fn: (${args}) => \`${pathTemplate}\`,
  ...${importKey}Route.Route,
});`);
    } else {
      for (const verb of verbs) {
        const args = pathArgs.length ? `{ ${pathArgs.join(", ")} }` : "";
        exports.push(`export const ${verb.toLowerCase()}${importKey} = make${upperFirst(
          verb.toLowerCase()
        )}Route(
  {
    fn: (${args}) => \`${pathTemplate}\`,
    ...${importKey}Route.Route,
  },
  ${importKey}Route.${verb}
);`);
      }
    }
  }
  code += "\n" + exports.join("\n\n");
  const routesPath = path.resolve(config.routes, "index.ts");
  const oldCode = fs.existsSync(routesPath)
    ? fs.readFileSync(routesPath).toString()
    : "";

  let report = "";
  if (oldCode !== code) {
    report = getDiffContent(oldCode, code) || "";
    if (!silent) {
      showDiff(report);
    }
    fs.writeFileSync(routesPath, code);
  }
  return report;
}

export function showDiff(report: string) {
  console.log(
    boxen(report, {
      width: 80,
      padding: { left: 2, right: 2, top: 0, bottom: 0 },
      borderStyle: "round",
      dimBorder: true,
    })
  );
}

export function parseFile(fpath: string) {
  const config = getConfig();

  const newPath: RouteInfo = {
    importPath: `@/app/${fpath}`.replace(/.ts$/, ""),
    importKey: "",
    verbs: [],
    pathTemplate: "",
    pathArgs: [],
  };

  const code: string = fs
    .readFileSync(absoluteFilePath(config, fpath))
    .toString();
  const mod = parseModule(code);
  newPath.importKey = mod.exports.Route?.name ?? "";

  for (const verb of ["GET", "POST", "DELETE", "PUT"]) {
    if (mod.exports[verb]) {
      newPath.verbs.push(verb);
    }
  }

  const pathArr = path.parse(fpath).dir.split(path.sep);

  let catchAllSegment = "";
  let addCatchAll: string | null = null;
  if (pathArr.at(-1)?.startsWith("[[...")) {
    addCatchAll = pathArr.pop()!.replace("[[...", "").replace("]]", "");
    catchAllSegment =
      "${" +
      addCatchAll +
      " && " +
      addCatchAll +
      ".length > 0 ? `/${" +
      addCatchAll +
      ".join('/')}` : ''}";
  }

  newPath.pathTemplate =
    "/" +
    pathArr
      .map((p) => {
        const optionalCatchAll = p.match(/\[\[\.\.\.(.*)\]\]/);
        if (optionalCatchAll?.[1]) {
          return "";
        }
        const catchAll = p.match(/\[\.\.\.(.*)\]/);
        if (catchAll?.[1]) {
          newPath.pathArgs.push(catchAll?.[1]!);
          return "${" + catchAll?.[1] + ".join('/')}";
        }
        const param = p.match(/\[(.*)\]/);
        if (param?.[1]) {
          newPath.pathArgs.push(param?.[1]!);
          return "${" + param?.[1] + "}";
        }
        return p;
      })
      .join("/") +
    catchAllSegment;

  if (addCatchAll) {
    newPath.pathArgs.push(addCatchAll);
  }

  paths[fpath] = newPath;

  return newPath.verbs.length || 1;
}

export function createInfoFile(config: Config, fpath: string) {
  const infoFile = fpath.replace(/\.(js|jsx|ts|tsx)$/, ".info.ts");
  const absPath = absoluteFilePath(config, infoFile);
  const pathElements = path
    .parse(infoFile)
    .dir.split(path.sep)
    .filter((v) => v.length);

  let name = "Home";
  if (pathElements.length) {
    name = pathElements.map((p) => upperFirst(jsClean(p))).join("");
  }

  const params: string[] = [];
  for (const elem of pathElements) {
    if (elem.startsWith("[[...") && elem.endsWith("]]")) {
      params.push(`${jsClean(elem)}: z.string().array().optional()`);
    } else if (elem.startsWith("[...") && elem.endsWith("]")) {
      params.push(`${jsClean(elem)}: z.string().array()`);
    } else if (elem.startsWith("[") && elem.endsWith("]")) {
      params.push(`${jsClean(elem)}: z.string()`);
    }
  }

  const code: string = fs
    .readFileSync(absoluteFilePath(config, fpath))
    .toString();

  // TODO: Use AST to parse the code and find the verbs, magicast doesn't work for exported functions
  const verbs: string[] = [];
  for (const verb of Object.keys(VERB_KEYS)) {
    if (code.includes(`function ${verb}(`)) {
      verbs.push(verb);
    }
  }

  let infoCode = `import { z } from "@/routes";

export const Route = {
  name: "${name}",
  params: z.object({ ${params.join(",\n")} }),
};\n`;
  for (const verb of verbs) {
    infoCode += `\nexport const ${verb} = {
  ${VERB_KEYS[verb].map((k) => `${k}: z.object({})`).join(",\n  ")}
};\n`;
  }
  fs.writeFileSync(absPath, infoCode);
}

export function fileRemoved(fpath: string) {
  delete paths[fpath];
}

export function checkRouteFile(path: string) {
  const config = getConfig();
  const infoFile = path.replace(/\.(js|jsx|ts|tsx)$/, ".info.ts");
  const absPath = absoluteFilePath(config, infoFile);
  if (!fs.existsSync(absPath)) {
    createInfoFile(config, path);
    return true;
  }
  return false;
}

export async function buildFiles(silent: boolean = false) {
  const config = getConfig();

  // Add new .info files to existing routes
  const routes = await glob(
    [
      "**/page.{js,ts,jsx,tsx}",
      "**/route.{js,ts,jsx,tsx}",
      "page.{js,ts,jsx,tsx}",
      "route.{js,ts,jsx,tsx}",
    ],
    {
      cwd: config.src,
    }
  );

  let routesAdded = 0;
  for (const route of routes) {
    if (checkRouteFile(route)) {
      routesAdded++;
    }
  }
  if (!silent && routesAdded > 0) {
    console.log(`Added ${routesAdded} new info files`);
  }

  // Parse all .info files
  const infoFiles = await glob(
    [
      "**/page.info.{js,ts,jsx,tsx}",
      "**/route.info.{js,ts,jsx,tsx}",
      "page.info.{js,ts,jsx,tsx}",
      "route.info.{js,ts,jsx,tsx}",
    ],
    {
      cwd: config.src,
    }
  );

  let routeCount = 0;
  for (const info of infoFiles) {
    routeCount += parseFile(info);
  }
  if (!silent) {
    console.log(`${routeCount} total routes`);
  }

  // Write routes
  const diff = writeRoutes(silent);

  return {
    routesAdded,
    routeCount,
    diff,
  };
}
