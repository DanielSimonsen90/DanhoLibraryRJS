import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Icon from 'react-fontawesome';

export type CRUD = 'create' | 'read' | 'update' | 'delete';
export type Importance = 'primary' | 'secondary' | 'tertiary';
export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    crud?: CRUD,
    iconName?: string,
    importance?: Importance
}

function GetIconFromCrud(crud: CRUD) {
    switch (crud) {
        case 'create': return 'plus';    
        case 'read': return 'book-open-cover';
        case 'update': return 'pencil';
        case 'delete': return 'trash';
    }
}

export function Button({ crud, iconName, importance, className, children, ..._props }: ButtonProps) {
    const props = { ..._props, "data-crud": crud }

    if (!iconName && crud) {
        iconName = GetIconFromCrud(crud);
    }

    const classNameCombined = [
        className, 
        importance
    ].filter(v => v).join(' ');

    return (
        <button className={classNameCombined} {...props}>
            {iconName && <Icon name={iconName} />}
            {children}
        </button>
    );
}
export default Button;