import React from "react";

import ClayLayout from "@clayui/layout";
import ErrorBoundary from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/ErrorBoundary";
import ThemeContext from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/ThemeContext";

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
