/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* eslint-disable no-console */
/* eslint-env browser */

import LocalStorage from "../static/mock-components/src/main/resources/META-INF/resources/util/local_storage";
import SessionStorage from "../static/mock-components/src/main/resources/META-INF/resources/util/session_storage";
import dateUtils from "../static/mock-components/src/main/resources/META-INF/resources/util/date";

/**
 * Appends given parameters to the given URL.
 * @param {String | Object} params Parameters to be added on to the base url
 * @param {String} baseUrl Base url
 * @return {String} url URL constructed from base url and params
 * @review
 */
function addParams(params, baseUrl) {
	if (!params || (typeof params !== "object" && typeof params !== "string")) {
		throw new TypeError("Parameter params must be an object or string");
	}

	if (typeof baseUrl !== "string") {
		throw new TypeError("Parameter baseUrl must be a string");
	}

	const url = baseUrl.startsWith("/")
		? new URL(baseUrl, location.href)
		: new URL(baseUrl);

	if (typeof params === "object") {
		Object.entries(params).forEach(([key, value]) => {
			url.searchParams.append(key, value);
		});
	} else {
		const searchParams = new URLSearchParams(params.trim());

		searchParams.forEach((value, key) => {
			if (value) {
				url.searchParams.append(key, value);
			} else {
				url.searchParams.append(key, "");
			}
		});
	}

	return url.toString();
}

/**
 * Debounces function execution.
 * @param {!function()} fn
 * @param {number} delay
 * @return {!function()}
 */
function debounce(fn, delay) {
	return function debounced() {
		const args = arguments;
		cancelDebounce(debounced);
		debounced.id = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

/**
 * Cancels the scheduled debounced function.
 * @param {function()} debounced
 */
function cancelDebounce(debounced) {
	clearTimeout(debounced.id);
}

const REGEX_SUB = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g;

function sub(string, data) {
	if (
		arguments.length > 2 ||
		(typeof data !== "object" && typeof data !== "function")
	) {
		data = Array.prototype.slice.call(arguments, 1);
	}

	return string.replace(REGEX_SUB, (match, key) =>
		data[key] === undefined ? match : data[key],
	);
}

module.exports = {
	CompatibilityEventProxy: () => {},
	DefaultEventHandler: () => {},
	ItemSelectorDialog: () => {},
	Modal: () => {},
	PortletBase: () => {},
	Slider: () => {},
	Treeview: () => {},
	addParams,
	cancelDebounce,
	dateUtils,
	debounce,
	fetch,
	navigate: (url, listeners) => console.log({listeners, url}),
	openSimpleInputModal: (config) => console.log(config),
	openToast: (config) => console.log(config),
	localStorage: LocalStorage,
	sessionStorage: SessionStorage,
	sub,
};

/* eslint-enable no-console */
