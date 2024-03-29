/// <reference types="react" />
import { Component, FunctionComponent } from "../../utils/BaseReact";
export type TabBarItemProps = {
    title: string;
    component: FunctionComponent | Component;
};
export declare function createTabBarItem(title: string, component: FunctionComponent): TabBarItemProps;
export declare function TabBarItem({ component }: TabBarItemProps): JSX.Element;
export default TabBarItem;
