import BaseProps from '../utils/BaseProps';

export type ContainerType = 'inline-block' | 'flex' | 'popout';
export type ContainerProps = BaseProps & {
    type?: ContainerType
}

export function Container({ type, children, ...props }: ContainerProps) {
    const className = ['container',
        type && `container-${type}`,
        props.className
    ].filter(v => v).reverse().join(' ');

    return (
        <div {...props} className={className}>
            {children}
        </div>
    )
}

export default Container;