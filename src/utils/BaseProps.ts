import { HTMLAttributes, ReactNode } from 'react';
import { Children } from './BaseReact';

interface IBaseProps extends HTMLAttributes<Element> {
    children?: Children
    className?: string,
}

export type BaseProps<IncludeChildren extends boolean = true> =
    IncludeChildren extends true ? 
        IBaseProps : 
        Omit<IBaseProps, 'children'>
export default BaseProps;