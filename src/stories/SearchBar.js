import React from "react";

import SearchBar from "src/main/resources/META-INF/resources/js/components/SearchBar";
import {SearchBarDecorator} from "../decorators";

export default {
	title: "Components/SearchBar",
	decorators: [SearchBarDecorator],
	component: Element,
};

const Template = (args) => (
	<SearchBar suggestionsConfiguratorContribution="" {...args} />
);

export const Default = Template.bind({});

Default.args = {};
