import { detect } from "@antfu/ni";
import { type PackageJson } from "type-fest";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs-extra";
import { execa } from "execa";

export function getPackageInfo() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const packageJsonPath = path.resolve(__dirname, "../package.json");
  return fs.readJSONSync(packageJsonPath) as PackageJson;
}

export function addPackageJSONScripts(scripts: Record<string, string>) {
  const packageJsonPath = path.resolve("./package.json");
  const packageJson = fs.readJSONSync(packageJsonPath) as PackageJson;

  const newPackageJson = {
    ...packageJson,
    scripts: {
      ...packageJson.scripts,
    },
  };
  for (const key of Object.keys(scripts)) {
    if (!newPackageJson.scripts[key]) {
      newPackageJson.scripts[key] = scripts[key];
    }
  }

  return fs.writeJSONSync(packageJsonPath, newPackageJson, {
    spaces: 2,
    EOL: "\n",
  });
}

export async function getPackageManager(): Promise<
  "yarn" | "pnpm" | "bun" | "npm"
> {
  const packageManager = await detect({
    programmatic: true,
    cwd: process.cwd(),
  });

  if (packageManager === "yarn@berry") return "yarn";
  if (packageManager === "pnpm@6") return "pnpm";
  if (packageManager === "bun") return "bun";

  return packageManager ?? "npm";
}

export async function addPackages(packages: string[], dev = false) {
  const pkgMgr = await getPackageManager();

  if (packages?.length) {
    return;
  }
  if (dev) {
    await execa(pkgMgr, [
      pkgMgr === "npm" ? "install" : "add",
      "-D",
      ...packages,
    ]);
  } else {
    await execa(pkgMgr, [pkgMgr === "npm" ? "install" : "add", ...packages]);
  }
}
