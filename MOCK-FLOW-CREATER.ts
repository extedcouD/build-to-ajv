import { readFileSync, writeFileSync } from "fs";
import { dereferenceSchema } from "./ajvGenerator";
import yaml from "js-yaml";

type Sequence = {
	key: string;
	type: string;
	unsolicited: boolean;
	pair: string | null;
	owner: string;
	expect: boolean;
};

async function createFlows() {
	const build = readFileSync("./build.yaml", "utf8");
	const buildData = (await dereferenceSchema(yaml.load(build))) as any;
	const flows = buildData["x-flows"];
	const flowsConfig: any = {
		flows: [],
	};
	for (const flow of flows) {
		// console.log(sanitizeString(flow.summary));
		const sequence: Sequence[] = [];

		let lastApi = null;
		for (const step of flow.steps) {
			console.log(step.api);
			const api: string = step.api;
			const unsolicited =
				lastApi !== api.replace("on_", "") && api.startsWith("on_");
			console.log(lastApi, api, api.replace("on_", ""), unsolicited);
			sequence.push({
				key: step.api,
				type: step.api,
				unsolicited: unsolicited,
				pair: unsolicited || !api.startsWith("on_") ? null : lastApi,
				owner: api.startsWith("on_") ? "BPP" : "BAP",
				expect: api === "search",
			});
			lastApi = api;
		}

		flowsConfig.flows.push({
			id: sanitizeString(flow.summary),
			description: flow.summary,
			sequence: sequence,
		});
	}
	// console.log(flowsConfig);
	writeFileSync("./flows.json", JSON.stringify(flowsConfig, null, 2));
}

(async () => {
	await createFlows();
})();
function sanitizeString(input: string): string {
	return input.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
}
