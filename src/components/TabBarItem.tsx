import { Component, FunctionComponent } from "../utils/BaseReact"

export type TabBarItemProps = {
    title: string,
    component: FunctionComponent | Component
}

export function createTabBarItem(title: string, component: FunctionComponent): TabBarItemProps {
    return { title, component }
}

export function TabBarItem({ title, component }: TabBarItemProps) {
    return typeof component === 'function' ? component() : component;
}
export default TabBarItem;