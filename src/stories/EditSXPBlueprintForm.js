import React from "react";

import EditSXPBlueprintForm from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_blueprint/EditSXPBlueprintForm";
import CONTEXT from "../context";
import {getUIConfigurationValues} from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/utils/utils";

import {ENTITY_JSON, INITIAL_CONFIGURATION, QUERY_SXP_ELEMENTS} from "../data";

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
	initialDescription: {
		"en-US": "Test Description",
	},
	initialTitle: {
		"en-US": "Test Title",
	},
	initialConfiguration: INITIAL_CONFIGURATION,
	initialSXPElementInstances: QUERY_SXP_ELEMENTS.map((sxpElement) => ({
		sxpElement,
		type: 10,
		uiConfigurationValues: getUIConfigurationValues(sxpElement),
	})),
};

export const NoElements = Template.bind({});

NoElements.args = {
	...AllElements.args,
	initialSXPElementInstances: [],
};
