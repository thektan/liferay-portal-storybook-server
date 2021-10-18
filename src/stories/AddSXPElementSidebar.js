import React from "react";

import AddSXPElementSidebar from "src/main/resources/META-INF/resources/js/edit_sxp_blueprint/AddSXPElementSidebar";

import {EditBlueprintDecorator} from "../decorators";
import {SELECTED_SXP_ELEMENTS} from "../data";

export default {
	title: "Components/AddSXPElementSidebar",
	component: AddSXPElementSidebar,
	decorators: [EditBlueprintDecorator],
	argTypes: {
		onAddElement: {action: "add element"},
		onClose: {action: "close"},
	},
	args: {
		emptyMessage: "No query elements found",
		sxpElements: SELECTED_SXP_ELEMENTS,
		title: "Add Element",
		visible: true,
	},
};

const Template = (args) => <AddSXPElementSidebar {...args} />;

export const Default = Template.bind({});
