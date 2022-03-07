import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ClickEvent } from '../utils';
export declare type CRUD = 'create' | 'read' | 'update' | 'delete';
export declare type Importance = 'primary' | 'secondary' | 'tertiary';
export declare type ButtonProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'> & {
    crud?: CRUD;
    iconName?: string;
    importance?: Importance;
    hideIcon?: boolean;
    onClick?: (event: ClickEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
};
export declare function Button({ crud, iconName, importance, hideIcon, className, value, children, onClick, ..._props }: ButtonProps): JSX.Element;
export default Button;
