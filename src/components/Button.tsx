import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Icon from 'react-fontawesome';
import { combineClassName } from '.';
import { ClickEvent } from '../utils';

export type CRUD = 'create' | 'read' | 'update' | 'delete';
export type Importance = 'primary' | 'secondary' | 'tertiary';
export type ButtonProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'> & {
    crud?: CRUD,
    iconName?: string,
    importance?: Importance
    
    onClick?: (event: ClickEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void
}

function GetIconFromCrud(crud: CRUD) {
    switch (crud) {
        case 'create': return 'plus';    
        case 'read': return 'book-open-cover';
        case 'update': return 'pencil';
        case 'delete': return 'trash';
    }
}

export function Button({ crud, iconName, importance, className, value, children, onClick, ..._props }: ButtonProps) {
    const props = { ..._props, "data-crud": crud }

    if (!iconName && crud) {
        iconName = GetIconFromCrud(crud);
    }

    return (
        <button className={combineClassName(className, importance)} onClick={onClick} 
            onKeyDown={e => (e.key === 'Enter' || e.key === 'NumpadEnter') && onClick?.(e)}  {...props}>
            {iconName && <Icon name={iconName} />}
            {value || children}
        </button>
    );
}
export default Button;