import FontAwesome, { FontAwesomeProps } from 'react-fontawesome';
import { useEffectOnce } from '../hooks';

export type IconProps = FontAwesomeProps & {
    componentDidMount?: () => void;
    componentWillUnmount?: () => void;
}
export function Icon({ componentDidMount, componentWillUnmount, ...props }: IconProps) {
    useEffectOnce(() => {
        componentDidMount?.();
        return () => componentWillUnmount?.();
    });
    return <FontAwesome {...props} />;
}
export default Icon;