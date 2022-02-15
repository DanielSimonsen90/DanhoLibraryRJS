import { ReactElement } from 'react';
import { Arrayable } from 'danholibraryjs';
import { combineClassName } from '.';
import BaseProps from '../utils/BaseProps';
import { Component } from '../utils/BaseReact';
import { useStateWithHistory } from '../hooks/wds/useStateWithHistory';

export type OnItemSelectedEvent = React.MouseEvent<HTMLDivElement, MouseEvent> & {
    previous: Component
    current: Component
}
export type TabBarItemProps = BaseProps;
type OnItemSelected = (event: OnItemSelectedEvent) => void;
export type TabBarProps = Omit<BaseProps, 'children'> & {
    children: Arrayable<ReactElement<TabBarItemProps>>
    onItemSelected?: OnItemSelected
}

export default function TabBar({ className, onItemSelected, ...props }: TabBarProps) {
    const [componentSelected, setComponentSelected] = useStateWithHistory(
        Array.isArray(props.children) ? props.children[0] : props.children, {
        capacity: 1
    });

    const children = [props.children].flat().map(child => {
        child.props.onClick = event => {
            onItemSelected?.({
                ...event,
                previous: componentSelected,
                current: child
            });
            setComponentSelected(child);
            child.props.onClick?.(event);
        }
        return child;
    })

    return (
        <div className={combineClassName('tab-bar', className)} {...props}>
            {children}
        </div>
    );
}