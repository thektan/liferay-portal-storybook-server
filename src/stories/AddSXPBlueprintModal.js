import React from "react";

import AddSXPBlueprintModal from "src/main/resources/META-INF/resources/js/view_sxp_blueprints/AddSXPBlueprintModal";
import {EditBlueprintDecorator} from "../decorators";

export default {
	title: "Components/AddSXPBlueprintModal",
	decorators: [EditBlueprintDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: AddSXPBlueprintModal,
	argTypes: {closeModal: {action: "closeModal"}},
};

const Template = (args) => <AddSXPBlueprintModal {...args} />;

export const Default = Template.bind({});

Default.args = {
	contextPath: "/o/search-experiences-web/",
	dialogTitle: "New Search Blueprint",
	defaultLocale: "en_US",
	namespace: "",
};
