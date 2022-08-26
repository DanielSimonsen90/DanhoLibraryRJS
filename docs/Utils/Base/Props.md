# [DanhoLibraryRJS](../../../index.md) / [Utils](../index.md) / [Base](./index.md) / Props
Type to get basic properties from basic elements,  to support returning an element and have element-based props added onto its custom props.

```ts
type IBaseProps<InheritFrom extends HTMLElement = HTMLDivElement> = DetailedHTMLProps<HTMLAttributes<InheritFrom>, InheritFrom>;

export type BaseProps<InheritFrom extends HTMLElement = HTMLDivElement, IncludeChildren extends boolean = true> = 
    IncludeChildren extends true ? 
        IBaseProps<InheritFrom> : 
        Omit<IBaseProps<InheritFrom>, 'children'>
```