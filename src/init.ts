import { Command } from "commander";
import fs from "fs-extra";
import { red } from "kleur/colors";
import path from "path";
import { type PackageJson } from "type-fest";

import { hasConfig } from "./config";

import { setupNext } from "./nextjs/init";
import { setupQwikCity } from "./qwikcity/init";
import { setupReactRouter } from "./react-router/init";

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .action(async () => {
    if (hasConfig()) {
      console.log(
        `This project has ${red(
          "already been initialized"
        )} to use declarative routes.`
      );
      return;
    }

    const packageJsonPath = path.resolve("./package.json");
    const packageJson = fs.readJSONSync(packageJsonPath) as PackageJson;

    if (packageJson?.dependencies?.["next"]) {
      console.log("Setting up declarative routes for Next.js");
      await setupNext();
    } else if (packageJson?.dependencies?.["react-router-dom"]) {
      console.log("Setting up React-Router...");
      await setupReactRouter();
    } else if (
      packageJson?.dependencies?.["@builder.io/qwik-city"] ||
      packageJson.devDependencies?.["@builder.io/qwik-city"]
    ) {
      console.log("Setting up QwikCity...");
      await setupQwikCity();
    } else {
      console.log(red("No supported framework detected."));
      console.log(
        "Please use declarative routes in a Next.js or React-Router-Dom application."
      );
    }
  });
