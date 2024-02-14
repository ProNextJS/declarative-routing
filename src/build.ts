import chokidar from "chokidar";
import { Command } from "commander";
import { red } from "kleur/colors";

import {
  parseFile,
  fileRemoved,
  checkRouteFile,
  buildFiles,
  updateBuildFiles,
} from "./build-tools";
import { getConfig, hasConfig } from "./config";

let ready = false;

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
          ready = true;
          updateBuildFiles();
        })
        .on("all", async (event, path) => {
          if (event === "unlink" || event === "unlinkDir") {
            fileRemoved(path);
            updateBuildFiles();
          } else if (path.match(/\.info\.ts(x?)$/)) {
            await parseFile(path);
            if (ready) {
              updateBuildFiles();
            }
          } else if (path.match(/(page|route)\.(js|jsx|ts|tsx)$/)) {
            checkRouteFile(path);
            if (ready) {
              updateBuildFiles();
            }
          }
        });
    } else {
      await buildFiles();
    }
  });
