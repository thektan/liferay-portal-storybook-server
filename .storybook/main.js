/**
 * Main configuration file. This file controls the behavior of the Storybook
 * server, so you must restart Storybook’s process when you change it.
 *
 * https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 */

const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const path = require("path");
const webpack = require("webpack");

const CWD = process.cwd();

module.exports = {
	stories: [
		"../src/stories/**/*.mdx",
		"../src/stories/**/*.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-scss",
	],
	webpackFinal: async (config) => {
		config.resolve.modules = [
			...(config.resolve.modules || []),
			path.resolve(process.env.PORTAL_NODE_MODULES),
			path.resolve(process.env.MODULE_PATH),
		];

		// Include module components to run babel on. Path from where the
		// `yarn storybook` command is run.
		config.module.rules[0].include.push(
			path.resolve(process.env.MODULE_PATH)
		);

		config.module.rules.push({
			exclude: /node_modules/,
			test: /\.js$/,
			use: [
				{
					loader: "liferay-lang-key-dev-loader",
					options: {
						path: path.join(CWD, "static/Language.properties"),
					},
				},
			],
		});

		config.plugins.push(
			new webpack.NormalModuleReplacementPlugin(
				/frontend-js-components-web/,
				path.join(__dirname, "frontend-js-components-web.mock.js")
			)
		);

		config.plugins.push(
			new webpack.NormalModuleReplacementPlugin(
				/frontend-js-react-web/,
				path.join(__dirname, "frontend-js-react-web.mock.js")
			)
		);

		config.plugins.push(
			new webpack.NormalModuleReplacementPlugin(
				/frontend-js-web/,
				path.join(__dirname, "frontend-js-web.mock.js")
			)
		);

		config.resolve.alias["atlas-variables"] = require.resolve(
			path.join(
				process.env.PORTAL_PATH,
				"/modules/apps/frontend-theme/frontend-theme-classic/build/css/clay/atlas-variables.scss"
			)
		);

		return config;
	},
};
