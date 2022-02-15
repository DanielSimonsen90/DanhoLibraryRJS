/// <reference types="react" />
import { PropertiesWithout } from 'danholibraryjs';
import { Route, Redirect } from 'react-router-dom';
import BaseProps from '../utils/BaseProps';
import { FunctionComponent } from '../utils/BaseReact';
export { Redirect, Route };
export declare type RouteConstruct = [string, FunctionComponent];
export declare function createRoute(path: string, component: FunctionComponent): RouteConstruct;
declare type LocationProps = keyof PropertiesWithout<Function, Location>;
declare type OnRoutePropChanged<Prop extends LocationProps> = (from: Location[Prop], to: Location[Prop], location: Location) => void;
declare type OnChangeObj = Partial<{
    [K in LocationProps]: OnRoutePropChanged<K>;
}>;
declare type OnChange<Prop = LocationProps> = Prop extends LocationProps ? OnRoutePropChanged<Prop> : OnChangeObj;
export declare function useRouterChanged<Prop extends LocationProps | 'unknown' = 'unknown'>(onChange: OnChange<Prop>): Location;
declare type Props = BaseProps & {
    routes: Array<RouteConstruct>;
    fallback?: FunctionComponent;
};
export declare function Router({ routes, fallback }: Props): JSX.Element;
export default Router;
