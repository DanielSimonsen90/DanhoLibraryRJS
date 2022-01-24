import { DependencyList, useEffect, useState } from "react";

export function useStateOnUpdate<S>(initialState: S, onDependencyUpdate: (state: S) => S, dependencies: DependencyList) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState(onDependencyUpdate(state));
    }, dependencies)

    return state
}
export default useStateOnUpdate;