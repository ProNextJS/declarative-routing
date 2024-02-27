import path from "path";
import fs from "fs-extra";
import ora from "ora";
import { red, bold, italic } from "kleur/colors";
import logSymbols from "log-symbols";
import prompts from "prompts";

import { writeConfig } from "../config";

import { getConfig } from "../config";
import { buildFiles, buildREADME } from "./build-tools";
import { buildFileFromTemplate } from "../template";

import {
  getPackageManager,
  addPackageJSONScripts,
  addPackages,
} from "../shared";

const STD_PACKAGES = {
  dependencies: ["zod", "query-string"],
  devDependencies: [],
};
const STD_SCRIPTS = {
  "dr:build": "npx declarative-routing build",
  "dr:build:watch": "npx declarative-routing build --watch",
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

export async function setup() {
  const config = getConfig();
  const openapi = !!config.openapi;

  const { routes } = getConfig();

  const spinner = ora(`Installing components...`).start();

  fs.mkdirpSync(routes);
  await buildFileFromTemplate(
    "nextjs/makeRoute.tsx",
    path.resolve(routes, "./makeRoute.tsx"),
    {}
  );

  spinner.text = "Getting package mananger.";

  const pkgMgr = await getPackageManager();

  spinner.text = "Installing dependencies.";

  const packages = [
    ...STD_PACKAGES.dependencies,
    ...(openapi ? OPENAPI_PACKAGES.dependencies : []),
  ];
  addPackages(packages);

  spinner.text = "Installing dev dependencies.";

  const devPackages = [
    ...STD_PACKAGES.devDependencies,
    ...(openapi ? OPENAPI_PACKAGES.devDependencies : []),
  ];
  addPackages(devPackages, true);

  spinner.text = "Adding package.json scripts.";

  const scripts = {
    ...STD_SCRIPTS,
    ...(openapi ? OPENAPI_SCRIPTS : {}),
  };
  addPackageJSONScripts(scripts);

  if (config.openapi) {
    spinner.text = "Setting up OpenAPI.";
    await buildFileFromTemplate(
      "nextjs/openapi.template.ts",
      config.openapi?.template,
      {}
    );
  }

  spinner.text = "Adding info files and building routes.";

  const report = await buildFiles(true);

  spinner.text = "Building README.";

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
    `Added declarative-routing support files in ${config.routes}.`
  );

  console.log(
    `\nYour next step is to read the ${red(
      italic(bold("DR-README.md"))
    )} file and follow the post setup tasks.`
  );
}

export async function setupNext() {
  let src = "./src/app";
  let routes = "./src/routes";
  if (fs.existsSync("./app")) {
    src = "./app";
    routes = "./routes";
  }

  const response = await prompts([
    {
      type: "text",
      name: "src",
      message: "What is your source directory?",
      initial: src,
    },
    {
      type: "text",
      name: "routes",
      message: "Where do you want the routes directory?",
      initial: routes,
    },
    {
      type: "confirm",
      name: "openapi",
      message: "Add OpenAPI output?",
      initial: true,
    },
  ]);

  writeConfig({
    mode: "nextjs",
    src: response.src ?? src,
    routes: response.routes ?? routes,
    openapi:
      response.openapi ?? true
        ? {
            target: `${routes}/openapi.ts`,
            template: `${routes}/openapi.template.ts`,
          }
        : undefined,
  });

  await setup();
}
