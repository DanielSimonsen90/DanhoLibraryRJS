import { Dispatch, ReactNode, SetStateAction } from "react";

export type Children = ReactNode;
export type Component = JSX.Element | (() => JSX.Element)
export type Callback<T = void> = () => T
export type PromiseResolve<T> = (value: T | PromiseLike<T>) => void;
export type PromiseReject = (reason?: any) => void;
export type UseStateReturn<S> = [S, Dispatch<SetStateAction<S>>]