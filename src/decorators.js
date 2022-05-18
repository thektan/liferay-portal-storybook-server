import React from "react";

import ClayLayout from "@clayui/layout";
// import Context from "src/main/resources/META-INF/resources/js/components";

export const SortDecorator = (Story) => (
	<div className="portlet-sort">
		<Story />
	</div>
);

export const SearchBarDecorator = (Story) => (
	<div className="portlet-search-bar">
		<Story />
	</div>
);
