import { JSONSchema7, JSONSchema7Definition } from "json-schema";

/**
 * Recursively removes all enum options from a JSONSchema7 object by:
 * 1. Removing the "enum" keyword.
 * 2. Setting the "type" to "string".
 * @param schema The input JSONSchema7 object.
 * @returns A new JSONSchema7 object with enums removed and types set to "string".
 */
export function removeEnumSchemas(
  schema: JSONSchema7
): JSONSchema7 | undefined {
  /**
   * Helper function to recursively process the schema.
   * @param currentSchema The current subschema being processed.
   * @returns The processed subschema or undefined if it's invalid.
   */
  function processSchema(
    currentSchema: JSONSchema7Definition
  ): JSONSchema7Definition | undefined {
    if (typeof currentSchema === "boolean") {
      // If the schema is a boolean, return it as is.
      return currentSchema;
    }

    // Clone the schema to avoid mutating the original.
    const newSchema: JSONSchema7 = { ...currentSchema };

    // If the current schema has an "enum", remove it and set type to "string".
    if (newSchema.enum !== undefined) {
      delete newSchema.enum;
      newSchema.type = "string"; // Enforce type as string
    }

    // Process "properties"
    if (newSchema.properties) {
      const newProperties: { [key: string]: JSONSchema7Definition } = {};
      for (const [key, propSchema] of Object.entries(newSchema.properties)) {
        const processedProp = processSchema(propSchema);
        if (processedProp !== undefined) {
          newProperties[key] = processedProp;
        }
      }
      newSchema.properties =
        Object.keys(newProperties).length > 0 ? newProperties : undefined;
    }

    // Process "patternProperties"
    if (newSchema.patternProperties) {
      const newPatternProperties: { [key: string]: JSONSchema7Definition } = {};
      for (const [key, propSchema] of Object.entries(
        newSchema.patternProperties
      )) {
        const processedProp = processSchema(propSchema);
        if (processedProp !== undefined) {
          newPatternProperties[key] = processedProp;
        }
      }
      newSchema.patternProperties =
        Object.keys(newPatternProperties).length > 0
          ? newPatternProperties
          : undefined;
    }

    // Process "additionalProperties"
    if (
      newSchema.additionalProperties &&
      typeof newSchema.additionalProperties === "object"
    ) {
      const processedAdditional = processSchema(newSchema.additionalProperties);
      newSchema.additionalProperties =
        processedAdditional !== undefined ? processedAdditional : false;
    }

    // Process "items"
    if (newSchema.items) {
      if (Array.isArray(newSchema.items)) {
        const newItems = newSchema.items
          .map((item) => processSchema(item))
          .filter((item) => item !== undefined) as JSONSchema7Definition[];
        newSchema.items = newItems.length > 0 ? newItems : undefined;
      } else {
        const processedItems = processSchema(newSchema.items);
        newSchema.items = processedItems !== undefined ? processedItems : false;
      }
    }

    // Process "additionalItems"
    if (
      newSchema.additionalItems &&
      typeof newSchema.additionalItems === "object"
    ) {
      const processedAdditionalItems = processSchema(newSchema.additionalItems);
      newSchema.additionalItems =
        processedAdditionalItems !== undefined
          ? processedAdditionalItems
          : false;
    }

    // Process "allOf", "anyOf", "oneOf"
    ["allOf", "anyOf", "oneOf"].forEach((key) => {
      const k = key as keyof JSONSchema7;

      if (newSchema[k]) {
        const arraySchema = newSchema[k] as JSONSchema7Definition[];
        const newArray = arraySchema
          .map((subSchema) => processSchema(subSchema))
          .filter(
            (subSchema) => subSchema !== undefined
          ) as JSONSchema7Definition[];
        if (newArray.length > 0) {
          // @ts-ignore
          newSchema[k] = newArray as JSONSchema7Definition[];
        } else {
          newSchema[k] = undefined;
        }
      }
    });

    // Process "not"
    if (newSchema.not) {
      const processedNot = processSchema(newSchema.not);
      newSchema.not = processedNot !== undefined ? processedNot : undefined;
    }

    // Process "dependencies"
    if (newSchema.dependencies) {
      const newDependencies: { [key: string]: JSONSchema7Definition } = {};
      for (const [key, dep] of Object.entries(newSchema.dependencies)) {
        if (typeof dep === "object") {
          if (Array.isArray(dep)) {
            newDependencies[key] = dep as JSONSchema7Definition;
          } else {
            const processedDep = processSchema(dep);
            if (processedDep !== undefined) {
              newDependencies[key] = processedDep;
            }
          }
        } else {
          // it's an array of strings, keep as is
          newDependencies[key] = dep;
        }
      }
      newSchema.dependencies =
        Object.keys(newDependencies).length > 0 ? newDependencies : undefined;
    }

    // Process "if", "then", "else"
    ["if", "then", "else"].forEach((key) => {
      const k = key as keyof JSONSchema7;
      if (newSchema[k]) {
        const processed = processSchema(newSchema[k] as JSONSchema7Definition);
        // @ts-ignore
        newSchema[k] = processed !== undefined ? processed : undefined;
      }
    });

    // Remove empty objects
    const ksToRemove: (keyof JSONSchema7)[] = [];
    for (const key in newSchema) {
      if (newSchema[key as keyof JSONSchema7] === undefined) {
        ksToRemove.push(key as keyof JSONSchema7);
      }
    }
    for (const key of ksToRemove) {
      delete newSchema[key as keyof JSONSchema7];
    }

    return newSchema;
  }

  const result = processSchema(schema);
  return result === undefined ? {} : (result as JSONSchema7);
}

