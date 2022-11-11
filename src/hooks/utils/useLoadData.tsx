import { DependencyList } from "react";
import { useAsync } from "./useAsync";
import { Callback, Component, FunctionComponent } from "../../utils/BaseReact";

type Functionable<Return, T extends any[] = any> = ((...args: T) => Return) | Return;
type ReturnTypes = "function" | "component";
export type UseLoadDataReturn<Returns extends ReturnTypes> = [
    component: (Returns extends "function" ? FunctionComponent : Component) | null, 
    loading: boolean
];
export type UseLoadDataProps<T, Returns extends ReturnTypes = 'function'> = Partial<{
    loadingComponent: Functionable<Component>,
    errorComponent: Functionable<Component, [error: Error]>,
    valueComponent: Functionable<Component, [value: T]>,

    returns?: Returns
}>;

export function useLoadData<T, Returns extends ReturnTypes>(callback: Callback<Promise<T>>, { returns, ...props}: UseLoadDataProps<T, Returns>, dependencies?: DependencyList): UseLoadDataReturn<Returns> {
    const { value, loading, error } = useAsync(callback, dependencies);
    const component = [
        loading && props.loadingComponent, 
        error && props.errorComponent, 
        value && props.valueComponent
    ].filter(v => v)[0] || null;

    return [
        ((returns ??= "function" as Returns) === "function" ? 
            () => component as FunctionComponent : 
            component as Component
        ) as any,
        loading
    ]
}

export default useLoadData