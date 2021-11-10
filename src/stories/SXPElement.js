import React from "react";

import SXPElement from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/sxp_element";
import {
	BuilderDecorator,
	ContainerDecorator,
	EditBlueprintDecorator,
} from "../decorators";
import {SELECTED_SXP_ELEMENTS} from "src/../test/js/mocks/data";

export default {
	title: "Components/SXPElement",
	decorators: [EditBlueprintDecorator, BuilderDecorator, ContainerDecorator],
	component: Element,
};

const Template = (args) => <SXPElement {...args} />;

export const Default = Template.bind({});

Default.args = {
	sxpElementTemplateJSON: SELECTED_SXP_ELEMENTS[0].sxpElementTemplateJSON,
	uiConfigurationJSON: SELECTED_SXP_ELEMENTS[0].uiConfigurationJSON,
	uiConfigurationValues: SELECTED_SXP_ELEMENTS[0].uiConfigurationValues,
};
