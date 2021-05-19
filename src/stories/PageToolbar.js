import React from "react";

import PageToolbar from "src/main/resources/META-INF/resources/js/shared/PageToolbar";
import {EditBlueprintDecorator} from "../decorators";

export default {
	title: "Components/PageToolbar",
	decorators: [EditBlueprintDecorator],
	parameters: {
		layout: "fullscreen",
	},
	component: PageToolbar,
};

const Template = (args) => <PageToolbar {...args} />;

export const Default = Template.bind({});

Default.args = {
	initialTitle: {
		"en-US": "Test Title",
	},
	onCancel: "#",
	tab: "query-builder",
	tabs: {
		"query-builder": "Query Builder",
		settings: "Settings",
	},
};
