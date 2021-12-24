/// <reference types="react" />
import { Route, Redirect } from 'react-router-dom';
import BaseProps from '../utils/BaseProps';
import { Component } from '../utils/BaseReact';
export { Redirect, Route };
declare type Props = BaseProps & {
    routes?: Array<[string, Component]>;
};
export declare function Router({ children, routes }: Props): JSX.Element;
export default Router;
