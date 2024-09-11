# Storybook Server for a Liferay Portal module

Runs storybook to test components inside of a liferay-portal module. This allows for quickly isolating and developing react components with hot deploy.

Currently setup to test components in `search-experiences-web`.

## Setup

1. Use the `master` branch as a boilerplate to start off with.
1. Create a new branch with the name of the module, for example `search-experiences-web`.
1. In `.env`, update paths to your current environment.
1. In `./storybook/preview.js`, update `../../liferay-portal-master/portal/` relative paths to where the portal root is located.
1. Run `yarn`,
1. Start writing stories in the `src` directory!

## To Startup

1. If any of the modules are using `/o/api` endpoints, startup portal so the endpoints can resolve.
1. Run `yarn storybook`.
1. Browser should open up storybook at `http://localhost:9000/`.

## Additional Info

Mocks in `.storybook` (`*.mock.js` files) are manually copied to fix any missing functions from portal.

## Errors Related to Parsing

If you see an error similar to this, it may be that Storybook has problems parsing strings from language keys like `Liferay.Language.get('key')` as a prop in the component. Avoid this error by defining the prop's default value within the component itself.

```
ERROR in ../portal/modules/dxp/apps/search-experiences/search-experiences-web/src/main/resources/META-INF/resources/sxp_blueprint_admin/js/edit_sxp_blueprint/preview_sidebar/PreviewAttributesModal.js 170:19
Module parse failed: Unexpected token (170:19)
File was processed with these loaders:

-   ./node_modules/liferay-lang-key-dev-loader/index.js
-   ./node_modules/babel-loader/lib/index.js
-   ./node_modules/@storybook/preset-react-webpack/dist/loaders/react-docgen-loader.js
    You may need an additional loader to handle the result of these loaders.
    | "title": {
    | "defaultValue": {
    >         "value": ""Attributes"",
    >
    > | "computed": true
    > | },
```
