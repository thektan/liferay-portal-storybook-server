import React from "react";

import SelectVocabularies from "src/main/resources/META-INF/resources/js/components/SelectVocabularies";
import "src/main/resources/META-INF/resources/css/main.scss";

export default {
	title: "Components/SelectVocabularies",
	component: Element,
};

const Template = (args) => (
	<SelectVocabularies
		disabled={false}
		initialSelectedVocabularyIds=""
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {};
