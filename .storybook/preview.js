import "../../liferay-portal-master/portal/modules/apps/frontend-theme/frontend-theme-admin/build/css/main.css";
import "../../liferay-portal-master/portal/modules/apps/frontend-theme/frontend-theme-admin/build/css/clay.css";

export const parameters = {
	actions: {argTypesRegex: "^on[A-Z].*"},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
