import { readFileSync, writeFileSync } from "fs";
import yaml from "js-yaml";
import { findClosestJsonPath } from "./JsonPathCorrector";
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
		console.log(key);
		data[key] = listDetailedPaths(obj[key], key);
	}

	return data;
}
const pathFindings: any = [];
const listDetailedPaths = (obj: Record<string, any>, api: string) => {
	// const obj: Record<string, any> = yaml.load(yamlData);
	let detailedPaths: enumObject[] = [];
	detailedPaths = explorePaths(obj, "", detailedPaths);
	const ymlData = readFileSync("./validPaths.json", "utf8");
	const validPaths = JSON.parse(ymlData) as any;
	for (const detail of detailedPaths) {
		const orignal = detail.path;
		detail.path = findClosestJsonPath(
			validPaths[api] as any,
			detail.path
		) as string;
		pathFindings.push({ original: orignal, corrected: detail.path, api: api });
	}
	writeFileSync("./pathFindings.json", JSON.stringify(pathFindings, null, 2));
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
