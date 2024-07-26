/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require("fs");
const {createProxyMiddleware} = require("http-proxy-middleware");
const path = require("path");

/**
 * Middleware to proxy portal resources.
 */
module.exports = function expressMiddleware(app) {
	const pathFilter =  (path) => {
	  return path.match('^/o') || path.match('^/api');
	};

	app.use(createProxyMiddleware({
		changeOrigin: true,
		target: process.env.PORTAL_URL,
		pathFilter
	}));
};
