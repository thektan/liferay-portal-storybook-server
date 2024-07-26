import React from "react";

import PageToolbar from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/PageToolbar";
import {EditBlueprintDecorator, ThemeContextDecorator} from "../decorators";

export default {
	title: "SXP/Components/PageToolbar",
	decorators: [EditBlueprintDecorator, ThemeContextDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: PageToolbar,
};

const Template = (args) => <PageToolbar {...args} />;

export const Default = Template.bind({});

Default.args = {
	title: "Test Title",
	titleI18n: {
		"en-US": "Test Title",
		"es-ES": "Test Titulo",
	},
	description: "Test Description",
	descriptionI18n: {
		"en-US": "Test Description",
		"es-ES": "Test Descripcion",
	},
	onCancel: "#",
	tab: "query-builder",
	tabs: {
		"query-builder": "Query Builder",
		settings: "Settings",
	},
};
