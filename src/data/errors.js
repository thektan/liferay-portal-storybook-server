export const SXP_BLUEPRINT_ERRORS = [
	{
		msg: "expected type: Number, found: String",
		rootProperty:
			"/aggregation_configuration/cardinality-test/cardinality/precision_threshold",
		severity: "ERROR",
		localizedMessage: "Invalid value type",
		throwable:
			"org.everit.json.schema.ValidationException: #/aggregation_configuration/cardinality-test/cardinality/precision_threshold: expected type: Number, found: String",
		className:
			"com.liferay.portal.search.tuning.blueprints.internal.validator.BlueprintValidatorImpl",
		rootConfiguration: "aggregation_configuration",
	},
	{
		msg: ". Expected value is scopeGroupId",
		rootProperty: "/facet_configuration/site/site/field",
		severity: "ERROR",
		localizedMessage: "Invalid value",
		throwable:
			"org.everit.json.schema.ValidationException: #/facet_configuration/site/site/field: ",
		className:
			"com.liferay.portal.search.tuning.blueprints.internal.validator.BlueprintValidatorImpl",
		rootConfiguration: "facet_configuration",
	},
	{
		msg: "expected type: String, found: Integer",
		rootProperty: "/facet_configuration/site/site/field",
		severity: "ERROR",
		localizedMessage: "Invalid value type",
		throwable:
			"org.everit.json.schema.ValidationException: #/facet_configuration/site/site/field: expected type: String, found: Integer",
		className:
			"com.liferay.portal.search.tuning.blueprints.internal.validator.BlueprintValidatorImpl",
		rootConfiguration: "facet_configuration",
	},
];

export const SXP_ELEMENT_ERRORS = [
	{
		msg: "expected type: String, found: Integer",
		rootProperty: "/query_element/sxpElementTemplateJSON/clauses/0/occur",
		severity: "ERROR",
		localizedMessage: "Invalid value type",
		throwable:
			"org.everit.json.schema.ValidationException: #/query_element/sxpElementTemplateJSON/clauses/0/occur: expected type: String, found: Integer",
		className:
			"com.liferay.portal.search.tuning.blueprints.internal.validator.ElementValidatorImpl",
		rootConfiguration: "query_element",
	},
	{
		msg: "expected type: String, found: Integer",
		rootProperty: "/query_element/sxpElementTemplateJSON/clauses/0/context",
		severity: "ERROR",
		localizedMessage: "Invalid value type",
		throwable:
			"org.everit.json.schema.ValidationException: #/query_element/sxpElementTemplateJSON/clauses/0/context: expected type: String, found: Integer",
		className:
			"com.liferay.portal.search.tuning.blueprints.internal.validator.ElementValidatorImpl",
		rootConfiguration: "query_element",
	},
	{
		msg:
			'1 is not a valid enum value. Expected value is ["post_filter","query","rescore"]',
		rootProperty: "/query_element/sxpElementTemplateJSON/clauses/0/context",
		severity: "ERROR",
		localizedMessage: "Invalid value",
		throwable:
			"org.everit.json.schema.ValidationException: #/query_element/sxpElementTemplateJSON/clauses/0/context: 1 is not a valid enum value",
		className:
			"com.liferay.portal.search.tuning.blueprints.internal.validator.ElementValidatorImpl",
		rootConfiguration: "query_element",
	},
];
