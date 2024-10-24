import React from "react";

import CustomConfigurationRangeOptions from "src/main/resources/META-INF/resources/js/components/CustomConfigurationRangeOptions";
import {SortDecorator} from "../decorators";
import portalSearchWeb from "../../static/learn-resources/portal-search-web.json";

export default {
	title: "Components/CustomConfigurationRangeOptions",
	decorators: [SortDecorator],
	component: Element,
};

const Template = (args) => (
	<CustomConfigurationRangeOptions
		learnResources={{"portal-search-web": portalSearchWeb}}
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {};
