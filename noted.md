Certainly! Let's update your `removeEnumSchemas` function to **remove all `enum` options** from the schema **without removing the entire object**. Instead of excluding schemas containing `enum`, the function will:

1. **Remove the `enum` keyword**.
2. **Set the `type` to `"string"`**.

This ensures that properties previously constrained by enums are now simply defined as strings without specific enumeration constraints.

## **Updated Function: `removeEnumSchemas`**

Here's the modified TypeScript function incorporating the requested changes:

```typescript
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
```

## **Explanation of Changes**

1. **Removing `enum` and Setting `type` to `"string"`**:

   - **Original Behavior**: The function would completely remove any subschema containing an `enum`.

   - **Updated Behavior**: Instead of excluding the entire subschema, the function now:
     - **Deletes the `enum` property**.
     - **Sets the `type` to `"string"`**, ensuring the property remains in the schema but without the enumeration constraint.

   ```typescript
   // If the current schema has an "enum", remove it and set type to "string".
   if (newSchema.enum !== undefined) {
     delete newSchema.enum;
     newSchema.type = "string"; // Enforce type as string
   }
   ```

2. **Maintaining the Structure**:

   - The rest of the function remains unchanged, continuing to recursively process all nested schemas, properties, and combinational constructs (`allOf`, `anyOf`, `oneOf`, etc.).

3. **Avoiding `undefined` Schemas**:

   - Previously, schemas with `enum` were removed (`undefined` returned), potentially leaving gaps or missing properties.

   - Now, even if a schema had an `enum`, after processing, it remains in the final schema with the `enum` removed and `type` set appropriately.

## **Example Usage**

Let's see how the updated function works with an example.

### **Input Schema with Enums**

```typescript
const exampleSchema: JSONSchema7 = {
  type: "object",
  properties: {
    name: { type: "string" },
    status: { type: "string", enum: ["active", "inactive"] },
    details: {
      type: "object",
      properties: {
        age: { type: "number" },
        role: { type: "string", enum: ["admin", "user"] },
      },
    },
    tags: {
      type: "array",
      items: {
        type: "string",
        enum: ["tag1", "tag2"],
      },
    },
    preferences: {
      anyOf: [
        { type: "string" },
        { type: "string", enum: ["preference1", "preference2"] },
      ],
    },
  },
};
```

### **Applying `removeEnumSchemas`**

```typescript
const cleanedSchema = removeEnumSchemas(exampleSchema);
console.log(JSON.stringify(cleanedSchema, null, 2));
```

### **Output Schema**

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "details": {
      "type": "object",
      "properties": {
        "age": {
          "type": "number"
        },
        "role": {
          "type": "string"
        }
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "preferences": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    }
  }
}
```

### **Explanation of Output**

- **`status` Property**:

  - **Before**: Had `enum` with `["active", "inactive"]`.
  - **After**: `enum` removed and `type` set to `"string"`.

- **`details.role` Property**:

  - **Before**: Had `enum` with `["admin", "user"]`.
  - **After**: `enum` removed and `type` set to `"string"`.

- **`tags.items`**:

  - **Before**: Had `enum` with `["tag1", "tag2"]`.
  - **After**: `enum` removed and `type` set to `"string"`.

- **`preferences.anyOf`**:
  - **First Schema**: Remains unchanged (`type: "string"`).
  - **Second Schema**: Had `enum` with `["preference1", "preference2"]` and `type: "string"`.
    - **After**: `enum` removed, `type` remains `"string"`.

## **Handling Complex Structures with Nested `allOf`, `anyOf`, etc.**

The function is designed to handle complex and deeply nested JSON Schemas containing various combinatorial keywords. Here's an example to demonstrate its robustness.

### **Complex Input Schema**

```typescript
const complexSchema: JSONSchema7 = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        name: { type: "string" },
        role: { type: "string", enum: ["admin", "editor", "viewer"] },
        address: {
          allOf: [
            {
              type: "object",
              properties: {
                street: { type: "string" },
                city: { type: "string", enum: ["New York", "Los Angeles"] },
              },
              required: ["street", "city"],
            },
            {
              type: "object",
              properties: {
                zipcode: { type: "string", enum: ["10001", "90001"] },
              },
              required: ["zipcode"],
            },
          ],
        },
      },
      required: ["name", "role", "address"],
    },
    tags: {
      type: "array",
      items: {
        type: "string",
        enum: ["tag1", "tag2", "tag3"],
      },
    },
  },
};
```

### **Applying `removeEnumSchemas`**

```typescript
const cleanedComplexSchema = removeEnumSchemas(complexSchema);
console.log(JSON.stringify(cleanedComplexSchema, null, 2));
```

### **Output Schema**

```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "role": {
          "type": "string"
        },
        "address": {
          "allOf": [
            {
              "type": "object",
              "properties": {
                "street": {
                  "type": "string"
                },
                "city": {
                  "type": "string"
                }
              },
              "required": ["street", "city"]
            },
            {
              "type": "object",
              "properties": {
                "zipcode": {
                  "type": "string"
                }
              },
              "required": ["zipcode"]
            }
          ]
        }
      },
      "required": ["name", "role", "address"]
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### **Explanation of Output**

