import { DependencyList } from "react";
import { useAsync, useAsyncReturn } from "./useAsync";
import { Callback, FunctionComponent, Component } from "../../utils/BaseReact";

type Functionable<Return, T extends any[] = any> = (...args: T) => Return | Return;
export type UseLoadDataReturn = [component: FunctionComponent<any> | null, loading: boolean];
export type UseLoadDataProps<T> = Partial<{
    loadingComponent: Functionable<Component>,
    errorComponent: Functionable<Component, [error: Error]>,
    valueComponent: Functionable<Component, [value: T]>,
}>;

export function useLoadData<T>(callback: Callback<Promise<T>>, props: UseLoadDataProps<T>, dependencies?: DependencyList): UseLoadDataReturn {
    const { value, loading, error } = useAsync(callback, dependencies);
    const component = [
        loading && props.loadingComponent, 
        error && props.errorComponent, 
        value && props.valueComponent
    ].filter(v => v)[0] || null;

    return [component, loading];
}

export default useLoadData