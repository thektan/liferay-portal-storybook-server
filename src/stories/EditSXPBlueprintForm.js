import React from "react";

import EditSXPBlueprintForm from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_blueprint/EditSXPBlueprintForm";
import CONTEXT from "../context";
import {
	ENTITY_JSON,
	INITIAL_CONFIGURATION,
	INDEX_FIELDS,
	SELECTED_SXP_ELEMENTS,
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
	initialDescription: {
		"en-US": "Test Description",
	},
	initialTitle: {
		"en-US": "Test Title",
	},
	initialConfiguration: INITIAL_CONFIGURATION,
	initialSXPElementInstances: {
		queryConfiguration: {queryEntries: SELECTED_SXP_ELEMENTS},
	},
};

export const NoElements = Template.bind({});

NoElements.args = {
	...AllElements.args,
	initialSXPElementInstances: {
		queryConfiguration: {queryEntries: []},
	},
};
