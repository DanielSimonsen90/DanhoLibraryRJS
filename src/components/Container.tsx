import { classNames } from '.';
import BaseProps from '../utils/BaseProps';

export type ContainerType = 'flex' | 'grid' | 'block' | 'inline' | 'inline-block';
export type ContainerProps = BaseProps & {
  type?: ContainerType;
};

export function Container({ type, children, ...props }: ContainerProps) {
  const className = classNames(
    'container',
    type && `container-${type}`,
    props.className
  );

  return (
    <div {...props} className={className} data-type={type ?? 'block'}>
      {children}
    </div>
  );
}

export default Container;