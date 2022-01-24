import { DependencyList, EffectCallback } from "react";
declare const UNDEFINED_VOID_ONLY: unique symbol;
declare type Destructor = () => void | {
    [UNDEFINED_VOID_ONLY]: never;
};
declare type AsyncEffectCallback = () => Promise<(void | Destructor)>;
declare type Callback = AsyncEffectCallback | EffectCallback;
export declare function useAsyncEffect(callback: Callback, dependencies: DependencyList): void;
export declare function useAsyncEffectOnce(callback: Callback): void;
export {};
