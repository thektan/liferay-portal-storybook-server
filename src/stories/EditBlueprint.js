import React from "react";

import EditBlueprintForm from "src/main/resources/META-INF/resources/js/edit_blueprint/index";
import CONTEXT from "../context";
import {
	ENTITY_JSON,
	INDEX_FIELDS,
	SEARCHABLE_ASSET_TYPES,
	INITIAL_CONFIGURATION,
	ELEMENT_OUTPUTS,
	SELECTED_ELEMENTS,
	KEYWORD_QUERY_CONTRIBUTORS,
	MODEL_PREFILTER_CONTRIBUTORS,
	QUERY_PREFILTER_CONTRIBUTORS,
} from "../data";

export default {
	title: "Pages/Edit Blueprint",
	component: EditBlueprintForm,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		context: CONTEXT,
	},
};

const Template = (args) => <EditBlueprintForm {...args} />;

export const AllElements = Template.bind({});

AllElements.args = {
	props: {
		blueprintId: "1",
		blueprintType: 0,
		entityJSON: ENTITY_JSON,
		indexFields: INDEX_FIELDS,
		initialDescription: {},
		initialTitle: {
			"en-US": "Test Title",
		},
		keywordQueryContributors: KEYWORD_QUERY_CONTRIBUTORS,
		modelPrefilterContributors: MODEL_PREFILTER_CONTRIBUTORS,
		queryElements: SELECTED_ELEMENTS,
		queryPrefilterContributors: QUERY_PREFILTER_CONTRIBUTORS,
		redirectURL: "",
		searchableAssetTypes: SEARCHABLE_ASSET_TYPES,
		submitFormURL: "",
		initialConfigurationString: JSON.stringify({
			...INITIAL_CONFIGURATION,
			query_configuration: ELEMENT_OUTPUTS,
		}),
		initialSelectedElementsString: JSON.stringify({
			query_configuration: SELECTED_ELEMENTS,
		}),
		searchResultsURL:
			"https://run.mocky.io/v3/09252fff-57f3-4e74-b3d7-735ed2fcb96b",
	},
};

export const NoElements = Template.bind({});

NoElements.args = {
	props: {
		...AllElements.args.props,
		initialSelectedElementsString: JSON.stringify({
			query_configuration: [],
		}),
	},
};

export const PreviewErrors = Template.bind({});

PreviewErrors.args = {
	props: {
		...AllElements.args.props,
		initialSelectedElementsString: JSON.stringify({
			query_configuration: SELECTED_ELEMENTS,
		}),
		searchResultsURL:
			"https://run.mocky.io/v3/177e9f6b-d921-4b92-9f64-c7eb684b8300",

		// { "errors": [ { "className": "com.liferay.portal.search.tuning.blueprints.engine.internal.condition.visitor.InRangeVisitor", "elementId": "queryElement-0", "localizationKey": "core.error.clause-condition-date-parsing-error", "msg": "Illegal pattern character 'x'", "rootObject": { "evaluation_type": "in_range", "date_format": "yyyyMMddx", "parameter_name": "${time.current_date}", "value": [ 20210228, 20210302 ] }, "rootProperty": null, "rootValue": "[20210228,20210302]", "severity": "ERROR", "throwable": { "cause": null, "localizedMessage": "Illegal pattern character 'x'", "message": "Illegal pattern character 'x'" } } ] }
	},
};
