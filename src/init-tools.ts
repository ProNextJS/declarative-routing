import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { detect } from "@antfu/ni";

import { getConfig } from "./config";

const STD_PACKAGES = {
  dependencies: ["zod", "query-string"],
  devDependencies: ["@asteasolutions/zod-to-openapi"],
};
const STD_SCRIPTS = {
  "ntstr:buid": "npx next-tsr build",
  "ntstr:buid:watch": "npx next-tsr build --watch",
};
const OPENAPI_PACKAGES = {
  dependencies: [],
  devDependencies: ["@asteasolutions/zod-to-openapi"],
};
const OPENAPI_SCRIPTS = {
  openapi: "npm run openapi:yaml && npm run openapi:html",
  "openapi:yaml": "ts-node ./src/routes/openapi.ts",
  "openapi:html": "npx @redocly/cli build-docs openapi-docs.yml",
};

async function getPackageManager(): Promise<"yarn" | "pnpm" | "bun" | "npm"> {
  const packageManager = await detect({
    programmatic: true,
    cwd: process.cwd(),
  });

  if (packageManager === "yarn@berry") return "yarn";
  if (packageManager === "pnpm@6") return "pnpm";
  if (packageManager === "bun") return "bun";

  return packageManager ?? "npm";
}

export function copyAssets() {
  const { routes } = getConfig();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.mkdirpSync(routes);
  fs.copyFileSync(
    path.resolve(__dirname, "../assets/makeRoute.tsx"),
    path.resolve(routes, "./makeRoute.tsx")
  );
}
