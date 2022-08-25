# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [Tab bar](./index.md) / TabBar
The main tab bar component.

The component renders a section with a header and a sub-section. The header is the TabBar component itself, to toggle between tabs using \<ul>.
In the sub-section, the child component matching the tab item is rendered.

## References
* Utils
    * [BaseProps](../../Utils/Base/Props.md)
    * [ClickEvent](../../Utils/index.md)

## [Module](../../../src/components/TabBar/TabBar.tsx)
```tsx
type OnItemSelectedEvent = ClickEvent<HTMLLiElement> & {
    previous: TabBarItemProps;
    current: TabBarItemProps;
}

type TabBarProps = BaseProps<HTMLElement, false> & {
    data?: Map<string, TabBarItemProps>;
    children?: Arrayable<ReactElement<TabBarItemProps>>;

    onItemSelected?: (event: OnItemSelectedEvent) => void
}

function TabBar(props: TabBarProps): React.FunctionComponent<TabBarProps>;
```