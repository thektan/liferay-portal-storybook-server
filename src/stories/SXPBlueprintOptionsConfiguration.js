import React from "react";

import Configuration from "src/main/resources/META-INF/resources/sxp_blueprint_options/js/configuration/index";
import learnMessages from "../../static/search-experiences-web.json";

import "src/main/resources/META-INF/resources/sxp_blueprint_options/css/main.scss";

export default {
	title: "Components/SXPBlueprintOptionsConfiguration",
	component: Configuration,
	args: {
		learnMessages,
	},
};

const Template = (args) => <Configuration {...args} />;

export const Default = Template.bind({});
