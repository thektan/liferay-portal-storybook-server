import React from "react";

import AddElementSidebar from "../../../liferay-portal-master/portal/modules/dxp/apps/portal-search-tuning/portal-search-tuning-blueprints-admin-web/src/main/resources/META-INF/resources/js/edit_blueprint/AddElementSidebar";

import {EditBlueprintDecorator} from "../decorators";
import {SELECTED_ELEMENTS} from "../data";

export default {
	title: "Components/AddElementSidebar",
	component: AddElementSidebar,
	decorators: [EditBlueprintDecorator],
	argTypes: {
		onAddElement: {action: "add element"},
		onClose: {action: "close"},
	},
	args: {
		elements: SELECTED_ELEMENTS,
		emptyMessage: "No query elements found",
		title: "Add Element",
		visible: true,
	},
};

const Template = (args) => <AddElementSidebar {...args} />;

export const Default = Template.bind({});
