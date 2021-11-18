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

import boostAllKeywordsMatch from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/sxp_elements/boostAllKeywordsMatch";
import pasteAnyElasticsearchQuery from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/sxp_elements/pasteAnyElasticsearchQuery";
import {
	getSXPElementOutput,
	getSXPBlueprintForm,
} from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/utils/utils";

export const ENTITY_JSON = {
	"com.liferay.asset.kernel.model.AssetTag": {
		multiple: false,
		title: "Select Tag",
		url: "http:…",
	},
	"com.liferay.portal.kernel.model.Group": {
		multiple: false,
		title: "Select Site",
		url: "http:…",
	},
	"com.liferay.portal.kernel.model.Organization": {
		multiple: true,
		title: "Select Organization",
		url: "http:/…",
	},
	"com.liferay.portal.kernel.model.Role": {
		multiple: false,
		title: "Select Role",
		url: "http:…",
	},
	"com.liferay.portal.kernel.model.Team": {
		multiple: false,
		title: "Select Team",
		url: "http:…",
	},
	"com.liferay.portal.kernel.model.User": {
		multiple: true,
		title: "Select User",
		url: "http:/…",
	},
	"com.liferay.portal.kernel.model.UserGroup": {
		multiple: false,
		title: "Select User Group",
		url: "http:…",
	},
};

export const INDEX_FIELDS = [
	{
		language_id_position: -1,
		name: "ddmTemplateKey",
		type: "keyword",
	},
	{
		language_id_position: -1,
		name: "entryClassPK",
		type: "keyword",
	},
	{
		language_id_position: -1,
		name: "publishDate",
		type: "date",
	},
	{
		language_id_position: -1,
		name: "configurationModelFactoryPid",
		type: "keyword",
	},
	{
		language_id_position: 11,
		name: "description",
		type: "text",
	},
	{
		language_id_position: -1,
		name: "discussion",
		type: "keyword",
	},
	{
		language_id_position: -1,
		name: "screenName",
		type: "keyword",
	},
	{
		language_id_position: 15,
		name: "localized_title",
		type: "text",
	},
	{
		language_id_position: -1,
		name: "catalogBasePriceList",
		type: "text",
	},
	{
		language_id_position: -1,
		name: "path",
		type: "keyword",
	},
];

export const SEARCHABLE_TYPES = [
	{
		className: "com.liferay.blogs.model.BlogsEntry",
		displayName: "Blogs Entry",
	},
	{
		className: "com.liferay.bookmarks.model.BookmarksEntry",
		displayName: "Bookmarks Entry",
	},
	{
		className: "com.liferay.bookmarks.model.BookmarksFolder",
		displayName: "Bookmarks Folder",
	},
	{
		className: "com.liferay.calendar.model.CalendarBooking",
		displayName: "Calendar Event",
	},
	{
		className: "com.liferay.commerce.product.model.CPDefinition",
		displayName: "Commerce Product",
	},
	{
		className: "com.liferay.document.library.kernel.model.DLFileEntry",
		displayName: "Document",
	},
	{
		className: "com.liferay.document.library.kernel.model.DLFolder",
		displayName: "Documents Folder",
	},
	{
		className: "com.liferay.dynamic.data.lists.model.DDLRecord",
		displayName: "Dynamic Data Lists Record",
	},
	{
		className:
			"com.liferay.dynamic.data.mapping.model.DDMFormInstanceRecord",
		displayName: "Form Record",
	},
	{
		className: "com.liferay.knowledge.base.model.KBArticle",
		displayName: "Knowledge Base Article",
	},
	{
		className: "com.liferay.message.boards.model.MBMessage",
		displayName: "Message Boards Message",
	},
	{
		className: "com.liferay.portal.kernel.model.Layout",
		displayName: "Page",
	},
	{
		className: "com.liferay.portal.kernel.model.User",
		displayName: "User",
	},
	{
		className: "com.liferay.journal.model.JournalArticle",
		displayName: "Web Content Article",
	},
	{
		className: "com.liferay.journal.model.JournalFolder",
		displayName: "Web Content Folder",
	},
	{
		className: "com.liferay.wiki.model.WikiPage",
		displayName: "Wiki Page",
	},
];

