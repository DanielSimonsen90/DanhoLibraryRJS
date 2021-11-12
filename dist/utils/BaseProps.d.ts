import { HTMLAttributes } from 'react';
import { Children } from './BaseReact';
interface IBaseProps extends HTMLAttributes<Element> {
    children?: Children;
    className?: string;
}
export declare type BaseProps<IncludeChildren extends boolean = true> = IncludeChildren extends true ? IBaseProps : Omit<IBaseProps, 'children'>;
export default BaseProps;
