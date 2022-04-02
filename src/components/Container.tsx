import { classNames } from '.';
import BaseProps from '../utils/BaseProps';

export type ContainerType = 'flex' | 'popout' | 'sidebar' | 'grid';
export type ContainerProps = BaseProps & {
    type?: ContainerType
}

export function Container({ type, children, ...props }: ContainerProps) {
    const className = classNames(
        'container', 
        type && `container-${type}`, 
        props.className
    );

    return (
        <div {...props} className={className}>
            {children}
        </div>
    )
}

export default Container;