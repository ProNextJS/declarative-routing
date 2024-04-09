import path from "path";
import fs from "fs-extra";
import { parseModule } from "magicast";
import { glob } from "glob";

import { getConfig, absoluteFilePath } from "../config";
import type { Config } from "../config";
import { buildFileFromTemplate, buildStringFromTemplate } from "../template";
import { getDiffContent, upperFirst, jsClean, showDiff } from "../shared";

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

export function removeFileFromCache(fpath: string) {
  delete paths[fpath];
}

async function writeRoutes(silent: boolean = false) {
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


export async function parseInfoFile(fpath: string) {
  const config = getConfig();
  const {importPathPrefix} = config;


  const newPath: RouteInfo = {
    importPath: `${importPathPrefix || '@/app'}/${fpath}`.replace(/.ts$/, ""),
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

async function createInfoFile(config: Config, fpath: string) {
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

  await buildFileFromTemplate("nextjs/info.ts.template", absPath, {
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
    routeCount += await parseInfoFile(info);
  }
  if (!silent) {
    console.log(`${routeCount} total routes`);
  }

  const diff = await writeRoutes(silent);

  if (config.openapi) {
    await writeOpenAPI(config);
  }

  return {
    routesAdded,
    routeCount,
    diff,
  };
}

export async function updateBuildFiles(silent: boolean = false) {
  const config = getConfig();

  await writeRoutes(silent);

  if (config.openapi) {
    await writeOpenAPI(config);
  }
}

async function writeOpenAPI(config: Config) {
  if (!config.openapi) return;

  let template = fs.readFileSync(config.openapi.template).toString();

  const imports: string[] = [];
  const registrations: string[] = [];

  const pathPrefix = config.routes
    .replace("./", "")
    .split("/")
    .map(() => "..")
    .join("/");

  for (const path of Object.values(paths)) {
    if (path.verbs.length > 0) {
      imports.push(
        await buildStringFromTemplate("nextjs/openapi-import.template", {
          importKey: path.importKey,
          pathPrefix,
          srcDir: (config.src || "").replace("./", ""),
          import: path.infoPath.replace(".ts", ""),
        })
      );
      for (const verb of path.verbs) {
        registrations.push(
          await buildStringFromTemplate("nextjs/openapi-register.template", {
            lowerVerb: verb.toLowerCase(),
            pathTemplate: path.pathTemplate,
            verb,
            importKey: path.importKey,
            isNotDELETE: verb !== "DELETE",
            isPOSTorPUT: verb === "PUT" || verb === "POST",
          })
        );
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

  await buildFileFromTemplate("nextjs/README.md.template", "./DR-README.md", {
    tasks,
    routes,
    packageManager: pkgMgr === "npm" ? "npm run" : pkgMgr,
  });
}
