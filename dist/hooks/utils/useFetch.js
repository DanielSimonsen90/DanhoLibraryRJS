"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const react_1 = require("react");
const useAsync_1 = __importDefault(require("./useAsync"));
const DefaultOptions = {
    headers: { "Content-Type": "application/json" },
};
/**
 * fetch but with dependencies
 * @param url URL to fetch
 * @param options Fetch Options
 * @param dependencies Dependency list
 * @returns Fetch response
 */
function useFetch(url, options = {}, dependencies = []) {
    const callback = (0, react_1.useCallback)(async () => {
        var _a;
        const res = await fetch(url, { ...DefaultOptions, ...options });
        if (!res.ok)
            return Promise.reject((_a = (await res.json())) !== null && _a !== void 0 ? _a : (await res.text()));
        return res.json();
    }, dependencies);
    const { callback: _, ...asyncResult } = (0, useAsync_1.default)(callback, dependencies);
    return { ...asyncResult, fetch: callback };
}
exports.useFetch = useFetch;
exports.default = useFetch;