export const KEYWORD_QUERY_CONTRIBUTORS = [
	"com.liferay.portal.workflow.kaleo.internal.search.spi.model.query.contributor.KaleoInstanceTokenKeywordQueryContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.AlwaysPresentFieldsKeywordQueryContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.AssetCategoryTitlesKeywordQueryContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.AssetInternalCategoryTitlesKeywordQueryContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.AssetTagNamesKeywordQueryContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.DefaultKeywordQueryContributor",
	"com.liferay.blogs.internal.search.spi.model.query.contributor.BlogsEntryKeywordQueryContributor",
	"com.liferay.redirect.internal.search.spi.model.query.contributor.RedirectEntryKeywordQueryContributor",
	"com.liferay.redirect.internal.search.spi.model.query.contributor.RedirectNotFoundEntryKeywordQueryContributor",
	"com.liferay.layout.internal.search.spi.model.query.contributor.LayoutKeywordQueryContributor",
	"com.liferay.dynamic.data.mapping.internal.search.spi.model.query.contributor.DDMFormInstanceRecordKeywordQueryContributor",
	"com.liferay.dynamic.data.mapping.internal.search.spi.model.query.contributor.DDMStructureKeywordQueryContributor",
	"com.liferay.dynamic.data.mapping.internal.search.spi.model.query.contributor.DDMStructureLayoutKeywordQueryContributor",
	"com.liferay.dynamic.data.mapping.internal.search.spi.model.query.contributor.DDMTemplateKeywordQueryContributor",
	"com.liferay.account.internal.search.spi.model.query.contributor.AccountEntryKeywordQueryContributor",
	"com.liferay.account.internal.search.spi.model.query.contributor.AccountGroupKeywordQueryContributor",
	"com.liferay.asset.categories.internal.search.spi.model.query.contributor.AssetCategoryKeywordQueryContributor",
	"com.liferay.asset.categories.internal.search.spi.model.query.contributor.AssetVocabularyKeywordQueryContributor",
	"com.liferay.exportimport.internal.search.spi.model.query.contributor.ExportImportConfigurationKeywordQueryContributor",
	"com.liferay.depot.internal.search.spi.model.query.contributor.DepotEntryKeywordQueryContributor",
	"com.liferay.organizations.internal.search.spi.model.query.contributor.OrganizationKeywordQueryContributor",
	"com.liferay.calendar.internal.search.spi.model.query.contributor.CalendarBookingKeywordQueryContributor",
	"com.liferay.calendar.internal.search.spi.model.query.contributor.CalendarKeywordQueryContributor",
	"com.liferay.asset.tags.internal.search.spi.model.query.contributor.AssetTagKeywordQueryContributor",
	"com.liferay.address.internal.search.spi.model.query.contributor.AddressKeywordQueryContributor",
	"com.liferay.contacts.internal.search.spi.model.query.contributor.ContactKeywordQueryContributor",
	"com.liferay.translation.internal.search.spi.model.query.contributor.TranslationEntryKeywordQueryContributor",
	"com.liferay.dynamic.data.lists.internal.search.spi.model.query.contributor.DDLRecordSetKeywordQueryContributor",
	"com.liferay.users.admin.internal.search.spi.model.query.contributor.UserKeywordQueryContributor",
	"com.liferay.segments.internal.search.spi.model.query.contributor.SegmentsEntryKeywordQueryContributor",
	"com.liferay.document.library.internal.search.spi.model.query.contributor.DLFileEntryKeywordQueryContributor",
];

