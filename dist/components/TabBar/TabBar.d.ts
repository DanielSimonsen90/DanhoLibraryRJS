import { ReactElement } from 'react';
import { Arrayable } from 'danholibraryjs';
import BaseProps from '../../utils/BaseProps';
import { TabBarItemProps } from './TabBarItem';
import { ClickEvent } from '../../utils';
declare type OnItemSelected = (event: OnItemSelectedEvent) => void;
export declare type OnItemSelectedEvent = ClickEvent<HTMLLIElement> & {
    previous: TabBarItemProps;
    current: TabBarItemProps;
};
export declare type TabBarProps = BaseProps<HTMLElement, false> & {
    data?: Map<string, TabBarItemProps>;
    children?: Arrayable<ReactElement<TabBarItemProps>>;
    onItemSelected?: OnItemSelected;
};
export declare function TabBar({ onItemSelected, ...props }: TabBarProps): JSX.Element;
export default TabBar;
