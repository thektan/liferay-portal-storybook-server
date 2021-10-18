/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * The contents of this file are subject to the terms of the Liferay Enterprise
 * Subscription License ("License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License by
 * contacting Liferay, Inc. See the License for the specific language governing
 * permissions and limitations under the License, including but not limited to
 * distribution rights of the Software.
 */

export default {
	sxpElementTemplateJSON: {
		clauses: [
			{
				occur: "should",
				query: {
					wrapper: {
						query: {
							function_score: {
								gauss: {
									modified: {
										decay: "${configuration.decay}",
										offset: "${configuration.offset}",
										boost: "${configuration.boost}",
										fuzziness: "${configuration.fuzziness}",
										start_date:
											"${configuration.start_date}",
										role: "${configuration.roleId}",
										field: "${configuration.field}",
										values: "${configuration.values}",
										fields: "${configuration.fields}",
										query: "${configuration.query}",
										text: "${configuration.text}",
									},
								},
								boost: "${configuration.boost}",
							},
						},
					},
				},
				context: "query",
			},
		],
		icon: "thumbs-up",
		description: {
			en_US:
				"Dummy element to test all input types with nullable options",
		},
		conditions: [],
		title: {en_US: "Nullable Option Test"},
		enabled: true,
	},
	uiConfigurationJSON: {
		fieldSets: [
			{
				fields: [
					{
						defaultValue: 0.5,
						name: "decay",
						typeOptions: {
							min: 0.01,
							max: 0.99,
							nullable: true,
							step: 0.01,
						},
						label: "Decay",
						type: "slider",
					},
					{
						defaultValue: 0.5,
						name: "offset",
						typeOptions: {
							unit: "days",
							min: 0,
							nullable: true,
							unitSuffix: "d",
						},
						label: "Offset",
						type: "number",
					},
					{
						defaultValue: 0,
						name: "boost",
						typeOptions: {min: 0, nullable: true},
						label: "Boost",
						type: "number",
					},
					{
						defaultValue: "AUTO",
						helpText:
							"Only use fuzziness with the following match types: most fields, best fields, bool prefix.",
						name: "fuzziness",
						typeOptions: {
							nullable: true,
							options: [
								{label: "Auto", value: "AUTO"},
								{label: "0", value: "0"},
								{label: "1", value: "1"},
								{label: "2", value: "2"},
							],
						},
						label: "Fuzziness",
						type: "select",
					},
					{
						name: "start_date",
						label: "Create Date",
						type: "date",
						typeOptions: {min: 0, nullable: true},
					},
					{
						defaultValue: null,
						label: "Role",
						name: "roleId",
						type: "itemSelector",
						typeOptions: {
							itemType: "com.liferay.portal.kernel.model.Role",
							nullable: true,
						},
					},
					{
						name: "field",
						label: "Field",
						type: "fieldMapping",
						typeOptions: {boost: true, nullable: true},
					},
					{
						name: "values",
						label: "Values",
						type: "multiselect",
						typeOptions: {nullable: true},
					},
					{
						defaultValue: [
							{
								field: "localized_title",
								boost: 2,
								locale: "${context.language_id}",
							},
							{
								field: "content",
								boost: 1,
								locale: "${context.language_id}",
							},
						],
						name: "fields",
						typeOptions: {boost: true, nullable: true},
						label: "Fields",
						type: "fieldMappingList",
					},
					{
						defaultValue: "Sample text",
						label: "Text",
						name: "text",
						type: "text",
						typeOptions: {nullable: true},
					},
					{
						defaultValue: {},
						name: "query",
						type: "json",
						typeOptions: {nullable: true},
					},
				],
			},
		],
	},
};
