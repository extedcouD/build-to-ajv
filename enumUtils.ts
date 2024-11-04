export interface enumInfo {
  code: string;
  //   description: string;
}
export interface enumObject {
  path: string;
  enums: enumInfo[];
}

export type RecordOfEnumArrays = Record<string, enumObject[]>;

export function enumsFromObj(obj: any) {
  let data: any = {};
  for (const key in obj) {
    data[key] = listDetailedPaths(obj[key]);
  }
  return data;
}

const listDetailedPaths = (obj: Record<string, any>) => {
  // const obj: Record<string, any> = yaml.load(yamlData);
  let detailedPaths: any = [];
  detailedPaths = explorePaths(obj, "", detailedPaths);
  return detailedPaths;
};

function explorePaths(
  subObj: Record<string, any>,
  currentPath: string,
  detailedPaths: enumObject[]
) {
  for (const key in subObj) {
    const newPath = currentPath ? `${currentPath}.${key}` : key;
    if (
      typeof subObj[key] === "object" &&
      subObj[key] !== null &&
      !Array.isArray(subObj[key])
    ) {
      detailedPaths = explorePaths(subObj[key], newPath, detailedPaths);
    }
    if (Array.isArray(subObj[key])) {
      const enums: enumInfo[] = subObj[key].map((element: any) => {
        return {
          code: element.code,
          //   description: element.description,
        };
      });
      detailedPaths.push({ path: newPath, enums: enums });
    }
  }
  return detailedPaths;
}