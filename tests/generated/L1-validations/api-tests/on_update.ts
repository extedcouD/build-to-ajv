import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_update(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function REQUIRED_CONTEXT_DOMAIN(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );
                const enumList = ["nic2004:60232"];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["nic2004:60232"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_COUNTRY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.country",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CITY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.city",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_ACTION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.action",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CORE_VERSION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.core_version",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_URI(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_uri",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_URI(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_uri",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TRANSACTION_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.transaction_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_MESSAGE_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.message_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TIMESTAMP(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.timestamp",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.state",
                );
                const enumList = [
                    "Created",
                    "Accepted",
                    "In-progress",
                    "Completed",
                    "Cancelled",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_15(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_16(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.locations[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.locations[*].id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_17(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.items[*].id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CATEGORY_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].category_id",
                );
                const enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload
  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CODE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.code",
                );
                const enumList = ["P2P", "P2H2P"];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.items[*].descriptor.code must be present in the payload
  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LABEL(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].time.label",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_LABEL**: $.message.order.items[*].time.label must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_DURATION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].time.duration",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_DURATION**: $.message.order.items[*].time.duration must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TIMESTAMP(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].time.timestamp",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.items[*].time.timestamp must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*]['@ondc/org/item_id']",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*]['@ondc/org/title_type']",
                );
                const enumList = [
                    "delivery",
                    "rto",
                    "tax",
                    "diff",
                    "tax_diff",
                    "discount",
                    "cod",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_27(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_27**: $.message.order.quote.breakup[*].price.currency must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_28(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_28**: $.message.order.quote.breakup[*].price.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_29(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_29**: $.message.order.fulfillments[*].id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );
                const enumList = ["Delivery", "Return", "RTO"];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CODE_31(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].state.descriptor.code",
                );
                const enumList = [
                    "Pending",
                    "Cancelled",
                    "Order-picked-up",
                    "RTO",
                    "RTO-Initiated",
                    "RTO-Delivered",
                    "RTO-Disposed",
                    "Out-for-pickup",
                    "At-destination-hub",
                    "In-transit",
                    "At-pickup",
                    "Out-for-delivery",
                    "At-delivery",
                    "Searching-for-Agent",
                    "Agent-assigned",
                    "Pickup-failed",
                    "Pickup-rescheduled",
                    "Delivery-failed",
                    "Delivery-rescheduled",
                    "Order-delivered",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CODE_31**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CODE_31.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
  - **condition REQUIRED_MESSAGE_CODE_31.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TRACKING(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].tracking",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TRACKING**: $.message.order.fulfillments[*].tracking must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.person.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.person.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_34(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_34**: $.message.order.fulfillments[*].start.location.id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_GPS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.gps",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_36(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.address.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_36**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BUILDING(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.address.building",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LOCALITY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.address.locality",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CITY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.address.city",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATE_40(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.address.state",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATE_40**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNTRY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.address.country",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_AREA_CODE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.location.address.area_code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PHONE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.contact.phone",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_EMAIL(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.contact.email",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_DURATION_45(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.time.duration",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_DURATION_45**: $.message.order.fulfillments[*].start.time.duration must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_START(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.time.range.start",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_START**: $.message.order.fulfillments[*].start.time.range.start must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_END(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.time.range.end",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_END**: $.message.order.fulfillments[*].start.time.range.end must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_48(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.person.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_48**: $.message.order.fulfillments[*].end.person.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_GPS_49(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.gps",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_GPS_49**: $.message.order.fulfillments[*].end.location.gps must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_50(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.address.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_50**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BUILDING_51(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.address.building",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BUILDING_51**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LOCALITY_52(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.address.locality",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_LOCALITY_52**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CITY_53(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.address.city",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CITY_53**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATE_54(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.address.state",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATE_54**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNTRY_55(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.address.country",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COUNTRY_55**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_AREA_CODE_56(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.location.address.area_code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_AREA_CODE_56**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PHONE_57(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.contact.phone",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PHONE_57**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_START_58(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.time.range.start",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_START_58**: $.message.order.fulfillments[*].end.time.range.start must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_END_59(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.time.range.end",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_END_59**: $.message.order.fulfillments[*].end.time.range.end must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_REGISTRATION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.registration",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_REGISTRATION**: $.message.order.fulfillments[*].vehicle.registration must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_61(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_61**: $.message.order.billing.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_62(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_62**: $.message.order.billing.address.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BUILDING_63(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.building",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BUILDING_63**: $.message.order.billing.address.building must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LOCALITY_64(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.locality",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_LOCALITY_64**: $.message.order.billing.address.locality must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CITY_65(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.city",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CITY_65**: $.message.order.billing.address.city must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATE_66(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.state",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATE_66**: $.message.order.billing.address.state must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNTRY_67(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.country",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COUNTRY_67**: $.message.order.billing.address.country must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_AREA_CODE_68(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.area_code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_AREA_CODE_68**: $.message.order.billing.address.area_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TAX_NUMBER(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.tax_number",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PHONE_70(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.phone",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PHONE_70**: $.message.order.billing.phone must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_EMAIL_71(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.email",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_EMAIL_71**: $.message.order.billing.email must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CREATED_AT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.created_at",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UPDATED_AT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.updated_at",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COLLECTED_BY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.collected_by",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_75(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.type",
                );
                const enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE_75**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE_75.1**: $.message.order.payment.type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE_75.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CATEGORY_ID_76(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].items[*].category_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CATEGORY_ID_76**: $.message.order['@ondc/org/linked_order'].items[*].category_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_77(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].items[*].descriptor.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_77**: $.message.order['@ondc/org/linked_order'].items[*].descriptor.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].items[*].quantity.count",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COUNT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.count must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UNIT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UNIT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_80(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_80**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_81(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].items[*].price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_81**: $.message.order['@ondc/org/linked_order'].items[*].price.currency must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_82(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].items[*].price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_82**: $.message.order['@ondc/org/linked_order'].items[*].price.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_83(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.descriptor.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_83**: $.message.order['@ondc/org/linked_order'].provider.descriptor.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_84(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.address.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_84**: $.message.order['@ondc/org/linked_order'].provider.address.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BUILDING_85(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.address.building",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BUILDING_85**: $.message.order['@ondc/org/linked_order'].provider.address.building must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STREET(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.address.street",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STREET**: $.message.order['@ondc/org/linked_order'].provider.address.street must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LOCALITY_87(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.address.locality",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_LOCALITY_87**: $.message.order['@ondc/org/linked_order'].provider.address.locality must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CITY_88(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.address.city",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CITY_88**: $.message.order['@ondc/org/linked_order'].provider.address.city must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATE_89(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.address.state",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATE_89**: $.message.order['@ondc/org/linked_order'].provider.address.state must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_AREA_CODE_90(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].provider.address.area_code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_AREA_CODE_90**: $.message.order['@ondc/org/linked_order'].provider.address.area_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_91(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_91**: $.message.order['@ondc/org/linked_order'].order.id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UNIT_92(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.weight.unit",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UNIT_92**: $.message.order['@ondc/org/linked_order'].order.weight.unit must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_93(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.weight.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_93**: $.message.order['@ondc/org/linked_order'].order.weight.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UNIT_94(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.dimensions.length.unit",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UNIT_94**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.unit must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_95(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.dimensions.length.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_95**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UNIT_96(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UNIT_96**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_97(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_97**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UNIT_98(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.dimensions.height.unit",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UNIT_98**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.unit must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_99(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order['@ondc/org/linked_order'].order.dimensions.height.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_99**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UPDATED_AT_100(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.updated_at",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UPDATED_AT_100**: $.message.order.updated_at must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_CONTEXT_DOMAIN(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["nic2004:60232"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["nic2004:60232"]

	> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.context.domain must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_STATE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "Created",
                    "Accepted",
                    "In-progress",
                    "Completed",
                    "Cancelled",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.state",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]

	> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.state must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_CODE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["P2P", "P2H2P"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["P2P", "P2H2P"]

	> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_CATEGORY_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].category_id",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in ["Express Delivery", "Standard Delivery", "Immediate Delivery", "Next Day Delivery", "Same Day Delivery", "Instant Delivery"]

	> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["Delivery", "Return", "RTO"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Return", "RTO"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE_6(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["OTP"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.authorization.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.fulfillments[*].start.authorization.type must be in ["OTP"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_CODE_7(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["2", "3", "4", "5"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.instructions.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.fulfillments[*].start.instructions.code must be in ["2", "3", "4", "5"]

	> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE_8(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["OTP"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.authorization.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.fulfillments[*].end.authorization.type must be in ["OTP"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_CODE_9(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["1", "2", "3", "5"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.instructions.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "5"]

	> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_CODE_10(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "Pending",
                    "Cancelled",
                    "Order-picked-up",
                    "RTO",
                    "RTO-Initiated",
                    "RTO-Delivered",
                    "RTO-Disposed",
                    "Out-for-pickup",
                    "At-destination-hub",
                    "In-transit",
                    "At-pickup",
                    "Out-for-delivery",
                    "At-delivery",
                    "Searching-for-Agent",
                    "Agent-assigned",
                    "Pickup-failed",
                    "Pickup-rescheduled",
                    "Delivery-failed",
                    "Delivery-rescheduled",
                    "Order-delivered",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].state.descriptor.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_CODE_10**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Cancelled", "Order-picked-up", "RTO", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed", "Out-for-pickup", "At-destination-hub", "In-transit", "At-pickup", "Out-for-delivery", "At-delivery", "Searching-for-Agent", "Agent-assigned", "Pickup-failed", "Pickup-rescheduled", "Delivery-failed", "Delivery-rescheduled", "Order-delivered"]

	> Note: **Condition VALID_ENUM_MESSAGE_CODE_10** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE_11(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE_11**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_11** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment.type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["lbnp", "lsp"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in ["lbnp", "lsp"]

	> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "delivery",
                    "rto",
                    "tax",
                    "diff",
                    "tax_diff",
                    "discount",
                    "cod",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*]['@ondc/org/title_type']",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["delivery", "rto", "tax", "diff", "tax_diff", "discount", "cod"]

	> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_0(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["masked_contact"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].start.contact.tags[*].code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in ["masked_contact"]

	> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_0_masked_contact(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["type", "setup", "token"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_0_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["masked_contact"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].end.contact.tags[*].code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in ["masked_contact"]

	> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_1_masked_contact(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["type", "setup", "token"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in ["type", "setup", "token"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = [
                    "linked_provider",
                    "linked_order",
                    "linked_order_item",
                    "shipping_label",
                    "fulfill_request",
                    "ebn",
                    "fulfill_response",
                    "rider_details",
                    "fulfillment_delay",
                    "fulfillment_proof",
                    "linked_order_diff",
                    "linked_order_diff_proof",
                ];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].tags[*].code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].code must be in ["linked_provider", "linked_order", "linked_order_item", "shipping_label", "fulfill_request", "ebn", "fulfill_response", "rider_details", "fulfillment_delay", "fulfillment_proof", "linked_order_diff", "linked_order_diff_proof"]

	> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_linked_provider(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='linked_provider')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["id", "name", "address"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in ["id", "name", "address"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_linked_order(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='linked_order')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = [
                    "id",
                    "currency",
                    "declared_value",
                    "weight_unit",
                    "weight_value",
                    "dim_unit",
                    "length",
                    "breadth",
                    "height",
                    "shipment_type",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in ["id", "currency", "declared_value", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height", "shipment_type"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_linked_order_item(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = [
                    "category",
                    "name",
                    "currency",
                    "value",
                    "quantity",
                    "weight_unit",
                    "weight_value",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in ["category", "name", "currency", "value", "quantity", "weight_unit", "weight_value"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_shipping_label(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='shipping_label')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["type", "url"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_shipping_label**: every element of $.message.order.fulfillments[*].tags[?(@.code=='shipping_label')].list[*].code must be in ["type", "url"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_fulfill_request(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = [
                    "rider_count",
                    "order_count",
                    "rate_basis",
                    "motorable_distance",
                    "pickup_slot_start",
                    "pickup_slot_end",
                    "delivery_slot_start",
                    "delivery_slot_end",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_fulfill_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "motorable_distance", "pickup_slot_start", "pickup_slot_end", "delivery_slot_start", "delivery_slot_end"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_ebn(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='ebn')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["id", "expiry_date"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_ebn**: every element of $.message.order.fulfillments[*].tags[?(@.code=='ebn')].list[*].code must be in ["id", "expiry_date"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_fulfill_response(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = [
                    "rider_count",
                    "order_count",
                    "rate_basis",
                    "diff_value",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_fulfill_response**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in ["rider_count", "order_count", "rate_basis", "diff_value"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_rider_details(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='rider_details')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["name", "phone"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_rider_details**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rider_details')].list[*].code must be in ["name", "phone"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_fulfillment_delay(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = [
                    "state",
                    "reason_id",
                    "timestamp",
                    "attempt",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_fulfillment_delay**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[*].code must be in ["state", "reason_id", "timestamp", "attempt"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_fulfillment_proof(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='fulfillment_proof')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["state", "type", "url"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_fulfillment_proof**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_proof')].list[*].code must be in ["state", "type", "url"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_linked_order_diff(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='linked_order_diff')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = [
                    "id",
                    "weight_unit",
                    "weight_value",
                    "dim_unit",
                    "length",
                    "breadth",
                    "height",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_linked_order_diff**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_diff')].list[*].code must be in ["id", "weight_unit", "weight_value", "dim_unit", "length", "breadth", "height"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_linked_order_diff_proof(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.code=='linked_order_diff_proof')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].code",
                );
                const validValues = ["type", "url"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_linked_order_diff_proof**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_diff_proof')].list[*].code must be in ["type", "url"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }

        const testFunctions: testFunctionArray = [
            REQUIRED_CONTEXT_DOMAIN,
            REQUIRED_CONTEXT_COUNTRY,
            REQUIRED_CONTEXT_CITY,
            REQUIRED_CONTEXT_ACTION,
            REQUIRED_CONTEXT_CORE_VERSION,
            REQUIRED_CONTEXT_BAP_ID,
            REQUIRED_CONTEXT_BAP_URI,
            REQUIRED_CONTEXT_BPP_ID,
            REQUIRED_CONTEXT_BPP_URI,
            REQUIRED_CONTEXT_TRANSACTION_ID,
            REQUIRED_CONTEXT_MESSAGE_ID,
            REQUIRED_CONTEXT_TIMESTAMP,
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_STATE,
            REQUIRED_MESSAGE_ID_15,
            REQUIRED_MESSAGE_ID_16,
            REQUIRED_MESSAGE_ID_17,
            REQUIRED_MESSAGE_CATEGORY_ID,
            REQUIRED_MESSAGE_CODE,
            REQUIRED_MESSAGE_LABEL,
            REQUIRED_MESSAGE_DURATION,
            REQUIRED_MESSAGE_TIMESTAMP,
            REQUIRED_MESSAGE_CURRENCY,
            REQUIRED_MESSAGE_VALUE,
            REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID,
            REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE,
            REQUIRED_MESSAGE_CURRENCY_27,
            REQUIRED_MESSAGE_VALUE_28,
            REQUIRED_MESSAGE_ID_29,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_CODE_31,
            REQUIRED_MESSAGE_TRACKING,
            REQUIRED_MESSAGE_NAME,
            REQUIRED_MESSAGE_ID_34,
            REQUIRED_MESSAGE_GPS,
            REQUIRED_MESSAGE_NAME_36,
            REQUIRED_MESSAGE_BUILDING,
            REQUIRED_MESSAGE_LOCALITY,
            REQUIRED_MESSAGE_CITY,
            REQUIRED_MESSAGE_STATE_40,
            REQUIRED_MESSAGE_COUNTRY,
            REQUIRED_MESSAGE_AREA_CODE,
            REQUIRED_MESSAGE_PHONE,
            REQUIRED_MESSAGE_EMAIL,
            REQUIRED_MESSAGE_DURATION_45,
            REQUIRED_MESSAGE_START,
            REQUIRED_MESSAGE_END,
            REQUIRED_MESSAGE_NAME_48,
            REQUIRED_MESSAGE_GPS_49,
            REQUIRED_MESSAGE_NAME_50,
            REQUIRED_MESSAGE_BUILDING_51,
            REQUIRED_MESSAGE_LOCALITY_52,
            REQUIRED_MESSAGE_CITY_53,
            REQUIRED_MESSAGE_STATE_54,
            REQUIRED_MESSAGE_COUNTRY_55,
            REQUIRED_MESSAGE_AREA_CODE_56,
            REQUIRED_MESSAGE_PHONE_57,
            REQUIRED_MESSAGE_START_58,
            REQUIRED_MESSAGE_END_59,
            REQUIRED_MESSAGE_REGISTRATION,
            REQUIRED_MESSAGE_NAME_61,
            REQUIRED_MESSAGE_NAME_62,
            REQUIRED_MESSAGE_BUILDING_63,
            REQUIRED_MESSAGE_LOCALITY_64,
            REQUIRED_MESSAGE_CITY_65,
            REQUIRED_MESSAGE_STATE_66,
            REQUIRED_MESSAGE_COUNTRY_67,
            REQUIRED_MESSAGE_AREA_CODE_68,
            REQUIRED_MESSAGE_TAX_NUMBER,
            REQUIRED_MESSAGE_PHONE_70,
            REQUIRED_MESSAGE_EMAIL_71,
            REQUIRED_MESSAGE_CREATED_AT,
            REQUIRED_MESSAGE_UPDATED_AT,
            REQUIRED_MESSAGE_COLLECTED_BY,
            REQUIRED_MESSAGE_TYPE_75,
            REQUIRED_MESSAGE_CATEGORY_ID_76,
            REQUIRED_MESSAGE_NAME_77,
            REQUIRED_MESSAGE_COUNT,
            REQUIRED_MESSAGE_UNIT,
            REQUIRED_MESSAGE_VALUE_80,
            REQUIRED_MESSAGE_CURRENCY_81,
            REQUIRED_MESSAGE_VALUE_82,
            REQUIRED_MESSAGE_NAME_83,
            REQUIRED_MESSAGE_NAME_84,
            REQUIRED_MESSAGE_BUILDING_85,
            REQUIRED_MESSAGE_STREET,
            REQUIRED_MESSAGE_LOCALITY_87,
            REQUIRED_MESSAGE_CITY_88,
            REQUIRED_MESSAGE_STATE_89,
            REQUIRED_MESSAGE_AREA_CODE_90,
            REQUIRED_MESSAGE_ID_91,
            REQUIRED_MESSAGE_UNIT_92,
            REQUIRED_MESSAGE_VALUE_93,
            REQUIRED_MESSAGE_UNIT_94,
            REQUIRED_MESSAGE_VALUE_95,
            REQUIRED_MESSAGE_UNIT_96,
            REQUIRED_MESSAGE_VALUE_97,
            REQUIRED_MESSAGE_UNIT_98,
            REQUIRED_MESSAGE_VALUE_99,
            REQUIRED_MESSAGE_UPDATED_AT_100,
            VALID_ENUM_CONTEXT_DOMAIN,
            VALID_ENUM_MESSAGE_STATE,
            VALID_ENUM_MESSAGE_CODE,
            VALID_ENUM_MESSAGE_CATEGORY_ID,
            VALID_ENUM_MESSAGE_TYPE,
            VALID_ENUM_MESSAGE_TYPE_6,
            VALID_ENUM_MESSAGE_CODE_7,
            VALID_ENUM_MESSAGE_TYPE_8,
            VALID_ENUM_MESSAGE_CODE_9,
            VALID_ENUM_MESSAGE_CODE_10,
            VALID_ENUM_MESSAGE_TYPE_11,
            VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY,
            VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE,
            validate_tag_0,
            validate_tag_0_masked_contact,
            validate_tag_1,
            validate_tag_1_masked_contact,
            validate_tag_2,
            validate_tag_2_linked_provider,
            validate_tag_2_linked_order,
            validate_tag_2_linked_order_item,
            validate_tag_2_shipping_label,
            validate_tag_2_fulfill_request,
            validate_tag_2_ebn,
            validate_tag_2_fulfill_response,
            validate_tag_2_rider_details,
            validate_tag_2_fulfillment_delay,
            validate_tag_2_fulfillment_proof,
            validate_tag_2_linked_order_diff,
            validate_tag_2_linked_order_diff_proof,
        ];

        let invalidResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            // .filter(r => !r.valid);
            invalidResults = [...invalidResults, ...subResult];
            if (!input.config.runAllValidations && invalidResults.length > 0) {
                return invalidResults;
            }
        }
        if (invalidResults.length > 0) {
            // return invalidResults;
            subResults = invalidResults;
            valid = subResults.every((r) => r.valid);
        }

        delete testObj._EXTERNAL;
    }
    return [{ valid: valid, code: 200 }, ...subResults];
}
