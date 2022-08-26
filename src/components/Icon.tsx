import FA_Icon, { FontAwesomeProps } from 'react-fontawesome';
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
    return <FA_Icon {...props} />;
}
export default Icon;