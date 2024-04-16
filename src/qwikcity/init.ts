import path from "path";
import fs from "fs-extra";
import ora from "ora";
import { red, bold, italic } from "kleur/colors";
import logSymbols from "log-symbols";
import prompts from "prompts";

import { writeConfig } from "../config";

import { getConfig } from "../config";
import { buildFileFromTemplate } from "../template";
import { buildFiles, buildREADME } from "../shared/build-tools";
import {
  getPackageManager,
  addPackages,
  addPackageJSONScripts
} from "../shared/utils";

const STD_PACKAGES = {
  dependencies: ["zod", "query-string"],
  devDependencies: []
};
const STD_SCRIPTS = {
  "dr:build": "npx declarative-routing build",
  "dr:build:watch": "npx declarative-routing build --watch"
};

export async function setup() {
  const config = getConfig();

  const { routes } = getConfig();

  const spinner = ora(`Installing components...`).start();

  fs.mkdirpSync(routes);
  await buildFileFromTemplate(
    "qwikcity/makeRoute.tsx",
    path.resolve(routes, "./makeRoute.tsx"),
    {}
  );

  spinner.text = "Getting package mananger.";

  const pkgMgr = await getPackageManager();

  spinner.text = "Installing dependencies.";

  const packages = STD_PACKAGES.dependencies;
  await addPackages(packages);

  spinner.text = "Installing dev dependencies.";

  const devPackages = STD_PACKAGES.devDependencies;
  await addPackages(devPackages, true);

  spinner.text = "Adding package.json scripts.";

  const scripts = STD_SCRIPTS;
  addPackageJSONScripts(scripts);

  spinner.text = "Adding info files and building routes.";

  const report = await buildFiles(true);

  spinner.text = "Building README.";

  await buildREADME(pkgMgr, config.mode);

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
      italic(bold("README.md"))
    )} file in the declarativeRoutes directory and follow the post setup tasks.`
  );
}

export async function setupQwikCity() {
  const src = "./src/routes";
  const routes = "./src/components/declarativeRoutes";

  const response = await prompts([
    {
      type: "text",
      name: "src",
      message: "What is your routes directory?",
      initial: src
    },
    {
      type: "text",
      name: "routes",
      message: "Where do you want the to place the declarative routes?",
      initial: routes
    }
  ]);

  writeConfig({
    mode: "qwikcity",
    src: response.src ?? src,
    routes: response.routes ?? routes,
    openapi: undefined
  });

  await setup();
}
