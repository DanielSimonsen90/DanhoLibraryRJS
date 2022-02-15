import { ReactElement } from 'react';
import { Arrayable } from 'danholibraryjs';
import BaseProps from '../utils/BaseProps';
import { Component } from '../utils/BaseReact';
export declare type OnItemSelectedEvent = React.MouseEvent<HTMLDivElement, MouseEvent> & {
    previous: Component;
    current: Component;
};
export declare type TabBarItemProps = BaseProps;
declare type OnItemSelected = (event: OnItemSelectedEvent) => void;
export declare type TabBarProps = Omit<BaseProps, 'children'> & {
    children: Arrayable<ReactElement<TabBarItemProps>>;
    onItemSelected?: OnItemSelected;
};
export default function TabBar({ className, onItemSelected, ...props }: TabBarProps): JSX.Element;
export {};
