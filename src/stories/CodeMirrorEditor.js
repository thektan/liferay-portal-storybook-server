import React from "react";

import CodeMirrorEditor from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/CodeMirrorEditor";
import sxpQueryElementSchema from "src/main/resources/META-INF/resources/sxp_blueprint_admin/schemas/sxp-query-element.schema.json";
import {QUERY_SXP_ELEMENTS} from "test/js/mocks/sxpElements.js";
import {ThemeContextDecorator} from "../decorators";

export default {
	title: "SXP/Components/CodeMirrorEditor",
	component: CodeMirrorEditor,
	decorators: [ThemeContextDecorator],
};

const Template = (args) => (
	<CodeMirrorEditor
		autocompleteSchema={sxpQueryElementSchema}
		onChange={() => {}}
		value={JSON.stringify(QUERY_SXP_ELEMENTS[0], null, 2)}
	/>
);

export const Default = Template.bind({});
