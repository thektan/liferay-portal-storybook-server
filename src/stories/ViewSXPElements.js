/**
import React from "react";

import ViewSXPElements from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/view_sxp_elements/index";

export default {
	title: "Components/ViewSXPElements",
	parameters: {
		layout: "fullscreen",
	},
	component: ViewSXPElements,
};

const Template = (args) => <ViewSXPElements {...args} />;

export const Default = Template.bind({});

Default.args = {
	apiURL: "/o/search-experiences-rest/v1.0/sxp-elements",
	defaultLocale: "en_US",
	editSXPElementURL:
		"http://localhost:8080/group/guest/~/control_panel/manage?p_p_id=com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet_mvcRenderCommandName=%2Fsxp_blueprint_admin%2Fedit_sxp_element",
	hasAddSXPElementPermission: true,
	namespace:
		"_com_liferay_search_experiences_web_internal_blueprint_admin_portlet_SXPBlueprintAdminPortlet_",
};
*/