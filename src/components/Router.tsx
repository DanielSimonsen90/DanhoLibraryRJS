import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PropertiesWithout } from 'danholibraryjs';
import BaseProps from '../utils/BaseProps';
import { FunctionComponent } from '../utils/BaseReact';
export { Redirect, Route }

export type RouteConstruct = [string, FunctionComponent];

export function ensureSlash(path: string) {
    return path.startsWith('/') ? path : `/${path}`
}
export function createRoute(path: string, component: FunctionComponent): RouteConstruct {
    return [ensureSlash(path), component];
}

type LocationProps = keyof PropertiesWithout<Function, Location>;
type OnRoutePropChanged<Prop extends LocationProps> = (from: Location[Prop], to: Location[Prop], location: Location) => void;
type OnChangeObj = Partial<{ [K in LocationProps]: OnRoutePropChanged<K> }>;
type OnChange<Prop = LocationProps> = Prop extends LocationProps ? OnRoutePropChanged<Prop> : OnChangeObj;

export function useRouterChanged<Prop extends LocationProps | 'unknown' = 'unknown'>(onChange: OnChange<Prop>) {
    const [location, setLocation] = useState(window.location);

    useEffect(() => {
        const propValue = (loc: any, key: string) => loc[key];
        const changedProps = Object.keys(window.location)
            .filter(k => propValue(window.location, k) !== propValue(location, k)) //Property changed
            .filter(k => typeof onChange === 'function' ? true : propValue(onChange, k) != null) as Array<LocationProps> //Subscribed to property

        for (const prop of changedProps) {
            const from = location[prop] as any;
            const to = window.location[prop] as any;

            if (typeof onChange === 'function') onChange(from, to, window.location)
            else onChange[prop]?.(from, to, window.location);
        }

        setLocation(window.location);

    }, [window.location])

    return location;
}

type Props = BaseProps & { 
    routes: Array<RouteConstruct>
    fallback?: FunctionComponent
}
export function Router({ routes, fallback }: Props) {
    const switchData = routes.map(([path, component]) => (
        <Route path={ensureSlash(path)} component={component as any} key={path} />
    ));

    return (
        <BrowserRouter>
            <Switch>
                {switchData}
                <Route component={fallback} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;