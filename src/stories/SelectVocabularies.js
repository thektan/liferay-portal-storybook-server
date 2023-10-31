import React from "react";

import SelectVocabularies from "src/main/resources/META-INF/resources/js/components/SelectVocabularies";
import "src/main/resources/META-INF/resources/css/main.scss";
import portalSearchWeb from "../../static/learn-resources/portal-search-web.json";

export default {
	title: "Components/SelectVocabularies",
	component: Element,
};

const Template = (args) => (
	<SelectVocabularies
		disabled={false}
		initialSelectedVocabularyIds=""
		learnResources={{"portal-search-web": portalSearchWeb}}
		{...args}
	/>
);

export const Default = Template.bind({});

Default.args = {};
