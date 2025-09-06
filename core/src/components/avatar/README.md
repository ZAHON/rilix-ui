# Avatar

An image element with a fallback for representing the user.

> This component uses the [`useVisibleTask$()`](https://qwik.dev/docs/components/tasks/#usevisibletask) hook to load the avatar image. By default, this task is executed when the component becomes visible in the viewport, which is an efficient way to defer loading until it's needed. You can use the `strategy` prop on [`Avatar.Root`](#root) to change this behavior and run the task eagerly.

## Features

- Automatic and manual control over when the image renders.

- Fallback part accepts any slot content.

- Optionally delay fallback rendering to avoid content flashing.

## Import

```tsx
import { Avatar, useAvatarContext } from 'rilix-ui';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Avatar } from 'rilix-ui';

const Demo = component$(() => {
  <Avatar.Root>
    <Avatar.Image />
    <Avatar.Fallback />
  </Avatar.Root>;
});
```

## Rendered elements

Each of `Avatar`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

**While it's possible to change the element rendered by `Avatar.Image`, for accessibility and correct component functionality, it should always render an `<img>` element.**

| Component         | Default rendered element |
| :---------------- | :----------------------- |
| `Avatar.Root`     | `<span>`                 |
| `Avatar.Image`    | `<img>`                  |
| `Avatar.Fallback` | `<span>`                 |

## API Reference

This section provides a detailed overview of all the available props and hooks for the `Avatar` component and its sub-components. Understanding these APIs will help you effectively customize and integrate the `Avatar` component into your applications.

### Root

Contains all the parts of an avatar. Renders a `<span>` element.

| Prop       | Type                                                                                                                                       | Default                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `strategy` | `"intersection-observer" \| "document-ready" \| "document-idle"`                                                                           | `"intersection-observer"` | The strategy to use for determining when the avatar image should start loading. <br /> <br /> - `"intersection-observer"`: The image will begin loading when the avatar component becomes visible within the viewport. This is the most efficient strategy as it defers loading until the element is needed. <br /> - `"document-ready"`: The image will begin loading as soon as the main document has been fully loaded and parsed. <br /> - `"document-idle"`: The image will begin loading when the browser is in an idle state, allowing other critical tasks to finish first. |
| `render$`  | `(props: Record<string, unknown>, state: { imageLoadingStatus: ReadonlySignal<"idle" \| "loading" \| "loaded" \| "error"> }) => JSXOutput` | `-`                       | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                                                                                                                                                                                                                                                                                                          |

### Image

The image to render. By default it will only render when it has loaded. You can use the `onLoadingStatusChange$` callback if you need more control. Renders an `<img>` element.

| Prop                     | Type                                                                                                                                       | Default | Description                                                                                                                                                                                                                                |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`                    | `string`                                                                                                                                   | `-`     | The image source URL. When a valid URL is provided, the component will attempt to load the image. If the URL is missing or invalid, the `Avatar.Fallback` component will be rendered.                                                      |
| `onLoadingStatusChange$` | `QRL<(status: "idle" \| "loading" \| "loaded" \| "error") => void>`                                                                        | `-`     | A `QRL` callback function that providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.                                              |
| `render$`                | `(props: Record<string, unknown>, state: { imageLoadingStatus: ReadonlySignal<"idle" \| "loading" \| "loaded" \| "error"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

### Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `onLoadingStatusChange$` callback on `Avatar.Image` component. Renders a `<span>` element.

| Prop      | Type                                                                                                                                       | Default | Description                                                                                                                                                                                                                                                 |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `delayMs` | `number`                                                                                                                                   | `-`     | The amount of time, in milliseconds, to wait before rendering the fallback component. This is useful for preventing a "flash" of the fallback content on fast connections, showing it only when the image takes longer to load, such as on slower networks. |
| `render$` | `(props: Record<string, unknown>, state: { imageLoadingStatus: ReadonlySignal<"idle" \| "loading" \| "loaded" \| "error"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                  |

### useAvatarContext

A hook that provides access to the `Avatar` component's internal state, such as the image loading status. It must be used within an `Avatar.Root` component.

| Property             | Type                                                         | Description                                                                                                                                                                                                                                                                                                                         |
| :------------------- | :----------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imageLoadingStatus` | `ReadonlySignal<"idle" \| "loading" \| "loaded" \| "error">` | A readonly signal whose value indicates the loading status of the avatar image. <br /> <br /> - `"idle"`: The initial state before the image has started loading. <br /> - `"loading"`: The image is currently being fetched. <br /> - `"loaded"`: The image has loaded successfully. <br /> - `"error"`: The image failed to load. |

## Examples

This section provides practical examples of how to use the `Avatar` component. Each example demonstrates a common use case, showing you how to implement features like delaying the fallback rendering and changing the default rendered HTML element.

### Avoid flash during loading

By default, the `Avatar.Fallback` component renders as soon as the image begins to load or if an error occurs. If you notice a brief flash of the fallback content on fast connections, you can use the `delayMs` prop to delay its rendering. This ensures the fallback is only shown when the image takes a longer time to load, such as on slower networks, providing a smoother user experience.

```tsx
import { component$ } from '@builder.io/qwik';
import { Avatar } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar.Root>
  );
});
```

### Rendering different elements

By default, the `Avatar`'s subcomponents each render a sensible HTML element. For example, `Avatar.Root` renders a `<span>`, and `Avatar.Image` renders an `<img>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs (e.g., using an `<a>` tag to make the avatar a clickable link).

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like `data-*` attributes for styling, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

**While it's possible to change the element rendered by `Avatar.Image`, for accessibility and correct component functionality, it should always render an `<img>` element.**

```tsx
import { component$, Slot } from '@builder.io/qwik';
import { Avatar } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Avatar.Root
      render$={(props) => (
        <a href="/profile" {...props}>
          <Slot />
        </a>
      )}
    >
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback>CT</Avatar.Fallback>
    </Avatar.Root>
  );
});
```
