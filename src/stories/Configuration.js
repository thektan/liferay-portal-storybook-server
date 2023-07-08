import React from "react";

import Configuration from "src/main/resources/META-INF/resources/sxp_blueprint_options/js/configuration/index";
import learnMessages from "search-experiences-web.json";
import {SheetDecorator} from "../decorators";

import "src/main/resources/META-INF/resources/sxp_blueprint_options/css/main.scss";

export default {
	title: "Components/Configuration",
	decorators: [SheetDecorator],
	component: Configuration,
	args: {
		learnMessages,
	},
};

const Template = (args) => <Configuration {...args} />;

export const Default = Template.bind({});
