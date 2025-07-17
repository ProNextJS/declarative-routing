import {
  OpenAPIRegistry,
  OpenApiGeneratorV3
} from "@asteasolutions/zod-to-openapi";
import * as yaml from "yaml";
import * as fs from "fs";

// {{IMPORTS}}

const registry = new OpenAPIRegistry();

// {{REGISTRATIONS}}

const generator = new OpenApiGeneratorV3(registry.definitions);
const docs = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
    description: "This is the API"
  },
  servers: [{ url: "v1" }]
});

fs.writeFileSync(`./openapi-docs.yml`, yaml.stringify(docs), {
  encoding: "utf-8"
});
