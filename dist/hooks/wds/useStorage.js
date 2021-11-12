"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSessionStorage = exports.useLocalStorage = void 0;
const react_1 = require("react");
const useCallbackOnce_1 = __importDefault(require("../useCallbackOnce"));
/**
 * Store a value in LocalStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in LocalStorage. If no value found, defaultValue is returned
 */
function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage);
}
exports.useLocalStorage = useLocalStorage;
/**
 * Store a value in SessionStorage using key
 * @param key Key to store value
 * @param defaultValue Fallback value
 * @returns Value matching key in SessionStorage. If no value found, defaultValue is returned
 */
function useSessionStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.sessionStorage);
}
exports.useSessionStorage = useSessionStorage;
/**
 * Goes through provided storageObject to find value that matches key. Returns defaultValue, if no value was found
 * @param key Storage key
 * @param defaultValue Fallback value
 * @param storageObject Storage type
 * @returns value matching key
 */
function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = (0, react_1.useState)(() => {
        const jsonValue = storageObject.getItem(key);
        return jsonValue != null ?
            JSON.parse(jsonValue) :
            typeof defaultValue === 'function' ?
                defaultValue() :
                defaultValue;
    });
    (0, react_1.useEffect)(() => {
        if (value === undefined)
            return storageObject.removeItem(key);
        storageObject.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject]);
    const remove = (0, useCallbackOnce_1.default)(() => {
        setValue(undefined);
    });
    return [value, setValue, remove];
}
