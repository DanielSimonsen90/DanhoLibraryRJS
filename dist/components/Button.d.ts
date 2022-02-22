import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
export declare type CRUD = 'create' | 'read' | 'update' | 'delete';
export declare type Importance = 'primary' | 'secondary' | 'tertiary';
export declare type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    crud?: CRUD;
    iconName?: string;
    importance?: Importance;
};
export declare function Button({ crud, iconName, importance, className, value, children, ..._props }: ButtonProps): JSX.Element;
export default Button;
