import { Document, Node, YAMLMap, YAMLSeq } from "yaml";

type RecordAny = Record<string, any>;

export function removeUnusedYamlAnchors(yamlStr: string): string {
	const anchorRegex = /&([a-zA-Z0-9_-]+)/g;
	const aliasRegex = /\*([a-zA-Z0-9_-]+)/g;

	const anchors = new Set<string>();
	const usedAnchors = new Set<string>();

	let match;

	// Collect all defined anchors
	while ((match = anchorRegex.exec(yamlStr)) !== null) {
		anchors.add(match[1]);
	}

	// Collect all used aliases
	while ((match = aliasRegex.exec(yamlStr)) !== null) {
		usedAnchors.add(match[1]);
	}

	// Identify unused anchors
	const unusedAnchors = [...anchors].filter(
		(anchor) => !usedAnchors.has(anchor)
	);
	if (unusedAnchors.length === 0) return yamlStr;

	// Create regex to match unused anchors only (e.g., &anchorName)
	const unusedAnchorRegex = new RegExp(
		`(\\s*&(?:${unusedAnchors.join("|")})(?=\\s|$))`,
		"g"
	);

	// Remove just the anchor declaration while keeping the rest of the line
	const cleanedYaml = yamlStr.replace(unusedAnchorRegex, "");

	return cleanedYaml;
}

export function convertToYamlWithRefs(jsonObject: RecordAny): string {
	const doc = new Document(jsonObject);
	const cache = new Map<string, Node>();

	function serialize(obj: any): string | null {
		try {
			return JSON.stringify(obj);
		} catch {
			return null; // Handle non-serializable values
		}
	}

	function isValidAnchorName(str: string): boolean {
		return /^[a-zA-Z0-9-_]+$/.test(str);
	}
	const usedAnchors = new Set<string>();
	let count = 1;
	function manageAnchorsAndAliases(obj: any, path: string[] = []): void {
		if (obj && (typeof obj === "object" || Array.isArray(obj))) {
			const serialized = serialize(obj);
			if (serialized === null) return;

			if (cache.has(serialized) && !isArrayOfStrings(obj)) {
				const node: any = cache.get(serialized);
				doc.setIn(path, doc.createAlias(node));
			} else {
				const node = doc.getIn(path);
				if (node instanceof YAMLMap || node instanceof YAMLSeq) {
					let anchorName = path.join("_");
					let apiName = "";
					if (anchorName.startsWith("_TESTS__")) {
						apiName = anchorName.split("_")[3];
						if (apiName === "on") apiName += "_" + anchorName.split("_")[4];
						console.log("apiName", apiName);
					}
					if (obj._NAME_) {
						anchorName = obj._NAME_;
						if (apiName !== "") {
							anchorName = apiName + "_" + anchorName;
						}
						if (usedAnchors.has(anchorName)) {
							anchorName = `${anchorName}_${count}`;
							count++;
						}
						usedAnchors.add(anchorName);
					}
					console.log(anchorName, obj._NAME_, obj);
					if (isValidAnchorName(anchorName)) {
						node.anchor = anchorName;
						cache.set(serialized, node);
					}

					if (Array.isArray(obj)) {
						obj.forEach((item, index) => {
							manageAnchorsAndAliases(item, [...path, index.toString()]);
						});
					} else {
						Object.keys(obj).forEach((key) => {
							manageAnchorsAndAliases(obj[key], [...path, key]);
						});
					}
				}
			}
		}
	}

	manageAnchorsAndAliases(jsonObject);

	return removeUnusedYamlAnchors(doc.toString());
}

function isArrayOfStrings(obj: any): boolean {
	return Array.isArray(obj) && obj.every((item) => typeof item === "string");
}
