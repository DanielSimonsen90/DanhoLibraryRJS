import { DependencyList } from "react";
import { useAsync, useAsyncReturn } from "./useAsync";
import { Callback, FunctionComponent, Component } from "../../utils/BaseReact";

export type UseLoadDataReturn = [component: FunctionComponent<any> | undefined, loading: boolean];
export type UseLoadDataProps<T> = Partial<{
    loadingComponent: () => Component,
    errorComponent: (error: Error) => Component,
    valueComponent: (value: T) => Component,
}>;

export function useLoadData<T>(callback: Callback<Promise<T>>, props: UseLoadDataProps<T>, dependencies?: DependencyList): UseLoadDataReturn {
    const { value, loading, error } = useAsync(callback, dependencies);
    const component = [
        loading && props.loadingComponent, 
        error && props.errorComponent, 
        value && props.valueComponent
    ].filter(v => v)[0] || undefined;

    return [component, loading];
}

export default useLoadData