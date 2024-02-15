import path from "path";
import fs from "fs";
import { z } from "zod";

const CONFIG = "next-tsr.config.json";

const ConfigSchema = z.object({
  src: z.string(),
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
