import { CSSProperties } from 'react';
import BaseProps from '../utils/BaseProps';
export declare type ContainerType = 'inline-block' | 'flex' | 'popout';
declare type Props = BaseProps & {
    type?: ContainerType;
    style?: CSSProperties;
};
export declare function Container({ type, children, style, ...props }: Props): JSX.Element;
export default Container;
