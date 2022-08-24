# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [Utility](./index.md) / Container

The container component is used as a div wrapper.
Comes with preset classNames such as 'container' and 'container-{type}', provided from props.

ContainerProps extends [BaseProps](../../Utils/Base/Props.md) on the HTMLDivElement, meaning it will accept every div property.

## References
* [Utils](../../Utils/index.md)
    * [BaseProps](../../Utils/Base/Props.md)

## [Module](../../../src/components/Container.tsx)
```tsx
export type ContainerType = 'flex' | 'popout' | 'sidebar' | 'grid';
export type ContainerProps = BaseProps & {
    type: ContainerType;
}

export function Container(props: ContainerProps): React.FunctionComponent<ContainerProps>
export default Container;
```