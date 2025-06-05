# Render

The `Render` component offers a powerful and flexible way to compose component functionalities onto various HTML elements or even other components.

When developing components, you often encounter situations where you want to allow users to either change the underlying HTML element of your component or integrate your component's features with their own custom components.

## Features

- Flexible rendering of HTML elements.

- Supports composition with other components.

- Passes internal component state to rendering logic.

## Import

```tsx
import { Render } from '@/_internal';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Render } from '@/_internal';

const Demo = component$(() => {
  return <Render />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Render } from '@/_internal';

const Demo = component$(() => {
  return <Render as="div" defaultRender$={(props) => <div {...props}>Default content</div>} />;
});
```

## API Reference

| Prop              | Type                                                          | Default | Description                                                                                                                                                                                                                                                                               |
| :---------------- | :------------------------------------------------------------ | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as*`             | `"a" \| "button" \| "div" \| "li" \| "nav" \| "ol" \| "span"` | `-`     | A string literal type used primarily for **type inference** to correctly type the HTML attributes (`PropsOf<T>`) associated with the specified tag. While it suggests a desired HTML element, the actual rendered element depends on the implementation of `defaultRender$` or `render$`. |
| `defaultRender$*` | `(props: Record<string, unknown>, state: S) => JSXOutput`     | `-`     | This prop defines the default rendering logic for the component. It will be used if the `render$` prop is not provided.                                                                                                                                                                   |
| `render$`         | `(props: Record<string, unknown>, state: S) => JSXOutput`     | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                |
| `state`           | `S`                                                           | `-`     | The state of the component. It will be used as a parameter for the `defaultRender$` and `render$` callbacks.                                                                                                                                                                              |

## Examples

### Implement `render$` prop in custom component

The `Render` component's `render$` prop allows you to completely override the default HTML element or compose with another component, while still inheriting the component's intended behavior and attributes.

In the example below, a `Button` component is created, internally utilizing `Render`. The `Button` component exposes its own `render$` prop, which it passes directly to `Render`. This allows consumers of `Button` to decide whether it renders as a native `<button>` or a custom `<div>`.

```tsx
import type { PropsOf, JSXOutput } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';

interface ButtonProps extends PropsOf<'button'> {
  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   * Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.
   */
  render$?: (
    /**
     * These are the standard HTML attributes and properties that should be applied to your custom rendered element.
     * Spreading these props ensures that your component maintains its intended behavior, accessibility features, and proper integration with the DOM.
     */
    props: Record<string, unknown>,

    /**
     * An object that provides access to the internal state of the component.
     */
    state: {}
  ) => JSXOutput;
}

const Button = component$<ButtonProps>((props) => {
  return (
    <Render
      as="button"
      defaultRender$={(props) => (
        <button {...props}>
          <Slot />
        </button>
      )}
      {...props}
    />
  );
});

const Demo = component$(() => {
  return (
    <>
      <Button>
        This is a <strong>button</strong> element.
      </Button>
      <Button
        render$={(props) => (
          <div {...props}>
            <Slot />
          </div>
        )}
      >
        This is a <strong>div</strong> element.
      </Button>
    </>
  );
});
```