/**
 * Deeply clones a JSONSchema7 object to avoid mutating the original schema.
 * @param schema The schema to clone.
 * @returns A deep-cloned schema.
 */
function deepCloneSchema(schema: JSONSchema7): JSONSchema7 {
  return JSON.parse(JSON.stringify(schema));
}

/**
 * Merges two JSONSchema7 objects. In case of conflicts, properties from schemaB override those in schemaA.
 * @param schemaA The first schema.
 * @param schemaB The second schema.
 * @returns The merged schema.
 */
function mergeSchemas(schemaA: JSONSchema7, schemaB: JSONSchema7): JSONSchema7 {
  const merged: JSONSchema7 = { ...schemaA };

  for (const key in schemaB) {
    if (key === "properties" && typeof schemaB.properties === "object") {
      merged.properties = merged.properties || {};
      merged.properties = { ...merged.properties, ...schemaB.properties };
    } else if (key === "required" && Array.isArray(schemaB.required)) {
      merged.required = Array.from(
        new Set([...(merged.required || []), ...schemaB.required])
      );
    } else if (key === "allOf" || key === "anyOf" || key === "oneOf") {
      // These keywords will be handled separately; skip merging them here
      continue;
    } else if (key === "type") {
      if (merged.type && merged.type !== schemaB.type) {
        // Handle type conflicts by creating an array of types
        if (Array.isArray(merged.type)) {
          if (!merged.type.includes(schemaB.type as any)) {
            //@ts-ignore
            merged.type = [...merged.type, schemaB.type];
          }
        } else {
          if (merged.type !== schemaB.type) {
            //@ts-ignore
            merged.type = [merged.type, schemaB.type];
          }
        }
      } else {
        merged.type = schemaB.type;
      }
    } else {
      // For other keys, override with schemaB's value
      //@ts-ignore
      merged[key] = schemaB[key];
    }
  }

  return merged;
}

/**
 * Recursively resolves allOf clauses in a JSONSchema7 object by merging the subschemas.
 * @param schema The input JSONSchema7 object.
 * @returns A new JSONSchema7 object with allOf clauses resolved.
 */
