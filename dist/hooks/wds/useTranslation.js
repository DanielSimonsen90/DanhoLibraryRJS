"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
const useStorage_1 = require("./useStorage");
/**
 * Translate key to value
 * @param translationPath Path to translations json/js
 */
function useTranslation(translationPath) {
    const [language, setLanguage] = (0, useStorage_1.useLocalStorage)("language", "en");
    const [fallbackLanguage, setFallbackLanguage] = (0, useStorage_1.useLocalStorage)("fallbackLanguage", "en");
    const translations = require(translationPath);
    const translate = (key) => {
        const keys = key.split(".");
        return (getNestedTranslation(language, keys) ??
            getNestedTranslation(fallbackLanguage, keys) ??
            key);
    };
    const getNestedTranslation = (language, keys) => keys.reduce((obj, key) => obj?.[key], translations[language]);
    return {
        language, setLanguage,
        fallbackLanguage, setFallbackLanguage,
        t: translate,
    };
}
exports.useTranslation = useTranslation;
exports.default = useTranslation;
