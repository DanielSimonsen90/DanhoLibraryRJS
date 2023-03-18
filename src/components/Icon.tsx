import FA_Icon, { FontAwesomeProps } from 'react-fontawesome';
import { useEffectOnce } from '../hooks';

export type IconProps = FontAwesomeProps & {
  onMount?: () => void;
  onUnmount?: () => void;
};
export function Icon({ onMount, onUnmount, ...props }: IconProps) {
  useEffectOnce(() => {
    onMount?.();
    return () => onUnmount?.();
  });
  return <FA_Icon {...props} />;
}
export default Icon;