export const MODEL_PREFILTER_CONTRIBUTORS = [
	"com.liferay.portal.workflow.kaleo.internal.search.spi.model.query.contributor.KaleoLogModelPreFilterContributor",
	"com.liferay.portal.workflow.kaleo.internal.search.spi.model.query.contributor.KaleoInstanceModelPreFilterContributor",
	"com.liferay.portal.workflow.kaleo.internal.search.spi.model.query.contributor.KaleoInstanceTokenModelPreFilterContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.StagingModelPreFilterContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.WorkflowStatusModelPreFilterContributor",
	"com.liferay.blogs.internal.search.spi.model.query.contributor.BlogsEntryModelPreFilterContributor",
	"com.liferay.redirect.internal.search.spi.model.query.contributor.RedirectNotFoundEntryModelPreFilterContributor",
	"com.liferay.layout.internal.search.spi.model.query.contributor.LayoutModelPreFilterContributor",
	"com.liferay.dynamic.data.mapping.internal.search.spi.model.query.contributor.DDMStructureLayoutModelPreFilterContributor",
	"com.liferay.dynamic.data.mapping.internal.search.spi.model.query.contributor.DDMStructureModelPreFilterContributor",
	"com.liferay.dynamic.data.mapping.internal.search.spi.model.query.contributor.DDMTemplateModelPreFilterContributor",
	"com.liferay.account.internal.search.spi.model.query.contributor.AccountEntryModelPreFilterContributor",
	"com.liferay.account.internal.search.spi.model.query.contributor.OrganizationModelPreFilterContributor",
	"com.liferay.account.internal.search.spi.model.query.contributor.UserModelPreFilterContributor",
	"com.liferay.message.boards.internal.search.spi.model.query.contributor.MBCategoryModelPreFilterContributor",
	"com.liferay.message.boards.internal.search.spi.model.query.contributor.MBThreadModelPreFilterContributor",
	"com.liferay.asset.categories.internal.search.spi.model.query.contributor.AssetCategoryModelPreFilterContributor",
	"com.liferay.exportimport.internal.search.spi.model.query.contributor.ExportImportConfigurationModelPreFilterContributor",
	"com.liferay.organizations.internal.search.spi.model.query.contributor.OrganizationModelPreFilterContributor",
	"com.liferay.calendar.internal.search.spi.model.query.contributor.CalendarBookingModelPreFilterContributor",
	"com.liferay.bookmarks.internal.search.spi.model.query.contributor.BookmarksEntryModelPreFilterContributor",
	"com.liferay.bookmarks.internal.search.spi.model.query.contributor.BookmarksFolderModelPreFilterContributor",
	"com.liferay.object.internal.search.spi.model.query.contributor.ObjectEntryModelPreFilterContributor",
	"com.liferay.dynamic.data.lists.internal.search.spi.model.query.contributor.DDLRecordSetModelPreFilterContributor",
	"com.liferay.users.admin.internal.search.spi.model.query.contributor.UserModelPreFilterContributor",
	"com.liferay.segments.internal.search.spi.model.query.contributor.SegmentsEntryModelPreFilterContributor",
	"com.liferay.segments.internal.search.spi.model.query.contributor.UserModelPreFilterContributor",
	"com.liferay.document.library.internal.search.spi.model.query.contributor.DLFolderModelPreFilterContributor",
];

export const QUERY_PREFILTER_CONTRIBUTORS = [
	"com.liferay.portal.search.internal.spi.model.query.contributor.AssetCategoryIdsQueryPreFilterContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.AssetTagNamesQueryPreFilterContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.FolderIdQueryPreFilterContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.LayoutQueryPreFilterContributor",
	"com.liferay.portal.search.internal.spi.model.query.contributor.UserIdQueryPreFilterContributor",
];

export const QUERY_SXP_ELEMENTS = [
	boostAllKeywordsMatch,
	pasteAnyElasticsearchQuery,
];

export const INITIAL_CONFIGURATION = {
	advanced: {},
	aggregationConfiguration: {},
	facet: {},
	general: {
		clauseContributorsExcludes: [
			"com.liferay.portal.workflow.kaleo.internal.search.spi.model.query.contributor.KaleoInstanceTokenKeywordQueryContributor",
		],
		clauseContributorsIncludes: [
			"com.liferay.portal.search.internal.spi.model.query.contributor.AlwaysPresentFieldsKeywordQueryContributor",
			"com.liferay.account.internal.search.spi.model.query.contributor.AccountGroupKeywordQueryContributor",
		],
		searchableAssetTypes: SEARCHABLE_TYPES.map(({className}) => className),
	},
	highlight: {},
	parameters: {},
	queryConfiguration: {
		applyIndexerClauses: true,
	},
	sortConfiguration: {},
};
