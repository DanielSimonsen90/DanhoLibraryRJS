import { DependencyList } from "react";
import { useAsyncReturn } from "./wds/useAsync";
import { Callback, Component } from "../utils/BaseReact";
declare type Props<T> = Partial<Record<`${keyof useAsyncReturn<T>}Component`, Component>>;
export declare function useLoadData<T>(callback: Callback<Promise<T>>, props: Props<T>, dependencies?: DependencyList): Component | null;
export { Props as UseLoadDataProps };
export default useLoadData;
