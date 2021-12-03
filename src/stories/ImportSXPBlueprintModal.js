import React from "react";

import ImportSXPBlueprintModal from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/view_sxp_blueprints/ImportSXPBlueprintModal";
import {EditBlueprintDecorator} from "../decorators";

export default {
	title: "Components/ImportSXPBlueprintModal",
	decorators: [EditBlueprintDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: ImportSXPBlueprintModal,
	argTypes: {closeModal: {action: "closeModal"}},
};

const Template = (args) => <ImportSXPBlueprintModal {...args} />;

export const Default = Template.bind({});

Default.args = {
	redirectURL: "",
};
