import React from "react";

import ClayLayout from "@clayui/layout";
import ErrorBoundary from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/ErrorBoundary";
import ThemeContext from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/ThemeContext";
import {LearnResourcesContext} from "../static/mock-components/src/main/resources/META-INF/resources/learn_message/LearnMessage";

import portalSearchTuningRankingsWeb from "../static/learn-resources/portal-search-tuning-rankings-web.json";
import searchExperiencesWeb from "../static/learn-resources/search-experiences-web.json";

import CONTEXT from "./context";

export const BuilderDecorator = (Story) => (
	<div className="builder">
		<Story />
	</div>
);

export const ContainerDecorator = (Story) => (
	<ClayLayout.ContainerFluid size="md" view>
		<Story />
	</ClayLayout.ContainerFluid>
);

export const EditBlueprintDecorator = (Story) => (
	<ErrorBoundary>
		<div className="edit-sxp-blueprint-root">
			<Story />
		</div>
	</ErrorBoundary>
);

export const EditElementDecorator = (Story) => (
	<ErrorBoundary>
		<div className="edit-sxp-element-root">
			<Story />
		</div>
	</ErrorBoundary>
);

export const ThemeContextDecorator = (Story) => (
	<ThemeContext.Provider value={CONTEXT}>
		<Story />
	</ThemeContext.Provider>
);

export const LearnResourcesContextDecorator = (Story) => (
	<LearnResourcesContext.Provider
		value={{
			"portal-search-tuning-rankings-web": portalSearchTuningRankingsWeb,
			"search-experiences-web": searchExperiencesWeb,
		}}
	>
		<Story />
	</LearnResourcesContext.Provider>
);
