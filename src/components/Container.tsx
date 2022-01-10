import React, { CSSProperties } from 'react'
import BaseProps from '../utils/BaseProps';

export type ContainerType = 'inline-block' | 'flex' | 'popout';
type Props = BaseProps & {
    type?: ContainerType,
    style?: CSSProperties
}

export function Container({ type, children, style, ...props }: Props) {
    const className = ['container',
        type && `container-${type}`,
        props.className
    ].filter(v => v ).join(' ');

    return (
        <div {...props} className={className} style={style}>
            {children}
        </div>
    )
}
export default Container;