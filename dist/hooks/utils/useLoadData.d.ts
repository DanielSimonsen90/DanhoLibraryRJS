import { DependencyList } from "react";
import { Callback, FunctionComponent, Component } from "../../utils/BaseReact";
declare type Functionable<Return, T extends any[] = any> = (...args: T) => Return | Return;
export declare type UseLoadDataReturn = [component: FunctionComponent<any> | undefined, loading: boolean];
export declare type UseLoadDataProps<T> = Partial<{
    loadingComponent: Functionable<Component>;
    errorComponent: Functionable<Component, [error: Error]>;
    valueComponent: Functionable<Component, [value: T]>;
}>;
export declare function useLoadData<T>(callback: Callback<Promise<T>>, props: UseLoadDataProps<T>, dependencies?: DependencyList): UseLoadDataReturn;
export default useLoadData;
