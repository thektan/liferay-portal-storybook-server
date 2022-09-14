# Storybook Server for a Liferay Portal module

Runs storybook to test components inside of a liferay-portal module. Currently setup to test components in `search-experiences-blueprints-admin-web`.

## Setup

1. In `.env`, update paths to your current environment.
1. In `./storybook/preview.js`, update `../../liferay-portal-master/portal/` relative paths to where the portal root is located.
