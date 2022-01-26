import { DependencyList } from "react";
export declare function useStateOnUpdate<State>(initialState: State | undefined, onDependencyUpdate: (state: State | undefined) => State, dependencies: DependencyList): State;
export default useStateOnUpdate;
