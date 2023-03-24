/// <reference types="react" />
import BaseProps from '../utils/BaseProps';
export type ContainerType = 'flex' | 'popout' | 'sidebar' | 'grid';
export type ContainerProps = BaseProps & {
    type?: ContainerType;
};
export declare function Container({ type, children, ...props }: ContainerProps): JSX.Element;
export default Container;
