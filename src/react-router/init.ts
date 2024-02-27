import prompts from "prompts";
import ora from "ora";
import { red, bold, italic } from "kleur/colors";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs-extra";

import { writeConfig, getConfig } from "../config";
import { addPackages, getPackageManager } from "../shared";
import { buildFileFromTemplate } from "../template";

const STD_PACKAGES = {
  dependencies: ["zod", "query-string"],
};

export async function setup() {
  const spinner = ora(`Installing components...`).start();

  const { routes } = getConfig();

  fs.mkdirpSync(routes);
  await buildFileFromTemplate(
    "react-router/index.ts",
    path.resolve(routes, "./index.ts"),
    {}
  );

  fs.mkdirpSync(routes);
  await buildFileFromTemplate(
    "react-router/makeRoute.tsx",
    path.resolve(routes, "./makeRoute.tsx"),
    {}
  );

  spinner.text = "Installing dependencies.";

  addPackages(STD_PACKAGES.dependencies);

  await buildFileFromTemplate(
    "react-router/README.md.template",
    "./DR-README.md",
    {
      routes,
    }
  );

  spinner.succeed(`Done.`);

  console.log(`\n${bold("Initialization completed successfully")}`);

  console.log(
    `\nYour next step is to read the ${red(
      italic(bold("DR-README.md"))
    )} file and follow the post setup tasks.`
  );
}

export async function setupReactRouter() {
  const response = await prompts([
    {
      type: "text",
      name: "routes",
      message: "Where do you want the routes directory?",
      initial: "./src/routes",
    },
  ]);

  writeConfig({
    mode: "react-router",
    routes: response.routes,
  });

  await setup();
}
