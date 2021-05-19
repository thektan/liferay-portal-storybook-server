const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const fs = require("fs");
const path = require("path");

/**
 * Combine multiple Language.properties files to a single file for
 * liferay-lang-key-dev-loader to read from.
 */
function compileLanguageProperties() {
	const PORTAL_LANG_PATH = path.join(
		process.env.PORTAL_PATH,
		"/portal-impl/src/content/Language.properties"
	);

	const LANG_PATHS = [
		PORTAL_LANG_PATH,
		...process.env.LANGUAGE_PATHS.split(","),
	];

	const output = [];

	LANG_PATHS.filter(fs.existsSync).forEach((langPath) => {
		try {
			output.push(fs.readFileSync(langPath, "utf8"));
		} catch (error) {
			console.log(
				`Failed to read lang key file "${langPath}" due to error: ${error}`
			);
		}
	});

	fs.writeFileSync(
		path.join(__dirname, "../.storybook/Language.properties"),
		output.join("\n")
	);
}

compileLanguageProperties();
