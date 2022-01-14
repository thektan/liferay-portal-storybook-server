import React from "react";

import PreviewSidebar from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_blueprint/PreviewSidebar";
import {EditBlueprintDecorator} from "../decorators";
import {mockSearchResults} from "src/../test/js/mocks/data";

const {response, responseString, searchHits} = mockSearchResults();

export default {
	title: "Components/PreviewSidebar",
	decorators: [EditBlueprintDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: PreviewSidebar,
};

const Template = (args) => <PreviewSidebar {...args} />;

export const Default = Template.bind({});

const SEARCH_RESULTS = mockSearchResults();

Default.args = {
	loading: false,
	response,
	responseString,
	searchHits,
	visible: true,
};

export const Empty = Template.bind({});

Empty.args = {
	...Default.args,
	response: {},
	responseString: "",
	searchHits: {hits: [], totalHits: 0},
};

export const Errors = Template.bind({});

Errors.args = {
	...Default.args,
	errors: [
		{
			className:
				"com.liferay.portal.search.tuning.blueprints.engine.internal.searchrequest.QuerySearchRequestBodyContributor",
			elementId: "queryElement-1",
			localizationKey: "core.error.unknown-occur-value",
			msg:
				"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.Occur.FILTERED",
			rootObject: {
				context: "query",
				occur: "filtered",
				query: {
					wrapper: {
						query: {
							range: {
								createDate: {
									from: "",
									include_lower: true,
									include_upper: true,
									to: "",
								},
							},
						},
					},
				},
			},
			rootProperty: null,
			rootValue: "FILTERED",
			severity: "ERROR",
			throwable: {
				cause: null,
				localizedMessage:
					"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.Occur.FILTERED",
				message:
					"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.Occur.FILTERED",
			},
		},
		{
			className:
				"com.liferay.portal.search.tuning.blueprints.engine.internal.searchrequest.QuerySearchRequestBodyContributor",
			localizationKey: "core.error.unknown-clause-context",
			msg:
				"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.ClauseContext.QUERYS",
			rootObject: {
				context: "querys",
				occur: "filter",
				query: {},
			},
			rootProperty: null,
			rootValue: "QUERYS",
			severity: "ERROR",
			throwable: {
				cause: null,
				localizedMessage:
					"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.ClauseContext.QUERYS",
				message:
					"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.ClauseContext.QUERYS",
			},
		},
	],
};

export const Warning = Template.bind({});

Warning.args = {
	...Default.args,
	warnings: [{msg: "The configuration has missing or invalid values."}],
};

export const WarningsAndErrors = Template.bind({});

WarningsAndErrors.args = {
	...Default.args,
	warnings: [{msg: "The configuration has missing or invalid values."}],
	errors: [
		{
			className:
				"com.liferay.portal.search.tuning.blueprints.engine.internal.searchrequest.QuerySearchRequestBodyContributor",
			localizationKey: "core.error.unknown-clause-context",
			msg:
				"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.ClauseContext.QUERYS",
			rootObject: {
				context: "querys",
				occur: "filter",
				query: {},
			},
			rootProperty: null,
			rootValue: "QUERYS",
			severity: "ERROR",
			throwable: {
				cause: null,
				localizedMessage:
					"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.ClauseContext.QUERYS",
				message:
					"No enum constant com.liferay.portal.search.tuning.blueprints.constants.json.values.ClauseContext.QUERYS",
			},
		},
	],
};
