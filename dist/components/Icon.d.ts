/// <reference types="react" />
import { FontAwesomeProps } from 'react-fontawesome';
export declare type IconProps = FontAwesomeProps & {
    componentDidMount?: () => void;
    componentWillUnmount?: () => void;
};
export declare function Icon({ componentDidMount, componentWillUnmount, ...props }: IconProps): JSX.Element;
export default Icon;
