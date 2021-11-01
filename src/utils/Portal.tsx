import React, { cloneElement, ReactChild, ReactElement, useEffect } from 'react'
import { Extensions } from 'danholibraryjs';
import BaseProps from './BaseProps'
import { Children } from './BaseReact';
import { createPortal } from 'react-dom';

export type PortalType = 'popout' | 'tooltip' | 'modal';
type Props = BaseProps & { type: PortalType }

export default function Portal({ type, children, ...rest }: Props) {
    const portal = document.createProperElement('div', {
        attributes: [['type', type]]
    });
    const portals = document.querySelector("#portals") as HTMLDivElement;
    if (!portals) throw Error("#portals not found in dom!");
    else if (!children) return null;

    portals.replaceChildren(portal);

    useEffect(() => {
        portals.style.zIndex = '100';
        return () => portals.removeAttribute('style');
    }, [portals, portals.children]);
    useEffect(() => () => portals.replaceChildren(), [portals]);

    const _children = (
        isntArray(children) ?
            cloneElement(children, { ...children.props, ...rest }) :
            (children as Array<ReactElement>).map(child => cloneElement(child, { ...child.props, ...rest })) 
    )

    return createPortal(_children, portal);

    function isntArray(children: Children): children is ReactElement {
        return Array.isArray(children);
    }
}
