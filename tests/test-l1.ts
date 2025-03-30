import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { performL1validations } from "./generated/L1-validations";

function runTests() {
	const rawJson = readFileSync(
		path.resolve(__dirname, "./sample-payload.json"),
		"utf-8"
	);
	const payloads: Record<string, any[]> = JSON.parse(rawJson);
	const outputs: any = {};
	for (const api in payloads) {
		outputs[api] = [];
		for (const payload of payloads[api]) {
			const output = performL1validations(api, payload, true);
			const invalid = output.filter((o) => o.valid === false && o.code !== 200);
			outputs[api].push({
				...invalid,
				payload: payload,
			});
		}
	}
	writeFileSync(
		path.resolve(__dirname, "./output.json"),
		JSON.stringify(outputs, null, 2)
	);
}

runTests();
