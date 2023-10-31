import React from "react";

import SortConfigurationOptions from "src/main/resources/META-INF/resources/js/components/SortConfigurationOptions";
import {SortDecorator} from "../decorators";
import portalSearchWeb from "../../static/learn-resources/portal-search-web.json";

export default {
	title: "Components/SortConfigurationOptions",
	decorators: [SortDecorator],
	component: Element,
};

const Template = (args) => (
	<SortConfigurationOptions
		learnResources={{"portal-search-web": portalSearchWeb}}
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {};