- **`user.role` Property**:

  - **`enum` removed**, `type` remains `"string"`.

- **`user.address` Properties**:

  - **`city`**:
    - **`enum` removed**, `type` remains `"string"`.
  - **`zipcode`**:
    - **`enum` removed**, `type` set to `"string"`.

- **`tags.items`**:
  - **`enum` removed**, `type` set to `"string"`.

The `allOf` combinator remains intact, ensuring that all constituent schemas are still applied, but with enums removed and types enforced to string where necessary.

## **Edge Cases and Considerations**

1. **Properties Without a Defined `type`**:

   - If a property has an `enum` but no `type`, the function **sets `type` to `"string"`**.

   - **Example**:

     ```json
     {
       "status": {
         "enum": ["active", "inactive"]
       }
     }
     ```

     **After Processing**:

     ```json
     {
       "status": {
         "type": "string"
       }
     }
     ```

2. **Non-String Enums**:

   - If your schema uses enums with types other than string (e.g., integers), the current implementation **still sets the type to `"string"`**.

   - **Customization**: If you need to preserve the original type, you can modify the function to respect existing `type` declarations or infer them based on the enum values.

3. **Combinatorial Keywords (`anyOf`, `oneOf`, `allOf`, etc.)**:

   - The function traverses and processes all subschemas within these combinators, ensuring enums are removed regardless of the nesting level.

4. **Handling Boolean Schemas**:

   - Boolean schemas (`true` or `false`) are returned as-is, ensuring that validation logic relying on these schemas remains unaffected.

5. **Dependencies and Conditional Subschemas (`if`, `then`, `else`)**:

   - The function appropriately processes these keywords, ensuring enums are removed and types are set where applicable.

## **Customization: Preserving Original Type**

If your schema contains enums on types other than string and you wish to **preserve the original type**, you can modify the function as follows:

1. **Determine the Original Type**:

   - Before setting `type` to `"string"`, check if a `type` is already defined.

   - If a `type` exists and is not `"string"`, decide whether to override it or handle it differently.

2. **Modified Code Snippet**:

   Replace the enum handling section with conditional logic:

   ```typescript
   // If the current schema has an "enum", remove it and set type to "string" if no type is defined.
   if (newSchema.enum !== undefined) {
     delete newSchema.enum;
     if (!newSchema.type) {
       newSchema.type = "string"; // Set to string only if type is not already defined
     }
     // Optionally, you can enforce type to string regardless
     // newSchema.type = "string";
   }
   ```

3. **Complete Modified Function**:

   Here's how the updated handling would look:

   ```typescript
   // If the current schema has an "enum", remove it and set type to "string" if no type is defined.
   if (newSchema.enum !== undefined) {
     delete newSchema.enum;
     if (!newSchema.type) {
       newSchema.type = "string"; // Set to string only if type is not already defined
     }
     // Optionally, enforce type to string regardless
     // newSchema.type = "string";
   }
   ```

   This approach ensures that if a `type` is already specified (e.g., `"number"`, `"boolean"`), it remains unchanged, and enums are removed accordingly.

## **Testing the Function**

It's crucial to test the updated function with various schemas to ensure it behaves as expected. Below are some test cases.

### **Test Case 1: Enum on String Property**

**Input Schema**:

```typescript
const testSchema1: JSONSchema7 = {
  type: "object",
  properties: {
    status: {
      type: "string",
      enum: ["active", "inactive"],
    },
  },
};
```

**After Processing**:

```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string"
    }
  }
}
```

### **Test Case 2: Enum on Number Property**

**Input Schema**:

```typescript
const testSchema2: JSONSchema7 = {
  type: "object",
  properties: {
    age: {
      type: "number",
      enum: [18, 21, 30],
    },
  },
};
```

**After Processing with Original Function**:

```json
{
  "type": "object",
  "properties": {
    "age": {
      "type": "string"
    }
  }
}
```

**After Processing with Preserving Type**:
Modify the function as per the customization to **retain `"number"`**.

```json
{
  "type": "object",
  "properties": {
    "age": {
      "type": "number"
    }
  }
}
```

### **Test Case 3: Nested Enums with Combinators**

**Input Schema**:

```typescript
const testSchema3: JSONSchema7 = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        role: { type: "string", enum: ["admin", "user"] },
        preferences: {
          anyOf: [
            { type: "string" },
            { type: "string", enum: ["dark", "light"] },
          ],
        },
      },
    },
  },
};
```

**After Processing**:

```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "object",
      "properties": {
        "role": {
          "type": "string"
        },
        "preferences": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        }
      }
    }
  }
}
```

## **Conclusion**

The updated `removeEnumSchemas` function fulfills your requirements by:

- **Removing `enum` keywords**.
- **Retaining the schema structure** by preserving properties and other schema constructs.
- **Setting the `type` to `"string"`** for properties that originally had an `enum`.

This approach ensures that your JSON Schema remains valid and functional without the enumeration constraints, allowing for greater flexibility in the data it validates.

Feel free to further customize the function based on additional requirements, such as preserving original types or handling specific edge cases.
