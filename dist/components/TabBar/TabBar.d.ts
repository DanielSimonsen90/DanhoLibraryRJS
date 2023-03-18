import { ReactElement } from 'react';
import { Arrayable } from 'danholibraryjs';
import BaseProps from '../../utils/BaseProps';
import { TabBarItemProps } from './TabBarItem';
import { ClickEvent } from '../../utils';
type OnItemSelected = (event: OnItemSelectedEvent) => void;
export type OnItemSelectedEvent = ClickEvent<HTMLLIElement> & {
    previous: TabBarItemProps;
    current: TabBarItemProps;
};
export type TabBarProps = BaseProps<HTMLElement, false> & {
    data?: Map<string, TabBarItemProps>;
    children?: Arrayable<ReactElement<TabBarItemProps>>;
    onItemSelected?: OnItemSelected;
};
export declare function TabBar({ onItemSelected, ...props }: TabBarProps): JSX.Element;
export default TabBar;
