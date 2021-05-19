const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const fs = require("fs");

function callback(error, filePath) {
	if (error) throw error;

	console.log(
		`${filePath} was successfully copied to ${process.env.STATIC_PATH}`
	);
}

/**
 * Copies static files from portal.
 */
function copyStaticFiles() {
	fs.copyFile(
		`${process.env.PORTAL_PATH}/modules/apps/frontend-theme/frontend-theme-unstyled/src/main/resources/META-INF/resources/_unstyled/images/clay/icons.svg`,
		`.${process.env.STATIC_PATH}/icons.svg`,
		(error) =>
			callback(
				error,
				`${process.env.PORTAL_PATH}/modules/apps/frontend-theme/frontend-theme-unstyled/src/main/resources/META-INF/resources/_unstyled/images/clay/icons.svg`
			)
	);
}

copyStaticFiles();
