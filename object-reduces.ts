import { writeFileSync } from "fs";
import { convertToYamlWithRefs } from "./yaml-reducer/refer";

const x_validations = {
	_TESTS_: {
		search: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["search"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_12",
				attr: "$.message.intent.fulfillment.stops[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["START", "END", "INTERMEDIATE_STOP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_13",
				attr: "$.message.intent.fulfillment.stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_14",
				attr: "$.message.intent.payment.collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_1",
				enumList: [
					"ON_DEMAND_TRIP",
					"ON_DEMAND_RENTAL",
					"SCHEDULED_TRIP",
					"SCHEDULED_RENTAL",
				],
				enumPath: "$.message.intent.category.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CATEGORY_2",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
				enumPath: "$.message.intent.fulfillment.vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_3",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.intent.fulfillment.vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_4",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.intent.fulfillment.vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_5",
				enumList: ["DELIVERY", "SELF_PICKUP"],
				enumPath: "$.message.intent.fulfillment.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_6",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.intent.fulfillment.stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_7",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath: "$.message.intent.fulfillment.stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_8",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath: "$.message.intent.fulfillment.state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_9",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.intent.payment.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_10",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
				enumPath: "$.message.intent.payment.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BAP_TERMS"],
				tagPath: "$.message.intent.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BAP_TERMS",
				_SCOPE_: "$.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
					"SETTLEMENT_BANK_CODE",
					"SETTLEMENT_BANK_ACCOUNT_NUMBER",
					"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
				],
				tagPath: "$.message.intent.item.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_: "$.message.intent.item.tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.intent.item.tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
		],
		select: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["select"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_15",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_1",
				enumList: ["RIDE", "RENTAL"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CATEGORY_2",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_3",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_4",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_5",
				enumList: ["DELIVERY", "SELF_PICKUP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_6",
				enumList: ["START", "END", "INTERMEDIATE_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_7",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_8",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_9",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath: "$.message.order.fulfillments[*].state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_10",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_COLLECTED_BY_11",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_12",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
		],
		init: [
			{
				_NAME_: "FULFILLMENT_STATE_ENDED",
				_SCOPE_: "$.message.order.fulfillments[*]",
				auth: "$.stops[*].authorization.status",
				authStatus: ["CLAIMED"],
				state: "$.state.descriptor.code",
				stateCode: ["RIDE_ENDED"],
				_CONTINUE_: "!(authStatus all in auth)",
				_RETURN_: "state all in stateCode",
			},
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["init"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_15",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_16",
				attr: "$.message.order.billing.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_17",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_18",
				attr: "$.message.order.fulfillments[*].customer.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_19",
				attr: "$.message.order.fulfillments[*].customer.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_21",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_22",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_23",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_24",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["NOT-PAID", "PAID"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_25",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_1",
				enumList: ["RIDE", "RENTAL"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_2",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_3",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_4",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_5",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_6",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath: "$.message.order.fulfillments[*].state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BAP_TERMS"],
				tagPath: "$.message.order.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BAP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
					"SETTLEMENT_BANK_CODE",
					"SETTLEMENT_BANK_ACCOUNT_NUMBER",
					"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
		confirm: [
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["confirm"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_15",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_16",
				attr: "$.message.order.billing.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_17",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_18",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_19",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["NOT-PAID", "PAID"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_20",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_24",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_25",
				attr: "$.message.order.fulfillments[*].customer.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_26",
				attr: "$.message.order.fulfillments[*].customer.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_27",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_28",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_29",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_1",
				enumList: ["RIDE", "RENTAL"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_2",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_3",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_4",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_5",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_6",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath: "$.message.order.fulfillments[*].state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BAP_TERMS", "BPP_TERMS"],
				tagPath: "$.message.order.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BAP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
					"SETTLEMENT_BANK_CODE",
					"SETTLEMENT_BANK_ACCOUNT_NUMBER",
					"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_BPP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
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
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
				],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
					"FEATURE_LIST",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_INFO",
				_SCOPE_: "$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOURS",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2",
				validTags: ["ROUTE_INFO"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ENCODED_POLYLINE", "WAYPOINTS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		status: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["status"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
		],
		cancel: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["cancel"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ORDER_ID_14",
				attr: "$.message.order_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CANCELLATION_REASON_ID_15",
				attr: "$.message.cancellation_reason_id",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"000",
					"001",
					"002",
					"003",
					"004",
					"005",
					"011",
					"012",
					"013",
					"014",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_16",
				attr: "$.message.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
					"UPDATED",
					"CONFIRM_UPDATE",
				],
			},
		],
		update: [
			{
				_NAME_: "FULFILLMENT_STATE_ENDED",
				_SCOPE_: "$.message.order.fulfillments[*]",
				auth: "$.stops[*].authorization.status",
				authStatus: ["CLAIMED"],
				state: "$.state.descriptor.code",
				stateCode: ["RIDE_ENDED", "RIDE_STARTED"],
				_CONTINUE_: "!(authStatus all in auth)",
				_RETURN_: "state all in stateCode",
			},
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["update"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_1",
				enumList: ["RIDE", "RENTAL"],
				enumPath: "$.message.order.items[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CATEGORY_2",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
				enumPath: "$.message.order.fulfillments[*].vehicle.category",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_3",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_4",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_5",
				enumList: ["DELIVERY", "SELF_PICKUP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_6",
				enumList: ["START", "END", "INTERMEDIATE_STOP"],
				enumPath: "$.message.order.fulfillments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_7",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_8",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_9",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath: "$.message.order.fulfillments[*].state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_10",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_COLLECTED_BY_11",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_12",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TITLE_13",
				enumList: [
					"BASE_FARE",
					"DISTANCE_FARE",
					"CANCELLATION_CHARGES",
					"REFUND",
					"TOLL_CHARGES",
					"PARKING_CHARGES",
					"TAX",
					"WAITING_CHARGES",
					"DRIVER_BATA",
					"NIGHT_CHARGES",
					"BUYER_ADDITIONAL_AMOUNT",
					"ADD_ONS",
				],
				enumPath: "$.message.order.quote.breakup[*].title",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
		],
		on_search: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_search"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_14",
				attr: "$.message.catalog.descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_15",
				attr: "$.message.catalog.providers[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_16",
				attr: "$.message.catalog.providers[*].fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_17",
				attr: "$.message.catalog.providers[*].fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_18",
				attr: "$.message.catalog.providers[*].fulfillments[*].type",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_19",
				attr: "$.message.catalog.providers[*].fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_20",
				attr: "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_21",
				attr: "$.message.catalog.providers[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_22",
				attr: "$.message.catalog.providers[*].items[*].descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["RIDE", "RENTAL", "INTERMEDIATE_STOP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_24",
				attr: "$.message.catalog.providers[*].items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_25",
				attr: "$.message.catalog.providers[*].items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_FULFILLMENT_IDS_26",
				attr: "$.message.catalog.providers[*].items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_27",
				attr: "$.message.catalog.providers[*].payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_1",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_2",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_3",
				enumList: ["OTP", "QR"],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_4",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_5",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath:
					"$.message.catalog.providers[*].fulfillments[*].state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_6",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.catalog.providers[*].payments[*].status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_7",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
				enumPath: "$.message.catalog.providers[*].payments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_8",
				enumList: [
					"ON_DEMAND_TRIP",
					"ON_DEMAND_RENTAL",
					"SCHEDULED_TRIP",
					"SCHEDULED_RENTAL",
				],
				enumPath:
					"$.message.catalog.providers[*].categories[*].descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BPP_TERMS"],
				tagPath: "$.message.catalog.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BPP_TERMS",
				_SCOPE_: "$.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
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
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
					"FEATURE_LIST",
				],
				tagPath:
					"$.message.catalog.providers[*].items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_INFO",
				_SCOPE_:
					"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOUR",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_select: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_select"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_15",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_16",
				attr: "$.message.order.items[*].descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["RIDE", "RENTAL"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_17",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_18",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_FULFILLMENT_IDS_19",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_20",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_21",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_22",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_23",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_24",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_25",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_26",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TITLE_27",
				attr: "$.message.order.quote.breakup[*].title",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"BASE_FARE",
					"DISTANCE_FARE",
					"CANCELLATION_CHARGES",
					"REFUND",
					"TOLL_CHARGES",
					"PARKING_CHARGES",
					"TAX",
					"WAITING_CHARGES",
					"DRIVER_BATA",
					"NIGHT_CHARGES",
					"BUYER_ADDITIONAL_AMOUNT",
					"ADD_ONS",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_28",
				attr: "$.message.order.quote.breakup[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_29",
				attr: "$.message.order.quote.breakup[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_1",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_2",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_3",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_4",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_5",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath: "$.message.order.fulfillments[*].state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_6",
				enumList: ["NOT-PAID", "PAID"],
				enumPath: "$.message.order.payments[*].status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_COLLECTED_BY_7",
				enumList: ["BPP", "BAP"],
				enumPath: "$.message.order.payments[*].collected_by",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_8",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
				enumPath: "$.message.order.payments[*].type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
					"FEATURE_LIST",
				],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_VIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
					"FEATURE_LIST",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_HEA",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_MOB",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_LEP",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_SPE",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_MENTAL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_INFO",
				_SCOPE_: "$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOURS",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1",
				validTags: ["ROUTE_INFO"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ENCODED_POLYLINE", "WAYPOINTS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_init: [
			{
				_NAME_: "FULFILLMENT_STATE_ENDED",
				_SCOPE_: "$.message.order.fulfillments[*]",
				auth: "$.stops[*].authorization.status",
				authStatus: ["CLAIMED"],
				state: "$.state.descriptor.code",
				stateCode: ["RIDE_ENDED", "RIDE_STARTED"],
				_CONTINUE_: "!(authStatus all in auth)",
				_RETURN_: "state all in stateCode",
			},
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_init"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_15",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_16",
				attr: "$.message.order.items[*].descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["RIDE", "RENTAL"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_17",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_18",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_FULFILLMENT_IDS_19",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PAYMENT_IDS_20",
				attr: "$.message.order.items[*].payment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_21",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_22",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_23",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_24",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_25",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_26",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_27",
				attr: "$.message.order.fulfillments[*].customer.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_28",
				attr: "$.message.order.fulfillments[*].customer.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_29",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_30",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TITLE_31",
				attr: "$.message.order.quote.breakup[*].title",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"BASE_FARE",
					"DISTANCE_FARE",
					"CANCELLATION_CHARGES",
					"REFUND",
					"TOLL_CHARGES",
					"PARKING_CHARGES",
					"TAX",
					"WAITING_CHARGES",
					"DRIVER_BATA",
					"NIGHT_CHARGES",
					"ADD_ONS",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_32",
				attr: "$.message.order.quote.breakup[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_33",
				attr: "$.message.order.quote.breakup[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_34",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_35",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_36",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["NOT-PAID", "PAID"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_37",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_41",
				attr: "$.message.order.cancellation_terms[*].fulfillment_state.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REASON_REQUIRED_42",
				attr: "$.message.order.cancellation_terms[*].reason_required",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_1",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_2",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_3",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_4",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_5",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
				enumPath: "$.message.order.fulfillments[*].state.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BPP_TERMS"],
				tagPath: "$.message.order.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BPP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
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
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
					"FEATURE_LIST",
				],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
					"FEATURE_LIST",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_INFO",
				_SCOPE_: "$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOURS",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2",
				validTags: ["ROUTE_INFO"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ENCODED_POLYLINE", "WAYPOINTS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_confirm: [
			{
				_NAME_: "FULFILLMENT_STATE_ENDED",
				_SCOPE_: "$.message.order.fulfillments[*]",
				auth: "$.stops[*].authorization.status",
				authStatus: ["CLAIMED"],
				state: "$.state.descriptor.code",
				stateCode: ["RIDE_ENDED", "RIDE_STARTED"],
				_CONTINUE_: "!(authStatus all in auth)",
				_RETURN_: "state all in stateCode",
			},
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_confirm"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_15",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_16",
				attr: "$.message.order.items[*].descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["RIDE", "RENTAL"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_17",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_18",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_FULFILLMENT_IDS_19",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PAYMENT_IDS_20",
				attr: "$.message.order.items[*].payment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_21",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_22",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_23",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_24",
				attr: "$.message.order.fulfillments[*].customer.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_25",
				attr: "$.message.order.fulfillments[*].customer.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_26",
				attr: "$.message.order.fulfillments[*].state.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_27",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_28",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_29",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_30",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_31",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TITLE_32",
				attr: "$.message.order.quote.breakup[*].title",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"BASE_FARE",
					"DISTANCE_FARE",
					"CANCELLATION_CHARGES",
					"REFUND",
					"TOLL_CHARGES",
					"PARKING_CHARGES",
					"TAX",
					"WAITING_CHARGES",
					"DRIVER_BATA",
					"NIGHT_CHARGES",
					"ADD_ONS",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_33",
				attr: "$.message.order.quote.breakup[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_34",
				attr: "$.message.order.quote.breakup[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_35",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_36",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_37",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["NOT-PAID", "PAID"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_38",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_42",
				attr: "$.message.order.cancellation_terms[*].fulfillment_state.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REASON_REQUIRED_43",
				attr: "$.message.order.cancellation_terms[*].reason_required",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_44",
				attr: "$.message.order.status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"UPDATED",
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
					"CONFIRM_UPDATE",
					"SOFT_UPDATE",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CREATED_AT_45",
				attr: "$.message.order.created_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_UPDATED_AT_46",
				attr: "$.message.order.updated_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_47",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_1",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_2",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_3",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_4",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BAP_TERMS", "BPP_TERMS"],
				tagPath: "$.message.order.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BAP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
					"SETTLEMENT_BANK_CODE",
					"SETTLEMENT_BANK_ACCOUNT_NUMBER",
					"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_BPP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
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
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
					"FEATURE_LIST",
				],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
					"FEATURE_LIST",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_INFO",
				_SCOPE_: "$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOURS",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2",
				validTags: ["ROUTE_INFO"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ENCODED_POLYLINE", "WAYPOINTS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_cancel: [
			{
				_NAME_: "FULFILLMENT_STATE_ENDED",
				_SCOPE_: "$.message.order.fulfillments[*]",
				auth: "$.stops[*].authorization.status",
				authStatus: ["CLAIMED"],
				state: "$.state.descriptor.code",
				stateCode: ["RIDE_ENDED", "RIDE_STARTED"],
				_CONTINUE_: "!(authStatus all in auth)",
				_RETURN_: "state all in stateCode",
			},
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_cancel"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_15",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_16",
				attr: "$.message.order.items[*].descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["RIDE", "RENTAL"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_FULFILLMENT_IDS_17",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PAYMENT_IDS_18",
				attr: "$.message.order.items[*].payment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_19",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_20",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_21",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_22",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_23",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_24",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_25",
				attr: "$.message.order.fulfillments[*].customer.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_26",
				attr: "$.message.order.fulfillments[*].customer.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_27",
				attr: "$.message.order.fulfillments[*].agent.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_28",
				attr: "$.message.order.fulfillments[*].agent.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REGISTRATION_29",
				attr: "$.message.order.fulfillments[*].vehicle.registration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_30",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_MAKE_31",
				attr: "$.message.order.fulfillments[*].vehicle.make",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_MODEL_32",
				attr: "$.message.order.fulfillments[*].vehicle.model",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_33",
				attr: "$.message.order.fulfillments[*].state.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_34",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_35",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_36",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TITLE_37",
				attr: "$.message.order.quote.breakup[*].title",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"BASE_FARE",
					"DISTANCE_FARE",
					"CANCELLATION_CHARGES",
					"REFUND",
					"TOLL_CHARGES",
					"PARKING_CHARGES",
					"TAX",
					"WAITING_CHARGES",
					"DRIVER_BATA",
					"NIGHT_CHARGES",
					"BUYER_ADDITIONAL_AMOUNT",
					"ADD_ONS",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_38",
				attr: "$.message.order.quote.breakup[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_39",
				attr: "$.message.order.quote.breakup[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_40",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_41",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_44",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_45",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["NOT-PAID", "PAID"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_46",
				attr: "$.message.order.cancellation_terms[*].fulfillment_state.descriptor.code",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REASON_REQUIRED_47",
				attr: "$.message.order.cancellation_terms[*].reason_required",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_48",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_49",
				attr: "$.message.order.status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"UPDATED",
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
					"CONFIRM_UPDATE",
					"SOFT_UPDATE",
				],
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_1",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_2",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_3",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_4",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CANCELLED_BY_5",
				enumList: ["CONSUMER", "PROVIDER"],
				enumPath: "$.message.order.cancellation.cancelled_by",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_CODE_6",
				enumList: [
					"000",
					"001",
					"002",
					"003",
					"004",
					"005",
					"011",
					"012",
					"013",
					"014",
				],
				enumPath: "$.message.order.cancellation.reason.descriptor.code",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BAP_TERMS", "BPP_TERMS"],
				tagPath: "$.message.order.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BAP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
					"SETTLEMENT_BANK_CODE",
					"SETTLEMENT_BANK_ACCOUNT_NUMBER",
					"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_BPP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
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
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
					"FEATURE_LIST",
				],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
					"FEATURE_LIST",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_INFO",
				_SCOPE_: "$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOURS",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2",
				validTags: ["ROUTE_INFO"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ENCODED_POLYLINE", "WAYPOINTS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_update: [
			{
				_NAME_: "FULFILLMENT_STATE_ENDED",
				_SCOPE_: "$.message.order.fulfillments[*]",
				auth: "$.stops[*].authorization.status",
				authStatus: ["CLAIMED"],
				state: "$.state.descriptor.code",
				stateCode: ["RIDE_ENDED", "RIDE_STARTED"],
				_CONTINUE_: "!(authStatus all in auth)",
				_RETURN_: "state all in stateCode",
			},
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_update"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_15",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_16",
				attr: "$.message.order.items[*].descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["RIDE", "RENTAL"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_17",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_18",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_FULFILLMENT_IDS_19",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PAYMENT_IDS_20",
				attr: "$.message.order.items[*].payment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_21",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_22",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_23",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_24",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_25",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REGISTRATION_26",
				attr: "$.message.order.fulfillments[*].vehicle.registration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_27",
				attr: "$.message.order.fulfillments[*].customer.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_28",
				attr: "$.message.order.fulfillments[*].customer.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_29",
				attr: "$.message.order.fulfillments[*].agent.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_30",
				attr: "$.message.order.fulfillments[*].agent.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_31",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_32",
				attr: "$.message.order.fulfillments[*].state.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_33",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_34",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TITLE_35",
				attr: "$.message.order.quote.breakup[*].title",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"BASE_FARE",
					"DISTANCE_FARE",
					"CANCELLATION_CHARGES",
					"REFUND",
					"TOLL_CHARGES",
					"PARKING_CHARGES",
					"TAX",
					"WAITING_CHARGES",
					"DRIVER_BATA",
					"NIGHT_CHARGES",
					"BUYER_ADDITIONAL_AMOUNT",
					"ADD_ONS",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_36",
				attr: "$.message.order.quote.breakup[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_37",
				attr: "$.message.order.quote.breakup[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_38",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_39",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_40",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["NOT-PAID", "PAID"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_41",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_45",
				attr: "$.message.order.cancellation_terms[*].fulfillment_state.descriptor.code",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REASON_REQUIRED_46",
				attr: "$.message.order.cancellation_terms[*].reason_required",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_47",
				attr: "$.message.order.status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"UPDATED",
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
					"CONFIRM_UPDATE",
					"SOFT_UPDATE",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CREATED_AT_48",
				attr: "$.message.order.created_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_UPDATED_AT_49",
				attr: "$.message.order.updated_at",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_50",
				attr: "$.message.order.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_1",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_2",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_3",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_4",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BAP_TERMS", "BPP_TERMS"],
				tagPath: "$.message.order.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BAP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
					"SETTLEMENT_BANK_CODE",
					"SETTLEMENT_BANK_ACCOUNT_NUMBER",
					"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_BPP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
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
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
					"FEATURE_LIST",
				],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
					"FEATURE_LIST",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_INFO",
				_SCOPE_: "$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOURS",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2",
				validTags: ["ROUTE_INFO"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ENCODED_POLYLINE", "WAYPOINTS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		on_status: [
			{
				_NAME_: "FULFILLMENT_STATE_ENDED",
				_SCOPE_: "$.message.order.fulfillments[*]",
				auth: "$.stops[*].authorization.status",
				authStatus: ["CLAIMED"],
				state: "$.state.descriptor.code",
				stateCode: ["RIDE_ENDED", "RIDE_STARTED"],
				_CONTINUE_: "!(authStatus all in auth)",
				_RETURN_: "state all in stateCode",
			},
			{
				_NAME_: "PAYMENT_STATUS_TRANSACTION_ID",
				_SCOPE_: "$.message.order.payments[*]",
				statusCode: ["PAID"],
				statusPath: "$.status",
				transactionId: "$.params.transaction_id",
				_CONTINUE_: "!(statusPath all in statusCode)",
				_RETURN_: "transactionId are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_status"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_14",
				attr: "$.message.order.items[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_15",
				attr: "$.message.order.items[*].descriptor.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_16",
				attr: "$.message.order.items[*].descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["RIDE", "RENTAL"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_17",
				attr: "$.message.order.items[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_18",
				attr: "$.message.order.items[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_FULFILLMENT_IDS_19",
				attr: "$.message.order.items[*].fulfillment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PAYMENT_IDS_20",
				attr: "$.message.order.items[*].payment_ids[*]",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_21",
				attr: "$.message.order.provider.id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_22",
				attr: "$.message.order.fulfillments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_23",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["DELIVERY", "SELF_PICKUP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_GPS_24",
				attr: "$.message.order.fulfillments[*].stops[*].location.gps",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CATEGORY_25",
				attr: "$.message.order.fulfillments[*].vehicle.category",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REGISTRATION_26",
				attr: "$.message.order.fulfillments[*].vehicle.registration",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_27",
				attr: "$.message.order.fulfillments[*].customer.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_28",
				attr: "$.message.order.fulfillments[*].customer.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_NAME_29",
				attr: "$.message.order.fulfillments[*].agent.person.name",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_PHONE_30",
				attr: "$.message.order.fulfillments[*].agent.contact.phone",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_31",
				attr: "$.message.order.fulfillments[*].type",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_32",
				attr: "$.message.order.fulfillments[*].state.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_33",
				attr: "$.message.order.quote.price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_34",
				attr: "$.message.order.quote.price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TITLE_35",
				attr: "$.message.order.quote.breakup[*].title",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"BASE_FARE",
					"DISTANCE_FARE",
					"CANCELLATION_CHARGES",
					"REFUND",
					"TOLL_CHARGES",
					"PARKING_CHARGES",
					"TAX",
					"WAITING_CHARGES",
					"DRIVER_BATA",
					"NIGHT_CHARGES",
					"BUYER_ADDITIONAL_AMOUNT",
					"ADD_ONS",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CURRENCY_36",
				attr: "$.message.order.quote.breakup[*].price.currency",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_VALUE_37",
				attr: "$.message.order.quote.breakup[*].price.value",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_ID_38",
				attr: "$.message.order.payments[*].id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_MESSAGE_COLLECTED_BY_39",
				attr: "$.message.order.payments[*].collected_by",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["BPP", "BAP"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_STATUS_40",
				attr: "$.message.order.payments[*].status",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["NOT-PAID", "PAID"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_TYPE_41",
				attr: "$.message.order.payments[*].type",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_CODE_45",
				attr: "$.message.order.cancellation_terms[*].fulfillment_state.descriptor.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: [
					"RIDE_CANCELLED",
					"RIDE_ENDED",
					"RIDE_STARTED",
					"RIDE_ASSIGNED",
					"RIDE_ENROUTE_PICKUP",
					"RIDE_ARRIVED_PICKUP",
					"RIDE_CONFIRMED",
				],
			},
			{
				_NAME_: "REQUIRED_MESSAGE_REASON_REQUIRED_46",
				attr: "$.message.order.cancellation_terms[*].reason_required",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_VARIANT_1",
				enumList: ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"],
				enumPath: "$.message.order.fulfillments[*].vehicle.variant",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_ENERGY_TYPE_2",
				enumList: [
					"ELECTRIC",
					"PETRO",
					"DIESEL",
					"HYDROGEN",
					"BIOFUELS",
					"CNG",
					"LPG",
				],
				enumPath: "$.message.order.fulfillments[*].vehicle.energy_type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_TYPE_3",
				enumList: ["OTP", "QR"],
				enumPath: "$.message.order.fulfillments[*].stops[*].authorization.type",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_4",
				enumList: ["UNCLAIMED", "CLAIMED"],
				enumPath:
					"$.message.order.fulfillments[*].stops[*].authorization.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "VALID_ENUM_MESSAGE_STATUS_5",
				enumList: [
					"SOFT_CANCEL",
					"CONFIRM_CANCEL",
					"ACTIVE",
					"COMPLETE",
					"CANCELLED",
					"CONFIRM_UPDATE",
					"UPDATED",
					"SOFT_UPDATE",
				],
				enumPath: "$.message.order.status",
				_CONTINUE_: "!(enumPath are present)",
				_RETURN_: "enumPath all in enumList",
			},
			{
				_NAME_: "validate_tag_0",
				validTags: ["BAP_TERMS", "BPP_TERMS"],
				tagPath: "$.message.order.tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_0_BAP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
					"SETTLEMENT_WINDOW",
					"SETTLEMENT_BASIS",
					"SETTLEMENT_TYPE",
					"MANDATORY_ARBITRATION",
					"COURT_JURISDICTION",
					"DELAY_INTEREST",
					"STATIC_TERMS",
					"SETTLEMENT_AMOUNT",
					"SETTLEMENT_BANK_CODE",
					"SETTLEMENT_BANK_ACCOUNT_NUMBER",
					"SETTLEMENT_VIRTUAL_PAYMENT_ADDRESS",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_0_BPP_TERMS",
				_SCOPE_: "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"BUYER_FINDER_FEES_TYPE",
					"BUYER_FINDER_FEES_PERCENTAGE",
					"BUYER_FINDER_FEES_AMOUNT",
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
				_NAME_: "validate_tag_1",
				validTags: [
					"DISABILITY_VIS",
					"DISABILITY_HEA",
					"DISABILITY_MOB",
					"DISABILITY_LEP",
					"DISABILITY_SPE",
					"DISABILITY_INTEL",
					"MENTAL",
					"DISABILITY_BLOOD",
					"DISABILITY_DWARFISM",
					"DISABILITY_ACID_ATTACK_SURVIVOR",
					"DISABILITY_MULTIPLE_DIS",
					"FARE_POLICY",
					"INFO",
					"FEATURE_LIST",
				],
				tagPath: "$.message.order.items[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_VIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_VIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"VIS_LEVEL",
					"VIS_SCREEN_READER_USAGE",
					"VIS_CANE_USAGE",
					"VIS_SPECIAL_REQUIREMENT",
					"FEATURE_LIST",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_HEA",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_HEA')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"HEA_READING_ABILITY",
					"HEA_SIGN_LANGUAGE_PREFERENCE",
					"HEA_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MOB",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MOB')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MOB_DISABILITY",
					"MOB_WHEELCHAIR_USAGE",
					"MOB_CRUTCHES_USAGE",
					"MOB_SPECIAL_REQUIREMENT",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_LEP",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_LEP')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["LEP_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_SPE",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_SPE')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["SPE_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_INTEL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_INTEL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["INTEL_DISABILITY", "INTEL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_MENTAL",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='MENTAL')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["MENTAL_DISABILITY", "MENTAL_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_BLOOD",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_BLOOD')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["BLOOD_DISABILITY", "BLOOD_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_DWARFISM",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_DWARFISM')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["DWARFISM_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_ACID_ATTACK_SURVIVOR",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_ACID_ATTACK_SURVIVOR')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_DISABILITY_MULTIPLE_DIS",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='DISABILITY_MULTIPLE_DIS')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ACID_ATTACK_SURVIVOR_SPECIAL_REQUIREMENT"],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_FARE_POLICY",
				_SCOPE_:
					"$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"MIN_FARE",
					"MIN_FARE_DISTANCE_KM",
					"PER_KM_CHARGE",
					"PICKUP_CHARGE",
					"WAITING_CHARGE_PER_MIN",
					"NIGHT_CHARGE_MULTIPLIER",
					"NIGHT_SHIFT_START_TIME",
					"NIGHT_SHIFT_END_TIME",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_1_INFO",
				_SCOPE_: "$.message.order.items[*].tags[?(@.descriptor.code=='INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: [
					"DISTANCE_TO_NEAREST_DRIVER_METER",
					"ETA_TO_NEAREST_DRIVER_MIN",
					"TOTAL_HOURS",
					"TOTAL_DISTANCE",
				],
				_RETURN_: "subTags all in validValues",
			},
			{
				_NAME_: "validate_tag_2",
				validTags: ["ROUTE_INFO"],
				tagPath: "$.message.order.fulfillments[*].tags[*].descriptor.code",
				_CONTINUE_: "!(tagPath are present)",
				_RETURN_: "tagPath all in validTags",
			},
			{
				_NAME_: "validate_tag_2_ROUTE_INFO",
				_SCOPE_:
					"$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
				subTags: "$.list[*].descriptor.code",
				validValues: ["ENCODED_POLYLINE", "WAYPOINTS"],
				_RETURN_: "subTags all in validValues",
			},
		],
		track: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["track"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
		],
		on_track: [
			{
				_NAME_: "REQUIRED_CONTEXT_CODE_1",
				attr: "$.context.location.country.code",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["IND"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_DOMAIN_3",
				attr: "$.context.domain",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["ONDC:TRV10"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TIMESTAMP_4",
				attr: "$.context.timestamp",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_ID_5",
				attr: "$.context.bap_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TRANSACTION_ID_6",
				attr: "$.context.transaction_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_MESSAGE_ID_7",
				attr: "$.context.message_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_VERSION_8",
				attr: "$.context.version",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_ACTION_9",
				attr: "$.context.action",
				_RETURN_: "attr are present && attr all in enumList",
				enumList: ["on_track"],
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BAP_URI_10",
				attr: "$.context.bap_uri",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_TTL_11",
				attr: "$.context.ttl",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_ID_12",
				attr: "$.context.bpp_id",
				_RETURN_: "attr are present",
			},
			{
				_NAME_: "REQUIRED_CONTEXT_BPP_URI_13",
				attr: "$.context.bpp_uri",
				_RETURN_: "attr are present",
			},
		],
	},
	_SESSION_DATA_: {
		trans: {},
	},
};

const search = x_validations._TESTS_.search;

function removePrefix(prefix: string, fullString: string): string {
	if (fullString.startsWith(prefix)) {
		return fullString.slice(prefix.length);
	}
	return fullString;
}
function removeSpecialChars(input: string): string {
	return input.replace(/[^a-zA-Z0-9_]/g, "");
}

function objectReducer(tests: any[], parentPath: string) {
	const objectName = parentPath.split(".")[1];
	const group: any = [
		{
			_NAME_: `Context_tests`,
			_RETURN_: [],
		},
	];
	const leftOut: any = [];

	for (const test of tests) {
		let leftOutFlag = true;
		for (const key in test) {
			if (typeof test[key] === "string") {
				if (key === "_NAME_" || key === "_RETURN_" || key === "_CONTINUE_") {
					continue;
				}

				if (test[key].includes(parentPath)) {
					const sub = removePrefix(parentPath, test[key]);
					const subGroupId = removeSpecialChars(sub.split(".")[0]);
					const groupName = `${subGroupId}_Tests`;
					const groupIndex = group.findIndex(
						(g: any) => g._NAME_ === groupName
					);
					if (groupIndex === -1) {
						group.push({
							_NAME_: groupName,
							_RETURN_: [test],
						});
					} else {
						group[groupIndex]._RETURN_.push(test);
					}
					leftOutFlag = false;
				}
			}
		}
		if (leftOutFlag) {
			leftOut.push(test);
		}
	}

	group[0]._RETURN_ = leftOut;
	for (const g of group) {
		console.log(g._NAME_);
		g._RETURN_ = createGroups(g._RETURN_, g._NAME_.split("_")[0]);
	}

	return [...group]; // [...group]
}

function createGroups(tests: any[], parent: string) {
	const groups: any = [
		{
			_NAME_: `${parent}_Attributes_Tests`,
			_RETURN_: [],
		},
		{
			_NAME_: `${parent}_Enums_Tests`,
			_RETURN_: [],
		},
		{
			_NAME_: `${parent}_Tags_Tests`,
			_RETURN_: [],
		},
	];
	// attr group
	console.log(tests);
	let done: string[] = [];
	let count = 2;
	tests.forEach((test) => {
		delete test._NAME_;

		if (
			Object.keys(test).includes("attr") &&
			!Object.keys(test).includes("enumList")
		) {
			const attr = test.attr.slice(1).split(".").join("_");
			test._NAME_ = "REQUIRED" + removeSpecialChars(attr);
			groups[0]._RETURN_.push(test);
		}
		if (Object.keys(test).includes("enumList")) {
			if (Object.keys(test).includes("attr")) {
				const attr = test.attr.slice(1).split(".").join("_");
				test._NAME_ = "VALID_ENUM" + removeSpecialChars(attr);
				test._RETURN_ = "attr all in enumList";
			} else {
				const enumPath = test.enumPath.slice(1).split(".").join("_");
				test._NAME_ = "VALID_ENUM" + removeSpecialChars(enumPath);
			}
			groups[1]._RETURN_.push(test);
		}
		if (Object.keys(test).includes("tagPath")) {
			const path = test.tagPath.slice(1).split(".").join("_");
			test._NAME_ = "VALIDATE_TAG" + removeSpecialChars(path);
			groups[2]._RETURN_.push(test);
		}
		if (done.includes(test._NAME_)) {
			test._NAME_ = test._NAME_ + "_" + count;
			count++;
		}
		done.push(test._NAME_);
	});
	// if any group is empty, remove it
	let clean: any[] = [];
	groups.forEach((group: any, index: number) => {
		if (group._RETURN_.length > 0) {
			clean.push(group);
		}
	});

	return clean;
}

// const x = objectReducer(search, "$.message.intent.");
// writeFileSync("./reduced.json", JSON.stringify(x, null, 2));

const pathList = {
	search: "$.message.intent.",
	on_search: "$.message.catalog.",
	select: "$.message.order.",
	on_select: "$.message.order.",
	init: "$.message.order.",
	on_init: "$.message.order.",
	confirm: "$.message.order.",
	on_confirm: "$.message.order.",
	track: "$.message.",
	on_track: "$.message.",
	status: "$.message.",
	on_status: "$.message.",
	update: "$.message.",
	on_update: "$.message.",
	cancel: "$.message.order.",
	on_cancel: "$.message.order.",
};

const final: any = {
	_TESTS_: {},
};
for (const api in x_validations._TESTS_) {
	const tests =
		x_validations._TESTS_[api as keyof typeof x_validations._TESTS_];
	const reduced = objectReducer(tests, pathList[api as keyof typeof pathList]);
	final._TESTS_[api] = reduced;
}

const y = convertToYamlWithRefs(final);
writeFileSync("./reduced.yaml", y);
writeFileSync("./reduced.json", JSON.stringify(final, null, 2));
