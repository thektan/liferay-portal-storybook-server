/**
 * Main configuration file. This file controls the behavior of the Storybook
 * server, so you must restart Storybook’s process when you change it.
 *
 * https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 */
import type {StorybookConfig} from "@storybook/react-webpack5";
import type {Indexer} from "@storybook/types";

import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import path from "path";
import webpack from "webpack";

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const CWD = process.cwd();

const portalPath = process.env.PORTAL_PATH || path.resolve(CWD, "../portal");

const cssPath = `${portalPath}/modules/apps/frontend-theme/frontend-theme-admin/build/css/clay`;
const nodeModulePath = `${portalPath}/modules/node_modules`;
const sxpPath = `${portalPath}/modules/dxp/apps/search-experiences/search-experiences-web`;
const rankingsPath = `${portalPath}/modules/dxp/apps/portal-search-tuning/portal-search-tuning-rankings-web`;
const synonymsPath = `${portalPath}/modules/dxp/apps/portal-search-tuning/portal-search-tuning-synonyms-web`;

const config: StorybookConfig = {
	stories: [
		"../src/stories/**/*.mdx",
		"../src/stories/**/*.@(js|jsx|ts|tsx)",
		"../src/stories/**/*.stories.@(js|jsx|ts|tsx)", // Matches existing indexer
	],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-scss",
		"@storybook/addon-webpack5-compiler-babel",
	],

	webpackFinal: async (config) => {
		const newConfig = {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...(config?.resolve?.alias || {}),
					"atlas-variables": require.resolve(
						path.join(
							portalPath,
							"/modules/apps/frontend-theme/frontend-theme-classic/build/css/clay/atlas-variables.scss",
						),
					),
					"cadmin-variables": require.resolve(
						path.join(
							portalPath,
							"/modules/apps/frontend-theme/frontend-theme-classic/build/css/clay/_cadmin-variables.scss",
						),
					),
				},
				modules: [
					...(config.resolve?.modules || []),
					path.resolve(cssPath),
					path.resolve(nodeModulePath),
					path.resolve(sxpPath),
					path.resolve(rankingsPath),
					path.resolve(synonymsPath),
				],
			},
			module: {
				...(config.module || []),

				// Include module components to run babel on. Path from where the
				// `yarn storybook` command is run.
				rules: [
					...(config.module?.rules || []),
					{
						include: [
							path.resolve(sxpPath),
							path.resolve(rankingsPath),
							path.resolve(synonymsPath),
						],
					},
					{
						exclude: /node_modules/,
						test: /\.js|tsx$/,
						use: [
							{
								loader: "liferay-lang-key-dev-loader",
								options: {
									path: path.join(
										CWD,
										"static/Language.properties",
									),
								},
							},
						],
					},
					{
						test: /\.(?:js|mjs|cjs|tsx)$/,
						exclude: /node_modules/,
						use: {
							loader: "babel-loader",
							options: {
								presets: [
									[
										"@babel/preset-env",
										{targets: "defaults"},
									],
								],
							},
						},
					},
				],
			},
			plugins: [
				...(config.plugins || []),
				new webpack.NormalModuleReplacementPlugin(
					/frontend-js-components-web/,
					path.join(__dirname, "frontend-js-components-web.mock.js"),
				),
				new webpack.NormalModuleReplacementPlugin(
					/frontend-js-react-web/,
					path.join(__dirname, "frontend-js-react-web.mock.js"),
				),
				new webpack.NormalModuleReplacementPlugin(
					/frontend-js-web/,
					path.join(__dirname, "frontend-js-web.mock.js"),
				),
				new webpack.NormalModuleReplacementPlugin(
					/asset-taglib/,
					path.join(__dirname, "asset-taglib.mock.js"),
				),
				new webpack.NormalModuleReplacementPlugin(
					/@liferay\/frontend-js-codemirror-web/,
					path.join(__dirname, "frontend-js-codemirror-web.mock.js"),
				),
			],
		};

		return newConfig;
	},

	experimental_indexers: async (existingIndexers: Indexer[]) => {
		return [
			...existingIndexers,
			{
				test: /.(m?js|ts)x?$/,
				createIndex: existingIndexers[0].createIndex,
			},
		];
	},

	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	staticDirs: ["../static"],

	docs: {},

	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
};
export default config;
