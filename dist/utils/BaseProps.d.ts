import { DetailedHTMLProps } from 'react';
import { HTMLAttributes } from 'react';
declare type IBaseProps<InheritFrom extends HTMLElement = HTMLDivElement> = DetailedHTMLProps<HTMLAttributes<InheritFrom>, InheritFrom>;
export declare type BaseProps<InheritFrom extends HTMLElement = HTMLDivElement, IncludeChildren extends boolean = true> = IncludeChildren extends true ? IBaseProps<InheritFrom> : Omit<IBaseProps<InheritFrom>, 'children'>;
export default BaseProps;
