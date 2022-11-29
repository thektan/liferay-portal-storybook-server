/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import { ClayInput } from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayModal from '@clayui/modal';
import ClayTable from '@clayui/table';
import React, { useMemo, useState } from 'react';
const noop = () => { };
export default function TranslationAdminContent({ ariaLabels = {
    default: Liferay.Language.get('default'),
    manageTranslations: Liferay.Language.get('manage-translations'),
    managementToolbar: Liferay.Language.get('management-toolbar'),
    notTranslated: Liferay.Language.get('not-translated'),
    translated: Liferay.Language.get('translated'),
}, activeLanguageIds: initialActiveLanguageIds = [], availableLocales: initialAvailableLocales = [], defaultLanguageId, onAddLocale = noop, onCancel = noop, onDone = noop, onRemoveLocale = noop, translations = {}, }) {
    const [creationMenuActive, setCreationMenuActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const activeLanguageIds = useMemo(() => {
        return initialAvailableLocales.filter((availableLocale) => {
            const regExp = new RegExp(searchValue.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'), 'i');
            return (initialActiveLanguageIds.includes(availableLocale.id) &&
                (availableLocale.label.match(regExp) ||
                    availableLocale.displayName.match(regExp)));
        });
    }, [initialAvailableLocales, initialActiveLanguageIds, searchValue]);
    const availableLocales = useMemo(() => {
        return initialAvailableLocales.filter((availableLocale) => !initialActiveLanguageIds.includes(availableLocale.id));
    }, [initialAvailableLocales, initialActiveLanguageIds]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ClayModal.Header, null, Liferay.Language.get('manage-translations')),
        React.createElement(ClayModal.Header, { withTitle: false },
            React.createElement(ClayInput.Group, { className: "align-items-center" },
                React.createElement(ClayInput.GroupItem, null,
                    React.createElement(ClayInput, { "aria-label": Liferay.Language.get('search'), insetAfter: true, onChange: (event) => setSearchValue(event.target.value), placeholder: Liferay.Language.get('search'), value: searchValue }),
                    React.createElement(ClayInput.GroupInsetItem, { after: true, tag: "span" },
                        React.createElement(ClayButtonWithIcon, { "aria-label": Liferay.Language.get('search'), displayType: "unstyled", onClick: () => {
                                setSearchValue('');
                            }, symbol: searchValue ? 'times' : 'search' }))),
                React.createElement(ClayInput.GroupItem, { shrink: true },
                    React.createElement(ClayDropDown, { active: creationMenuActive && !!availableLocales.length, hasLeftSymbols: true, menuElementAttrs: {
                            className: 'dropdown-menu-width-shrink',
                        }, onActiveChange: setCreationMenuActive, trigger: React.createElement(ClayButtonWithIcon, { className: "lfr-portal-tooltip", disabled: !availableLocales.length, small: true, symbol: "plus", title: Liferay.Language.get('add') }) },
                        React.createElement(ClayDropDown.ItemList, null, availableLocales.map((availableLocale) => {
                            return (React.createElement(ClayDropDown.Item, { key: availableLocale.label, onClick: () => {
                                    onAddLocale(availableLocale.id);
                                    setCreationMenuActive(false);
                                }, symbolLeft: availableLocale.symbol }, availableLocale.label));
                        })))))),
        React.createElement(ClayModal.Body, { className: "pb-0 pt-3", scrollable: true },
            React.createElement(ClayTable, null,
                React.createElement(ClayTable.Head, null,
                    React.createElement(ClayTable.Row, null,
                        React.createElement(ClayTable.Cell, { headingCell: true }, Liferay.Language.get('code')),
                        React.createElement(ClayTable.Cell, { headingCell: true }, Liferay.Language.get('language')),
                        React.createElement(ClayTable.Cell, { headingCell: true }, Liferay.Language.get('status')),
                        React.createElement(ClayTable.Cell, { headingCell: true }))),
                React.createElement(ClayTable.Body, null, activeLanguageIds.map((activeLocale) => {
                    const label = activeLocale.label;
                    const isDefaultLocale = activeLocale.id === defaultLanguageId;
                    const localeValue = translations[label];
                    return (React.createElement(ClayTable.Row, { key: label },
                        React.createElement(ClayTable.Cell, null,
                            React.createElement(React.Fragment, null,
                                React.createElement(ClayIcon, { className: "inline-item inline-item-before", symbol: activeLocale.symbol }),
                                React.createElement("strong", null, label))),
                        React.createElement(ClayTable.Cell, { expanded: true }, activeLocale.displayName),
                        React.createElement(ClayTable.Cell, null,
                            React.createElement(ClayLabel, { displayType: isDefaultLocale
                                    ? 'info'
                                    : localeValue
                                        ? 'success'
                                        : 'warning' }, isDefaultLocale
                                ? ariaLabels.default
                                : localeValue
                                    ? ariaLabels.translated
                                    : ariaLabels.notTranslated)),
                        React.createElement(ClayTable.Cell, null, !isDefaultLocale && (React.createElement(ClayButtonWithIcon, { className: "lfr-portal-tooltip", displayType: "unstyled", monospaced: false, onClick: () => onRemoveLocale(activeLocale.id), symbol: "trash", title: Liferay.Language.get('delete') })))));
                })))),
        React.createElement(ClayModal.Footer, { last: React.createElement(ClayButton.Group, { spaced: true },
                React.createElement(ClayButton, { displayType: "secondary", onClick: onCancel }, Liferay.Language.get('cancel')),
                React.createElement(ClayButton, { displayType: "primary", onClick: onDone }, Liferay.Language.get('done'))) })));
}
