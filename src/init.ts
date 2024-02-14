import { Command } from "commander";
import prompts from "prompts";
import fs from "fs";
import { red } from "kleur/colors";

import { hasConfig, writeConfig } from "./config";
import { setup } from "./init-tools";

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

    let aiMessage =
      "If there is an OPENAI_API_KEY environment variable should we use it to name routes?";
    if (process.env.OPENAI_API_KEY) {
      aiMessage = "OpenAI is configured, use it to name routes?";
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
      {
        type: "confirm",
        name: "openai",
        message: aiMessage,
        initial: true,
      },
    ]);

    writeConfig({
      src: response.src ?? src,
      routes: response.routes ?? routes,
      openapi:
        response.openapi ?? true
          ? {
              target: `${routes}/openapi.ts`,
              template: `${routes}/openapi.template.ts`,
            }
          : undefined,
      openai: response.openai,
    });

    await setup();
  });
