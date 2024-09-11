# Storybook Server for a Liferay Portal module

Runs storybook to test components inside of a liferay-portal module. Currently setup to test components in `search-experiences-blueprints-admin-web`.

## Setup

1. In `.env`, update paths to your current environment.
1. In `./storybook/preview.js`, update `../../liferay-portal-master/portal/` relative paths to where the portal root is located.

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
