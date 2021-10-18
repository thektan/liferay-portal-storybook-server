import React from "react";

import EditSXPElement from "src/main/resources/META-INF/resources/js/edit_sxp_element/index";
import CONTEXT from "../context";

export default {
	title: "Pages/Edit Element",
	component: EditSXPElement,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		context: CONTEXT,
	},
};

const Template = (args) => (
	<div className="edit-sxp-element-root">
		<EditSXPElement {...args} />
	</div>
);

export const Default = Template.bind({});
