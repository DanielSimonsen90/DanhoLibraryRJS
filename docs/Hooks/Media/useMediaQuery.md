# [DanhoLibraryRJS](../../index.md) / [Hooks](../index.md) / [Media](index.md) / useMediaQuery
Boolean value of whether provided media query matches

## References
* [Hooks](../index.md)
    * [useEventListener](../Events/useEventListener.md)

## [Module](../../../src/hooks/media/useMediaQuery.ts)
```ts
/**
 * CSS media queries in React 👀
 * @param mediaQuery Media query: default: (max-width: mediaQuery)
 * @returns If media query is a match
 */
export function useMediaQuery(mediaQuery: string): boolean;
export default useMediaQuery;
```

## Example
```tsx
function Post({ title, content }) {
    return (
        <article>
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    )
}

function Posts({ posts }) {
    const onMobile = useMediaQuery("500");

    return onMobile ? (
        <TabBar data={posts.reduce((result, post) => 
            result.set(post.title, <Post {...post} />)
        , new Map())} 
        />
    ) :(
        <section>
            {posts.map(post => (
                <Post {...post} />
            ))}
        </section>
    )
}
```