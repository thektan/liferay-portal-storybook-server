import React from "react";

import SearchBarConfigurationSuggestions from "src/main/resources/META-INF/resources/js/components/SearchBarConfigurationSuggestions";
import {SearchBarDecorator} from "../decorators";

export default {
	title: "Components/SearchBarConfigurationSuggestions",
	decorators: [SearchBarDecorator],
	component: Element,
};

const Template = (args) => (
	<SearchBarConfigurationSuggestions
		initialSuggestionsContributorConfiguration={JSON.stringify([
			{
				contributorName: "blueprint",
				displayGroupName: "suggestions",
				size: 5,
				attributes: {
					fields: ["entryClassName", "title"],
					includeAssetSummary: false,
					includeAssetURL: true,
				},
			},
		])}
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {};
