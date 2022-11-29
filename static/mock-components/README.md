# Setup

**This directory was built by doing the following steps:**

1. Go to `${PORTAL_HOME}/modules/apps/frontend-js/frontend-js-components-web`
1. Run `tsc --outDir ${STORYBOOK_SERVER_HOME}/static/mock-components`\*
1. Comment out any `*.scss` file references in the components (`ManagementToolbar.js` and `Treeview.js`)

_\*Note: The directory is called `mock-components` instead of `frontend-js-components-web` otherwise the `NormalModuleReplacementPlugin` in `.storybook/main.js` will throw an error in the `yarn storybook` command build process._
