import { Attribute, AttributeSection, X_ATTRIBUTES } from "./buildTypes";

export interface ConvertedAttributeRow {
  path: string;
  required: string;
}
export type AttributeType = Record<string, ConvertedAttributeRow[]>;
export function ConvertAttributeFromBuildToTable(attributeData: X_ATTRIBUTES) {
  const pages: Record<string, AttributeType> = {};
  for (const key in attributeData) {
    let sheets: AttributeType = {};
    for (const attrSet in attributeData[key].attribute_set) {
      const element = attributeData[key].attribute_set[attrSet];
      const list = listDetailedPaths(element as AttributeSection);
      sheets[attrSet] = list;
    }
    pages[key] = sheets;
  }
  const merged = mergeStructure(pages);
  const final = getRequiredPaths(merged);
  return final;
}

function listDetailedPaths(attributeSet: AttributeSection) {
  // console.log(yamlString);
  try {
    // Parse the YAML string into a JavaScript object
    let detailedPaths: ConvertedAttributeRow[] = [];
    detailedPaths = exploreObject(attributeSet, "", detailedPaths);
    //
    return detailedPaths;
  } catch (e) {
    console.log(e);
    return [];
  }
}

function exploreObject(
  subObj: AttributeSection,
  currentPath: string,
  detailedPaths: ConvertedAttributeRow[]
): ConvertedAttributeRow[] {
  for (const key in subObj) {
    // Check if it's an own property
    if (Object.prototype.hasOwnProperty.call(subObj, key)) {
      // Construct the new path
      const newPath = currentPath ? `${currentPath}.${key}` : key;

      const value = subObj[key];

      // If the value is an object and not null or an array, check for properties
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        if ("required" in value && "usage" in value) {
          const attribute = value as Attribute; // Type assertion

          // Handle 'required' field safely
          let req = "OPTIONAL";
          if (attribute.required && typeof attribute.required === "string") {
            req = attribute.required.toUpperCase();
          }
          if (newPath.split(".").includes("_description")) {
            continue;
          }
          // Store the detailed information about the path and properties
          detailedPaths.push({
            path: newPath,
            required: req,
          });
        }

        // Recurse into the sub-object
        exploreObject(value as AttributeSection, newPath, detailedPaths);
      }
    }
  }

  return detailedPaths;
}

type Item = {
  path: string;
  required: "MANDATORY" | "OPTIONAL";
};

type OriginalStructure = {
  [category: string]: {
    [key: string]: Item[] | any;
  };
};

type UnifiedStructure = {
  [key: string]: Item[] | any;
};

function mergeStructure(structure: OriginalStructure): UnifiedStructure {
  const merged: UnifiedStructure = {};

  for (const category in structure) {
    for (const key in structure[category]) {
      const items = structure[category][key];

      if (Array.isArray(items)) {
        // Handle array with 'path' and 'required' fields
        const itemMap = new Map<string, "MANDATORY" | "OPTIONAL">(
          merged[key]?.map((item: Item) => [item.path, item.required])
        );

        for (const item of items as Item[]) {
          const existingRequirement = itemMap.get(item.path);

          // Override with 'OPTIONAL' if it has higher priority
          if (!existingRequirement || item.required === "OPTIONAL") {
            itemMap.set(item.path, item.required);
          }
        }

        // Update merged structure with the unique items for this key
        merged[key] = Array.from(itemMap, ([path, required]) => ({
          path,
          required,
        }));
      } else {
        // For non-array items, add them directly to the merged object if not already present
        if (!(key in merged)) {
          merged[key] = items;
        }
      }
    }
  }

  return merged;
}

function getRequiredPaths(structure: any) {
  const result: any = {};

  for (const key in structure) {
    // Filter items with 'required' set to 'MANDATORY' and extract their paths
    const requiredPaths = structure[key]
      .filter((item: any) => item.required === "MANDATORY")
      .map((item: any) => item.path);

    // Only add the key to the result if there are required paths
    if (requiredPaths.length > 0) {
      result[key] = requiredPaths;
    }
  }

  return result;
}
