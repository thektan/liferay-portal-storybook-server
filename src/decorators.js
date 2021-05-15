import React from "react";

import ErrorBoundary from "../../liferay-portal-master/portal/modules/dxp/apps/portal-search-tuning/portal-search-tuning-blueprints-admin-web/src/main/resources/META-INF/resources/js/shared/ErrorBoundary";

export const EditBlueprintDecorator = (Story) => (
	<ErrorBoundary>
		<div className="edit-blueprint-root">
			<Story />
		</div>
	</ErrorBoundary>
);
