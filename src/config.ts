import path from "path";
import fs from "fs";
import { z } from "zod";

const CONFIG = "declarative-routes.config.json";

const ConfigSchema = z.object({
  mode: z.enum(["nextjs", "react-router"]),
  src: z.string().optional(),
  routes: z.string(),
  openapi: z
    .object({
      target: z.string(),
      template: z.string(),
    })
    .optional(),
});

export type Config = z.infer<typeof ConfigSchema>;

export function getConfig(): Config {
  const config = JSON.parse(
    fs.readFileSync(path.resolve(`./${CONFIG}`)).toString()
  );
  const cfg = ConfigSchema.safeParse(config);
  if (!cfg.success) {
    console.error("Invalid config file");
    throw new Error(cfg.error.issues.map((i) => i.message).join("\n"));
  }
  return cfg.data;
}

export function hasConfig() {
  return fs.existsSync(path.resolve(`./${CONFIG}`));
}

export function writeConfig(config: Config) {
  const cfg = ConfigSchema.safeParse(config);
  if (!cfg.success) {
    console.error("Invalid config");
    throw new Error(cfg.error.issues.map((i) => i.message).join("\n"));
  }
  fs.writeFileSync(
    path.resolve(`./${CONFIG}`),
    JSON.stringify(cfg.data, null, 2)
  );
}

export const absoluteFilePath = (config: Config, fpath: string) =>
  path.resolve(config.src || "", fpath);
