/// <reference types="react" />
import { Route, Redirect } from 'react-router-dom';
export { Redirect, Route };
import BaseProps from './BaseProps';
import { Component } from './BaseReact';
declare type Props = BaseProps & {
    routes?: Array<[string, Component]>;
};
export declare function Router({ children, routes }: Props): JSX.Element;
export default Router;
