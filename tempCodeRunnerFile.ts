	// var compiler = new ConfigCompiler(SupportedLanguages.Typescript);
	// const build = readFileSync("./build.yaml", "utf8");
	// await compiler.initialize(build);
	// await compiler.generateValidPaths();
	// const t = yaml.load(build) as any;
	// const tags = tagsFromApiObj(t["x-tags"]);
	// const apiListForDifference = {
	// 	search: "$.message.intent.fulfillment.vehicle.category",
	// 	on_search:
	// 		"$.message.catalog.providers[*].fulfillments[*].vehicle.category",
	// 	on_select: "$.message.order.fulfillments[*].vehicle.category",
	// 	on_init: "$.message.order.fulfillments[*].vehicle.category",
	// 	on_confirm: "$.message.order.fulfillments[*].vehicle.category",
	// 	on_cancel: "$.message.order.fulfillments[*].vehicle.category",
	// 	on_status: "$.message.order.fulfillments[*].vehicle.category",
	// };
	// const generated1 = await CREATE_BASE_VALIDATIONS(tags, apiListForDifference);
	// const final = await mergeAttr({ _TESTS_: generated1 });
	// writeFileSync("./COMPLETE.json", JSON.stringify(final, null, 2));