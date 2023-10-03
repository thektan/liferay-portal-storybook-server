import React from "react";

import EditSXPBlueprintForm from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_blueprint/EditSXPBlueprintForm";
import getUIConfigurationValues from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/utils/sxp_element/get_ui_configuration_values";
import {EditBlueprintDecorator, ThemeContextDecorator} from "../decorators";

import {ENTITY_JSON, INITIAL_CONFIGURATION} from "../data";
import {QUERY_SXP_ELEMENTS} from "test/js/mocks/sxpElements.js";

export default {
	title: "Pages/EditSXPBlueprintForm",
	component: EditSXPBlueprintForm,
	decorators: [EditBlueprintDecorator, ThemeContextDecorator],
	parameters: {
		layout: "fullscreen",
	},
};

const Template = (args) => <EditSXPBlueprintForm {...args} />;

export const AllElements = Template.bind({});

AllElements.args = {
	sxpBlueprintId: "1",
	initialExternalReferenceCode: "ERC_TEST",
	entityJSON: ENTITY_JSON,
	initialDescription: "Test Description",
	initialDescriptionI18n: {
		"en-US": "test-description",
	},
	initialTitle: "Test Title",
	initialTitleI18n: {
		"en-US": "test-title",
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
