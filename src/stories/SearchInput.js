import React from "react";

import SearchInput from "src/main/resources/META-INF/resources/js/shared/SearchInput";

export default {
	title: "Components/SearchInput",
	component: SearchInput,
	argTypes: {onChange: {action: "changed"}, onEnter: {action: "enter"}},
};

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
