#!/usr/bin/env node
import { Command } from "commander";

import { init } from "./init";
import { build } from "./build";
import { getPackageInfo } from "./init-tools";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();
  const program = new Command()
    .name(packageInfo?.name || "declarative-routes")
    .description(`${packageInfo?.description} CLI`)
    .version(
      packageInfo?.version || "0.0.1",
      "-v, --version",
      "display the version number"
    );
  program.addCommand(init).addCommand(build);
  program.parse();
}
main();
