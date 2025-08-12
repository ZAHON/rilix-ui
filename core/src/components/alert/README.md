# Alert

Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.

## Features

- Adheres to the [Alert WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).

## Import

```tsx
import { Alert } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Alert } from 'rilix-ui';

const Demo = component$(() => {
  return <Alert.Root />;
});
```

## Rendered elements

Each of `Alert`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component    | Default rendered element |
| :----------- | :----------------------- |
| `Alert.Root` | `<div>`                  |

## API Reference

The `Alert` component is a compound component with multiple subcomponents. This section outlines the available props for each subcomponent, enabling you to customize their behavior and appearance.

### Root

Contains the content for the alert. Renders a `<div>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

## Examples

This section provides various examples demonstrating how to effectively use the `Alert` component. These examples cover common use cases, from displaying simple text messages to customizing the rendered HTML element.

### Basic example

This is a basic example of the `Alert` component. It demonstrates how to use `Alert.Root` to display a static, important message on the page.

```tsx
import { component$ } from '@builder.io/qwik';
import { Alert } from 'rilix-ui';

const Demo = component$(() => {
  return <Alert.Root>Access denied. Please contact the network administrator to view this page.</Alert.Root>;
});
```

### Rendering different elements

By default, the `Alert` component (specifically `Alert.Root`) renders a `<div>` element. For a complete overview of the default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import { component$, Slot } from '@builder.io/qwik';
import { Alert } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Alert.Root
      render$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
    >
      Access denied. Please contact the network administrator to view this page.
    </Alert.Root>
  );
});
```

## Accessibility

The `Alert` component adheres to the [Alert WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/). Its main purpose is to display a brief, important message without interrupting the user's task or affecting keyboard focus. The component uses the `role="alert"` attribute to ensure it is automatically announced by most screen readers when it appears on the page.
