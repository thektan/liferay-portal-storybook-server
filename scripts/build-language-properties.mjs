import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Combine multiple Language.properties files to a single file for
 * liferay-lang-key-dev-loader to read from.
 */
function buildLanguageProperties() {
	console.log("🛠 Building static/Language.properties");

	const PORTAL_LANG_PATH = path.join(
		process.env.PORTAL_PATH,
		"/portal-impl/src/content/Language.properties"
	);

	const LANG_PATHS = [
		PORTAL_LANG_PATH,
		...process.env.LANGUAGE_PATHS.split(","),
	];

	console.log(`Combining:`);

	LANG_PATHS.forEach((path) => console.log(`- ${path}`));

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
		path.join(__dirname, "../static/Language.properties"),
		output.join("\n")
	);
}

buildLanguageProperties();
