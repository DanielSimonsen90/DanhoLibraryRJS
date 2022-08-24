# [DanhoLibraryRJS](../../README.md) / [Components](../index.md) / Tab bar
TabBar related components.

The component renders a section with a header and a sub-section. The header is the TabBar component itself, to toggle between tabs using \<ul>.
In the sub-section, the child component matching the tab item is rendered.

## Items
* [TabBar](./TabBar.md)
* [TabBarItem](./TabBarItem.md)

## [Module](../../../src/components/TabBar/index.tsx)
```tsx
export type OnItemSelectedEvent = ClickEvent<HTMLLiElement> & {
    previous: TabBarItemProps;
    current: TabBarItemProps;
}

export type TabBarProps = BaseProps<HTMLElement, false> & {
    data?: Map<string, TabBarItemProps>;
    children?: Arrayable<ReactElement<TabBarItemProps>>;

    onItemSelected?: (event: OnItemSelectedEvent) => void
}

export type TabBarItemProps = {
    title: string;
    component: Functionable<Component>;
}

export function createTabBarItem(title: string, component: FunctionComponent): TabBarItemProps;

export function TabBar(props: TabBarProps): React.FunctionComponent<TabBarProps>;
export function TabBarItem(props: TabBarItemProps): React.FunctionComponent<TabBarItemProps>;
```