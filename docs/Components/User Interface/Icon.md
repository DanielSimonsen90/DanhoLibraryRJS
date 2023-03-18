# [DanhoLibraryRJS](../../index.md) / [Components](../index.md) / [User Interface](./index.md) / Icon
Default export from [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) wrapped in a [useEffectOnce](../../Hooks/Effect/useEffectOnce.md), providing onMount & onUnmount along with support for official FontAwesomeProps

## References
* Hooks
    * [useEffectOnce](../../Hooks/Effect/useEffectOnce.md)

## [Module](../../../src/components/Icon.tsx)
```tsx
export type IconProps = FontAwesomeProps & {
    onMount?: () => void;
    onUnmount?: () => void;
}

export function Icon(props: IconProps): React.FunctionComponent<IconProps>;
export default Icon;
```