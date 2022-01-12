/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const React = require("react");

module.exports = {
	// See: https://github.com/liferay/liferay-portal/blob/18f9aefe633dbb4364b7ebc82a17b9e124d764ac/modules/apps/frontend-js/frontend-js-react-web/src/main/resources/META-INF/resources/js/hooks/useIsMounted.ts

	useIsMounted: () => {
		const mountedRef = React.useRef(false);
		const isMounted = React.useCallback(() => mountedRef.current, []);

		React.useLayoutEffect(() => {
			mountedRef.current = true;

			return () => {
				mountedRef.current = false;
			};
		}, []);

		return isMounted;
	},

	// See: https://github.com/liferay/liferay-portal/blob/afcb92c2e1/modules/apps/frontend-js/frontend-js-react-web/src/main/resources/META-INF/resources/js/hooks/usePrevious.es.js

	usePrevious: (value) => {
		const ref = React.useRef();

		React.useEffect(() => {
			ref.current = value;
		});

		return ref.current;
	},
};
