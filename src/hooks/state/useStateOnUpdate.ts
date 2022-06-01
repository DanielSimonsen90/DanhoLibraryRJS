import { DependencyList, useState } from "react";
import { useDeepCompareEffect } from "../effect";

export function useStateOnUpdate<State>(initialState: State | undefined, onDependencyUpdate: (state: State | undefined) => State, dependencies: DependencyList) {
    const [state, setState] = useState<State>(initialState as State);

    useDeepCompareEffect(() => {
        setState(onDependencyUpdate(state));
    }, dependencies)

    return state
}
export default useStateOnUpdate;