export function resolveAllOf(schema: JSONSchema7): JSONSchema7 {
  // Clone the schema to avoid mutating the original
  const clonedSchema = deepCloneSchema(schema);

  /**
   * Helper function to process the schema recursively.
   * @param currentSchema The current subschema being processed.
   * @returns The processed subschema with allOf resolved.
   */
  function processSchema(currentSchema: JSONSchema7): JSONSchema7 {
    // If there's an allOf, resolve it
    if (currentSchema.allOf && Array.isArray(currentSchema.allOf)) {
      // Start with an empty schema
      let combinedSchema: JSONSchema7 = {};

      for (const subschemaDef of currentSchema.allOf) {
        if (typeof subschemaDef === "boolean") {
          // Skip boolean schemas (true: any value, false: no value)
          if (subschemaDef === false) {
            // Schema is unsatisfiable; return as is
            return { ...combinedSchema, ...{ not: {} } };
          }
          continue;
        }

        // Recursively process the subschema in case it contains nested allOf
        const resolvedSubschema = processSchema(subschemaDef as JSONSchema7);

        // Merge the resolved subschema into the combined schema
        combinedSchema = mergeSchemas(combinedSchema, resolvedSubschema);
      }

      // Remove allOf from the current schema
      const { allOf, ...rest } = currentSchema;

      // Merge the combined schema with the rest of the current schema
      const merged = mergeSchemas(rest, combinedSchema);

      // Continue processing in case there are nested allOfs after merging
      return processSchema(merged);
    }

    // Process properties recursively
    if (currentSchema.properties) {
      for (const prop in currentSchema.properties) {
        const propDef = currentSchema.properties[prop];
        if (typeof propDef === "object" && propDef !== null) {
          currentSchema.properties[prop] = processSchema(
            propDef as JSONSchema7
          );
        }
      }
    }

    // Process patternProperties recursively
    if (currentSchema.patternProperties) {
      for (const pattern in currentSchema.patternProperties) {
        const propDef = currentSchema.patternProperties[pattern];
        if (typeof propDef === "object" && propDef !== null) {
          currentSchema.patternProperties[pattern] = processSchema(
            propDef as JSONSchema7
          );
        }
      }
    }

    // Process additionalProperties if it's a schema
    if (
      currentSchema.additionalProperties &&
      typeof currentSchema.additionalProperties === "object"
    ) {
      currentSchema.additionalProperties = processSchema(
        currentSchema.additionalProperties as JSONSchema7
      );
    }

    // Process items if it's a schema or array of schemas
    if (currentSchema.items) {
      if (Array.isArray(currentSchema.items)) {
        currentSchema.items = currentSchema.items.map((item) => {
          if (typeof item === "object" && item !== null) {
            return processSchema(item as JSONSchema7);
          }
          return item;
        });
      } else if (typeof currentSchema.items === "object") {
        currentSchema.items = processSchema(currentSchema.items as JSONSchema7);
      }
    }

    // Process allOf in nested schemas
    ["anyOf", "oneOf"].forEach((keyword) => {
      //@ts-ignore
      if (currentSchema[keyword] && Array.isArray(currentSchema[keyword])) {
        //@ts-ignore
        currentSchema[keyword] = currentSchema[keyword]
          .map((subschemaDef) => {
            if (typeof subschemaDef === "object" && subschemaDef !== null) {
              return processSchema(subschemaDef as JSONSchema7);
            }
            return subschemaDef;
          })
          .filter((subschemaDef) => {
            if (typeof subschemaDef === "boolean") {
              return subschemaDef; // Keep true, remove false
            }
            return true;
          }) as JSONSchema7Definition[];
      }
    });

    // Process not schema
    if (currentSchema.not && typeof currentSchema.not === "object") {
      currentSchema.not = processSchema(currentSchema.not as JSONSchema7);
    }

    // Process dependencies if they are schemas
    if (currentSchema.dependencies) {
      for (const key in currentSchema.dependencies) {
        const dep = currentSchema.dependencies[key];
        if (typeof dep === "object" && !Array.isArray(dep) && dep !== null) {
          currentSchema.dependencies[key] = processSchema(dep as JSONSchema7);
        }
      }
    }

    return currentSchema;
  }

  return processSchema(clonedSchema);
}

/**
 * Represents a single enum value.
 */
interface EnumValue {
  code: string;
  // Extend with more properties if needed
}

/**
 * Represents an enum entry with a JSONPath and associated enum values.
 */
interface EnumEntry {
  path: string; // Dot-separated path, e.g., "context.action"
  enums: EnumValue[];
}

/**
 * Splits a dot-separated path into its segments.
 * @param path The dot-separated path string.
 * @returns An array of path segments.
 */
function splitPath(path: string): string[] {
  return path
    .split(".")
    .map((segment) => segment.trim())
    .filter((segment) => segment.length > 0);
}

/**
 * Retrieves the schema node at the specified path.
 * @param schema The root JSONSchema7 object.
 * @param pathSegments An array of path segments.
 * @returns The schema node at the path or undefined if not found.
 */
