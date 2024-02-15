import chokidar from "chokidar";
import { Command } from "commander";
import { red } from "kleur/colors";

import {
  fileRemoved,
  buildFiles,
  processFile,
  finishedProcessing,
} from "./build-tools";
import { getConfig, hasConfig } from "./config";

export const build = new Command()
  .name("build")
  .description("initialize your project and install dependencies")
  .option("-w, --watch", "watch files continuously", false)
  .action(async (opts) => {
    if (!hasConfig()) {
      console.log(
        `This project has ${red(
          "NOT been initialized for next-tsr"
        )}.\nInitialize the project first, then run build to update if routes are added or altered.`
      );
      return;
    }

    if (opts.watch) {
      const config = getConfig();
      let ready = false;
      chokidar
        .watch(
          [
            "./**/(route|page).info.(ts|tsx)",
            "./**/(route|page).(js|jsx|ts|tsx)",
          ],
          {
            ignored: /(^|[\/\\])\../,
            persistent: true,
            cwd: config.src,
            usePolling: true,
          }
        )
        .on("ready", () => {
          finishedProcessing();
        })
        .on("all", async (event, path) => {
          if (event === "unlink" || event === "unlinkDir") {
            fileRemoved(path);
          } else if (event === "add" || event === "change") {
            processFile(path);
          }
        });
    } else {
      await buildFiles();
    }
  });
