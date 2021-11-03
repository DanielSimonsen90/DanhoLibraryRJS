import { useLocalStorage } from "./useStorage"

/**
 * Translate key to value
 * @param translationPath Path to translations json/js
 */
export default function useTranslation(translationPath: string) {
    const [language, setLanguage] = useLocalStorage("language", "en")
    const [fallbackLanguage, setFallbackLanguage] = useLocalStorage("fallbackLanguage", "en")
    const translations = require(translationPath);

    const translate = (key: string) => {
        const keys = key.split(".")

        return (
            getNestedTranslation(language, keys) ??
            getNestedTranslation(fallbackLanguage, keys) ??
            key
        )
    }
    const getNestedTranslation = (language: string, keys: string[]) => 
        keys.reduce((obj, key) => obj?.[key], translations[language]);

    return {
        language, setLanguage,
        fallbackLanguage, setFallbackLanguage,
        t: translate,
    }
}