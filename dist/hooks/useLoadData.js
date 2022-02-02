"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoadData = void 0;
const useAsync_1 = require("./wds/useAsync");
function useLoadData(callback, props, dependencies) {
    const { value, loading, error } = (0, useAsync_1.useAsync)(callback, dependencies);
    const component = [
        loading && props.loadingComponent,
        error && props.errorComponent,
        value && props.valueComponent
    ].filter(v => v)[0] || undefined;
    return [component, loading];
}
exports.useLoadData = useLoadData;
exports.default = useLoadData;
