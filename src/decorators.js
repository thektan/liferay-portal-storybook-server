import React from "react";

// import Context from "src/main/resources/META-INF/resources/js/components";
import {LearnResourcesContext} from "../static/mock-components/src/main/resources/META-INF/resources/learn_message/LearnMessage";

import portalSearchWeb from "../static/learn-resources/portal-search-web.json";

export const FeatureFlagDecorator = (featureFlag, enabled) => (Story) => {
	window.Liferay.FeatureFlags = {
		...window.Liferay.FeatureFlags,
		[featureFlag]: enabled,
	};

	return <Story />;
};

export const LanguageIdDecorator = (Story, {args}) => {
	window.Liferay.ThemeDisplay.getBCP47LanguageId = () =>
		args.bcp47LanguageId || "en-US";

	return <Story />;
};

export const SortDecorator = (Story) => (
	<div className="portlet-sort">
		<Story />
	</div>
);

export const SearchBarDecorator = (Story) => (
	<div className="portlet-search-bar">
		<Story />
	</div>
);

export const SearchBarWidgetConfigurationDecorator = (Story) => (
	<div className="portlet-search-bar">
		<div className="sheet sheet-lg">
			<Story />
		</div>
	</div>
);

export const LearnResourcesContextDecorator = (Story) => (
	<LearnResourcesContext.Provider
		value={{
			"portal-search-web": portalSearchWeb,
		}}
	>
		<Story />
	</LearnResourcesContext.Provider>
);
