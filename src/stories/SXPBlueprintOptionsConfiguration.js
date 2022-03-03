import React from "react";

import Configuration from "src/main/resources/META-INF/resources/sxp_blueprint_options/js/configuration/index";

import "src/main/resources/META-INF/resources/sxp_blueprint_options/css/main.scss";

export default {
	title: "Components/SXPBlueprintOptionsConfiguration",
	component: Configuration,
};

const Template = (args) => <Configuration />;

export const Default = Template.bind({});
