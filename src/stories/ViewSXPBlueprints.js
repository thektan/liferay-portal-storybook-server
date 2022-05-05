import React from "react";

import ViewSXPBlueprints from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/view_sxp_blueprints/index";
import {EditBlueprintDecorator} from "../decorators";

export default {
	title: "Components/ViewSXPBlueprints",
	decorators: [EditBlueprintDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: ViewSXPBlueprints,
};

const Template = (args) => <ViewSXPBlueprints {...args} />;

export const Default = Template.bind({});

Default.args = {
	apiURL: "/o/search-experiences-rest/v1.0/sxp-blueprints",
	// apiURL: "https://run.mocky.io/v3/b163d9ae-e2dc-4225-b9b3-19a26a946459",
	defaultLocale: "en_US",
	editSXPBlueprintURL:
		"http://localhost:8080/group/guest/~/control_panel/manage?p_p_id=com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet_mvcRenderCommandName=%2Fsxp_blueprint_admin%2Fedit_sxp_blueprint",
	hasAddSXPBlueprintPermission: true,
	namespace:
		"_com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet_",
};

/**
 * Unused, but keeping these for reference

	fdsActionDropdownItems: [
		{
			data: {
				method: "get",
				permissionKey: "view",
				id: "edit",
			},
			icon: "pencil",
			href:
				"http://localhost:8080/group/guest/~/control_panel/manage?p_p_id=com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet_mvcRenderCommandName=%2Fsxp_blueprint_admin%2Fedit_sxp_blueprint&_com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet_sxpBlueprintId=%7Bid%7D",
			label: "Edit",
			type: "item",
			target: null,
		},
		{
			data: {
				method: null,
				permissionKey: null,
				id: "export",
			},
			icon: "download",
			href: "#",
			label: "Export",
			type: "item",
			target: null,
		},
		{
			data: {
				method: "delete",
				permissionKey: "delete",
				id: "delete",
				confirmationMessage:
					"Are you sure you want to delete this entry?",
			},
			icon: "trash",
			href: "/o/search-experiences-rest/v1.0/sxp-blueprints/{id}",
			label: "Delete",
			type: "item",
			target: "async",
		},
	],
	creationMenu: {
		primaryItems: [
			{
				href: "addSXPBlueprint",
				label: "Add Blueprint",
				type: "item",
				target: "event",
			},
		],
	},
	id: "sxpBlueprints",

*/
