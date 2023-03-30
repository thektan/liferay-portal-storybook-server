import React from "react";

import SuggestionContributorAddButton from "src/main/resources/META-INF/resources/js/components/search_bar_configuration_suggestions/SuggestionContributorAddButton";
import {SearchBarWidgetConfigurationDecorator} from "../decorators";
import learnMessages from "../../static/portal-search-web.json";
import ClayDropDown from "@clayui/drop-down";

export default {
	title: "Components/SuggestionContributorAddButton",
	decorators: [SearchBarWidgetConfigurationDecorator],
	component: Element,
};

const Template = (args) => {
	return (
		<SuggestionContributorAddButton>
			<ClayDropDown.Item onClick={() => {}}>
				<div>Basic</div>

				<div className="text-2">Basic help message</div>
			</ClayDropDown.Item>
		</SuggestionContributorAddButton>
	);
};

export const Default = Template.bind({});
