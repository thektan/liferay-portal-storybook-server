import React from "react";

import EditSXPElement from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_element/index";
import CONTEXT from "../context";

export default {
	title: "Pages/Edit Element",
	component: EditSXPElement,
	parameters: {
		layout: "fullscreen",
	},
	args: CONTEXT,
};

const Template = (args) => (
	<div className="edit-sxp-element-root">
		<EditSXPElement sxpElementId="2" {...args} />
	</div>
);

export const Default = Template.bind({});
