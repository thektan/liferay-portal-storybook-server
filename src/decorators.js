import React from "react";

import ClayLayout from "@clayui/layout";
import {LearnResourcesContext} from "../static/mock-components/src/main/resources/META-INF/resources/learn_message/LearnMessage";

import searchExperiencesWeb from "../static/learn-resources/search-experiences-web.json";

export const ContainerDecorator = (Story) => (
	<ClayLayout.ContainerFluid size="md" view>
		<Story />
	</ClayLayout.ContainerFluid>
);

export const ColorSchemeDecorator = (colorScheme) => (Story) => {
	document.documentElement.setAttribute("data-color-scheme", colorScheme);

	return <Story />;
};

export const FeatureFlagDecorator = (featureFlag, enabled) => (Story) => {
	window.Liferay.FeatureFlags = {
		...window.Liferay.FeatureFlags,
		[featureFlag]: enabled,
	};

	return <Story />;
};

export const SheetDecorator = (Story) => (
	<div class="sheet sheet-lg">
		<Story />
	</div>
);

export const LearnResourcesContextDecorator = (Story) => (
	<LearnResourcesContext.Provider
		value={{
			"search-experiences-web": searchExperiencesWeb,
		}}
	>
		<Story />
	</LearnResourcesContext.Provider>
);

/**
 * Example decorator for adding a context provider.
 */

// import ThemeContext from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/ThemeContext";
// import CONTEXT from "./context";
//
// export const ThemeContextDecorator = (Story) => (
// 	<ThemeContext.Provider value={CONTEXT}>
// 		<Story />
// 	</ThemeContext.Provider>
// );
