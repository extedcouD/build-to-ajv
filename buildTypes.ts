export interface X_ATTRIBUTES {
	[key: string]: AttributeSet;
}
export interface AttributeSet {
	attribute_set: AttributeSection;
}
export interface Attribute {
	required?: string;
	// usage?: any;
	description?: string;
	owner?: string;
	type?: string;
}
export interface AttributeSection {
	[key: string]: Attribute | AttributeSection;
}
export interface BUID_TYPE {
	paths: {
		[key: string]: {
			post: {
				description: string;
				requestBody: {
					content: {
						"application/json": {
							schema: any;
						};
					};
				};
			};
		};
	};
	"x-enum": any;
	"x-attributes": X_ATTRIBUTES;
}
