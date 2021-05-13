/**
 * Main configuration file. This file controls the behavior of the Storybook
 * server, so you must restart Storybook’s process when you change it.
 *
 * https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 */
module.exports = {
	stories: ["../stories/**/*.mdx", "../stories/**/*.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-scss",
	],
};
