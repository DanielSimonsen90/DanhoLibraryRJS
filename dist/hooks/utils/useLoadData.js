"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoadData = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useAsync_1 = require("./useAsync");
function useLoadData(callback, props, dependencies) {
    const { value, loading, error } = (0, useAsync_1.useAsync)(callback, dependencies);
    const Component = [
        loading && props.loadingComponent,
        error && props.errorComponent,
        value && props.valueComponent
    ].filter(v => v)[0] || null;
    return [typeof Component === 'function' ? (0, jsx_runtime_1.jsx)(Component, {}) : Component, loading];
}
exports.useLoadData = useLoadData;
exports.default = useLoadData;
