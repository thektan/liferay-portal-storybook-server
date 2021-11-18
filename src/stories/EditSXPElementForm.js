import React from "react";

import EditSXPElementForm from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_element/EditSXPElementForm";
import CONTEXT from "../context";
import {QUERY_SXP_ELEMENTS} from "../data";

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
	initialElementDefinition: QUERY_SXP_ELEMENTS[0].elementDefinition,
	initialDescription: QUERY_SXP_ELEMENTS[0].description_i18n,
	initialTitle: QUERY_SXP_ELEMENTS[0].title_i18n,
	predefinedVariables: [
		{
			className:
				"com.liferay.portal.search.tuning.blueprints.engine.parameter.StringParameter",
			description: "User's ID",
			templateVariable: "${user.user_id}",
		},
		{
			className:
				"com.liferay.portal.search.tuning.blueprints.engine.parameter.StringParameter",
			description: "User's First Name",
			templateVariable: "${user.user_first_name}",
		},
		{
			className:
				"com.liferay.portal.search.tuning.blueprints.engine.parameter.LongParameter",
			description: "Company ID",
			templateVariable: "${context.company_id}",
		},
		{
			className:
				"com.liferay.portal.search.tuning.blueprints.engine.parameter.LongParameter",
			description: "Scope Group ID",
			templateVariable: "${context.scope_group_id}",
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