function getSchemaAtPath(
  schema: JSONSchema7,
  pathSegments: string[]
): JSONSchema7 | undefined {
  let currentSchema: JSONSchema7 | undefined = schema;

  for (const segment of pathSegments) {
    if (
      currentSchema.type === "object" &&
      currentSchema.properties &&
      currentSchema.properties[segment]
    ) {
      currentSchema = currentSchema.properties[segment] as JSONSchema7;
    } else if (
      currentSchema.type === "array" &&
      currentSchema.items &&
      typeof currentSchema.items === "object" &&
      (currentSchema.items as JSONSchema7).properties &&
      (currentSchema.items as JSONSchema7).properties![segment]
    ) {
      currentSchema = (currentSchema.items as JSONSchema7).properties![
        segment
      ] as JSONSchema7;
    } else {
      // Path does not exist in schema
      return undefined;
    }
  }

  return currentSchema;
}

/**
 * Sets the enum values at the specified path in the schema.
 * @param schema The root JSONSchema7 object.
 * @param pathSegments An array of path segments.
 * @param enumValues An array of enum values to set.
 * @returns Boolean indicating success or failure.
 */
function setEnumAtPath(
  schema: JSONSchema7,
  pathSegments: string[],
  enumValues: string[]
): boolean {
  if (pathSegments.length === 0) return false;

  let currentSchema: JSONSchema7 = schema;

  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];

    if (currentSchema.type !== "object" || !currentSchema.properties) {
      // Cannot navigate further; invalid path
      return false;
    }

    if (!currentSchema.properties[segment]) {
      // Property does not exist; cannot set enum
      return false;
    }

    if (i === pathSegments.length - 1) {
      // Target property; set enum
      const targetSchema = currentSchema.properties[segment] as JSONSchema7;
      targetSchema.enum = enumValues;
      return true;
    } else {
      // Navigate deeper
      currentSchema = currentSchema.properties[segment] as JSONSchema7;
    }
  }

  return false;
}

/**
 * Retrieves the schema node at the specified path, handling arrays and nested structures.
 * @param schema The root JSONSchema7 object.
 * @param pathSegments An array of path segments.
 * @returns The schema node at the path or undefined if not found.
 */
function getSchemaAtPathAdvanced(
  schema: JSONSchema7,
  pathSegments: string[]
): JSONSchema7 | undefined {
  let currentSchema: JSONSchema7 | undefined = schema;

  for (const segment of pathSegments) {
    if (!currentSchema) return undefined;

    if (
      currentSchema.type === "object" &&
      currentSchema.properties &&
      currentSchema.properties[segment]
    ) {
      currentSchema = currentSchema.properties[segment] as JSONSchema7;
    } else if (currentSchema.type === "array" && currentSchema.items) {
      if (Array.isArray(currentSchema.items)) {
        // Tuple validation; not handling for simplicity
        return undefined;
      } else {
        currentSchema = currentSchema.items as JSONSchema7;
        // The current segment might be within the items schema
        if (
          currentSchema.type === "object" &&
          currentSchema.properties &&
          currentSchema.properties[segment]
        ) {
          currentSchema = currentSchema.properties[segment] as JSONSchema7;
        } else {
          return undefined;
        }
      }
    } else {
      // Handle other combinators if necessary
      return undefined;
    }
  }

  return currentSchema;
}

/**
 * Enhanced function to set enums at a path, handling arrays.
 * @param schema The root JSONSchema7 object.
 * @param pathSegments An array of path segments.
 * @param enumValues An array of enum values to set.
 * @returns Boolean indicating success or failure.
 */
function setEnumAtPathAdvanced(
  schema: JSONSchema7,
  pathSegments: string[],
  enumValues: string[]
): boolean {
  if (pathSegments.length === 0) return false;

  let currentSchema: JSONSchema7 = schema;

  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];

    if (
      currentSchema.type === "object" &&
      currentSchema.properties &&
      currentSchema.properties[segment]
    ) {
      if (i === pathSegments.length - 1) {
        // Target property; set enum
        const targetSchema = currentSchema.properties[segment] as JSONSchema7;
        targetSchema.enum = enumValues;
        return true;
      } else {
        // Navigate deeper
        currentSchema = currentSchema.properties[segment] as JSONSchema7;
      }
    } else if (currentSchema.type === "array" && currentSchema.items) {
      // Navigate into items
      if (Array.isArray(currentSchema.items)) {
        // Tuple validation; not handling for simplicity
        return false;
      } else {
        currentSchema = currentSchema.items as JSONSchema7;
        // The current segment might be within the items schema
        i--; // Re-evaluate this segment in the items schema
      }
    } else {
      // Path segment does not match current schema structure
      return false;
    }
  }

  return false;
}

