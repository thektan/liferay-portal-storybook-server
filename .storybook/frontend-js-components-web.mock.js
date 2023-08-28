/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const React = require("react");

import ManagementToolbar from "../static/mock-components/src/main/resources/META-INF/resources/management_toolbar/ManagementToolbar";
import TranslationAdminSelector from "../static/mock-components/src/main/resources/META-INF/resources/translation_manager/TranslationAdminSelector";
import Treeview from "../static/mock-components/src/main/resources/META-INF/resources/treeview/Treeview";
import {
	default as LearnMessage,
	LearnMessageProvider,
} from "../static/mock-components/src/main/resources/META-INF/resources/learn_message/LearnMessage";

module.exports = {
	LearnMessage,
	LearnMessageProvider,
	ManagementToolbar,
	TranslationAdminSelector,
	Treeview,
};
