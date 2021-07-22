import React from "react";

import EditElementForm from "src/main/resources/META-INF/resources/js/edit_element/index";
import CONTEXT from "../context";
import {DEFAULT_EDIT_ELEMENT} from "src/main/resources/META-INF/resources/js/utils/data";

export default {
	title: "Pages/Edit Element",
	component: EditElementForm,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		context: CONTEXT,
	},
};

const Template = (args) => <EditElementForm {...args} />;

export const Default = Template.bind({});

Default.args = {
	props: {
		initialConfigurationString: JSON.stringify(DEFAULT_EDIT_ELEMENT),
		initialDescription: {"en-US": "Description"},
		initialTitle: {
			"en-US": "Test Title",
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
	},
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
	props: {
		...Default.args.props,
		readOnly: true,
	},
};
