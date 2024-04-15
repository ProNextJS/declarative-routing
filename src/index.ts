#!/usr/bin/env node
import { Command } from "commander";

import { init } from "./init";
import { build } from "./shared/build";
import { getPackageInfo } from "./shared/utils";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();
  const program = new Command()
    .name(packageInfo?.name || "declarative-routing")
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
