/// <reference types="react" />
import { FontAwesomeProps } from 'react-fontawesome';
export type IconProps = FontAwesomeProps & {
    onMount?: () => void;
    onUnmount?: () => void;
};
export declare function Icon({ onMount, onUnmount, ...props }: IconProps): JSX.Element;
export default Icon;
