# Link

Semantic element for navigation between pages.

## Features

- Support for disabled links.

## Import

```tsx
import { Link } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const Demo = component$(() => {
  return <Link.Root />;
});
```

## Rendered elements

Each of `Link`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize this element using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component   | Default rendered element |
| :---------- | :----------------------- |
| `Link.Root` | `<a>`                    |

## API Reference

The `Link` component consists of a subcomponent and a hook. This section outlines the props available for the `Root` subcomponent and the properties returned by the `useLinkContext` hook, enabling you to customize the component's behavior and access its internal state.

### Root

Contains the content for the link. Renders an `<a>` element.

| Prop       | Type                                                                                          | Default | Description                                                                                                                                                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `href`     | `string`                                                                                      | `-`     | Specifies the URL or URL fragment that the hyperlink points to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href) for more details.                                                                   |
| `disabled` | `boolean`                                                                                     | `false` | Whether the link is disabled. Native navigation will be disabled, and the link will be exposed as disabled to assistive technology.                                                                                                        |
| `render$`  | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                      |
| :-------------- | :----- | :--------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the link is disabled and cannot be interacted with. |

### useLinkContext

A hook that provides access to the `Link` component's internal context, allowing descendant components to interact with its state.

| Property   | Type                      | Description                                                           |
| :--------- | :------------------------ | :-------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal whose value indicates whether the link is disabled. |

## Examples

This section provides practical examples showing how to use the `Link` component in various scenarios. Each example includes a code snippet to help you get started quickly.

### Basic example

This example shows how to create a simple link that navigates to a specified URL. By using the `Link.Root` component with the `href` prop, you can easily create a functional hyperlink.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const Demo = component$(() => {
  return <Link.Root href="https://github.com/ZAHON/rilix-ui/tree/main">Rilix UI</Link.Root>;
});
```

### Disabled

You can disable a link by passing the `disabled` prop to the `Link.Root` component. This prevents navigation while still allowing screen readers to announce its presence, ensuring accessibility.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Link.Root disabled={true} href="https://github.com/ZAHON/rilix-ui/tree/main">
      Rilix UI
    </Link.Root>
  );
});
```

### Rendering different elements

By default, the Link.Root component renders an `<a>` element. For a complete overview of the default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by this component, or even compose it with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures all essential attributes are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const MyCustomLink = component$<PropsOf<'a'>>((props) => {
  return (
    <a style={{ color: 'purple' }} {...props}>
      <Slot />
    </a>
  );
});

const Demo = component$(() => {
  return (
    <Link.Root
      href="https://github.com/ZAHON/rilix-ui/tree/main"
      render$={(props) => (
        <MyCustomLink {...props}>
          <Slot />
        </MyCustomLink>
      )}
    >
      Rilix UI
    </Link.Root>
  );
});
```

## Accessibility

The `Link.Root` component is built on the native `<a>` element, ensuring it inherits its core accessibility features. This makes your links usable for everyone.

### Keyboard interactions

This section outlines the keyboard shortcuts supported by the `Link` component. These interactions are based on native browser behaviors, ensuring a familiar and accessible experience for users.

| Key              | Description                                         |
| :--------------- | :-------------------------------------------------- |
| <kbd>Enter</kbd> | When focus is on a `Link.Root`, activates the link. |
