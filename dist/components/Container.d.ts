/// <reference types="react" />
import BaseProps from '../utils/BaseProps';
export declare type ContainerType = 'flex' | 'popout' | 'sidebar' | 'grid';
export declare type ContainerProps = BaseProps & {
    type?: ContainerType;
};
export declare function Container({ type, children, ...props }: ContainerProps): JSX.Element;
export default Container;
