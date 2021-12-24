import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
export { Redirect, Route }

import BaseProps from './BaseProps'
import { Component } from './BaseReact'

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