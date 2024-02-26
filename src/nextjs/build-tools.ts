import path from "path";
import fs from "fs-extra";
import { parseModule } from "magicast";
import boxen from "boxen";
import { diffLines } from "diff";
import { bold, green, red } from "kleur/colors";
import { glob } from "glob";

import { getConfig } from "../config";
import type { Config } from "../config";
import { buildFromTemplate, buildStringFromTemplate } from "../template";

type RouteInfo = {
  importPath: string;
  infoPath: string;
  importKey: string;
  verbs: string[];
  pathTemplate: string;
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
  path.resolve(config.src || "", fpath);

const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export async function writeRoutes(silent: boolean = false) {
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
    a.pathTemplate.localeCompare(b.pathTemplate)
  );

  const pageRoutes: {
    pathTemplate: string;
    importKey: string;
  }[] = [];
  const apiRoutes: {
    pathTemplate: string;
    importKey: string;
    verb: string;
    upperVerb: string;
    lowerVerb: string;
  }[] = [];
  for (const { verbs, pathTemplate, importKey } of sortedPaths) {
    if (verbs.length === 0) {
      pageRoutes.push({ pathTemplate, importKey });
    } else {
      for (const verb of verbs) {
        apiRoutes.push({
          pathTemplate,
          importKey,
          verb,
          upperVerb: upperFirst(verb.toLowerCase()),
          lowerVerb: verb.toLowerCase(),
        });
      }
    }
  }

  const code = await buildStringFromTemplate("nextjs/index.ts.template", {
    imports: Array.from(imports).sort().join(", "),
    routeImports: sortedPaths,
    pageRoutes,
    apiRoutes,
  });

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

export async function parseFile(fpath: string) {
  const config = getConfig();

  const newPath: RouteInfo = {
    importPath: `@/app/${fpath}`.replace(/.ts$/, ""),
    infoPath: `/${fpath}`,
    importKey: "",
    verbs: [],
    pathTemplate: "",
  };

  const code: string = fs
    .readFileSync(absoluteFilePath(config, fpath))
    .toString();
  const mod = parseModule(code);
  newPath.importKey = newPath.importKey || mod.exports.Route?.name || "tempKey";

  for (const verb of ["GET", "POST", "DELETE", "PUT"]) {
    if (mod.exports[verb]) {
      newPath.verbs.push(verb);
    }
  }

  newPath.pathTemplate = `/${path.parse(fpath).dir.split(path.sep).join("/")}`;

  paths[fpath] = newPath;

  return newPath.verbs.length || 1;
}

export async function createInfoFile(config: Config, fpath: string) {
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

  await buildFromTemplate("nextjs/info.ts.template", absPath, {
    name,
    params,
    verbs: verbs.map((verb) => ({ verb, keys: VERB_KEYS[verb] })),
  });
}

export async function checkRouteFile(path: string) {
  const config = getConfig();
  const infoFile = path.replace(/\.(js|jsx|ts|tsx)$/, ".info.ts");
  const absPath = absoluteFilePath(config, infoFile);
  if (!fs.existsSync(absPath)) {
    await createInfoFile(config, path);
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
    if (await checkRouteFile(route)) {
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
    routeCount += await parseFile(info);
  }
  if (!silent) {
    console.log(`${routeCount} total routes`);
  }

  const diff = await writeRoutes(silent);

  if (config.openapi) {
    writeOpenAPI(config);
  }

  return {
    routesAdded,
    routeCount,
    diff,
  };
}

async function updateBuildFiles(silent: boolean = false) {
  const config = getConfig();

  await writeRoutes(silent);

  if (config.openapi) {
    writeOpenAPI(config);
  }
}

function writeOpenAPI(config: Config) {
  if (!config.openapi) return;

  let template = fs.readFileSync(config.openapi.template).toString();

  const imports: string[] = [];
  const registrations: string[] = [];

  const pathPrefx = config.routes
    .replace("./", "")
    .split("/")
    .map((s) => "..")
    .join("/");

  for (const path of Object.values(paths)) {
    if (path.verbs.length > 0) {
      imports.push(
        `import * as ${path.importKey} from "${pathPrefx}/${(
          config.src || ""
        ).replace("./", "")}${path.infoPath.replace(".ts", "")}";`
      );
      for (const verb of path.verbs) {
        let request = "";
        if (verb !== "DELETE") {
          request += `    params: ${path.importKey}.Route.params,`;
        }
        if (verb === "POST" || verb === "PUT") {
          request += `\n    body: {
      required: true,
      content: {
        "application/json": {
          schema: ${path.importKey}.${verb}.body,
        },
      },
    },`;
        }
        registrations.push(`registry.registerPath({
  method: "${verb.toLowerCase()}",
  path: "${path.pathTemplate}",
  summary: "",
  request: {
${request}
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: ${path.importKey}.${verb}.result,
        },
      },
    },
  },
});
`);
      }
    }
  }

  template = template.replace(/\/\/ \{\{IMPORTS\}\}/, imports.join("\n"));
  template = template.replace(
    /\/\/ \{\{REGISTRATIONS\}\}/,
    registrations.join("\n")
  );

  fs.writeFileSync(config.openapi.target, template);
}

export async function buildREADME(pkgMgr: string) {
  const sortedPaths = Object.values(paths).sort((a, b) =>
    a.importPath.localeCompare(b.importPath)
  );

  let tasks: string[] = [];
  for (const { infoPath, verbs, importKey, pathTemplate } of sortedPaths) {
    if (verbs.length > 0) {
      for (const verb of verbs) {
        tasks.push(`\`${infoPath}\`: Add typing for \`${verb}\``);
        tasks.push(
          `Convert \`${verb}\` fetch calls to \`${pathTemplate}\` to \`${verb.toLowerCase()}${importKey}(...)\` calls`
        );
      }
    } else {
      tasks.push(
        `\`${infoPath}\`: Add search typing to if the page supports search paramaters`
      );
      tasks.push(
        `Convert \`Link\` components for \`${pathTemplate}\` to \`<${importKey}.Link>\``
      );
      if (infoPath.includes("[")) {
        tasks.push(
          `Convert \`params\` typing in \`${infoPath.replace(
            ".info",
            ""
          )}\` to \`z.infer<>\``
        );
      }
    }
  }

  const routes: {
    pathTemplate: string;
    verb: string;
    importKey: string;
    usage: string;
  }[] = [];
  for (const { pathTemplate, verbs, importKey } of sortedPaths) {
    if (verbs.length > 0) {
      for (const verb of verbs) {
        routes.push({
          pathTemplate,
          verb,
          importKey,
          usage: `${verb.toLowerCase()}${importKey}(...)`,
        });
      }
    } else {
      routes.push({
        pathTemplate,
        verb: "-",
        importKey,
        usage: `<${importKey}.Link>`,
      });
    }
  }

  await buildFromTemplate("nextjs/README.md.template", "./DR-README.md", {
    tasks,
    routes,
    packageManager: pkgMgr === "npm" ? "npm run" : pkgMgr,
  });
}

const fileMap: Record<string, boolean> = {};
let realTime = false;
let allFilesProcessed = false;

const allCompleted = () => {
  return Object.values(fileMap).every((v) => v);
};

const checkForFinishedProcessing = async () => {
  if (allCompleted()) {
    if (allFilesProcessed) {
      realTime = true;
      await updateBuildFiles();
    }
  } else {
    console.log(
      `Waiting for: ${Object.keys(fileMap).filter((k) => !fileMap[k])}`
    );
  }
};

const isInfoFile = (path: string) => path.match(/\.info\.ts(x?)$/);
const isRouteFile = (path: string) =>
  path.match(/(page|route)\.(js|jsx|ts|tsx)$/);

export const processFile = (path: string) => {
  if (realTime) {
    if (isInfoFile(path)) {
      parseFile(path).then(async () => await updateBuildFiles());
    } else if (isRouteFile(path)) {
      checkRouteFile(path).then(async () => await updateBuildFiles());
    }
  } else {
    if (isInfoFile(path)) {
      fileMap[path] = false;
      parseFile(path).then(() => {
        fileMap[path] = true;
        checkForFinishedProcessing();
      });
    } else if (isRouteFile(path)) {
      fileMap[path] = false;
      checkRouteFile(path).then(() => {
        fileMap[path] = true;
        checkForFinishedProcessing();
      });
    }
  }
};

export const finishedProcessing = () => {
  allFilesProcessed = true;
  checkForFinishedProcessing();
};

export function fileRemoved(fpath: string) {
  delete paths[fpath];
  updateBuildFiles();
}
