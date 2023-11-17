import React from "react";

import SearchBarConfigurationSuggestions from "src/main/resources/META-INF/resources/js/components/search_bar_configuration_suggestions/index";
import {SearchBarWidgetConfigurationDecorator} from "../decorators";
import portalSearchWeb from "../../static/learn-resources/portal-search-web.json";

export default {
	title: "Components/SearchBarConfigurationSuggestions",
	decorators: [SearchBarWidgetConfigurationDecorator],
	component: Element,
};

const Template = (args) => (
	<SearchBarConfigurationSuggestions
		learnResources={{"portal-search-web": portalSearchWeb}}
		initialSuggestionsContributorConfiguration={JSON.stringify([
			{
				contributorName: "basic",
				displayGroupName: "suggestions",
				size: 5,
			},
			{
				contributorName: "sxpBlueprint",
				displayGroupName: "blueprint",
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

export const SiteActivities = Template.bind({});

SiteActivities.args = {
	initialSuggestionsContributorConfiguration: JSON.stringify([
		{
			attributes: {
				characterThreshold: "0",
				matchDisplayLanguageId: "false",
			},
			contributorName: "recentSearchesUserActivity",
			displayGroupName: "recent-searches",
			size: "4",
		},
	]),
	isDXP: true,
	isSearchExperiencesSupported: true,
};
