import React from "react";

import EditSXPBlueprintForm from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_blueprint/EditSXPBlueprintForm";
import getUIConfigurationValues from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/utils/sxp_element/get_ui_configuration_values";
import {EditBlueprintDecorator, ThemeContextDecorator} from "../decorators";

import {ENTITY_JSON, INITIAL_CONFIGURATION} from "../data";
import {QUERY_SXP_ELEMENTS} from "test/js/mocks/sxpElements.js";

export default {
	title: "SXP/EditSXPBlueprintForm",
	component: EditSXPBlueprintForm,
	decorators: [EditBlueprintDecorator, ThemeContextDecorator],
	parameters: {
		layout: "fullscreen",
	},
};

const Template = (args) => <EditSXPBlueprintForm {...args} />;

export const AllElements = Template.bind({});

AllElements.args = {
	sxpBlueprintId: "1",
	initialExternalReferenceCode: "ERC_TEST",
	entityJSON: ENTITY_JSON,
	initialDescription: "Test Description",
	initialDescriptionI18n: {
		"en-US": "test-description",
	},
	initialTitle: "Test Title",
	initialTitleI18n: {
		"en-US": "test-title",
	},
	initialConfiguration: INITIAL_CONFIGURATION,
	initialSXPElementInstances: QUERY_SXP_ELEMENTS.map((sxpElement) => ({
		sxpElement,
		type: 10,
		uiConfigurationValues: getUIConfigurationValues(sxpElement),
	})),
};

export const NoElements = Template.bind({});

NoElements.args = {
	...AllElements.args,
	initialSXPElementInstances: [],
};

export const SiteElement = Template.bind({});

SiteElement.args = {
	...AllElements.args,
	initialSXPElementInstances: [
		{
			description_i18n: {
				en_US: "limit-search-to-these-sites-description",
			},
			elementDefinition: {
				category: "filter",
				configuration: {
					queryConfiguration: {
						queryEntries: [
							{
								clauses: [
									{
										context: "query",
										occur: "filter",
										query: {
											terms: {
												scopeGroupIds:
													"${configuration.scope_group_ids}",
												scopeGroupId:
													"${configuration.scope_group_id}",
											},
										},
									},
								],
							},
						],
					},
				},
				icon: "filter",
				uiConfiguration: {
					fieldSets: [
						{
							fields: [
								{
									helpText: "group-ids-help-text",
									label: "group-ids",
									name: "scope_group_ids",
									type: "multiselect",
								},
								{
									helpText: "group-ids-help-text",
									label: "group-id",
									name: "scope_group_id",
									type: "number",
								},
							],
						},
					],
				},
			},
			externalReferenceCode: "LIMIT_SEARCH_TO_THESE_SITES",
			title_i18n: {
				en_US: "limit-search-to-these-sites",
			},
		},
	].map((sxpElement) => ({
		sxpElement,
		type: 10,
		uiConfigurationValues: getUIConfigurationValues(sxpElement),
	})),
};
