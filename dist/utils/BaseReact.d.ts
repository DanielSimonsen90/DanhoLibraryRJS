import { Dispatch, ReactNode, SetStateAction } from "react";
export declare type Children = ReactNode;
export declare type Component = JSX.Element;
export declare type FunctionComponent = () => Component;
export declare type Callback<T = void> = () => T;
export declare type PromiseResolve<T> = (value: T | PromiseLike<T>) => void;
export declare type PromiseReject = (reason?: any) => void;
export declare type SetStateFunction<S> = (preState: S) => S;
export declare type UseStateSetState<S> = Dispatch<SetStateAction<S>>;
export declare type UseStateReturn<S> = [S, UseStateSetState<S>];
export declare type StateObj<StateType, State extends string> = Record<Uncapitalize<State>, StateType> & Record<`set${State}`, UseStateSetState<StateType>>;
export declare type ClickEvent<Element extends HTMLElement = HTMLDivElement> = React.MouseEvent<Element, MouseEvent>;
