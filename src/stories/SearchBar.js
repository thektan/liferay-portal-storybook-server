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

export const OneContributor = Template.bind({});

OneContributor.args = {
	suggestionsURL:
		"https://run.mocky.io/v3/314e74ec-0aa5-4986-8c33-9e267c3e354c",
};

export const TwoContributors = Template.bind({});

TwoContributors.args = {
	suggestionsURL:
		"https://run.mocky.io/v3/72184277-21e0-4d9a-9892-cd87d42f78c7",
};

export const FiveContributors = Template.bind({});

FiveContributors.args = {
	suggestionsURL:
		"https://run.mocky.io/v3/67e7e328-2b0f-4780-89e8-dd5bae55b2cd",
};

export const WithScope = Template.bind({});

WithScope.args = {
	letUserChooseScope: true,
	suggestionsURL:
		"https://run.mocky.io/v3/314e74ec-0aa5-4986-8c33-9e267c3e354c",
};
