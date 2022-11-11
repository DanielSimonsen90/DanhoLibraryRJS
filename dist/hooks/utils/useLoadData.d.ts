import { DependencyList } from "react";
import { Callback, Component, FunctionComponent } from "../../utils/BaseReact";
declare type Functionable<Return, T extends any[] = any> = ((...args: T) => Return) | Return;
declare type ReturnTypes = "function" | "component";
export declare type UseLoadDataReturn<Returns extends ReturnTypes> = [
    component: (Returns extends "function" ? FunctionComponent : Component) | null,
    loading: boolean
];
export declare type UseLoadDataProps<T, Returns extends ReturnTypes = 'function'> = Partial<{
    loadingComponent: Functionable<Component>;
    errorComponent: Functionable<Component, [error: Error]>;
    valueComponent: Functionable<Component, [value: T]>;
    returns?: Returns;
}>;
export declare function useLoadData<T, Returns extends ReturnTypes>(callback: Callback<Promise<T>>, { returns, ...props }: UseLoadDataProps<T, Returns>, dependencies?: DependencyList): UseLoadDataReturn<Returns>;
export default useLoadData;
