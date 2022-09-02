import { DependencyList, SetStateAction, useState } from "react";
import { Callback } from "../../utils";
import { useDeepCompareEffect } from "../effect";

type Updates<State> = {
    /**
     * Callback ran when dependencies have changed. Provided state is current state. Expects SetStateAction, aka State | (state) => State returned.
    */
     before?: Callback<SetStateAction<State>, [state: State]>,
     /**
      * Callback ran after state has changed. Value returned is used as clean-up for internal useEffect
     */
     after?: Callback<void | Callback, [state: State]>
}
export function useStateUpdate<State>(
    initialState: State | undefined, 
    { 
        before = s => s, 
        after = () => {} 
    }: Updates<State> = {
        before: s => s,
        after: () => {}
    }, 
    dependencies: DependencyList
) {
    const [state, setState] = useState<State>(initialState as State);

    useDeepCompareEffect(() => {
        setState(before(state));
    }, dependencies);

    useDeepCompareEffect(() => after(state), [state]);

    return state;
}
export default useStateUpdate;