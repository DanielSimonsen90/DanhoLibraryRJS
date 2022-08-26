import { DependencyList } from "react";
import { Callback, FunctionComponent, Component } from "../../utils/BaseReact";
export declare type UseLoadDataReturn = [component: FunctionComponent<any> | undefined, loading: boolean];
export declare type UseLoadDataProps<T> = Partial<{
    loadingComponent: () => Component;
    errorComponent: (error: Error) => Component;
    valueComponent: (value: T) => Component;
}>;
export declare function useLoadData<T>(callback: Callback<Promise<T>>, props: UseLoadDataProps<T>, dependencies?: DependencyList): UseLoadDataReturn;
export default useLoadData;
