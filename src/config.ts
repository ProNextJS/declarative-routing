import path from "node:path";
import fs from "node:fs";

const CONFIG = "next-tsr.config.json";

export type Config = {
  src: string;
  routes: string;
  openapi?: string;
  openai?: boolean;
};

export function getConfig() {
  const config = JSON.parse(
    fs.readFileSync(path.resolve(`./${CONFIG}`)).toString()
  );
  return config as Config;
}

export function shouldUseOpenAI(config?: Config) {
  return (config || getConfig()).openai && process.env.OPENAI_API_KEY;
}

export function hasConfig() {
  return fs.existsSync(path.resolve(`./${CONFIG}`));
}

export function writeConfig(config: Config) {
  fs.writeFileSync(
    path.resolve(`./${CONFIG}`),
    JSON.stringify(config, null, 2)
  );
}
