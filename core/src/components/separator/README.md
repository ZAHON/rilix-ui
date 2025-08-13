# Separator

Visually or semantically separates content.

## Features

- Supports horizontal and vertical orientations.

- Adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).

## Import

```tsx
import { Separator } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'rilix-ui';

const Demo = component$(() => {
  return <Separator.Root />;
});
```

## Rendered elements

Each of `Separator`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize this element using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component        | Default rendered element |
| :--------------- | :----------------------- |
| `Separator.Root` | `<div>`                  |

## API Reference

The `Separator` component consists of a subcomponent and a hook. This section outlines the props available for the `Root` subcomponent and the properties returned by the `useSeparatorContext` hook, enabling you to customize the component's behavior and access its internal state.

### Root

The separator. Renders a `<div>` element.

| Prop          | Type                                                                                                                | Default        | Description                                                                                                                                                                                                                                |
| :------------ | :------------------------------------------------------------------------------------------------------------------ | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation` | `"horizontal" \| "vertical"`                                                                                        | `"horizontal"` | The orientation of the component.                                                                                                                                                                                                          |
| `decorative`  | `boolean`                                                                                                           | `false`        | Whether or not the component is purely decorative. When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.                                                     |
| `render$`     | `(props: Record<string, unknown>, state: { orientation: ReadonlySignal<"vertical" \| "horizontal"> }) => JSXOutput` | `-`            | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute     | Values                       | Description                                         |
| :----------------- | :--------------------------- | :-------------------------------------------------- |
| `data-orientation` | `"horizontal" \| "vertical"` | Indicates the current orientation of the component. |

### useSeparatorContext

A hook that provides access to the `Separator` component's internal context, exposing readonly signals to interact with and react to the component's state, such as its orientation and decorative status.

| Property      | Type                                         | Description                                                                                                                                                                                                               |
| :------------ | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `orientation` | `ReadonlySignal<"horizontal" \| "vertical">` | A readonly signal whose value is the orientation of the component.                                                                                                                                                        |
| `decorative`  | `ReadonlySignal<boolean>`                    | A readonly signal whose value indicates whether or not the component is purely decorative. When `true`, accessibility-related attributes are updated so that the rendered element is removed from the accessibility tree. |

## Examples

The examples below illustrate practical use cases for the `Separator` component. They demonstrate how to use both `horizontal` and `vertical` orientations, as well as how to customize the component's rendered element for different semantic needs.

### Basic example

This basic example demonstrates two common use cases for the `Separator.Root` component: a horizontal separator to divide a block of text and vertical separators to visually separate items in a navigation or a list. This shows how to use both `horizontal` and `vertical` orientations and apply custom styling to control the appearance of the separator.

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <>
      <h1>Rilix UI</h1>
      <p>A collection of accessible, unstyled components, hooks, and utilities for Qwik applications.</p>
      <Separator.Root style={{ margin: '16px 0', height: '1px', width: '100%', backgroundColor: '#000000' }} />
      <div style={{ height: '16px', display: 'flex', alignItems: 'center' }}>
        <span>Blog</span>
        <Separator.Root
          orientation="vertical"
          style={{ margin: '0 16px', height: '100%', width: '1px', backgroundColor: '#000000' }}
        />
        <span>Docs</span>
        <Separator.Root
          orientation="vertical"
          style={{ margin: '0 16px', height: '100%', width: '1px', backgroundColor: '#000000' }}
        />
        <span>Source</span>
      </div>
    </>
  );
});
```

### Rendering different elements

By default, the `Separator.Root` component renders a `<div>` element. For a complete overview of the default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by this component, or even compose it with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures all essential attributes are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Separator.Root
      render$={(props) => <span {...props} />}
      style={{ display: 'block', height: '1px', width: '100%', backgroundColor: '#000000' }}
    />
  );
});
```

## Accessibility

The `Separator` component is a crucial tool for web accessibility, acting as a divider that separates and distinguishes sections of content. It adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).
