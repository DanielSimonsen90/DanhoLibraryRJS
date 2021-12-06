import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import BaseProps from '../utils/BaseProps';
import { Component } from '../utils/BaseReact';
export { Redirect, Route }


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