/**
 * Adds enums to the JSON Schema based on the provided enum definitions.
 * @param schema The original JSONSchema7 object.
 * @param enums A list of enum entries with paths and enum values.
 * @returns A new JSONSchema7 object with enums added.
 */
function addEnumsToSchema(
  schema: JSONSchema7,
  enums: EnumEntry[]
): JSONSchema7 {
  // Clone the schema to avoid mutating the original
  const newSchema = deepCloneSchema(schema);

  enums.forEach((enumEntry) => {
    const pathSegments = splitPath(enumEntry.path);
    const enumValues = enumEntry.enums.map((e) => e.code);

    const success = setEnumAtPath(newSchema, pathSegments, enumValues);

    if (!success) {
      console.warn(
        `Warning: Path "${enumEntry.path}" not found in the schema. Enum not set.`
      );
    }
  });

  return newSchema;
}

/**
 * Adds enums to the JSON Schema based on the provided enum definitions, handling advanced structures.
 * @param schema The original JSONSchema7 object.
 * @param enums A list of enum entries with paths and enum values.
 * @returns A new JSONSchema7 object with enums added.
 */
export function addEnumsToSchemaAdvanced(
  schema: JSONSchema7,
  enums: EnumEntry[]
): JSONSchema7 {
  // Clone the schema to avoid mutating the original
  const newSchema = deepCloneSchema(schema);

  enums.forEach((enumEntry) => {
    const pathSegments = splitPath(enumEntry.path);
    const enumValues = enumEntry.enums.map((e) => e.code);

    const success = setEnumAtPathAdvanced(newSchema, pathSegments, enumValues);

    if (!success) {
      console.warn(
        `Warning: Path "${enumEntry.path}" not found or unsupported in the schema. Enum not set.`
      );
    }
  });

  return newSchema;
}

// ! attributes

/**
 * Recursively removes all 'required' arrays from the schema.
 * @param schema The current schema node.
 */
function removeAllRequired(
  schema: JSONSchema7 | boolean
): JSONSchema7 | boolean {
  if (typeof schema === "boolean") {
    // If the schema is a boolean, return it as is.
    return schema;
  }

  // Clone the schema to avoid mutating the original.
  const newSchema: JSONSchema7 = { ...schema };

  // Remove the 'required' property if it exists.
  if (newSchema.required) {
    delete newSchema.required;
  }

  // Recursively process properties.
  if (newSchema.properties) {
    const newProperties: { [key: string]: JSONSchema7Definition } = {};
    for (const [key, propSchema] of Object.entries(newSchema.properties)) {
      newProperties[key] = removeAllRequired(propSchema);
    }
    newSchema.properties = newProperties;
  }

  // Recursively process 'patternProperties'.
  if (newSchema.patternProperties) {
    const newPatternProperties: { [key: string]: JSONSchema7Definition } = {};
    for (const [key, propSchema] of Object.entries(
      newSchema.patternProperties
    )) {
      newPatternProperties[key] = removeAllRequired(propSchema);
    }
    newSchema.patternProperties = newPatternProperties;
  }

  // Recursively process 'additionalProperties'.
  if (
    newSchema.additionalProperties &&
    typeof newSchema.additionalProperties === "object"
  ) {
    newSchema.additionalProperties = removeAllRequired(
      newSchema.additionalProperties
    );
  }

  // Recursively process 'items'.
  if (newSchema.items) {
    if (Array.isArray(newSchema.items)) {
      newSchema.items = newSchema.items.map((item) => removeAllRequired(item));
    } else {
      newSchema.items = removeAllRequired(newSchema.items);
    }
  }

  // Recursively process 'not'.
  if (newSchema.not) {
    newSchema.not = removeAllRequired(newSchema.not);
  }

  // Recursively process 'dependencies'.
  if (newSchema.dependencies) {
    const newDependencies: { [key: string]: JSONSchema7Definition } = {};
    for (const [key, dep] of Object.entries(newSchema.dependencies)) {
      if (typeof dep === "object" && !Array.isArray(dep)) {
        newDependencies[key] = removeAllRequired(dep);
      } else {
        // If the dependency is an array of strings, keep it as is.
        // @ts-ignore
        newDependencies[key] = dep;
      }
    }
    newSchema.dependencies = newDependencies;
  }

  return newSchema;
}

