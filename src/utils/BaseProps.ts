import { DetailedHTMLProps } from 'react';
import { HTMLAttributes } from 'react';

type IBaseProps<InheritFrom extends HTMLElement = HTMLDivElement> = DetailedHTMLProps<HTMLAttributes<InheritFrom>, InheritFrom>;

export type BaseProps<InheritFrom extends HTMLElement = HTMLDivElement, IncludeChildren extends boolean = true> =
  IncludeChildren extends true
    ? IBaseProps<InheritFrom>
    : Omit<IBaseProps<InheritFrom>, 'children'>
export default BaseProps;