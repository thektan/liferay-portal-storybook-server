import React from "react";

import ClayLayout from "@clayui/layout";

export const ContainerDecorator = (Story) => (
	<ClayLayout.ContainerFluid size="md" view>
		<Story />
	</ClayLayout.ContainerFluid>
);

export const SheetDecorator = (Story) => (
	<div class="sheet sheet-lg">
		<Story />
	</div>
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
