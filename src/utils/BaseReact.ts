import { FunctionComponent, ReactNode } from "react";

export type Children = ReactNode;
export type Component<P = {}> = FunctionComponent<P>;
export type Callback<T = void> = (...args: any[]) => T
export type PromiseResolve<T> = (value: T | PromiseLike<T>) => void;
export type PromiseReject = (reason?: any) => void;