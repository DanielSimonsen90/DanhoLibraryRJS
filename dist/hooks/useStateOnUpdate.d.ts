import { DependencyList } from "react";
export declare function useStateOnUpdate<S>(initialState: S, onDependencyUpdate: (state: S) => S, dependencies: DependencyList): S;
export default useStateOnUpdate;
