import { DependencyList } from "react";
import { useAsyncReturn } from "./useAsync";
import { Callback, Component } from "../../utils/BaseReact";
export declare type UseLoadDataReturn = [component: Component | undefined, loading: boolean];
declare type Props<T> = Partial<Record<`${keyof useAsyncReturn<T>}Component`, Component>>;
export declare function useLoadData<T>(callback: Callback<Promise<T>>, props: Props<T>, dependencies?: DependencyList): UseLoadDataReturn;
export { Props as UseLoadDataProps };
export default useLoadData;
