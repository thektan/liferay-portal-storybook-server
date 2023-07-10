# Storybook Server for a Liferay Portal module

Runs storybook to test components inside of a liferay-portal module. Currently setup to test components in `search-experiences-web`.

## Setup

1. Use the `master` branch as a boilerplate to start off with.
1. Create a new branch with the name of the module, for example `search-experiences-web`.
1. In `.env`, update paths to your current environment.
1. In `./storybook/preview.js`, update `../../liferay-portal-master/portal/` relative paths to where the portal root is located.
1. Start writing stories in the `src` directory!

## Additional Info

- Mocks in `.storybook` (`*.mock.js` files) are manually copied to fix any missing functions from portal.
