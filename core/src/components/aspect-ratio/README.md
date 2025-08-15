# Aspect Ratio

Displays content within a desired ratio.

## Features

- Accepts any custom ratio.

## Import

```tsx
import { AspectRatio } from 'rilix-ui';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { AspectRatio } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <AspectRatio.Root>
      <AspectRatio.Content />
    </AspectRatio.Root>
  );
});
```

## Rendered elements

Each of `AspectRatio`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize this element using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component             | Default rendered element |
| :-------------------- | :----------------------- |
| `AspectRatio.Root`    | `<div>`                  |
| `AspectRatio.Content` | `<div>`                  |

## API Reference

The `AspectRatio` component consists of two subcomponents (`Root` and `Content`). This section outlines the props available for each subcomponent and the properties returned by the `useAspectRatioContext` hook, enabling you to customize the component's behavior and access its internal state.

### Root

Contains all the parts of an aspect ratio. Renders a `<div>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ratio`   | `number`                                                   | `1`     | The desired ratio, e.g. `16 / 9`.                                                                                                                                                                                                          |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

### Content

Contains the content you want to constrain to a given ratio. Renders a `<div>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

### useAspectRatioContext

A hook that provides access to the `AspectRatio` component's internal context, exposing a readonly signals to interact with and react to the component's state.

| Property | Type                     | Description                                                               |
| :------- | :----------------------- | :------------------------------------------------------------------------ |
| `aspect` | `ReadonlySignal<number>` | A readonly signal whose value represents the current aspect ratio (in %). |

## Examples

These examples illustrate the different ways you can use the `AspectRatio` component to control content proportions and customize its rendered elements to fit your specific design and semantic needs.

### Basic example

This example demonstrates how to use the `AspectRatio` component to wrap content and maintain a `16:9` aspect ratio. The component's intrinsic sizing ensures its container is always sized correctly, regardless of the content placed inside.

For the content you want to constrain to a given ratio (e.g., the `<img>` element in this example), it is highly recommended to use the following styles to ensure it fills the container correctly:

- `object-fit: cover`: Ensures the content fills the entire space while maintaining its aspect ratio, cropping the excess.

- `width: 100%` and `height: 100%`: Guarantees that the content spans the full width and height of the container, preventing any empty space.

```tsx
import { component$ } from '@builder.io/qwik';
import { AspectRatio } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <div style={{ width: '300px', overflow: 'hidden' }}>
      <AspectRatio.Root ratio={16 / 9}>
        <AspectRatio.Content>
          <img
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </AspectRatio.Content>
      </AspectRatio.Root>
    </div>
  );
});
```

### Rendering different elements

By default, `AspectRatio`'s subcomponents each render a sensible HTML element. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs (e.g., using `<article>` or `<figure>`).

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import { component$ } from '@builder.io/qwik';
import { AspectRatio } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <div style={{ width: '300px', overflow: 'hidden' }}>
      <AspectRatio.Root ratio={16 / 9}>
        <AspectRatio.Content
          style={{ margin: 0 }}
          render$={(props) => (
            <figure {...props}>
              <img
                src="https://images.unsplash.com/photo-1615705252098-b5dc19c80433?w=300&dpr=2&q=80"
                alt="Elephant at sunset"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
              <figcaption
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  left: 0,
                  padding: '4px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                An elephant at sunset
              </figcaption>
            </figure>
          )}
        />
      </AspectRatio.Root>
    </div>
  );
});
```
