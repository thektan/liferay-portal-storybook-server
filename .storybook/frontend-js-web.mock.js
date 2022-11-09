/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* eslint-disable no-console */
/* eslint-env browser */

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
		data[key] === undefined ? match : data[key]
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
	cancelDebounce,
	debounce,
	fetch,
	sub,
	navigate: (url, listeners) => console.log({listeners, url}),
	openSimpleInputModal: (config) => console.log(config),
	openToast: (config) => console.log(config),
};

/* eslint-enable no-console */
