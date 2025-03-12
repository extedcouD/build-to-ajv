import { JSONSchema7, JSONSchema7Definition } from "json-schema";

/**
 * Recursively removes all "required" and "enum" properties from a JSON Schema.
 * @param schema - The JSON Schema object to process.
 * @returns A new JSON Schema object with "required" and "enum" properties removed.
 */
export function removeRequiredAndEnum(
  schema: JSONSchema7 | boolean
): JSONSchema7 | boolean {
  if (typeof schema === "boolean") {
    // Boolean schemas are returned as is
    return schema;
  }

  // Create a shallow copy to avoid mutating the original schema
  const cleanedSchema: JSONSchema7 = { ...schema };

  // Remove "required" and "enum" properties
  delete cleanedSchema.required;
  delete cleanedSchema.enum;

  // Helper function to process child schemas
  const processSchema = (
    subSchema: JSONSchema7Definition
  ): JSONSchema7Definition => {
    return removeRequiredAndEnum(subSchema);
  };

  // Process "properties"
  if (cleanedSchema.properties) {
    const newProperties: { [key: string]: JSONSchema7Definition } = {};
    for (const key in cleanedSchema.properties) {
      newProperties[key] = processSchema(cleanedSchema.properties[key]);
    }
    cleanedSchema.properties = newProperties;
  }

  // Process "patternProperties"
  if (cleanedSchema.patternProperties) {
    const newPatternProperties: { [key: string]: JSONSchema7Definition } = {};
    for (const key in cleanedSchema.patternProperties) {
      newPatternProperties[key] = processSchema(
        cleanedSchema.patternProperties[key]
      );
    }
    cleanedSchema.patternProperties = newPatternProperties;
  }

  // Process "additionalProperties"
  if (
    typeof cleanedSchema.additionalProperties === "object" &&
    cleanedSchema.additionalProperties !== null
  ) {
    cleanedSchema.additionalProperties = removeRequiredAndEnum(
      cleanedSchema.additionalProperties
    );
  }

  // Process "items"
  if (cleanedSchema.items) {
    if (Array.isArray(cleanedSchema.items)) {
      cleanedSchema.items = cleanedSchema.items.map((item) =>
        removeRequiredAndEnum(item)
      );
    } else {
      cleanedSchema.items = removeRequiredAndEnum(cleanedSchema.items);
    }
  }

  // Process "additionalItems"
  if (
    typeof cleanedSchema.additionalItems === "object" &&
    cleanedSchema.additionalItems !== null
  ) {
    cleanedSchema.additionalItems = removeRequiredAndEnum(
      cleanedSchema.additionalItems
    );
  }

  // Process combiners: "allOf", "anyOf", "oneOf"
  ["allOf", "anyOf", "oneOf"].forEach((combiner) => {
    if (
      cleanedSchema[combiner as keyof JSONSchema7] &&
      Array.isArray(cleanedSchema[combiner as keyof JSONSchema7])
    ) {
      // @ts-ignore
      cleanedSchema[combiner as keyof JSONSchema7] = (
        cleanedSchema[combiner as keyof JSONSchema7] as JSONSchema7[]
      ).map((subSchema) => removeRequiredAndEnum(subSchema));
    }
  });

  // Process "not"
  if (cleanedSchema.not) {
    cleanedSchema.not = removeRequiredAndEnum(cleanedSchema.not);
  }

  // Process "definitions"
  if (cleanedSchema.definitions) {
    const newDefinitions: { [key: string]: JSONSchema7Definition } = {};
    for (const key in cleanedSchema.definitions) {
      newDefinitions[key] = processSchema(cleanedSchema.definitions[key]);
    }
    cleanedSchema.definitions = newDefinitions;
  }

  //   // Process "dependentSchemas"
  //   if (cleanedSchema.dependentSchemas) {
  //     const newDependentSchemas: { [key: string]: JSONSchema7Definition } = {};
  //     for (const key in cleanedSchema.dependentSchemas) {
  //       newDependentSchemas[key] = processSchema(
  //         cleanedSchema.dependentSchemas[key]
  //       );
  //     }
  //     cleanedSchema.dependentSchemas = newDependentSchemas;
  //   }

  // Process "if", "then", "else"
  ["if", "then", "else"].forEach((keyword) => {
    if (cleanedSchema[keyword as keyof JSONSchema7]) {
      // @ts-ignore
      cleanedSchema[keyword as keyof JSONSchema7] = removeRequiredAndEnum(
        cleanedSchema[keyword as keyof JSONSchema7] as JSONSchema7
      );
    }
  });

  // Process "contains"
  if (cleanedSchema.contains) {
    cleanedSchema.contains = removeRequiredAndEnum(cleanedSchema.contains);
  }

  return cleanedSchema;
}
