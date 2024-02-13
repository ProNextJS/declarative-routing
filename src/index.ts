#!/usr/bin/env node
import path from "path";
import fs from "fs-extra";
import { type PackageJson } from "type-fest";
import { Command } from "commander";
import { fileURLToPath } from "url";

import { init } from "./init";
import { build } from "./build";

export function getPackageInfo() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const packageJsonPath = path.resolve(__dirname, "../package.json");
  return fs.readJSONSync(packageJsonPath) as PackageJson;
}

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();
  const program = new Command()
    .name(packageInfo?.name || "next-tsr")
    .description(`${packageInfo?.description} CLI`)
    .version(
      packageInfo?.version || "0.0.1",
      "-v, --version",
      "display the version number"
    );
  program.addCommand(init);
  program.addCommand(build);
  program.parse();
}
main();
