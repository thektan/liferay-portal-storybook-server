import React from "react";

import PreviewSidebar from "src/main/resources/META-INF/resources/js/edit_blueprint/PreviewSidebar";
import {EditBlueprintDecorator} from "../decorators";
import {mockSearchResults} from "../data";

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

Default.args = {
	loading: false,
	results: mockSearchResults(),
	visible: true,
};

export const Empty = Template.bind({});

Empty.args = {
	...Default.args,
	results: {
		hits: [],
		meta: {
			executionTime: "0.061",
			keywords: "test",
			totalHits: 0,
		},
		pagination: {activePage: 1, totalPages: 1},
	},
};

export const Errors = Template.bind({});

Errors.args = {
	...Default.args,
	results: {
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
	},
};

export const Warning = Template.bind({});

Warning.args = {
	...Default.args,
	results: {
		...mockSearchResults(),
		warnings: [{msg: "The configuration has missing or invalid values."}],
	},
};

export const WarningsAndErrors = Template.bind({});

WarningsAndErrors.args = {
	...Default.args,
	results: {
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
	},
};
