import React from "react";

import EditSXPBlueprintForm from "src/main/resources/META-INF/resources/js/edit_sxp_blueprint/EditSXPBlueprintForm";
import CONTEXT from "../context";
import {
	ENTITY_JSON,
	INDEX_FIELDS,
	SEARCHABLE_TYPES,
	INITIAL_CONFIGURATION,
	SXP_ELEMENT_OUTPUTS,
	SELECTED_SXP_ELEMENTS,
	KEYWORD_QUERY_CONTRIBUTORS,
	MODEL_PREFILTER_CONTRIBUTORS,
	QUERY_PREFILTER_CONTRIBUTORS,
} from "../data";

export default {
	title: "Components/EditSXPBlueprintForm",
	component: EditSXPBlueprintForm,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		context: CONTEXT,
	},
};

const Template = (args) => (
	<div className="edit-sxp-blueprint-root">
		<EditSXPBlueprintForm {...args} />
	</div>
);

export const AllElements = Template.bind({});

AllElements.args = {
	sxpBlueprintId: "1",
	entityJSON: ENTITY_JSON,
	indexFields: INDEX_FIELDS,
	initialDescription: {},
	initialTitle: {
		"en-US": "Test Title",
	},
	keywordQueryContributors: KEYWORD_QUERY_CONTRIBUTORS,
	modelPrefilterContributors: MODEL_PREFILTER_CONTRIBUTORS,
	querySXPElements: SELECTED_SXP_ELEMENTS,
	queryPrefilterContributors: QUERY_PREFILTER_CONTRIBUTORS,
	redirectURL: "",
	searchableTypes: SEARCHABLE_TYPES,
	submitFormURL: "",
	initialConfigurationString: JSON.stringify({
		...INITIAL_CONFIGURATION,
		query_configuration: SXP_ELEMENT_OUTPUTS,
	}),
	initialSelectedSXPElementsString: JSON.stringify({
		query_configuration: SELECTED_SXP_ELEMENTS,
	}),
};

export const NoElements = Template.bind({});

NoElements.args = {
	...AllElements.args,
	initialSelectedSXPElementsString: JSON.stringify({
		query_configuration: [],
	}),
};
