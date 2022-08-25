import { DependencyList, SetStateAction } from "react";
import { Callback } from "../../utils";
declare type Updates<State> = {
    before: Callback<SetStateAction<State>, [state: State]>;
    after: Callback<void | Callback, [state: State]>;
};
export declare function useStateUpdate<State>(initialState: State | undefined, { before, after }: Updates<State> | undefined, dependencies: DependencyList): State;
export default useStateUpdate;
