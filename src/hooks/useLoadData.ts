import { DependencyList } from "react";
import { useAsync, useAsyncReturn } from "./wds/useAsync";
import { Callback, Component } from "../utils/BaseReact";

type Props<T> = Partial<Record<`${keyof useAsyncReturn<T>}Component`, Component>>;

export function useLoadData<T>(callback: Callback<Promise<T>>, props: Props<T>, dependencies?: DependencyList) {
    const { value, loading, error } = useAsync(callback, dependencies);
    return [
        loading && props.loadingComponent, 
        error && props.errorComponent, 
        value && props.valueComponent
    ].filter(v => v)[0] || null; 
}

export { Props as UseLoadDataProps }
export default useLoadData