/**
 * Traverses the schema based on path segments and sets properties as required.
 * Automatically navigates into 'items' if a segment is an array.
 * @param schema The current schema node.
 * @param pathSegments Array of path segments.
 */
function setRequiredPath(schema: JSONSchema7, pathSegments: string[]): void {
  let currentSchema: JSONSchema7 | undefined = schema;

  for (const segment of pathSegments) {
    if (!currentSchema) {
      // Path does not exist in the schema.
      return;
    }

    if (currentSchema.type !== "object" || !currentSchema.properties) {
      // Current schema is not an object or has no properties.
      return;
    }

    const propertySchema = currentSchema.properties[segment];
    if (!propertySchema) {
      // Property does not exist.
      return;
    }

    // Ensure 'required' array exists.
    if (!currentSchema.required) {
      currentSchema.required = [];
    }

    // Add the current segment to 'required' if not already present.
    if (!currentSchema.required.includes(segment)) {
      currentSchema.required.push(segment);
    }

    // Determine the next schema node.
    // @ts-ignore
    if (propertySchema.type === "object") {
      currentSchema = propertySchema as JSONSchema7;
      // @ts-ignore
    } else if (propertySchema.type === "array") {
      // @ts-ignore
      if (propertySchema.items && typeof propertySchema.items !== "boolean") {
        // @ts-ignore
        currentSchema = propertySchema.items as JSONSchema7;
      } else {
        // 'items' is boolean or undefined; cannot traverse further.
        return;
      }
    } else {
      // Reached the end of the path.
      currentSchema = undefined;
    }
  }
}

/**
 * Sets only the specified paths as required in the JSON Schema.
 * All existing 'required' arrays are removed before applying the new required paths.
 * Automatically handles array segments without explicit notation.
 * @param schema The original JSONSchema7 object.
 * @param paths An array of dot-separated path strings.
 * @returns A new JSONSchema7 object with updated required properties.
 */
export function setOnlyRequiredPaths(
  schema: JSONSchema7,
  paths: string[]
): JSONSchema7 {
  // Step 1: Deep clone the schema to avoid mutating the original.
  const clonedSchema = deepCloneSchema(schema);

  // Step 2: Remove all existing 'required' arrays.
  const schemaWithoutRequired = removeAllRequired(clonedSchema) as JSONSchema7;

  // Step 3: Iterate over each path and set it as required.
  paths.forEach((path) => {
    const pathSegments = splitPath(path);
    if (pathSegments.length === 0) {
      console.warn(`Warning: Empty path provided.`);
      return;
    }

    setRequiredPath(schemaWithoutRequired, pathSegments);
  });

  return schemaWithoutRequired;
}

/**
 * Sets only the specified paths as required in the JSON Schema.
 * All existing 'required' arrays are removed before applying the new required paths.
 * Automatically handles array segments without explicit notation.
 * Collects warnings for non-existent paths.
 * @param schema The original JSONSchema7 object.
 * @param paths An array of dot-separated path strings.
 * @returns An object containing the updated schema and an array of warnings.
 */
export function setOnlyRequiredPathsWithWarnings(
  schema: JSONSchema7,
  paths: string[]
): { updatedSchema: JSONSchema7; warnings: string[] } {
  // Step 1: Deep clone the schema to avoid mutating the original.
  const clonedSchema = deepCloneSchema(schema);

  // Step 2: Remove all existing 'required' arrays.
  const schemaWithoutRequired = removeAllRequired(clonedSchema) as JSONSchema7;

  const warnings: string[] = [];

  // Step 3: Iterate over each path and set it as required.
  paths.forEach((path) => {
    const pathSegments = splitPath(path);
    if (pathSegments.length === 0) {
      warnings.push(`Warning: Empty path provided.`);
      return;
    }

    const previousRequired = JSON.stringify(schemaWithoutRequired.required);
    setRequiredPath(schemaWithoutRequired, pathSegments);
    const currentRequired = JSON.stringify(schemaWithoutRequired.required);

    // Simple check to see if 'required' array has been modified.
    if (previousRequired === currentRequired) {
      warnings.push(
        `Warning: Path "${path}" not found or invalid in the schema.`
      );
    }
  });

  return { updatedSchema: schemaWithoutRequired, warnings };
}
