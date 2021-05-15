import React from "react";
import {ClayIconSpriteContext} from "@clayui/icon";

import "../../liferay-portal-master/portal/modules/apps/frontend-theme/frontend-theme-admin/build/css/main.css";
import "../../liferay-portal-master/portal/modules/apps/frontend-theme/frontend-theme-admin/build/css/clay.css";

import "../../liferay-portal-master/portal/modules/dxp/apps/portal-search-tuning/portal-search-tuning-blueprints-admin-web/src/main/resources/META-INF/resources/css/main.scss";

// Path from static directory defined in --static-dir in package.json
const SPRITEMAP_PATH = "icons.svg";

export const parameters = {
	actions: {argTypesRegex: "^on[A-Z].*"},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<div className="portlet-blueprints-admin">
			<ClayIconSpriteContext.Provider value={SPRITEMAP_PATH}>
				<Story />
			</ClayIconSpriteContext.Provider>
		</div>
	),
];
