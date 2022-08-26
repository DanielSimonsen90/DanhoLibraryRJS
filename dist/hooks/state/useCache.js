"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCache = void 0;
const react_1 = require("react");
const useFetch_1 = __importDefault(require("../utils/useFetch"));
const useStorage_1 = require("./useStorage");
/**
 * Fetch a resource from the server and cache it in sessionStorage.
 *
 * @param url URL to fetch
 * @param options Request options - optional
 * @param dependencies Re-fetch on dependency change - optional
 * @returns useAsyncReturn<Value> - { loading, error, value }
 */
function useCache(url, options = {}, dependencies = []) {
    const { value: fetched, loading, error, fetch } = (0, useFetch_1.default)(url, options, dependencies);
    const [cached, set, remove] = (0, useStorage_1.useSessionStorage)(url, fetched);
    (0, react_1.useEffect)(() => {
        if (!loading && !error && fetched) {
            set(fetched);
        }
    }, [fetched]);
    return { value: cached || fetched, loading, error, fetch };
}
exports.useCache = useCache;
exports.default = useCache;
