# [DanhoLibraryRJS](../../README.md) / [Components](../index.md) / [Tab bar](./index.md) / TabBarItem
Valid children for a [TabBar](./TabBar.md) component.

## [Module](../../../src/components/TabBarItem.tsx)
```tsx
export type TabBarItemProps = {
    title: string;
    component: Functionable<Component>;
}

export function createTabBarItem(title: string, component: FunctionComponent): TabBarItemProps;
export function TabBarItem(props: TabBarItemProps): React.FunctionComponent<TabBarItemProps>;
export default TabBarItem;
```