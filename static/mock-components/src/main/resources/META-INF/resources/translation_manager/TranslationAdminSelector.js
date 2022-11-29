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
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayLayout from '@clayui/layout';
import React, { useEffect, useMemo, useState } from 'react';
import TranslationAdminModal from './TranslationAdminModal';
// These variables are defined here, out of the component, to avoid
// unexpected re-renders
const noop = () => { };
export default function TranslationAdminSelector({ activeLanguageIds: initialActiveLanguageIds = [], adminMode, ariaLabels = {
    default: Liferay.Language.get('default'),
    manageTranslations: Liferay.Language.get('manage-translations'),
    notTranslated: Liferay.Language.get('not-translated'),
    translated: Liferay.Language.get('translated'),
}, availableLocales = [], defaultLanguageId, onActiveLanguageIdsChange = noop, onSelectedLanguageIdChange = noop, selectedLanguageId: initialSelectedLanguageId, showOnlyFlags, small = false, translations = {}, }) {
    const [activeLanguageIds, setActiveLanguageIds] = useState(initialActiveLanguageIds);
    const [selectedLanguageId, setSelectedLanguageId] = useState(initialSelectedLanguageId);
    const [selectorDropdownActive, setSelectorDropdownActive] = useState(false);
    const [translationModalVisible, setTranslationModalVisible] = useState(false);
    const handleCloseTranslationModal = (activeLanguageIds) => {
        setActiveLanguageIds(activeLanguageIds);
        if (!activeLanguageIds.includes(selectedLanguageId)) {
            setSelectedLanguageId(defaultLanguageId);
        }
        setTranslationModalVisible(false);
    };
    const activeLocales = useMemo(() => availableLocales.filter((availableLocale) => activeLanguageIds.includes(availableLocale.id)), [availableLocales, activeLanguageIds]);
    const selectedLocale = useMemo(() => {
        const id = selectedLanguageId !== null && selectedLanguageId !== void 0 ? selectedLanguageId : defaultLanguageId;
        return availableLocales.find((availableLocale) => availableLocale.id === id);
    }, [availableLocales, defaultLanguageId, selectedLanguageId]);
    useEffect(() => {
        onActiveLanguageIdsChange(activeLanguageIds);
    }, [activeLanguageIds, onActiveLanguageIdsChange]);
    useEffect(() => {
        onSelectedLanguageIdChange(selectedLanguageId);
    }, [selectedLanguageId, onSelectedLanguageIdChange]);
    useEffect(() => {
        setActiveLanguageIds(initialActiveLanguageIds);
    }, [initialActiveLanguageIds]);
    useEffect(() => {
        setSelectedLanguageId(initialSelectedLanguageId);
    }, [initialSelectedLanguageId]);
    return (React.createElement(React.Fragment, null,
        React.createElement(TranslationAdminModal, { activeLanguageIds: activeLanguageIds, ariaLabels: ariaLabels, availableLocales: availableLocales, defaultLanguageId: defaultLanguageId, onClose: handleCloseTranslationModal, translations: translations, visible: translationModalVisible }),
        React.createElement(ClayDropDown, { active: selectorDropdownActive, onActiveChange: setSelectorDropdownActive, trigger: React.createElement(ClayButton, { displayType: "secondary", monospaced: true, small: small, title: Liferay.Language.get('select-translation-language') },
                React.createElement("span", { className: "inline-item" },
                    React.createElement(ClayIcon, { symbol: selectedLocale.symbol })),
                React.createElement("span", { className: "btn-section" }, selectedLocale.label)) },
            React.createElement(ClayDropDown.ItemList, null,
                activeLocales.map((activeLocale) => {
                    const label = activeLocale.label;
                    const isDefaultLocale = activeLocale.id === defaultLanguageId;
                    const localeValue = translations[activeLocale.id];
                    return (React.createElement(ClayDropDown.Item, { key: activeLocale.id, onClick: () => {
                            setSelectedLanguageId(activeLocale.id);
                            setSelectorDropdownActive(false);
                        } },
                        React.createElement(ClayLayout.ContentRow, { containerElement: "span" },
                            React.createElement(ClayLayout.ContentCol, { containerElement: "span", expand: true },
                                React.createElement(ClayLayout.ContentSection, null,
                                    React.createElement(ClayIcon, { className: "inline-item inline-item-before", symbol: activeLocale.symbol }),
                                    label)),
                            !showOnlyFlags && (React.createElement(ClayLayout.ContentCol, { containerElement: "span" },
                                React.createElement(ClayLayout.ContentSection, null,
                                    React.createElement(ClayLabel, { displayType: isDefaultLocale
                                            ? 'info'
                                            : localeValue
                                                ? 'success'
                                                : 'warning' }, isDefaultLocale
                                        ? ariaLabels.default
                                        : localeValue
                                            ? ariaLabels.translated
                                            : ariaLabels.notTranslated)))))));
                }),
                adminMode && (React.createElement(React.Fragment, null,
                    React.createElement(ClayDropDown.Divider, null),
                    React.createElement(ClayDropDown.Item, { "data-testid": "translation-modal-trigger", onClick: () => setTranslationModalVisible(true) },
                        React.createElement(ClayLayout.ContentRow, { containerElement: "span" },
                            React.createElement(ClayLayout.ContentCol, { containerElement: "span", expand: true },
                                React.createElement(ClayLayout.ContentSection, null,
                                    React.createElement(ClayIcon, { className: "inline-item inline-item-before", symbol: "automatic-translate" }),
                                    ariaLabels.manageTranslations))))))))));
}
