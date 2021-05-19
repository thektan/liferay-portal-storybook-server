import React from "react";

import AddBlueprintModal from "src/main/resources/META-INF/resources/js/view_blueprints/AddBlueprintModal";
import {EditBlueprintDecorator} from "../decorators";
import {SEARCHABLE_ASSET_TYPES} from "../data";

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
	contextPath: "/o/portal-search-tuning-blueprints-admin-web/",
	dialogTitle: "New Search Blueprint",
	initialVisible: true,
	searchableAssetTypesString: JSON.stringify(SEARCHABLE_ASSET_TYPES),
};
