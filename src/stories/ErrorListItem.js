import React from "react";

import ErrorListItem from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/ErrorListItem";
import {SXP_BLUEPRINT_ERRORS, SXP_ELEMENT_ERRORS} from "../data/errors";

export default {
	title: "Components/ErrorListItem",
	component: ErrorListItem,
};

export const Default = (args) => (
	<div style={{maxWidth: "600px", margin: "0 auto"}}>
		<h3>Blueprint Errors</h3>

		{SXP_BLUEPRINT_ERRORS.map((error, index) => (
			<ErrorListItem error={error} key={index} />
		))}

		<h3>Element Errors</h3>

		{SXP_ELEMENT_ERRORS.map((error, index) => (
			<ErrorListItem error={error} key={index} />
		))}
	</div>
);
