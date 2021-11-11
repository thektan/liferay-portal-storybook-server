import React from "react";

import EditSXPElementForm from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_element/EditSXPElementForm";
import CONTEXT from "../context";
import {SELECTED_SXP_ELEMENTS} from "../data";

export default {
	title: "Components/EditSXPElementForm",
	component: EditSXPElementForm,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		context: CONTEXT,
	},
};

const Template = (args) => (
	<div className="edit-sxp-element-root">
		<EditSXPElementForm {...args} />
	</div>
);

export const Default = Template.bind({});

Default.args = {
	sxpElementId: "1",
	initialConfiguration: SELECTED_SXP_ELEMENTS[0],
	initialDescription: {en_US: "Description"},
	initialTitle: {
		en_US: "Test Title",
	},
	predefinedVariables: [
		{
			categoryName: "User",
			parameterDefinitions: [
				{
					className:
						"com.liferay.portal.search.tuning.blueprints.engine.parameter.StringParameter",
					description: "User's ID",
					variable: "${user.user_id}",
				},
				{
					className:
						"com.liferay.portal.search.tuning.blueprints.engine.parameter.StringParameter",
					description: "User's First Name",
					variable: "${user.user_first_name}",
				},
			],
		},
		{
			categoryName: "Context",
			parameterDefinitions: [
				{
					className:
						"com.liferay.portal.search.tuning.blueprints.engine.parameter.LongParameter",
					description: "Company ID",
					variable: "${context.company_id}",
				},
				{
					className:
						"com.liferay.portal.search.tuning.blueprints.engine.parameter.LongParameter",
					description: "Scope Group ID",
					variable: "${context.scope_group_id}",
				},
			],
		},
	],
	redirectURL: "",
	submitFormURL: "",
	type: 10,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
	...Default.args,
	readOnly: true,
};
