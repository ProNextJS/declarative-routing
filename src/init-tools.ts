import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { detect } from "@antfu/ni";
import { execa } from "execa";
import ora from "ora";
import { type PackageJson } from "type-fest";
import { red, bold, italic } from "kleur/colors";
import logSymbols from "log-symbols";

import { getConfig } from "./config";
import { buildFiles, buildREADME } from "./build-tools";

const STD_PACKAGES = {
  dependencies: ["zod", "query-string"],
  devDependencies: [],
};
const STD_SCRIPTS = {
  "dr:build": "npx declarative-routes build",
  "dr:build:watch": "npx declarative-routes build --watch",
};
const OPENAPI_PACKAGES = {
  dependencies: [],
  devDependencies: ["yaml", "@asteasolutions/zod-to-openapi"],
};
const OPENAPI_SCRIPTS = {
  openapi: "npm run openapi:yaml && npm run openapi:html",
  "openapi:yaml": "ts-node ./src/routes/openapi.ts",
  "openapi:html": "npx @redocly/cli build-docs openapi-docs.yml",
};

export function getPackageInfo() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const packageJsonPath = path.resolve(__dirname, "../package.json");
  return fs.readJSONSync(packageJsonPath) as PackageJson;
}

export function addPackageJSONScripts(scripts: Record<string, string>) {
  const packageJsonPath = path.resolve("./package.json");
  const packageJson = fs.readJSONSync(packageJsonPath) as PackageJson;

  const newPackageJson = {
    ...packageJson,
    scripts: {
      ...packageJson.scripts,
    },
  };
  for (const key of Object.keys(scripts)) {
    if (!newPackageJson.scripts[key]) {
      newPackageJson.scripts[key] = scripts[key];
    }
  }

  return fs.writeJSONSync(packageJsonPath, newPackageJson, {
    spaces: 2,
    EOL: "\n",
  });
}

async function getPackageManager(): Promise<"yarn" | "pnpm" | "bun" | "npm"> {
  const packageManager = await detect({
    programmatic: true,
    cwd: process.cwd(),
  });

  if (packageManager === "yarn@berry") return "yarn";
  if (packageManager === "pnpm@6") return "pnpm";
  if (packageManager === "bun") return "bun";

  return packageManager ?? "npm";
}

export async function setup() {
  const config = getConfig();
  const openapi = !!config.openapi;

  const spinner = ora(`Installing components...`).start();

  const { routes } = getConfig();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.mkdirpSync(routes);
  fs.copyFileSync(
    path.resolve(__dirname, "../assets/makeRoute.tsx"),
    path.resolve(routes, "./makeRoute.tsx")
  );

  spinner.text = "Getting package maanger.";

  const pkgMgr = await getPackageManager();

  spinner.text = "Installing dependencies.";

  const packages = [
    ...STD_PACKAGES.dependencies,
    ...(openapi ? OPENAPI_PACKAGES.dependencies : []),
  ];
  if (packages?.length) {
    await execa(pkgMgr, [pkgMgr === "npm" ? "install" : "add", ...packages]);
  }

  spinner.text = "Installing dev dependencies.";

  const devPackages = [
    ...STD_PACKAGES.devDependencies,
    ...(openapi ? OPENAPI_PACKAGES.devDependencies : []),
  ];
  if (devPackages?.length) {
    await execa(pkgMgr, [
      pkgMgr === "npm" ? "install" : "add",
      "-D",
      ...devPackages,
    ]);
  }

  spinner.text = "Adding package.json scripts.";

  const scripts = {
    ...STD_SCRIPTS,
    ...(openapi ? OPENAPI_SCRIPTS : {}),
  };
  addPackageJSONScripts(scripts);

  if (config.openapi) {
    spinner.text = "Setting up OpenAPI.";
    fs.copyFileSync(
      path.resolve(__dirname, "../assets/openapi.template.ts"),
      config.openapi?.template
    );
  }

  spinner.text = "Adding info files and building routes.";

  const report = await buildFiles(true);

  await buildREADME(pkgMgr);

  spinner.succeed(`Done.`);

  console.log(`\n${bold("Initialization completed successfully")}`);

  if (report.routesAdded > 0) {
    console.log(
      logSymbols.success,
      `Added ${report.routesAdded} .info files to your project.`
    );
  }
  console.log(
    logSymbols.success,
    `Added declarative-routes support files in ${config.routes}.`
  );

  console.log(
    `\nYour next step is to read the ${red(
      italic(bold("NEXT-DR-README.md"))
    )} file and follow the post setup tasks.`
  );
}
