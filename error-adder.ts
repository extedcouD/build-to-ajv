import { writeFileSync } from "node:fs";

let without_errors = {
	_TESTS_: {
		search: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_8_CONTEXT_ACTION",
				enumList: ["search"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_9_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_10_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_11_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_12_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.intent.fulfillment.vehicle.category",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_13_FULFILLMENT_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.intent.fulfillment.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_14_STOPS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.intent.fulfillment.stops[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_15_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.intent.fulfillment.stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_16_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath: "$.message.intent.fulfillment.stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "BUYER_FINDER_FEES_Tag_Required_17_DESCRIPTOR_CODE",
				validTags: ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"],
				tagPath: "$.message.intent.payment.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BUYER_FINDER_FEES",
				_SCOPE_:
					"$.message.intent.payment.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_SETTLEMENT_TERMS",
				_SCOPE_:
					"$.message.intent.payment.tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
		select: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_13_CONTEXT_ACTION",
				enumList: ["select"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_14_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_15_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_16_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_17_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_18_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_19_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_20_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_21_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_22_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_23_ORDER_STATUS",
				enumList: [
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
				],
				enumPath: "$.message.order.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_24_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_25_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TICKET_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TRIP_DETAILS",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		init: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_PAYMENTS_COLLECTED_BY",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_PAYMENTS_STATUS",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_PAYMENTS_TYPE",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_16_CONTEXT_ACTION",
				enumList: ["init"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_17_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_18_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_19_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_20_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_21_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_22_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_23_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_24_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_25_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_26_ORDER_STATUS",
				enumList: [
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
				],
				enumPath: "$.message.order.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_27_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "BUYER_FINDER_FEES_Tag_Required_28_DESCRIPTOR_CODE",
				validTags: ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"],
				tagPath: "$.message.order.payments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BUYER_FINDER_FEES",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_SETTLEMENT_TERMS",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
		confirm: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ORDER_ID",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_PAYMENTS_ID",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_PARAMS_TRANSACTION_ID",
				attr: "$.message.order.payments[*].params.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_PARAMS_CURRENCY",
				attr: "$.message.order.payments[*].params.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_PARAMS_AMOUNT",
				attr: "$.message.order.payments[*].params.amount",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_PARAMS_TRANSACTION_ID",
				attr: "$.message.order.payments[*].params.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_19_PARAMS_CURRENCY",
				attr: "$.message.order.payments[*].params.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_20_PARAMS_AMOUNT",
				attr: "$.message.order.payments[*].params.amount",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_21_CONTEXT_ACTION",
				enumList: ["confirm"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_22_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_23_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_24_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_25_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_26_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_27_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_28_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_29_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_30_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_31_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_32_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_33_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_34_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
		],
		status: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_10_CONTEXT_ACTION",
				enumList: ["status"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_11_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_12_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_13_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
		],
		cancel: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_MESSAGE_ORDER_ID",
				attr: "$.message.order_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_MESSAGE_CANCELLATION_REASON_ID",
				attr: "$.message.cancellation_reason_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_DESCRIPTOR_NAME",
				attr: "$.message.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_13_CONTEXT_ACTION",
				enumList: ["cancel"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_14_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_15_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_16_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_17_DESCRIPTOR_CODE",
				enumList: ["SOFT-CANCEL", "CONFIRM-CANCEL"],
				enumPath: "$.message.descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
		],
		update: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_MESSAGE_UPDATE_TARGET",
				attr: "$.message.update_target",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_ORDER_ID",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_12_CONTEXT_ACTION",
				enumList: ["update"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_13_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_14_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_15_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_16_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_17_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_18_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_19_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_20_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_21_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_22_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_23_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_24_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_25_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
		],
		on_search: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_DESCRIPTOR_NAME",
				attr: "$.message.catalog.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_PROVIDERS_ID",
				attr: "$.message.catalog.providers[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_DESCRIPTOR_NAME",
				attr: "$.message.catalog.providers[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_FULFILLMENTS_ID",
				attr: "$.message.catalog.providers[*].fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_LOCATION_GPS",
				attr: "$.message.catalog.providers[*].fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_FULFILLMENTS_ID",
				attr: "$.message.catalog.providers[*].fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_CATEGORIES_ID",
				attr: "$.message.catalog.providers[*].categories[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_RANGE_START",
				attr: "$.message.catalog.providers[*].time.range.start",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_RANGE_END",
				attr: "$.message.catalog.providers[*].time.range.end",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_19_CONTEXT_ACTION",
				enumList: ["on_search"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_20_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_21_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_22_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_23_DESCRIPTOR_CODE",
				enumList: ["TICKET", "PASS"],
				enumPath:
					"$.message.catalog.providers[*].categories[*].descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_24_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.catalog.providers[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_25_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].vehicle.category",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_26_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.catalog.providers[*].fulfillments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_27_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.catalog.providers[*].fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_28_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_29_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_30_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.catalog.providers[*].payments[*].status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_31_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.catalog.providers[*].payments[*].collected_by",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_32_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.catalog.providers[*].payments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "FARE_POLICY_Tag_Required_33_DESCRIPTOR_CODE",
				validTags: ["FARE_POLICY"],
				tagPath:
					"$.message.catalog.providers[*].items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_FARE_POLICY",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["RESTRICTED_PERSON", "RESTRICTION_PROOF"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_35_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath:
					"$.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_ROUTE_INFO",
				_SCOPE_:
					"$.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_TICKET_INFO",
				_SCOPE_:
					"$.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_TRIP_DETAILS",
				_SCOPE_:
					"$.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "BUYER_FINDER_FEES_Tag_Required_39_DESCRIPTOR_CODE",
				validTags: ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"],
				tagPath:
					"$.message.catalog.providers[*].payments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_BUYER_FINDER_FEES",
				_SCOPE_:
					"$.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2_SETTLEMENT_TERMS",
				_SCOPE_:
					"$.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "SCHEDULED_INFO_Tag_Required_42_DESCRIPTOR_CODE",
				validTags: ["SCHEDULED_INFO"],
				tagPath: "$.message.catalog.providers[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_3_SCHEDULED_INFO",
				_SCOPE_:
					"$.message.catalog.providers[*].tags[?(@.descriptor.code=='SCHEDULED_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["GTFS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_select: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_PRICE_CURRENCY",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_PRICE_VALUE",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_ITEMS_FULFILLMENT_IDS",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_TIME_LABEL",
				attr: "$.message.order.items[*].time.label",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_TIME_DURATION",
				attr: "$.message.order.items[*].time.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_DESCRIPTOR_NAME",
				attr: "$.message.order.provider.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_19_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_20_LOCATION_GPS",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_21_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_22_PRICE_VALUE",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_23_PRICE_CURRENCY",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_24_ITEM_ID",
				attr: "$.message.order.quote.breakup[*].item.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_25_ITEMS_CATEGORY_IDS",
				attr: "$.message.order.items[*].category_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_26_RANGE_START",
				attr: "$.message.order.provider.time.range.start",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_27_RANGE_END",
				attr: "$.message.order.provider.time.range.end",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_28_PRICE_CURRENCY",
				attr: "$.message.order.quote.breakup[*].item.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_29_PRICE_VALUE",
				attr: "$.message.order.quote.breakup[*].item.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_30_SELECTED_COUNT",
				attr: "$.message.order.quote.breakup[*].item.quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_31_EXTERNAL_REF_URL",
				attr: "$.message.order.cancellation_terms[*].external_ref.url",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_32_EXTERNAL_REF_MIMETYPE",
				attr: "$.message.order.cancellation_terms[*].external_ref.mimetype",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_33_CONTEXT_ACTION",
				enumList: ["on_select"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_34_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_35_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_36_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_37_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_38_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_39_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_40_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_41_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_42_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_43_ORDER_STATUS",
				enumList: [
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
				],
				enumPath: "$.message.order.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_44_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_45_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TICKET_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TRIP_DETAILS",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "FARE_POLICY_Tag_Required_49_DESCRIPTOR_CODE",
				validTags: ["FARE_POLICY"],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["RESTRICTED_PERSON", "RESTRICTION_PROOF"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_init: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_PRICE_CURRENCY",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_PRICE_VALUE",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_ITEMS_FULFILLMENT_IDS",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_TIME_LABEL",
				attr: "$.message.order.items[*].time.label",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_TIME_DURATION",
				attr: "$.message.order.items[*].time.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_DESCRIPTOR_NAME",
				attr: "$.message.order.provider.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_19_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_20_LOCATION_GPS",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_21_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_22_PRICE_VALUE",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_23_PRICE_CURRENCY",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_24_ITEM_ID",
				attr: "$.message.order.quote.breakup[*].item.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_25_PAYMENTS_ID",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_26_ITEMS_CATEGORY_IDS",
				attr: "$.message.order.items[*].category_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_27_RANGE_START",
				attr: "$.message.order.provider.time.range.start",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_28_RANGE_END",
				attr: "$.message.order.provider.time.range.end",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_29_SELECTED_COUNT",
				attr: "$.message.order.quote.breakup[*].item.quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_30_PRICE_VALUE",
				attr: "$.message.order.quote.breakup[*].item.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_31_PRICE_CURRENCY",
				attr: "$.message.order.quote.breakup[*].item.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_32_EXTERNAL_REF_URL",
				attr: "$.message.order.cancellation_terms[*].external_ref.url",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_33_EXTERNAL_REF_MIMETYPE",
				attr: "$.message.order.cancellation_terms[*].external_ref.mimetype",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_34_CONTEXT_ACTION",
				enumList: ["on_init"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_35_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_36_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_37_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_38_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_39_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_40_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_41_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_42_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_43_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_44_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_45_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_46_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_47_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_48_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TICKET_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TRIP_DETAILS",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "FARE_POLICY_Tag_Required_52_DESCRIPTOR_CODE",
				validTags: ["FARE_POLICY"],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["RESTRICTED_PERSON", "RESTRICTION_PROOF"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "BUYER_FINDER_FEES_Tag_Required_54_DESCRIPTOR_CODE",
				validTags: ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"],
				tagPath: "$.message.order.payments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_BUYER_FINDER_FEES",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2_SETTLEMENT_TERMS",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_confirm: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ORDER_ID",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_DESCRIPTOR_NAME",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_PRICE_CURRENCY",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_PRICE_VALUE",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_ITEMS_FULFILLMENT_IDS",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_TIME_LABEL",
				attr: "$.message.order.items[*].time.label",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_TIME_DURATION",
				attr: "$.message.order.items[*].time.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_19_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_20_DESCRIPTOR_NAME",
				attr: "$.message.order.provider.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_21_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_22_LOCATION_GPS",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_23_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_24_PRICE_VALUE",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_25_PRICE_CURRENCY",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_26_ITEM_ID",
				attr: "$.message.order.quote.breakup[*].item.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_27_PAYMENTS_ID",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_28_PARAMS_TRANSACTION_ID",
				attr: "$.message.order.payments[*].params.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_29_PARAMS_CURRENCY",
				attr: "$.message.order.payments[*].params.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_30_PARAMS_AMOUNT",
				attr: "$.message.order.payments[*].params.amount",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_31_CANCEL_BY_DURATION",
				attr: "$.message.order.cancellation_terms[*].cancel_by.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_32_ORDER_STATUS",
				attr: "$.message.order.status",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_33_ITEMS_CATEGORY_IDS",
				attr: "$.message.order.items[*].category_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_34_RANGE_START",
				attr: "$.message.order.provider.time.range.start",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_35_RANGE_END",
				attr: "$.message.order.provider.time.range.end",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_36_PRICE_VALUE",
				attr: "$.message.order.quote.breakup[*].item.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_37_PRICE_CURRENCY",
				attr: "$.message.order.quote.breakup[*].item.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_38_SELECTED_COUNT",
				attr: "$.message.order.quote.breakup[*].item.quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_39_EXTERNAL_REF_URL",
				attr: "$.message.order.cancellation_terms[*].external_ref.url",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_40_EXTERNAL_REF_MIMETYPE",
				attr: "$.message.order.cancellation_terms[*].external_ref.mimetype",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_41_ORDER_CREATED_AT",
				attr: "$.message.order.created_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_42_ORDER_UPDATED_AT",
				attr: "$.message.order.updated_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_43_CONTEXT_ACTION",
				enumList: ["on_confirm"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_44_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_45_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_46_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_47_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_48_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_49_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_50_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_51_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_52_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_53_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_54_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_55_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_56_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_57_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TICKET_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TRIP_DETAILS",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "FARE_POLICY_Tag_Required_61_DESCRIPTOR_CODE",
				validTags: ["FARE_POLICY"],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["RESTRICTED_PERSON", "RESTRICTION_PROOF"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "BUYER_FINDER_FEES_Tag_Required_63_DESCRIPTOR_CODE",
				validTags: ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"],
				tagPath: "$.message.order.payments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_BUYER_FINDER_FEES",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2_SETTLEMENT_TERMS",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_cancel: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ORDER_ID",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_ORDER_STATUS",
				attr: "$.message.order.status",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_DESCRIPTOR_NAME",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_PRICE_CURRENCY",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_PRICE_VALUE",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_ITEMS_FULFILLMENT_IDS",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_ITEMS_CATEGORY_IDS",
				attr: "$.message.order.items[*].category_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_19_TIME_LABEL",
				attr: "$.message.order.items[*].time.label",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_20_TIME_DURATION",
				attr: "$.message.order.items[*].time.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_21_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_22_DESCRIPTOR_NAME",
				attr: "$.message.order.provider.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_23_IMAGES_URL",
				attr: "$.message.order.provider.descriptor.images[*].url",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_24_RANGE_START",
				attr: "$.message.order.provider.time.range.start",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_25_RANGE_END",
				attr: "$.message.order.provider.time.range.end",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_26_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_27_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_28_LOCATION_GPS",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_29_PRICE_VALUE",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_30_PRICE_CURRENCY",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_31_PAYMENTS_ID",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_32_PARAMS_BANK_CODE",
				attr: "$.message.order.payments[*].params.bank_code",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_33_PARAMS_BANK_ACCOUNT_NUMBER",
				attr: "$.message.order.payments[*].params.bank_account_number",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_34_EXTERNAL_REF_URL",
				attr: "$.message.order.cancellation_terms[*].external_ref.url",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_35_EXTERNAL_REF_MIMETYPE",
				attr: "$.message.order.cancellation_terms[*].external_ref.mimetype",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_36_CANCELLATION_CANCELLED_BY",
				attr: "$.message.order.cancellation.cancelled_by",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_37_CANCELLATION_TIME",
				attr: "$.message.order.cancellation.time",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_38_CONTEXT_ACTION",
				enumList: ["on_cancel"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_39_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_40_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_41_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_42_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_43_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_44_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_45_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_46_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_47_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_48_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_49_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_50_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_51_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_52_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TICKET_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TRIP_DETAILS",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "FARE_POLICY_Tag_Required_56_DESCRIPTOR_CODE",
				validTags: ["FARE_POLICY"],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["RESTRICTED_PERSON", "RESTRICTION_PROOF"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "BUYER_FINDER_FEES_Tag_Required_58_DESCRIPTOR_CODE",
				validTags: ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"],
				tagPath: "$.message.order.payments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_BUYER_FINDER_FEES",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2_SETTLEMENT_TERMS",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_update: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ORDER_ID",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_DESCRIPTOR_NAME",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_PRICE_CURRENCY",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_PRICE_VALUE",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_ITEMS_FULFILLMENT_IDS",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_TIME_LABEL",
				attr: "$.message.order.items[*].time.label",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_TIME_DURATION",
				attr: "$.message.order.items[*].time.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_19_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_20_DESCRIPTOR_NAME",
				attr: "$.message.order.provider.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_21_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_22_INSTRUCTIONS_NAME",
				attr: "$.message.order.fulfillments[*].stops[*].instructions.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_23_DESCRIPTOR_NAME",
				attr: "$.message.order.fulfillments[*].stops[*].location.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_24_DESCRIPTOR_CODE",
				attr: "$.message.order.fulfillments[*].stops[*].location.descriptor.code",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_25_LOCATION_GPS",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_26_AUTHORIZATION_TOKEN",
				attr: "$.message.order.fulfillments[*].stops[*].authorization.token",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_27_AUTHORIZATION_VALID_TO",
				attr: "$.message.order.fulfillments[*].stops[*].authorization.valid_to",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_28_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_29_PRICE_VALUE",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_30_PRICE_CURRENCY",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_31_ITEM_ID",
				attr: "$.message.order.quote.breakup[*].item.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_32_PRICE_CURRENCY",
				attr: "$.message.order.quote.breakup[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_33_PRICE_VALUE",
				attr: "$.message.order.quote.breakup[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_34_PAYMENTS_ID",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_35_PARAMS_TRANSACTION_ID",
				attr: "$.message.order.payments[*].params.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_36_PARAMS_CURRENCY",
				attr: "$.message.order.payments[*].params.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_37_PARAMS_AMOUNT",
				attr: "$.message.order.payments[*].params.amount",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_38_CANCEL_BY_DURATION",
				attr: "$.message.order.cancellation_terms[*].cancel_by.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_39_CONTEXT_ACTION",
				enumList: ["on_cancel"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_40_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_41_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_42_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_43_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_44_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_45_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_46_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_47_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_48_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_49_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_50_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_51_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_52_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_53_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TICKET_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TRIP_DETAILS",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "FARE_POLICY_Tag_Required_57_DESCRIPTOR_CODE",
				validTags: ["FARE_POLICY"],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["RESTRICTED_PERSON", "RESTRICTION_PROOF"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_status: [
			{
				_NAME_: "Attri_Required_1_CONTEXT_TIMESTAMP",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_2_CONTEXT_BAP_ID",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_3_CONTEXT_TRANSACTION_ID",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_4_CONTEXT_MESSAGE_ID",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_5_CONTEXT_VERSION",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_6_CONTEXT_BAP_URI",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_7_CONTEXT_TTL",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_8_CONTEXT_BPP_ID",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_9_CONTEXT_BPP_URI",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_10_ORDER_ID",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_11_ORDER_STATUS",
				attr: "$.message.order.status",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_12_ITEMS_ID",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_13_DESCRIPTOR_NAME",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_14_PRICE_CURRENCY",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_15_PRICE_VALUE",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_16_SELECTED_COUNT",
				attr: "$.message.order.items[*].quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_17_ITEMS_FULFILLMENT_IDS",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_18_TIME_LABEL",
				attr: "$.message.order.items[*].time.label",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_19_TIME_DURATION",
				attr: "$.message.order.items[*].time.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_20_PROVIDER_ID",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_21_DESCRIPTOR_NAME",
				attr: "$.message.order.provider.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_22_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_23_LOCATION_GPS",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_24_FULFILLMENTS_ID",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_25_PRICE_VALUE",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_26_PRICE_CURRENCY",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_27_ITEM_ID",
				attr: "$.message.order.quote.breakup[*].item.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_28_PAYMENTS_ID",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_29_PARAMS_TRANSACTION_ID",
				attr: "$.message.order.payments[*].params.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_30_PARAMS_CURRENCY",
				attr: "$.message.order.payments[*].params.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_31_PARAMS_AMOUNT",
				attr: "$.message.order.payments[*].params.amount",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_32_CANCEL_BY_DURATION",
				attr: "$.message.order.cancellation_terms[*].cancel_by.duration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_33_ITEMS_CATEGORY_IDS",
				attr: "$.message.order.items[*].category_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_34_RANGE_START",
				attr: "$.message.order.provider.time.range.start",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_35_RANGE_END",
				attr: "$.message.order.provider.time.range.end",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_36_PRICE_CURRENCY",
				attr: "$.message.order.quote.breakup[*].item.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_37_PRICE_VALUE",
				attr: "$.message.order.quote.breakup[*].item.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_38_SELECTED_COUNT",
				attr: "$.message.order.quote.breakup[*].item.quantity.selected.count",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_39_EXTERNAL_REF_URL",
				attr: "$.message.order.cancellation_terms[*].external_ref.url",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_40_EXTERNAL_REF_MIMETYPE",
				attr: "$.message.order.cancellation_terms[*].external_ref.mimetype",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_41_ORDER_CREATED_AT",
				attr: "$.message.order.created_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Attri_Required_42_ORDER_UPDATED_AT",
				attr: "$.message.order.updated_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "Enum_Required_43_CONTEXT_ACTION",
				enumList: ["on_status"],
				enumPath: "$.context.action",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_44_COUNTRY_CODE",
				enumList: ["IND"],
				enumPath: "$.context.location.country.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_45_CITY_CODE",
				enumList: ["std:080"],
				enumPath: "$.context.location.city.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_46_CONTEXT_DOMAIN",
				enumList: ["ONDC:TRV11"],
				enumPath: "$.context.domain",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_47_DESCRIPTOR_CODE",
				enumList: ["SJT", "SFSJT", "RJT", "PASS"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_48_VEHICLE_CATEGORY",
				enumList: ["BUS", "METRO"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_49_FULFILLMENTS_TYPE",
				enumList: ["ROUTE", "TRIP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_50_FULFILLMENTS_TYPE",
				enumList: ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_51_AUTHORIZATION_TYPE",
				enumList: ["QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_52_AUTHORIZATION_STATUS",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "Enum_Required_53_PAYMENTS_STATUS",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_54_PAYMENTS_COLLECTED_BY",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_55_PAYMENTS_TYPE",
				enumList: ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "Enum_Required_56_BREAKUP_TITLE",
				enumList: [
					"BASE_PRICE",
					"REFUND",
					"CANCELLATION_CHARGES",
					"OFFER",
					"TOLL",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_RETURN_: "enumPath all in enumList && enumPath are present",
			},
			{
				_NAME_: "ROUTE_INFO_Tag_Required_57_DESCRIPTOR_CODE",
				validTags: ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ROUTE_ID", "ROUTE_DIRECTION"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TICKET_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["NUMBER"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_TRIP_DETAILS",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "FARE_POLICY_Tag_Required_61_DESCRIPTOR_CODE",
				validTags: ["FARE_POLICY"],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["RESTRICTED_PERSON", "RESTRICTION_PROOF"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "BUYER_FINDER_FEES_Tag_Required_63_DESCRIPTOR_CODE",
				validTags: ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"],
				tagPath: "$.message.order.payments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_BUYER_FINDER_FEES",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2_SETTLEMENT_TERMS",
				_SCOPE_:
					"$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
	},
	_SESSION_DATA_: {
		search: {
			transaction_id: "$.context.transaction_id",
		},
	},
};
for (const api in without_errors._TESTS_) {
	if (api.startsWith("on_")) {
		const apiKey = api as keyof typeof without_errors._TESTS_;
		const tests = without_errors._TESTS_[apiKey];
		const allMessageTests = tests.filter((test) => {
			for (const testKey in test) {
				if (test[testKey as keyof typeof test]?.includes("context")) {
					return false;
				}
			}
			return true;
		});
		// @ts-ignore
		without_errors._TESTS_[apiKey] = tests.filter((test: any) => {
			for (const testKey in test) {
				if (test[testKey as keyof typeof test]?.includes("context")) {
					// console.log(test[testKey as keyof typeof test]);
					return true;
				}
			}
			return false;
		});

		const messageTests = {
			_NAME_: `${apiKey}_Message_TESTS`,
			errorBlock: "$.error.code",
			_CONTINUE_: "errorBlock are present",
			_RETURN_: allMessageTests,
		};
		// @ts-ignore
		without_errors._TESTS_[apiKey].push(messageTests);
	}
}

writeFileSync("error_adder.json", JSON.stringify(without_errors, null, 2));

// for (const test of without_errors._TESTS_[apiKey]) {
// 	if (test.attr && test.attr.includes("context")) {
// 		continue;
// 	}
// 	if (test.enumPath && test.enumPath.includes("context")) {
// 		continue;
// 	}
// 	// @ts-ignore
// 	test.errorBlock = "$.error.code";
// 	// @ts-ignore
// 	if (test._CONTINUE_) {
// 		// @ts-ignore
// 		test._CONTINUE_ = `(errorBlock are present) || (${test._CONTINUE_})`;
// 	} else {
// 		// @ts-ignore
// 		test._CONTINUE_ = "errorBlock are present";
// 	}
// }
