import { FunctionComponent, ReactNode } from "react";
export declare type Children = ReactNode;
export declare type Component<P = {}> = FunctionComponent<P>;
export declare type Callback<T = void> = (...args: any[]) => T;
export declare type PromiseResolve<T> = (value: T | PromiseLike<T>) => void;
export declare type PromiseReject = (reason?: any) => void;
