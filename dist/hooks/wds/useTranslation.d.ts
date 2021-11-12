/// <reference types="react" />
/**
 * Translate key to value
 * @param translationPath Path to translations json/js
 */
export declare function useTranslation(translationPath: string): {
    language: string;
    setLanguage: import("react").Dispatch<import("react").SetStateAction<string>>;
    fallbackLanguage: string;
    setFallbackLanguage: import("react").Dispatch<import("react").SetStateAction<string>>;
    t: (key: string) => any;
};
export default useTranslation;
