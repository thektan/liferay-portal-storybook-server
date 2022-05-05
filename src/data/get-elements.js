export const GET_ELEMENTS = {
	actions: {},
	facets: [],
	items: [
		{
			actions: {
				get: {
					method: "GET",
					href:
						"http://localhost:8080/o/search-experiences-rest/v1.0/sxp-elements/1",
				},
				create: {
					method: "POST",
					href:
						"http://localhost:8080/o/search-experiences-rest/v1.0/sxp-elements",
				},
				update: {
					method: "PATCH",
					href:
						"http://localhost:8080/o/search-experiences-rest/v1.0/sxp-elements/1",
				},
				delete: {
					method: "DELETE",
					href:
						"http://localhost:8080/o/search-experiences-rest/v1.0/sxp-elements/1",
				},
			},
			createDate: "2022-04-25T19:17:40Z",
			description: "General Description",
			description_i18n: {
				"en-US": "General Description",
			},
			elementDefinition: {
				category: "match",
				configuration: {
					queryConfiguration: {
						queryEntries: [
							{
								clauses: [
									{
										context: "query",
										occur: "must",
										query: {
											multi_match: {
												fuzziness:
													"${configuration.fuzziness}",
												query:
													"${configuration.keywords}",
												minimum_should_match:
													"${configuration.minimum_should_match}",
												boost: "${configuration.boost}",
												fields:
													"${configuration.fields}",
												type: "${configuration.type}",
												operator:
													"${configuration.operator}",
												slop: "${configuration.slop}",
											},
										},
									},
								],
							},
						],
					},
				},
				icon: "picture",
				uiConfiguration: {
					fieldSets: [
						{
							fields: [
								{
									defaultValue: [
										{
											field: "localized_title",
											locale: "${context.language_id}",
											boost: "2",
										},
										{
											field: "content",
											locale: "${context.language_id}",
											boost: "1",
										},
									],
									label: "Fields",
									name: "fields",
									type: "fieldMappingList",
									typeOptions: {
										boost: true,
									},
								},
								{
									defaultValue: "or",
									label: "Operator",
									name: "operator",
									type: "select",
									typeOptions: {
										options: [
											{
												label: "OR",
												value: "or",
											},
											{
												label: "AND",
												value: "and",
											},
										],
									},
								},
								{
									defaultValue: "best_fields",
									label: "Match Type",
									name: "type",
									type: "select",
									typeOptions: {
										options: [
											{
												label: "Best Fields",
												value: "best_fields",
											},
											{
												label: "Most Fields",
												value: "most_fields",
											},
											{
												label: "Cross Fields",
												value: "cross_fields",
											},
											{
												label: "Phrase",
												value: "phrase",
											},
											{
												label: "Phrase Prefix",
												value: "phrase_prefix",
											},
											{
												label: "Boolean Prefix",
												value: "bool_prefix",
											},
										],
									},
								},
								{
									defaultValue: "AUTO",
									helpText:
										"Only use fuzziness with the following match types: most fields, best fields, bool prefix.",
									label: "Fuzziness",
									name: "fuzziness",
									type: "select",
									typeOptions: {
										nullable: true,
										options: [
											{
												label: "Auto",
												value: "AUTO",
											},
											{
												label: "0",
												value: "0",
											},
											{
												label: "1",
												value: "1",
											},
											{
												label: "2",
												value: "2",
											},
										],
									},
								},
								{
									defaultValue: "0",
									label: "Minimum Should Match",
									name: "minimum_should_match",
									type: "text",
									typeOptions: {
										nullable: true,
									},
								},
								{
									defaultValue: "",
									helpText:
										"Only use slop with the following match types: phrase, phrase prefix.",
									label: "Slop",
									name: "slop",
									type: "number",
									typeOptions: {
										min: 0,
										nullable: true,
										step: 1,
									},
								},
								{
									defaultValue: 1,
									label: "Boost",
									name: "boost",
									type: "number",
									typeOptions: {
										min: 0,
									},
								},
								{
									helpText:
										"If this is set, the search terms entered in the search bar will be replaced by this value.",
									label: "Text to Match",
									name: "keywords",
									type: "keywords",
									typeOptions: {
										required: false,
									},
								},
							],
						},
					],
				},
			},
			id: 1,
			modifiedDate: "2022-05-02T23:12:11Z",
			readOnly: false,
			schemaVersion: "1.0",
			title: "Sample Element",
			title_i18n: {
				"en-US": "Sample Element",
			},
			type: 0,
			userName: "Test Test",
		},
	],
	lastPage: 1,
	page: 1,
	pageSize: 20,
	totalCount: 1,
};
