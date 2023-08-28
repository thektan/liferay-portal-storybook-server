import React from "react";

import SortConfigurationOptions from "src/main/resources/META-INF/resources/js/components/SortConfigurationOptions";
import {SortDecorator} from "../decorators";
import learnMessages from "../../static/learn-resources/portal-search-web.json";

export default {
	title: "Components/SortConfigurationOptions",
	decorators: [SortDecorator],
	component: Element,
};

const Template = (args) => (
	<SortConfigurationOptions learnMessages={learnMessages} {...args} />
);

export const Default = Template.bind({});

Default.args = {};
