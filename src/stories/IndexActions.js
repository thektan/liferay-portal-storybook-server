import React from "react";

import IndexActions from "src/main/resources/META-INF/resources/js/IndexActions";

export default {
	title: "Admin/IndexActions",
	component: IndexActions,
};

const Template = () => (
	<>
		<span className="hide" id="classNameToBackgroundTaskMap">
			{"{}"}
		</span>

		<IndexActions
			redirectURL="/"
			reindexURL="/"
			portletNamespace=""
			data={{
				controlMenuCategoryKey: "tools",
				concurrentModeSupported: true,
				omniadmin: true,
				initialExecutionMode: "concurrent",
				indexReindexerNames: [
					{
						displayName: "Ranking",
						className:
							"com.liferay.portal.search.tuning.rankings.web.internal.index.RankingIndexReindexer",
					},
					{
						displayName: "Synonym Set",
						className:
							"com.liferay.portal.search.tuning.synonyms.web.internal.index.SynonymSetIndexReindexer",
					},
				],
				virtualInstances: [
					{
						name: "System",
						id: "0",
					},
					{
						name: "liferay.com",
						id: "30605463625889",
					},
				],
				searchEngineDiskSpace: {
					usedDiskSpace: 300,
					isLowOnDiskSpace: true,
					availableDiskSpace: 10,
				},
				indexersMap: {
					Account: [
						{
							displayName: "Account Entry",
							className: "com.liferay.account.model.AccountEntry",
							enabled: true,
						},
						{
							displayName: "Account Group",
							className: "com.liferay.account.model.AccountGroup",
							enabled: true,
						},
						{
							displayName: "Account Role",
							className: "com.liferay.account.model.AccountRole",
							enabled: true,
						},
					],
					Products: [
						{
							displayName: "Catalog",
							className:
								"com.liferay.commerce.product.model.CommerceCatalog",
							enabled: true,
						},
						{
							displayName: "Channel",
							className:
								"com.liferay.commerce.product.model.CommerceChannel",
							enabled: true,
						},
						{
							displayName: "Product",
							className:
								"com.liferay.commerce.product.model.CPDefinition",
							enabled: true,
						},
						{
							displayName: "Product Attachment",
							className:
								"com.liferay.commerce.product.model.CPAttachmentFileEntry",
							enabled: true,
						},
						{
							displayName: "Product Display Layout",
							className:
								"com.liferay.commerce.product.model.CPDisplayLayout",
							enabled: true,
						},
						{
							displayName: "Product Option",
							className:
								"com.liferay.commerce.product.model.CPOption",
							enabled: true,
						},
						{
							displayName: "Product Option Category",
							className:
								"com.liferay.commerce.product.model.CPOptionCategory",
							enabled: true,
						},
						{
							displayName: "Product Option Relation",
							className:
								"com.liferay.commerce.product.model.CPDefinitionOptionRel",
							enabled: true,
						},
						{
							displayName: "Product Option Value",
							className:
								"com.liferay.commerce.product.model.CPOptionValue",
							enabled: true,
						},
						{
							displayName: "Product Option Value Relation",
							className:
								"com.liferay.commerce.product.model.CPDefinitionOptionValueRel",
							enabled: true,
						},
						{
							displayName: "Product SKU",
							className:
								"com.liferay.commerce.product.model.CPInstance",
							enabled: true,
						},
						{
							displayName: "Product Specification",
							className:
								"com.liferay.commerce.product.model.CPSpecificationOption",
							enabled: true,
						},
						{
							displayName: "Tax Category",
							className:
								"com.liferay.commerce.product.model.CPTaxCategory",
							enabled: true,
						},
					],
					Inventories: [
						{
							displayName: "Inventory Booked Quantity",
							className:
								"com.liferay.commerce.inventory.model.CommerceInventoryBookedQuantity",
							enabled: true,
						},
						{
							displayName: "Warehouse",
							className:
								"com.liferay.commerce.inventory.model.CommerceInventoryWarehouse",
							enabled: true,
						},
					],
					"Document Library": [
						{
							displayName: "Document",
							className:
								"com.liferay.document.library.kernel.model.DLFileEntry",
							enabled: true,
						},
						{
							displayName: "Documents Folder",
							className:
								"com.liferay.document.library.kernel.model.DLFolder",
							enabled: true,
						},
						{
							displayName: "Document Type",
							className:
								"com.liferay.document.library.kernel.model.DLFileEntryType",
							enabled: true,
						},
					],
					Segments: [
						{
							displayName: "Segments Entry",
							className:
								"com.liferay.segments.model.SegmentsEntry",
							enabled: true,
						},
					],
					Commerce: [
						{
							displayName: "Order",
							className:
								"com.liferay.commerce.model.CommerceOrder",
							enabled: true,
						},
						{
							displayName: "Order Item",
							className:
								"com.liferay.commerce.model.CommerceOrderItem",
							enabled: true,
						},
						{
							displayName: "Order Type",
							className:
								"com.liferay.commerce.model.CommerceOrderType",
							enabled: true,
						},
						{
							displayName: "Shipment",
							className:
								"com.liferay.commerce.model.CommerceShipment",
							enabled: true,
						},
						{
							displayName: "Subscription Entry",
							className:
								"com.liferay.commerce.model.CommerceSubscriptionEntry",
							enabled: true,
						},
					],
					Discounts: [
						{
							displayName: "Discount",
							className:
								"com.liferay.commerce.discount.model.CommerceDiscount",
							enabled: true,
						},
					],
					"Grouped Products": [
						{
							displayName: "Grouped Product",
							className:
								"com.liferay.commerce.product.type.grouped.model.CPDefinitionGroupedEntry",
							enabled: true,
						},
					],
					"List Type Definitions": [
						{
							displayName: "List Type Definition",
							className:
								"com.liferay.list.type.model.ListTypeDefinition",
							enabled: true,
						},
						{
							displayName: "List Type Entry",
							className:
								"com.liferay.list.type.model.ListTypeEntry",
							enabled: true,
						},
					],
					Notification: [
						{
							displayName: "Notification Queue Entry",
							className:
								"com.liferay.notification.model.NotificationQueueEntry",
							enabled: true,
						},
						{
							displayName: "Notification Template",
							className:
								"com.liferay.notification.model.NotificationTemplate",
							enabled: true,
						},
					],
					"Order Rules": [
						{
							displayName: "Order Rule",
							className:
								"com.liferay.commerce.order.rule.model.COREntry",
							enabled: true,
						},
					],
					"Client Extension": [
						{
							displayName: "Client Extension Entry",
							className:
								"com.liferay.client.extension.model.ClientExtensionEntry",
							enabled: true,
						},
					],
					"Dynamic Data Mapping": [
						{
							displayName: "Dynamic Data Mapping Structure",
							className:
								"com.liferay.dynamic.data.mapping.model.DDMStructure",
							enabled: true,
						},
						{
							displayName:
								"Dynamic Data Mapping Structure Layout",
							className:
								"com.liferay.dynamic.data.mapping.model.DDMStructureLayout",
							enabled: true,
						},
						{
							displayName: "Dynamic Data Mapping Template",
							className:
								"com.liferay.dynamic.data.mapping.model.DDMTemplate",
							enabled: true,
						},
						{
							displayName: "Form Instance",
							className:
								"com.liferay.dynamic.data.mapping.model.DDMFormInstance",
							enabled: true,
						},
						{
							displayName: "Form Record",
							className:
								"com.liferay.dynamic.data.mapping.model.DDMFormInstanceRecord",
							enabled: true,
						},
					],
					"Data Engine": [
						{
							displayName: "Data List View",
							className:
								"com.liferay.data.engine.model.DEDataListView",
							enabled: true,
						},
					],
					Lists: [
						{
							displayName: "Dynamic Data Lists Record",
							className:
								"com.liferay.dynamic.data.lists.model.DDLRecord",
							enabled: true,
						},
						{
							displayName: "Dynamic Data Lists Record Set",
							className:
								"com.liferay.dynamic.data.lists.model.DDLRecordSet",
							enabled: true,
						},
					],
					"Web Content": [
						{
							displayName: "Web Content Article",
							className:
								"com.liferay.journal.model.JournalArticle",
							enabled: true,
						},
						{
							displayName: "Web Content Folder",
							className:
								"com.liferay.journal.model.JournalFolder",
							enabled: true,
						},
					],
					Pricing: [
						{
							displayName: "Product Group",
							className:
								"com.liferay.commerce.pricing.model.CommercePricingClass",
							enabled: true,
						},
					],
					"Knowledge Base": [
						{
							displayName: "Knowledge Base Article",
							className:
								"com.liferay.knowledge.base.model.KBArticle",
							enabled: true,
						},
					],
					Asset: [
						{
							displayName: "Asset",
							className:
								"com.liferay.asset.kernel.model.AssetEntry",
							enabled: true,
						},
						{
							displayName: "Category",
							className:
								"com.liferay.asset.kernel.model.AssetCategory",
							enabled: true,
						},
						{
							displayName: "Category Vocabulary",
							className:
								"com.liferay.asset.kernel.model.AssetVocabulary",
							enabled: true,
						},
						{
							displayName: "Tag",
							className:
								"com.liferay.asset.kernel.model.AssetTag",
							enabled: true,
						},
					],
					Portal: [
						{
							displayName: "Address",
							className:
								"com.liferay.portal.kernel.model.Address",
							enabled: true,
						},
						{
							displayName: "Contact",
							className:
								"com.liferay.portal.kernel.model.Contact",
							enabled: true,
						},
						{
							displayName: "Organization",
							className:
								"com.liferay.portal.kernel.model.Organization",
							enabled: true,
						},
						{
							displayName: "Page",
							className: "com.liferay.portal.kernel.model.Layout",
							enabled: true,
						},
						{
							displayName: "User",
							className: "com.liferay.portal.kernel.model.User",
							enabled: true,
						},
						{
							displayName: "User Group",
							className:
								"com.liferay.portal.kernel.model.UserGroup",
							enabled: true,
						},
						{
							displayName: "User Notification Event",
							className:
								"com.liferay.portal.kernel.model.UserNotificationEvent",
							enabled: true,
						},
					],
					"Asset Library": [
						{
							displayName: "Asset Library Entry",
							className: "com.liferay.depot.model.DepotEntry",
							enabled: true,
						},
					],
					"Price Lists": [
						{
							displayName: "Price Entry",
							className:
								"com.liferay.commerce.price.list.model.CommercePriceEntry",
							enabled: true,
						},
						{
							displayName: "Price List",
							className:
								"com.liferay.commerce.price.list.model.CommercePriceList",
							enabled: true,
						},
						{
							displayName: "Tier Price Entry",
							className:
								"com.liferay.commerce.price.list.model.CommerceTierPriceEntry",
							enabled: true,
						},
					],
					"Export Import": [
						{
							displayName: "Export Import Template",
							className:
								"com.liferay.exportimport.kernel.model.ExportImportConfiguration",
							enabled: true,
						},
					],
					"Search Experiences": [
						{
							displayName: "Blueprint",
							className:
								"com.liferay.search.experiences.model.SXPBlueprint",
							enabled: true,
						},
						{
							displayName: "Element",
							className:
								"com.liferay.search.experiences.model.SXPElement",
							enabled: true,
						},
					],
					"Bookmark Entries": [
						{
							displayName: "Bookmarks Entry",
							className:
								"com.liferay.bookmarks.model.BookmarksEntry",
							enabled: true,
						},
						{
							displayName: "Bookmarks Folder",
							className:
								"com.liferay.bookmarks.model.BookmarksFolder",
							enabled: true,
						},
					],
					Translation: [
						{
							displayName: "Translation",
							className:
								"com.liferay.translation.model.TranslationEntry",
							enabled: true,
						},
					],
					Messages: [
						{
							displayName: "Message Boards Category",
							className:
								"com.liferay.message.boards.model.MBCategory",
							enabled: true,
						},
						{
							displayName: "Message Boards Message",
							className:
								"com.liferay.message.boards.model.MBMessage",
							enabled: true,
						},
						{
							displayName: "Message Boards Thread",
							className:
								"com.liferay.message.boards.model.MBThread",
							enabled: true,
						},
					],
					Publications: [
						{
							displayName: "Entry",
							className:
								"com.liferay.change.tracking.model.CTEntry",
							enabled: true,
						},
						{
							displayName: "Process",
							className:
								"com.liferay.change.tracking.model.CTProcess",
							enabled: true,
						},
						{
							displayName: "Publication",
							className:
								"com.liferay.change.tracking.model.CTCollection",
							enabled: true,
						},
						{
							displayName: "Remote",
							className:
								"com.liferay.change.tracking.model.CTRemote",
							enabled: true,
						},
					],
					Calendars: [
						{
							displayName: "Calendar",
							className: "com.liferay.calendar.model.Calendar",
							enabled: true,
						},
						{
							displayName: "Calendar Event",
							className:
								"com.liferay.calendar.model.CalendarBooking",
							enabled: true,
						},
					],
					Terms: [
						{
							displayName: "Term",
							className:
								"com.liferay.commerce.term.model.CommerceTermEntry",
							enabled: true,
						},
					],
					"Recycle Bin": [
						{
							displayName: "Recycle Bin Entry",
							className: "com.liferay.trash.model.TrashEntry",
							enabled: true,
						},
					],
					Redirect: [
						{
							displayName: "Redirect Entry",
							className:
								"com.liferay.redirect.model.RedirectEntry",
							enabled: true,
						},
						{
							displayName: "Redirect Not Found Entry",
							className:
								"com.liferay.redirect.model.RedirectNotFoundEntry",
							enabled: true,
						},
					],
					"Wiki Nodes": [
						{
							displayName: "Wiki Node",
							className: "com.liferay.wiki.model.WikiNode",
							enabled: true,
						},
						{
							displayName: "Wiki Page",
							className: "com.liferay.wiki.model.WikiPage",
							enabled: true,
						},
					],
					Kaleo: [
						{
							displayName: "Kaleo Instance",
							className:
								"com.liferay.portal.workflow.kaleo.model.KaleoInstance",
							enabled: true,
						},
						{
							displayName: "Kaleo Instance Token",
							className:
								"com.liferay.portal.workflow.kaleo.model.KaleoInstanceToken",
							enabled: true,
						},
						{
							displayName: "Kaleo Log",
							className:
								"com.liferay.portal.workflow.kaleo.model.KaleoLog",
							enabled: true,
						},
						{
							displayName: "Kaleo Task Instance Token",
							className:
								"com.liferay.portal.workflow.kaleo.model.KaleoTaskInstanceToken",
							enabled: true,
						},
					],
					Currencies: [
						{
							displayName: "Commerce Currency",
							className:
								"com.liferay.commerce.currency.model.CommerceCurrency",
							enabled: true,
						},
					],
					"Shop By Diagram": [
						{
							displayName: "Product Diagram Entry",
							className:
								"com.liferay.commerce.shop.by.diagram.model.CSDiagramEntry",
							enabled: true,
						},
					],
					Payment: [
						{
							displayName: "Payment",
							className:
								"com.liferay.commerce.payment.model.CommercePaymentEntry",
							enabled: true,
						},
						{
							displayName: "Payment Entry Audit",
							className:
								"com.liferay.commerce.payment.model.CommercePaymentEntryAudit",
							enabled: true,
						},
					],
					"Blog Entries": [
						{
							displayName: "Blogs Entry",
							className: "com.liferay.blogs.model.BlogsEntry",
							enabled: true,
						},
					],
					"Object Definitions": [
						{
							displayName: "Object Action",
							className: "com.liferay.object.model.ObjectAction",
							enabled: true,
						},
						{
							displayName: "Object Definition",
							className:
								"com.liferay.object.model.ObjectDefinition",
							enabled: true,
						},
						{
							displayName: "Object Field",
							className: "com.liferay.object.model.ObjectField",
							enabled: true,
						},
						{
							displayName: "Object Folder",
							className: "com.liferay.object.model.ObjectFolder",
							enabled: true,
						},
						{
							displayName: "Object Layout",
							className: "com.liferay.object.model.ObjectLayout",
							enabled: true,
						},
						{
							displayName: "Object Relationship",
							className:
								"com.liferay.object.model.ObjectRelationship",
							enabled: true,
						},
						{
							displayName: "Object Validation Rule",
							className:
								"com.liferay.object.model.ObjectValidationRule",
							enabled: true,
						},
						{
							displayName: "Object View",
							className: "com.liferay.object.model.ObjectView",
							enabled: true,
						},
					],
					"Configuration Admin": [
						{
							displayName: "Configuration Model",
							className:
								"com.liferay.configuration.admin.web.internal.model.ConfigurationModel",
							enabled: true,
						},
					],
					"Shipping Engine Fixed": [
						{
							displayName: "Shipping Fixed Option",
							className:
								"com.liferay.commerce.shipping.engine.fixed.model.CommerceShippingFixedOption",
							enabled: true,
						},
					],
				},
			}}
		/>
	</>
);

export const Default = Template.bind({});

Default.args = {};
