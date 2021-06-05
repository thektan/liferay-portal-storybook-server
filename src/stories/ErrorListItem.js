import React from "react";

import ErrorListItem from "src/main/resources/META-INF/resources/js/shared/ErrorListItem";
import {BLUEPRINT_ERRORS, ELEMENT_ERRORS} from "../data/errors";

export default {
	title: "Components/ErrorListItem",
	component: ErrorListItem,
};

export const Default = (args) => (
	<div style={{maxWidth: "600px", margin: "0 auto"}}>
		<h3>Blueprint Errors</h3>

		{BLUEPRINT_ERRORS.map((error, index) => (
			<ErrorListItem item={error} key={index} />
		))}

		<h3>Element Errors</h3>

		{ELEMENT_ERRORS.map((error, index) => (
			<ErrorListItem item={error} key={index} />
		))}
	</div>
);
