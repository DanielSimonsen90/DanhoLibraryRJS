"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
function createStore(state, actionsPicker) {
    const actions = actionsPicker === null || actionsPicker === void 0 ? void 0 : actionsPicker(value => state = value instanceof Function ? value(state) : value);
    const actionsReturnVoid = actions
        ? Object.entries(actions).reduce((result, [key, action]) => {
            result[key] = (...args) => { action(...args); };
            return result;
        }, {})
        : {};
    const store = {
        ...state,
        ...actionsReturnVoid,
    };
    class InternalStore {
        static useStore(pick) {
            if (pick) {
                if (typeof pick === 'function')
                    return pick(store);
                if (typeof pick === 'string')
                    return store[pick];
                if (Array.isArray(pick))
                    return pick.map(property => store[property]);
            }
            return store;
        }
    }
    return InternalStore.useStore;
}
exports.createStore = createStore;
exports.default = createStore;
