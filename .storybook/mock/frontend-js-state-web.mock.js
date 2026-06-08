/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect, useState} from "react";

// Minimal in-memory reimplementation of `@liferay/frontend-js-state-web` for
// Storybook. The real package ships as TypeScript under node_modules, which is
// excluded from the babel/ts loaders, so it cannot be bundled directly. This
// mock covers the atom/read/write/subscribe surface the components rely on.

const atoms = new Map();
const subscribers = new Map();
const values = new Map();

function getCallbacks(atom) {
	if (!subscribers.has(atom)) {
		subscribers.set(atom, new Set());
	}

	return subscribers.get(atom);
}

const State = {
	atom(key, value) {
		const atom = {__isAtom: true, default: value, key};

		atoms.set(key, atom);

		return atom;
	},

	read(atom) {
		return values.has(atom) ? values.get(atom) : atom.default;
	},

	subscribe(atom, callback) {
		const callbacks = getCallbacks(atom);

		callbacks.add(callback);

		return {
			dispose() {
				callbacks.delete(callback);
			},
		};
	},

	write(atom, value) {
		if (Object.is(value, values.get(atom))) {
			return;
		}

		values.set(atom, value);

		getCallbacks(atom).forEach((callback) => callback(value));
	},

	writeAtom(atom, value) {
		State.write(atom, value);
	},
};

export {State};

// Mirrors `@liferay/frontend-js-state-web/react`, which the same regex-based
// module replacement maps here.

export function useLiferayState(atom) {
	const [value, setValue] = useState(() => State.read(atom));

	useEffect(() => {
		const {dispose} = State.subscribe(atom, setValue);

		return dispose;
	}, [atom]);

	return [value, (newValue) => State.write(atom, newValue)];
}

export default State;
