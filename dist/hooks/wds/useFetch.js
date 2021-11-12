"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
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
    return (0, useAsync_1.default)(() => fetch(url, { ...DefaultOptions, ...options })
        .then(async (res) => res.ok ?
        res.json() :
        await Promise.reject(await res.json())), dependencies);
}
exports.useFetch = useFetch;
exports.default = useFetch;
