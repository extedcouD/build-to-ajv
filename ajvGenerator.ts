import yaml from "js-yaml";
import { readFileSync, writeFileSync } from "fs";
import { BUID_TYPE } from "./buildTypes";
import RefParser from "@apidevtools/json-schema-ref-parser";
import {
  addEnumsToSchemaAdvanced,
  removeEnumSchemas,
  resolveAllOf,
} from "./schemaUtils";
import { enumsFromObj } from "./enumUtils";
import { JSONSchema7 } from "json-schema";
async function dereferenceSchema(schema: any) {
  try {
    const dereferencedSchema = await RefParser.dereference(schema);
    return dereferencedSchema;
  } catch (error) {
    console.error("Error dereferencing schema:", error);
  }
}

const run = async () => {
  const yamlData = readFileSync("./build.yaml", "utf8");
  const raw = yaml.load(yamlData);
  const data = (await dereferenceSchema(raw)) as BUID_TYPE;
  const paths = data.paths;
  const apis = Object.keys(paths).map((key) => {
    return key.split("/")[1];
  });
  const targetApi = apis[0];
  const existingSchema =
    paths[`/${targetApi}`].post.requestBody.content["application/json"].schema;
  console.log("resolving allOf");
  const removeAllOf = resolveAllOf(existingSchema);
  const afterEnums = removeEnumSchemas(removeAllOf);
  // const resolvedSchema = resolveAllOf(afterEnums);
  const enums = data["x-enum"];
  const enumData = enumsFromObj(enums);

  const targetEnum = enumData[targetApi];
  const newEnumsSchema = addEnumsToSchemaAdvanced(
    afterEnums as JSONSchema7,
    targetEnum
  );

  const generatedOutput = {
    [targetApi]: existingSchema,
    ["new"]: newEnumsSchema,
    enums: targetEnum,
  };

  writeFileSync("./build.json", JSON.stringify(generatedOutput, null, 2));
};

(async () => {
  run();
})();

// laod yaml
// convert yaml to json
// dereference json
// remove all enums
// resolve allOf
// add new enums
