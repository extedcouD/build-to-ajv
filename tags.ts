export const tags = {
	search: [
		{
			path: "message.intent.fulfillment.tags",
			tag: [
				{
					code: "linked_provider",
					description: "Describes the provider linked to the order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Provider ID.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Provider Name.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order",
					description: "Describes the order details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "cod_order",
							description: "Specifies if the order is cash on delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "The currency used for the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "The declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "category",
							description: "The category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "weight_unit",
							description: "The unit for the weight of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "The weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "The unit for the dimensions of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "The length of the order package.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "The breadth of the order package.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "The height of the order package.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Details regarding order fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.intent.tags",
			tag: [
				{
					code: "lbnp_features",
					description: "Describes the LBNP features enabled.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "00B",
							description: "Describes the Updated cancellation codes.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00E",
							description:
								"Describes the Pickup & delivery attempt trail (P2H2P).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01D",
							description: "Describes the Publish special capabilities.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "005",
							description: "Describes the Quick Commerce Logistics.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "009",
							description:
								"Describes the Static OTP verification (pickup & delivery).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00C",
							description: "Describes the Updated flow for Immediate Delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "000",
							description: "Describes the catalog.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "001",
							description: "Describes the Serviceability for P2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "002",
							description: "Describes the Serviceability for P2H2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "003",
							description: "Describes the Rate Card for P2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "004",
							description: "Describes the Rate Card for P2H2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "006",
							description: "Describes the Milk Run Logistics.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "007",
							description: "Describes the Single pickup multi drop (SPMD).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "008",
							description: "Describes the COD order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00A",
							description: "Describes the Static OTP verification (RTO).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00D",
							description: "Describes the Payment wallet.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00F",
							description: "Describes the ePOD.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "010",
							description: "Describes the Call Masking.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "011",
							description: "Describes the Update delivery address.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "012",
							description:
								"Describes the Update pickup & delivery authorization.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "013",
							description: "Describes the Seller & buyer instructions.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "014",
							description: "Describes the Seller Creds.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "015",
							description:
								"Describes the Dynamic OTP verification (pickup & delivery).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "016",
							description: "Describes the Dynamic OTP verification (RTO).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "017",
							description: "Describes the Surge fee.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "018",
							description: "Describes the Partial RTO.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "019",
							description: "Describes the eWay bill.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01A",
							description: "Describes the Cancellation terms.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01B",
							description: "Describes the Reverse QC.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01C",
							description: "Describes the SLA metrics.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01D",
							description: "Describes the Publish special capabilities.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01E",
							description: "Describes the RCM self-declaration.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01F",
							description: "Describes the Codified static terms.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "020",
							description:
								"Describes the Exchange customer support contact details.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "021",
							description: "Describes the Differential weight charges.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "lbnp_sla_terms",
					description: "Service Level Agreement terms for LBNP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "metric",
							description: "The metric being measured.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_unit",
							description: "The unit of measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_min",
							description: "The minimum base value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_max",
							description: "The maximum base value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_min",
							description: "The minimum penalty value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_max",
							description: "The maximum penalty value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_unit",
							description: "The unit of penalty measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_value",
							description: "The penalty value imposed.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_search: [
		{
			path: "message.catalog.bpp/descriptor.tags",
			tag: [
				{
					code: "bpp_terms",
					description: "Terms and conditions related to BPP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "static_terms",
							description: "URL for static terms (if any).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "static_terms_new",
							description: "Updated static terms URL.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "effective_date",
							description: "The date when the terms become effective.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "np_tax_type",
							description: "Type of tax applicable (e.g., RCM).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "max_liability",
							description: "Maximum liability amount.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "max_liability_cap",
							description: "Maximum cap on liability.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "mandatory_arbitration",
							description: "Whether arbitration is mandatory (true/false).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "court_jurisdiction",
							description: "The jurisdiction for legal proceedings.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delay_interest",
							description: "Interest rate applied for delays.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.catalog.bpp/providers.fulfillments.tags",
			tag: [
				{
					code: "distance",
					description: "Details about the motorable distance.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "motorable_distance_type",
							description: "The unit of motorable distance measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "motorable_distance",
							description: "The measured motorable distance.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Request details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_response",
					description: "Response details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
			],
		},
		{
			path: "message.catalog.bpp/providers.items.tags",
			tag: [
				{
					code: "type",
					description: "Defines the type and unit.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "base",
									description: "min guarantee amount, as per rate basis (base)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "rider",
									description:
										"min guarantee amount, as per rate basis (rider)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description:
										"min guarantee amount, as per rate basis (order)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "unit",
							description:
								'Describes the unit of the item, required if type="rider".',
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "hour",
									description: "cost quoted is per this unit",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
			],
		},
		{
			path: "message.catalog.bpp/providers.tags",
			tag: [
				{
					code: "lsp_features",
					description: "Features available for the LSP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "00B",
							description: "Describes the Updated cancellation codes.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00E",
							description:
								"Describes the Pickup & delivery attempt trail (P2H2P).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01D",
							description: "Describes the Publish special capabilities.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "005",
							description: "Describes the Quick Commerce Logistics.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "009",
							description:
								"Describes the Static OTP verification (pickup & delivery).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00C",
							description: "Describes the Updated flow for Immediate Delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "000",
							description: "Describes the catalog.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "001",
							description: "Describes the Serviceability for P2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "002",
							description: "Describes the Serviceability for P2H2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "003",
							description: "Describes the Rate Card for P2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "004",
							description: "Describes the Rate Card for P2H2P.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "006",
							description: "Describes the Milk Run Logistics.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "007",
							description: "Describes the Single pickup multi drop (SPMD).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "008",
							description: "Describes the COD order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00A",
							description: "Describes the Static OTP verification (RTO).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00D",
							description: "Describes the Payment wallet.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "00F",
							description: "Describes the ePOD.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "010",
							description: "Describes the Call Masking.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "011",
							description: "Describes the Update delivery address.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "012",
							description:
								"Describes the Update pickup & delivery authorization.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "013",
							description: "Describes the Seller & buyer instructions.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "014",
							description: "Describes the Seller Creds.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "015",
							description:
								"Describes the Dynamic OTP verification (pickup & delivery).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "016",
							description: "Describes the Dynamic OTP verification (RTO).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "017",
							description: "Describes the Surge fee.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "018",
							description: "Describes the Partial RTO.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "019",
							description: "Describes the eWay bill.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01A",
							description: "Describes the Cancellation terms.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01B",
							description: "Describes the Reverse QC.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01C",
							description: "Describes the SLA metrics.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01D",
							description: "Describes the Publish special capabilities.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01E",
							description: "Describes the RCM self-declaration.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "01F",
							description: "Describes the Codified static terms.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "020",
							description:
								"Describes the Exchange customer support contact details.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "021",
							description: "Describes the Differential weight charges.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "special_req",
					description: "Special requirements for the order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "dangerous_goods",
							description: "Indicates if dangerous goods are included.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cold_storage",
							description: "Indicates if cold storage is required.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "open_box_delivery",
							description: "Indicates if open box delivery is required.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "fragile_handling",
							description: "Indicates if fragile handling is required.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cod_order",
							description: "Indicates if the order is Cash on Delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	select: [
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "linked_provider",
					description: "Describes the provider information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Request details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_response",
					description: "Response details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order",
					description: "Describes the retail linked order information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes the unique id of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description:
								"Describes the package dimension unit for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description:
								"Describes the length of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description:
								"Describes the breadth of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description:
								"Describes the height of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.tags",
			tag: [
				{
					code: "bap_terms",
					description: "Terms and conditions agreed upon by the BAP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "accept_bpp_terms",
							description: "Indicates whether the BAP accepts the BPP terms.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_select: [
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "rider_check",
					description: "Rider inline check details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "inline_check_for_rider",
							description: "Indicates if inline check for rider is required.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_provider",
					description: "Describes the provider information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Request details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_response",
					description: "Response details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order",
					description: "Describes the retail linked order information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes the unique id of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description:
								"Describes the package dimension unit for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description:
								"Describes the length of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description:
								"Describes the breadth of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description:
								"Describes the height of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Describes the retail linked order item information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "name",
							description: "Describes the name of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Describes thequantity of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.payment.tags",
			tag: [
				{
					code: "wallet_balance",
					description: "Wallet balance details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "currency",
							description: "Describe the type of currency.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Available balance in the wallet.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.tags",
			tag: [
				{
					code: "bpp_terms",
					description: "Terms related to BPP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "static_terms",
							description: "Describes the static terms.",
							reference:
								"https://github.com/ONDC-Official/protocol-network-extension/discussions/79",
						},
					],
				},
			],
		},
	],
	init: [
		{
			path: "message.order.fulfillments.start.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.end.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "linked_provider",
					description: "Details about the linked provider.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Request details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_response",
					description: "Response details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order",
					description: "Details about the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes the unique id of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description:
								"Describes the package dimension unit for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description:
								"Describes the length of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description:
								"Describes the breadth of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description:
								"Describes the height of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.items.tags",
			tag: [
				{
					code: "type",
					description: "Defines the base type.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "base",
									description: "base item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "surge",
									description: "surge fee item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "cod",
									description: "cod charge item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
			],
		},
		{
			path: "message.order.tags",
			tag: [
				{
					code: "bap_terms",
					description: "Terms and conditions agreed upon by the BAP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "accept_bpp_terms",
							description: "Indicates whether the BAP accepts the BPP terms.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_init: [
		{
			path: "message.order.fulfillments.start.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.end.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "rider_check",
					description: "Rider inline check details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "inline_check_for_rider",
							description: "Indicates if inline check for rider is required.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_provider",
					description: "Details about the linked provider.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Request details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_response",
					description: "Response details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order",
					description: "Details about the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes the unique id of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description:
								"Describes the package dimension unit for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description:
								"Describes the length of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description:
								"Describes the breadth of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description:
								"Describes the height of the package for retail order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Details about the linked order item.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "name",
							description: "Describes the name of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Describes thequantity of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.tags",
			tag: [
				{
					code: "bpp_terms",
					description: "Terms related to BPP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "static_terms",
							description: "Describes the static terms.",
							reference:
								"https://github.com/ONDC-Official/protocol-network-extension/discussions/79",
						},
					],
				},
			],
		},
	],
	confirm: [
		{
			path: "message.order.items.tags",
			tag: [
				{
					code: "type",
					description: "Type information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "base",
									description: "base item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "surge",
									description: "surge fee item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "cod",
									description: "cod charge item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.start.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.end.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "linked_provider",
					description: "Details about the linked provider.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Provider ID.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Provider name.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Provider address details.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cred_code",
							description: "Credential code.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cred_desc",
							description: "Credential description.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order",
					description: "Details about the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Order ID.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "prep_time",
							description: "Preparation time.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cod_order",
							description: "Indicates if Cash on Delivery is applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency type.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Declared order value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "collection_amount",
							description: "Collection amount.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Unit of weight.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Unit of dimension.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length of the package.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth of the package.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height of the package.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "shipment_type",
							description: "Type of shipment.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Details about the linked order item.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Item category.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Item name.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency type.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Item value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Quantity of item.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Unit of weight.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "return_to_origin",
							description: "Indicates if return to origin is applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "state",
					description: "State details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "ready_to_ship",
							description: "Describes the order is ready to ship.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "yes",
									description: "order is ready to be shipped",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "no",
									description: "order is not ready to be shipped",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "rto_action",
					description: "Return to Origin action details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "return_to_origin",
							description: "Describes the item for return to origin.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "yes",
									description:
										"order should be returned to origin in case of return",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "no",
									description: "order can be disposed in case of return",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "provider",
					description: "Provider details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "name",
							description: "Provider name.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Provider address.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "tax_id",
							description: "Provider tax ID.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "order",
					description: "Order details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Order ID.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Dimension unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "cod_settlement_detail",
					description: "COD settlement details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "settlement_window",
							description: "Settlement window duration.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "settlement_type",
							description: "Type of settlement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "beneficiary_name",
							description: "Name of the beneficiary.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "upi_address",
							description: "UPI address of the beneficiary.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "bank_account_no",
							description: "Bank account number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "ifsc_code",
							description: "IFSC code of the bank.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "bank_name",
							description: "Name of the bank.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "branch_name",
							description: "Name of the bank branch.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "rto_verification",
					description: "Return to origin (RTO) verification details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "code",
							description: "Verification code.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "short_desc",
							description: "Short description of the verification.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "items",
					description: "Order items.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Item category.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Item name.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency type.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Item value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Quantity of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Weight unit of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight value of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "hsn_code",
							description: "HSN code for the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "ebn_exempt",
							description: "EBN exemption status.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "reverseqc_input",
					description: "Reverse QC input details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "P001",
							description: "Product identifier.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "P003",
							description: "Quantity identifier.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "Q001",
							description: "QC-related identifier.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.tags",
			tag: [
				{
					code: "bap_terms",
					description: "Terms related to BAP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "accept_bpp_terms",
							description: "Indicates if BPP terms are accepted.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "lbnp_sla_terms",
					description: "SLA terms for LBNP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "metric",
							description: "The metric being measured.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_unit",
							description: "The unit of measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_min",
							description: "The minimum base value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_max",
							description: "The maximum base value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_min",
							description: "The minimum penalty value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_max",
							description: "The maximum penalty value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_unit",
							description: "The unit of penalty measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_value",
							description: "The penalty value imposed.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_confirm: [
		{
			path: "message.order.items.tags",
			tag: [
				{
					code: "type",
					description: "Type information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of the item.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "base",
									description: "base item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "surge",
									description: "surge fee item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "cod",
									description: "cod charge item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.start.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.end.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "linked_provider",
					description: "Details of the linked provider.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order",
					description: "Details of the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Unique identifier for the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency used in the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Dimension unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "shipment_type",
							description: "Type of shipment (e.g., box).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "box",
									description: "shipment type - box",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "flyer",
									description: "shipment type - flyer",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Details of the linked order item.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "name",
							description: "Describes the name of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Describes thequantity of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "state",
					description: "Order state information.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "ready_to_ship",
							description: "Describes the order is ready to ship.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "yes",
									description: "order is ready to be shipped",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "no",
									description: "order is not ready to be shipped",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "rto_action",
					description: "Return to origin action status.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "return_to_origin",
							description: "Describes the item for return to origin.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "yes",
									description:
										"order should be returned to origin in case of return",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "no",
									description: "order can be disposed in case of return",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "shipping_label",
					description: "Shipping label details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "webp",
									description: "Describes the type of shipping label (webp)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "png",
									description: "Describes the type of shipping label (png)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "jpeg",
									description: "Describes the type of shipping label (jpeg)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "pdf",
									description: "Describes the type of shipping label (pdf)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "url",
							description: "Describes the url of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "weather_check",
					description: "Weather conditions at the time of delivery.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "raining",
							description: "Describes the weather is raining.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "yes",
									description: "It is raining",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "no",
									description: "It is not raining",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
			],
		},
		{
			path: "message.order.tags",
			tag: [
				{
					code: "bpp_terms",
					description: "Terms related to BPP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "static_terms",
							description: "Describes the static terms.",
							reference:
								"https://github.com/ONDC-Official/protocol-network-extension/discussions/79",
						},
					],
				},
				{
					code: "bap_terms",
					description: "Terms related to BAP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "accept_bpp_terms",
							description: "Indicates if BPP terms are accepted.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "lbnp_sla_terms",
					description: "Service Level Agreement (SLA) terms for LBNP.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "metric",
							description: "The metric being measured.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_unit",
							description: "The unit of measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_min",
							description: "The minimum base value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "base_max",
							description: "The maximum base value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_min",
							description: "The minimum penalty value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_max",
							description: "The maximum penalty value.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_unit",
							description: "The unit of penalty measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "penalty_value",
							description: "The penalty value imposed.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	update: [
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "state",
					description: "Order state details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "ready_to_ship",
							description: "Indicates if the order is ready to ship.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_ready",
							description: "Indicates if the order is ready.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_provider",
					description: "Details of the linked provider.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order",
					description: "Details of the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Unique identifier for the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency used in the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Dimension unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "shipment_type",
							description: "Type of shipment (e.g., box).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "box",
									description: "shipment type - box",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "flyer",
									description: "shipment type - flyer",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Details of the linked order items.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "name",
							description: "Describes the name of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Describes thequantity of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_update: [
		{
			path: "message.order.fulfillments.start.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.end.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "linked_provider",
					description: "Details of the linked provider.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order",
					description: "Details of the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Unique identifier for the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency used in the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Dimension unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "shipment_type",
							description: "Type of shipment (e.g., box).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "box",
									description: "shipment type - box",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "flyer",
									description: "shipment type - flyer",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Details of the linked order item.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "name",
							description: "Describes the name of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Describes thequantity of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "shipping_label",
					description: "Shipping label details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "webp",
									description: "Describes the type of shipping label (webp)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "png",
									description: "Describes the type of shipping label (png)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "jpeg",
									description: "Describes the type of shipping label (jpeg)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "pdf",
									description: "Describes the type of shipping label (pdf)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "url",
							description: "Describes the url of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Fulfillment request details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_response",
					description: "Fulfillment response details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description: "Number of riders assigned.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description: "Number of orders being fulfilled.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description: "Basis for rate calculation.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "diff_value",
							description: "Difference in expected and actual values.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "rider_details",
					description: "Details of the rider assigned to the order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "name",
							description: "Rider's name.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "phone",
							description: "Rider's phone number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfillment_delay",
					description: "Details regarding fulfillment delays.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "state",
							description: "Current state of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "reason_id",
							description: "Reason for the delay.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "timestamp",
							description: "Timestamp of the delay event.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "attempt",
							description: "Whether an attempt was made.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfillment_proof",
					description: "Proof of order fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "state",
							description: "Final state of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "type",
							description: "Format of the proof (e.g., image, webp).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "url",
							description: "Link to the proof image.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "ebn",
					description: "Electronic bill number details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "EBN identifier.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "expiry_date",
							description: "Expiry date of the EBN.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order_diff",
					description: "Differences in the linked order details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Order ID.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Unit of weight measurement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Unit for dimensions.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Order length.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Order breadth.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Order height.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order_diff_proof",
					description: "Proof of differences in the order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of proof (e.g., image).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "url",
							description: "Link to the proof image.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_cancel: [
		{
			path: "message.order.fulfillments.start.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.end.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "igm_request",
					description: "Request related to IGM (Issue Management).",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description:
								"Describes the unique id of the IGM (Issue Grievance Management)",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "precancel_state",
					description: "State of fulfillment before cancellation.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "fulfillment_state",
							description:
								"Describes the pre-cancel state of fulfillment, i.e. state of fulfillment prior to cancellation.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "Pending",
									description: "Describes the state of the order as Pending.",
								},
								{
									code: "Order-picked-up",
									description:
										"Describes the state of the order as Order picked up.",
								},
								{
									code: "Out-for-pickup",
									description:
										"Describes the state of the order as Out for pickup.",
								},
								{
									code: "At-destination-hub",
									description:
										"Describes the state of the order as At destination hub.",
								},
								{
									code: "In-transit",
									description:
										"Describes the state of the order as In transit.",
								},
								{
									code: "At-pickup",
									description: "Describes the state of the order as At pickup.",
								},
								{
									code: "Out-for-delivery",
									description:
										"Describes the state of the order as Out for delivery.",
								},
								{
									code: "At-delivery",
									description:
										"Describes the state of the order as At delivery.",
								},
								{
									code: "Searching-for-Agent",
									description:
										"Describes the state of the order as Searching for Agent.",
								},
								{
									code: "Agent-assigned",
									description:
										"Describes the state of the order as Agent assigned.",
								},
								{
									code: "Pickup-failed",
									description:
										"Describes the state of the order as Pickup failed.",
								},
								{
									code: "Pickup-rescheduled",
									description:
										"Describes the state of the order as Pickup rescheduled.",
								},
								{
									code: "Delivery-failed",
									description:
										"Describes the state of the order as Delivery failed.",
								},
								{
									code: "Delivery-rescheduled",
									description:
										"Describes the state of the order as Delivery rescheduled.",
								},
							],
						},
						{
							code: "updated_at",
							description: "Describes the time of the precancel state.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_provider",
					description: "Information about the linked provider.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order",
					description: "Details of the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Unique identifier for the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency used in the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Dimension unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "shipment_type",
							description: "Type of shipment (e.g., box).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "box",
									description: "shipment type - box",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "flyer",
									description: "shipment type - flyer",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Items within the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "name",
							description: "Describes the name of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Describes thequantity of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "shipping_label",
					description: "Details of the shipping label.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "webp",
									description: "Describes the type of shipping label (webp)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "png",
									description: "Describes the type of shipping label (png)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "jpeg",
									description: "Describes the type of shipping label (jpeg)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "pdf",
									description: "Describes the type of shipping label (pdf)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "url",
							description: "Describes the url of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "rto_event",
					description: "Details of the Return to Origin (RTO) event.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "retry_count",
							description: "Number of retry attempts before RTO.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rto_id",
							description: "Unique identifier for the RTO event.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cancellation_reason_id",
							description: "Reason ID for order cancellation.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "sub_reason_id",
							description: "Sub-reason ID for cancellation.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cancelled_by",
							description: "Entity responsible for cancellation.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_track: [
		{
			path: "message.tracking.tags",
			tag: [
				{
					code: "order",
					description: "Order details for tracking.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Unique identifier for the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "config",
					description: "Configuration for tracking updates.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "attr",
							description: "Tracking attribute being used.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "type",
							description: "Type of tracking mechanism.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "path",
					description: "GPS path details for live tracking.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "lat_lng",
							description: "Latitude and longitude coordinates.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "sequence",
							description: "Order of location updates.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
	on_status: [
		{
			path: "message.order.fulfillments.start.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.end.contact.tags",
			tag: [
				{
					code: "masked_contact",
					description:
						"either phone no or masked_contact to be provided; to be part of the order in /confirm, /on_confirm, /on_update, /on_status;",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of masked contact (e.g., IVR PIN).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "ivr_pin",
									description: "IVR with pin",
								},
								{
									code: "ivr_without_pin",
									description: "IVR without pin",
								},
								{
									code: "api_endpoint",
									description: "API endpoint for bridge",
								},
							],
						},
						{
							code: "setup",
							description: "IVR setup or contact number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "token",
							description: "Token for masked contact.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.fulfillments.tags",
			tag: [
				{
					code: "tracking",
					description: "Tracking details for the order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "gps_enabled",
							description:
								"Describes whether tracking by GPS coordinates enabled",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "url_enabled",
							description:
								"Describes whether tracking by GPS coordinates enabled",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "url",
							description:
								"Describes if tracking by URL enabled, corresponding URL for tracking",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_provider",
					description: "Provider details linked to the order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Describes unique id for provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "name",
							description: "Describes the name of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "address",
							description: "Describes the address of provider.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "linked_order",
					description: "Details of the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "id",
							description: "Unique identifier for the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Currency used in the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "declared_value",
							description: "Declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "dim_unit",
							description: "Dimension unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "shipment_type",
							description: "Type of shipment (e.g., box).",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "box",
									description: "shipment type - box",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "flyer",
									description: "shipment type - flyer",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
					],
				},
				{
					code: "linked_order_item",
					description: "Individual items in the linked order.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "category",
							description: "Describes the category of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "F&B",
									description: "F&B item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Grocery",
									description: "Grocery item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Fashion",
									description: "Fashion item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "BPC",
									description: "BPC item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Electronics",
									description: "Electronics item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Appliances",
									description: "Appliances item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Home & Kitchen",
									description: "Home & Kitchen item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Health & Wellness",
									description: "Health & Wellness item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Pharma",
									description: "Pharma item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "Auto components",
									description: "Auto components item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "C2C parcels",
									description: "C2C parcels item",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "name",
							description: "Describes the name of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "currency",
							description: "Describes the currency of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Describes the declared value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "quantity",
							description: "Describes thequantity of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_unit",
							description: "Describes the weight unit of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight_value",
							description: "Describes the weight value of the order.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "shipping_label",
					description: "Shipping label details.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Describes the type of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "webp",
									description: "Describes the type of shipping label (webp)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "png",
									description: "Describes the type of shipping label (png)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "jpeg",
									description: "Describes the type of shipping label (jpeg)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "pdf",
									description: "Describes the type of shipping label (pdf)",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "url",
							description: "Describes the url of shipping label.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_request",
					description: "Request details for fulfillment.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description:
								"either rider_count or order_count to be provided; if both available, rider_count overrides order_count, as applicable.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description:
								"Describes the number of retail orders for delivery.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description:
								"Describes the rate basis - rate per rider or order.",
							reference: "<PR/Issue/Discussion Links md format text>",
							list: [
								{
									code: "rider",
									description: "rate basis per rider",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
								{
									code: "order",
									description: "rate basis per order",
									reference: "<PR/Issue/Discussion Links md format text>",
								},
							],
						},
						{
							code: "motorable_distance",
							description:
								"Describes the max motorable distance for serviceability (in km).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_start",
							description: "Describes the pickup slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "pickup_slot_end",
							description: "Describes the pickup slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_start",
							description: "Describes the delivery slot - start time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "delivery_slot_end",
							description: "Describes the delivery slot - end time (UTC).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "fulfill_response",
					description: "Response details for the fulfillment request.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "rider_count",
							description: "Number of riders assigned.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "order_count",
							description: "Number of orders accepted.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rate_basis",
							description: "Basis of rate calculation.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "diff_value",
							description: "Difference in estimated vs actual values.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "rider_details",
					description: "Details of assigned riders.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "name",
							description: "Describes the rider name.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "phone",
							description: "Describes the rider phone number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "vehicle_registration",
							description: "Describes the vehicle registration number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "cod_collection_detail",
					description: "Details of COD collection.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "currency",
							description: "Currency in which COD was collected.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "value",
							description: "Amount collected as COD.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "transaction_id",
							description: "Transaction ID of the COD collection.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "timestamp",
							description: "Timestamp of the COD collection.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "cod_settlement_detail",
					description: "Details of COD settlement.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "settlement_window",
							description: "Settlement window duration.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "settlement_type",
							description: "Type of settlement.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "beneficiary_name",
							description: "Name of the beneficiary.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "upi_address",
							description: "UPI address of the beneficiary.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "bank_account_no",
							description: "Bank account number.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "ifsc_code",
							description: "IFSC code of the bank.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "bank_name",
							description: "Name of the bank.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "branch_name",
							description: "Name of the bank branch.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "rto_event",
					description: "Details of the RTO (Return to Origin) event.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "retry_count",
							description:
								"Number of retry attempts made before initiating RTO.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "rto_id",
							description: "Unique identifier for the RTO event.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cancellation_reason_id",
							description: "Reason code for order cancellation.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "reason_id",
							description: "Primary reason code for the RTO.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "sub_reason_id",
							description: "Sub-reason code for additional context.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "cancelled_by",
							description:
								"Entity responsible for initiating the cancellation.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "reverseqc_output",
					description: "Output details of the reverse quality check (QC).",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "P001",
							description: "Product identifier.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "P003",
							description: "Quantity identifier.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "Q001",
							description: "QC-related identifier.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
		{
			path: "message.order.tags",
			tag: [
				{
					code: "diff_dim",
					description: "Dimension differences recorded.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "unit",
							description: "Unit of measurement for dimensions.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "length",
							description: "Length difference recorded.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "breadth",
							description: "Breadth difference recorded.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "height",
							description: "Height difference recorded.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "diff_weight",
					description: "Weight differences recorded.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "unit",
							description: "Unit of measurement for weight.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "weight",
							description: "Weight difference recorded.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
				{
					code: "diff_proof",
					description: "Proof of recorded differences.",
					reference: "<PR/Issue/Discussion Links md format text>",
					list: [
						{
							code: "type",
							description: "Type of proof provided (image, document, etc.).",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
						{
							code: "url",
							description: "URL to access proof.",
							reference: "<PR/Issue/Discussion Links md format text>",
						},
					],
				},
			],
		},
	],
};
