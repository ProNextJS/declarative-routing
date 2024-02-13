import { Command } from "commander";
import prompts from "prompts";
import fs from "fs";
import { red } from "kleur/colors";

import { hasConfig, writeConfig } from "./config";
import { copyAssets } from "./init-tools";

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .action(async () => {
    if (hasConfig()) {
      console.log(
        `This project has ${red(
          "already been initialized"
        )} to use NextJS Typesafe Routes.`
      );
      return;
    }

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
        type: "toggle",
        name: "openapi",
        message: "Add OpenAPI output?",
        initial: true,
      },
    ]);

    writeConfig({
      src: response.src ?? src,
      routes: response.routes ?? routes,
      openapi: response.openapi ?? true ? `${routes}/openapi.json` : undefined,
    });

    copyAssets();
  });
