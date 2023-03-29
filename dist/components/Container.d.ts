/// <reference types="react" />
import BaseProps from '../utils/BaseProps';
export type ContainerType = 'flex' | 'grid' | 'block' | 'inline' | 'inline-block';
export type ContainerProps = BaseProps & {
    type?: ContainerType;
};
export declare function Container({ type, children, ...props }: ContainerProps): JSX.Element;
export default Container;
