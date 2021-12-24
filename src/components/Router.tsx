import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import BaseProps from '../utils/BaseProps';
import { Component } from '../utils/BaseReact';
export { Redirect, Route }


export type RouteConstruct = [string, Component];
type Props = BaseProps & { 
    routes: Array<RouteConstruct> 
}

export function createRoute(path: string, component: Component): RouteConstruct {
    return [path, component];
}

export function Router({ routes }: Props) {
    const switchData = routes.map(([path, component]) => (
        <Route path={path} component={component} key={path} />
    ));

    return (
        <BrowserRouter>
            <Switch>
                {switchData}
            </Switch>
        </BrowserRouter>
    )
}
export default Router;