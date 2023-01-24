import React from "react";

import SearchBarConfigurationSuggestions from "src/main/resources/META-INF/resources/js/components/SearchBarConfigurationSuggestions";
import {SearchBarDecorator} from "../decorators";
import learnMessages from "../../static/portal-search-web.json";

export default {
	title: "Components/SearchBarConfigurationSuggestions",
	decorators: [SearchBarDecorator],
	component: Element,
};

const Template = (args) => (
	<SearchBarConfigurationSuggestions
		learnMessages={learnMessages}
		initialSuggestionsContributorConfiguration={JSON.stringify([
			{
				contributorName: "sxpBlueprint",
				displayGroupName: "suggestions",
				size: 5,
				attributes: {
					fields: ["entryClassName", "title"],
					includeAssetSearchSummary: false,
					includeAssetURL: true,
				},
			},
		])}
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {isDXP: true, isSearchExperiencesSupported: true};

export const CEVersion = Template.bind({});

CEVersion.args = {
	initialSuggestionsContributorConfiguration: JSON.stringify([
		{
			contributorName: "basic",
			displayGroupName: "suggestions",
			size: 5,
		},
	]),
	isDXP: false,
	isSearchExperiencesSupported: true,
};

export const Solr = Template.bind({});

Solr.args = {
	initialSuggestionsContributorConfiguration: JSON.stringify([
		{
			contributorName: "basic",
			displayGroupName: "suggestions",
			size: 5,
		},
	]),
	isDXP: true,
	isSearchExperiencesSupported: false,
};
