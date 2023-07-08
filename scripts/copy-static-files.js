const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const fs = require("fs-extra");

/**
 * For fixing the error:
 * Module not found: Error: Can't resolve './@theme_image_path@/states/success_state.gif' in
 * '/Users/ktan/Developer/liferay-portal-master/portal/modules/apps/frontend-theme/frontend-theme-admin/build/css'
 *
 * This creates a new folder "@theme_image_path@" in portal build folder.
 */
function createThemeImagePath() {
	const source = `${process.env.PORTAL_PATH}/modules/apps/frontend-theme/frontend-theme-admin/build/images`;
	const destination = `${process.env.PORTAL_PATH}/modules/apps/frontend-theme/frontend-theme-admin/build/css/@theme_image_path@`;

	if (!fs.existsSync(destination)) {
		fs.mkdirSync(destination);
	}

	fs.copy(source, destination, function (error) {
		if (error) {
			console.log("An error occurred while copying the folder.");

			return console.error(error);
		}

		console.log(`📝 Successfully copied:`);
		console.log(`Source: ${source}`);
		console.log(`Destination: ${destination}`);
	});
}

/**
 * Copies static files from portal.
 */
function copyStaticFiles() {
	const source = `${process.env.PORTAL_PATH}/modules/apps/frontend-theme/frontend-theme-unstyled/src/main/resources/META-INF/resources/_unstyled/images/clay/icons.svg`;
	const destination = `.${process.env.STATIC_PATH}/icons.svg`;

	fs.copyFile(source, destination, (error) => {
		if (error) {
			console.error(error);
		}

		console.log(`📝 Successfully copied:`);
		console.log(`Source: ${source}`);
		console.log(`Destination: ${destination}`);
	});
}

copyStaticFiles();
createThemeImagePath();
