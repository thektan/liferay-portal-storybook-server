import learnMessages from "../static/learn-resources/search-experiences-web.json";

export default {
	availableLanguages: {
		ar_SA: "Arabic (Saudi Arabia)",
		ca_ES: "Catalan (Spain)",
		en_US: "English (United States)",
		nl_NL: "Dutch (Netherlands)",
		zh_CN: "Chinese (China)",
	},
	contextPath: "/o/search-experiences-web",
	defaultLocale: "en_US",
	learnMessages,
	locale: "en_US",
	namespace:
		"_com_liferay_search_experiences_search_configuration_web_internal_portlet_SearchConfigurationAdminPortlet_",
	redirectURL: "",
	spritemap: process.env.SPRITEMAP_PATH,
};
