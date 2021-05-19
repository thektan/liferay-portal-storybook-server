import React from "react";

import ClayLayout from "@clayui/layout";
import ErrorBoundary from "src/main/resources/META-INF/resources/js/shared/ErrorBoundary";

export const EditBlueprintDecorator = (Story) => (
	<ErrorBoundary>
		<div className="edit-blueprint-root">
			<Story />
		</div>
	</ErrorBoundary>
);

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
