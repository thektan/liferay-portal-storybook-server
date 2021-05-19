import React from "react";

import Element from "src/main/resources/META-INF/resources/js/shared/element";
import {
	BuilderDecorator,
	ContainerDecorator,
	EditBlueprintDecorator,
} from "../decorators";
import {SELECTED_ELEMENTS} from "../data";

export default {
	title: "Components/Element",
	decorators: [EditBlueprintDecorator, BuilderDecorator, ContainerDecorator],
	component: Element,
};

const Template = (args) => <Element {...args} />;

export const Default = Template.bind({});

Default.args = {
	elementTemplateJSON: SELECTED_ELEMENTS[0].elementTemplateJSON,
	uiConfigurationJSON: SELECTED_ELEMENTS[0].uiConfigurationJSON,
	uiConfigurationValues: SELECTED_ELEMENTS[0].uiConfigurationValues,
};
