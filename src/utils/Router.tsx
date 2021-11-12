import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
export { Redirect, Route }

import BaseProps from './BaseProps'
import { Component } from './BaseReact'

type Props = BaseProps & { routes?: Array<[string, Component]> }

export function Router({ children, routes }: Props) {
    const switchData = routes?.map(([path, component]) => (
        <Route path={path} component={component} key={path} />
    )) || children;

    return (
        <BrowserRouter>
            <Switch>
                {switchData}
            </Switch>
        </BrowserRouter>
    )
}
export default Router;