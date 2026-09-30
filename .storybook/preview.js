import React from "react";
import {ClayIconSpriteContext} from "@clayui/icon";

import "@portal/modules/apps/frontend-theme/frontend-theme-admin/build/css/main.scss";
import "@portal/modules/apps/frontend-theme/frontend-theme-admin/build/css/clay.scss";

import "src/main/resources/META-INF/resources/sxp_blueprint_admin/css/main.scss";

import {ColorSchemeToolbarDecorator} from "../src/decorators";

const SPRITEMAP_PATH = "icons.svg";

export const parameters = {
	actions: {argTypesRegex: "^on[A-Z].*"},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		// https://storybook.js.org/docs/ember/writing-stories/naming-components-and-hierarchy
		storySort: {
			order: ["Pages", "Components"],
		},
	},
};

export const globalTypes = {
	colorScheme: {
		description: "Portal color scheme (data-color-scheme)",
		toolbar: {
			dynamicTitle: true,
			icon: "contrast",
			items: [
				{icon: "sun", title: "Light", value: "light"},
				{icon: "moon", title: "Dark", value: "dark"},
				{
					icon: "contrast",
					title: "Dark High Contrast",
					value: "dark-high-contrast",
				},
			],
			title: "Color Scheme",
		},
	},
};

export const initialGlobals = {
	colorScheme: "light",
};

export const decorators = [
	ColorSchemeToolbarDecorator,
	(Story) => (
		<div className="portlet-sxp-blueprint-admin">
			<ClayIconSpriteContext.Provider value={SPRITEMAP_PATH}>
				<Story />
			</ClayIconSpriteContext.Provider>
		</div>
	),
];
export const tags = ["autodocs"];
