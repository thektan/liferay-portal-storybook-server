import React from "react";

import ExecutionOptions from "src/main/resources/META-INF/resources/js/execution_options/index.js";

export default {
	title: "Admin/ExecutionOptions",
	component: ExecutionOptions,
};

const Template = (args) => (
	<ExecutionOptions
		concurrentModeSupported={true}
		omniadmin={true}
		portletNamespace=""
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {};
