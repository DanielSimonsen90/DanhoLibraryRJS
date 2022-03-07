import { DependencyList, useEffect, useState } from "react";

export function useStateOnUpdate<State>(initialState: State | undefined, onDependencyUpdate: (state: State | undefined) => State, dependencies: DependencyList) {
    const [state, setState] = useState<State>(initialState as State);

    useEffect(() => {
        setState(onDependencyUpdate(state));
    }, dependencies)

    return state
}
export default useStateOnUpdate;