import Handlebars from "handlebars";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

export async function buildStringFromTemplate(
  templatePath: string,
  data: unknown
) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let contents = fs
    .readFileSync(path.resolve(__dirname, `../assets/${templatePath}`))
    .toString();

  const template = Handlebars.compile(contents);
  return template(data);
}

export async function buildFromTemplate(
  templatePath: string,
  destinationPath: string,
  data: unknown
) {
  fs.writeFileSync(
    destinationPath,
    await buildStringFromTemplate(templatePath, data)
  );
}
