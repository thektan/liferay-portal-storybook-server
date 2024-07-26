import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import fs from "fs-extra";

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

/**
 * For fixing the error:
 * Module not found: Error: Can't resolve './@theme_image_path@/states/success_state.gif' in
 * '/Users/ktan/Developer/liferay-portal-master/portal/modules/apps/frontend-theme/frontend-theme-classic/build/css'
 *
 * This creates a new folder "@theme_image_path@" in portal build folder.
 */
function createThemeImagePath() {
	const source = `${process.env.PORTAL_PATH}/modules/apps/frontend-theme/frontend-theme-classic/build/images`;
	const destination = `${process.env.PORTAL_PATH}/modules/apps/frontend-theme/frontend-theme-classic/build/css/@theme_image_path@`;

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

/**
 * Copies learn resources from portal.
 */
function copyLearnResourcesFile(learnResourcesList) {
	learnResourcesList.forEach((resource) => {
		const source = `${process.env.PORTAL_PATH}/learn-resources/${resource}.json`;
		const destination = `.${process.env.STATIC_PATH}/learn-resources/${resource}.json`;

		fs.copyFile(source, destination, (error) => {
			if (error) {
				console.error(error);
			}

			console.log(`📝 Successfully copied:`);
			console.log(`Source: ${source}`);
			console.log(`Destination: ${destination}`);
		});
	});
}

copyStaticFiles();
createThemeImagePath();
copyLearnResourcesFile(["portal-search-web"]);
