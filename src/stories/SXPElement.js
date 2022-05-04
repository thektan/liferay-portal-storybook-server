import React from "react";

import SXPElement from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/sxp_element";
import {
	BuilderDecorator,
	ContainerDecorator,
	EditBlueprintDecorator,
} from "../decorators";

import {QUERY_SXP_ELEMENTS} from "test/js/mocks/data.js";
import {getUIConfigurationValues} from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/utils/utils";

export default {
	title: "Components/SXPElement",
	decorators: [EditBlueprintDecorator, BuilderDecorator, ContainerDecorator],
	component: Element,
};

const Template = (args) => <SXPElement {...args} />;

export const Default = Template.bind({});

Default.args = {
	sxpElement: QUERY_SXP_ELEMENTS[0],
	uiConfigurationValues: getUIConfigurationValues(QUERY_SXP_ELEMENTS[0]),
};
