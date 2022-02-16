import { ReactElement } from 'react';
import { Arrayable } from 'danholibraryjs';
import BaseProps from '../utils/BaseProps';
import { TabBarItemProps } from './TabBarItem';
export declare type TabBarProps = Omit<BaseProps<HTMLElement>, 'children'> & {
    data?: Map<string, TabBarItemProps>;
    children?: Arrayable<ReactElement<TabBarItemProps>>;
    onItemSelected?: OnItemSelected;
};
export declare type OnItemSelectedEvent = React.MouseEvent<HTMLLIElement, MouseEvent> & {
    previous: TabBarItemProps;
    current: TabBarItemProps;
};
declare type OnItemSelected = (event: OnItemSelectedEvent) => void;
export declare function TabBar({ onItemSelected, ...props }: TabBarProps): JSX.Element;
export default TabBar;
