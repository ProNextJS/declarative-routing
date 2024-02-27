import Handlebars from "handlebars";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const templates: Record<string, HandlebarsTemplateDelegate<any>> = {};

export async function buildStringFromTemplate(
  templatePath: string,
  data: unknown
) {
  if (!templates[templatePath]) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let contents = fs
      .readFileSync(path.resolve(__dirname, `../assets/${templatePath}`))
      .toString();

    templates[templatePath] = Handlebars.compile(contents);
  }
  return templates[templatePath](data);
}

export async function buildFileFromTemplate(
  templatePath: string,
  destinationPath: string,
  data: unknown
) {
  fs.writeFileSync(
    destinationPath,
    await buildStringFromTemplate(templatePath, data)
  );
}
