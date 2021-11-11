import React from "react";

import EditSXPBlueprint from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_blueprint/index.js";
import CONTEXT from "../context";

export default {
	title: "Pages/Edit Blueprint",
	component: EditSXPBlueprint,
	parameters: {
		layout: "fullscreen",
	},
	args: CONTEXT,
};

const Template = (args) => (
	<div className="edit-sxp-blueprint-root">
		<EditSXPBlueprint sxpBlueprintId="" {...args} />
	</div>
);

export const AllElements = Template.bind({});

AllElements.args = {};
