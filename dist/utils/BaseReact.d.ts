import { Dispatch, ReactNode, SetStateAction } from "react";
export declare type Children = ReactNode;
export declare type Component = JSX.Element | (() => JSX.Element);
export declare type Callback<T = void> = () => T;
export declare type PromiseResolve<T> = (value: T | PromiseLike<T>) => void;
export declare type PromiseReject = (reason?: any) => void;
export declare type UseStateReturn<S> = [S, Dispatch<SetStateAction<S>>];
