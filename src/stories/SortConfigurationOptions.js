import React from "react";

import SortConfigurationOptions from "src/main/resources/META-INF/resources/js/components/SortConfigurationOptions";
import {SortDecorator} from "../decorators";

export default {
	title: "Components/SortConfigurationOptions",
	decorators: [SortDecorator],
	component: Element,
};

const Template = (args) => <SortConfigurationOptions {...args} />;

export const Default = Template.bind({});

Default.args = {};
