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
		initialSuggestionsContributorConfiguration='[{"contributorName":"blueprint","displayGroupName":"suggestions","size":5,"fields":["entryClassName"], "includeAssetSummary":false, "includeAssetURL":true}]'
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {};
