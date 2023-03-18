import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ClickEvent } from '../utils';
export type CRUD = 'create' | 'read' | 'update' | 'delete';
export type Importance = 'primary' | 'secondary' | 'tertiary';
export type ButtonProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'> & {
    crud?: CRUD;
    iconName?: string;
    importance?: Importance;
    hideIcon?: boolean;
    value?: string;
    onClick?: (event: ClickEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
};
export declare function Button({ crud, iconName, importance, hideIcon, className, value, children, onClick, ..._props }: ButtonProps): JSX.Element;
export default Button;
