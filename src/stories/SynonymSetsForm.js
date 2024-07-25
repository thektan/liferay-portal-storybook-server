import React from "react";

import SynonymSetsForm from "src/main/resources/META-INF/resources/js/components/SynonymSetsForm.es.js";

export default {
	title: "Synonyms/SynonymSetsForm",
	component: SynonymSetsForm,
	argTypes: {onChange: {action: "changed"}, onEnter: {action: "enter"}},
};

const Template = (args) => <SynonymSetsForm />;

export const Default = Template.bind({});
