import { DependencyList, SetStateAction } from "react";
import { Callback } from "../../utils";
declare type Updates<State> = {
    /**
     * Callback ran when dependencies have changed. Provided state is current state. Expects SetStateAction, aka State | (state) => State returned.
    */
    before: Callback<SetStateAction<State>, [state: State]>;
    /**
     * Callback ran after state has changed. Value returned is used as clean-up for internal useEffect
    */
    after: Callback<void | Callback, [state: State]>;
};
export declare function useStateUpdate<State>(initialState: State | undefined, { before, after }: Updates<State> | undefined, dependencies: DependencyList): State;
export default useStateUpdate;
