import { Dispatch, ReactNode, SetStateAction } from "react";

export type Children = ReactNode;
export type Component = JSX.Element
export type FunctionComponent<Props = {}> = (props?: Props) => Component;
// export type Component = JSX.Element | (() => JSX.Element)
export type Callback<T = void, Arguments extends Array<any> = Array<any>> = (...args: Arguments) => T

export type PromiseResolve<T> = (value: T | PromiseLike<T>) => void;
export type PromiseReject = (reason?: any) => void;

export type SetStateFunction<S> = (preState: S) => S;
export type UseStateSetState<S> = Dispatch<SetStateAction<S>>
export type UseStateReturn<S> = [S, UseStateSetState<S>]
export type StateObj<StateType, State extends string> = 
  Record<Uncapitalize<State>, StateType> & 
  Record<`set${State}`, UseStateSetState<StateType>>
;

export type ClickEvent<Element extends HTMLElement = HTMLDivElement> = React.MouseEvent<Element, MouseEvent>;