import { DependencyList } from "react";
import { useAsync } from "./useAsync";
import { Callback, Component } from "../../utils/BaseReact";

type Functionable<Return, T extends any[] = any> = ((...args: T) => Return) | Return;
export type UseLoadDataReturn = [component: Component | null, loading: boolean];
export type UseLoadDataProps<T> = Partial<{
    loadingComponent: Functionable<Component>,
    errorComponent: Functionable<Component, [error: Error]>,
    valueComponent: Functionable<Component, [value: T]>,
}>;

export function useLoadData<T>(callback: Callback<Promise<T>>, props: UseLoadDataProps<T>, dependencies?: DependencyList): UseLoadDataReturn {
    const { value, loading, error } = useAsync(callback, dependencies);
    const Component = [
        loading && props.loadingComponent, 
        error && props.errorComponent, 
        value && props.valueComponent
    ].filter(v => v)[0] || null;

    return [typeof Component === 'function' ? <Component /> : Component, loading];
}

export default useLoadData