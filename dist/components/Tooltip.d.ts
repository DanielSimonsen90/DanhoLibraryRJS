/// <reference types="react" />
import { BaseProps } from '../utils/BaseProps';
import { Children } from '../utils/BaseReact';
export declare type Dock = 'top' | 'bottom' | 'left' | 'right';
declare type Props = BaseProps & {
    dock: Dock;
    query: string;
    tooltip?: Children;
};
export declare function Tooltip({ dock, query, tooltip, children, ...rest }: Props): JSX.Element | null;
export default Tooltip;
