import jsonpath from "jsonpath";
//@ts-ignore
import jp from "jsonpath-faster";
const sample = {
	test: [
		{
			name: "t1",
		},
		{
			// name is missing here
			id: "t2",
		},
	],
};

const result = jsonpath.query(sample, "$.test[*].name");
const result2 = jp.query(sample, "$.test[*].name");
console.log(result);
console.log(result2);

export default {};
