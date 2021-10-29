import React from "react";

import AddSXPElementModal from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/view_sxp_elements/AddSXPElementModal";
import {EditBlueprintDecorator} from "../decorators";

export default {
	title: "Components/AddSXPElementModal",
	decorators: [EditBlueprintDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: AddSXPElementModal,
	argTypes: {closeModal: {action: "closeModal"}},
};

const Template = (args) => <AddSXPElementModal {...args} />;

export const Default = Template.bind({});

Default.args = {
	contextPath: "/o/search-experiences-web/",
	dialogTitle: "New Search Element",
	defaultLocale: "en_US",
	namespace: "",
	initialVisible: true,
};
