import React from "react";

import AddBlueprintModal from "src/main/resources/META-INF/resources/js/view_blueprints/AddBlueprintModal";
import {EditBlueprintDecorator} from "../decorators";
import {
	SEARCHABLE_TYPES,
	KEYWORD_QUERY_CONTRIBUTORS,
	MODEL_PREFILTER_CONTRIBUTORS,
	QUERY_PREFILTER_CONTRIBUTORS,
} from "../data";

export default {
	title: "Components/AddBlueprintModal",
	decorators: [EditBlueprintDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: AddBlueprintModal,
	argTypes: {closeModal: {action: "closeModal"}},
};

const Template = (args) => <AddBlueprintModal {...args} />;

export const Default = Template.bind({});

Default.args = {
	contextPath: "/o/search-experiences-blueprints-admin-web/",
	dialogTitle: "New Search Blueprint",
	initialVisible: true,
	keywordQueryContributorsString: JSON.stringify(KEYWORD_QUERY_CONTRIBUTORS),
	modelPrefilterContributorsString: JSON.stringify(
		MODEL_PREFILTER_CONTRIBUTORS
	),
	queryPrefilterContributorsString: JSON.stringify(
		QUERY_PREFILTER_CONTRIBUTORS
	),
	searchableTypesString: JSON.stringify(
		SEARCHABLE_TYPES.map(({className}) => className)
	),
};
