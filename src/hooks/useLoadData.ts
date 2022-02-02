import { DependencyList } from "react";
import { useAsync, useAsyncReturn } from "./wds/useAsync";
import { Callback, Component } from "../utils/BaseReact";

export type UseLoadDataReturn = [component: Component | undefined, loading: boolean];
type Props<T> = Partial<Record<`${keyof useAsyncReturn<T>}Component`, Component>>;

export function useLoadData<T>(callback: Callback<Promise<T>>, props: Props<T>, dependencies?: DependencyList): UseLoadDataReturn {
    const { value, loading, error } = useAsync(callback, dependencies);
    const component = [
        loading && props.loadingComponent, 
        error && props.errorComponent, 
        value && props.valueComponent
    ].filter(v => v)[0] || undefined;

    return [component, loading];
}

export { Props as UseLoadDataProps }
export default useLoadData