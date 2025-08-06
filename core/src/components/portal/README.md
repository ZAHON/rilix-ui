# Portal

Lifts content to the browser's top layer, utilizing the native Popover API.

## Features

- Lifts content using native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

- Simplified integration with native browser functionality.

## Import

```tsx
import { Portal } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Portal } from 'rilix-ui';

const Demo = component$(() => {
  return <Portal.Root />;
});
```

## Rendered elements

Each of `Portal`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component     | Default rendered element |
| :------------ | :----------------------- |
| `Portal.Root` | `<div>`                  |

## API Reference

This section provides a comprehensive overview of all available props, data attributes, and hooks for the `Portal` component. Use this reference to understand how to configure and interact with this component.

### Root

A robust component that leverages the native Popover API to display its children in the browser's top layer. Renders a `<div>` element.

| Prop      | Type                                                                                      | Default | Description                                                                                                                                                                                                                                                                                                          |
| :-------- | :---------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`    | `Signal<boolean>`                                                                         | `-`     | Controls the open state of the portal. When the value of the signal passed to this prop is set to `true`, the portal will be displayed using the Popover API's `showPopover()` method. etting it to `false` will hide the content via `hidePopover()`. Opening the portal is only possible in a browser environment. |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                                           |

| Data attribute | Values               | Description                                               |
| :------------- | :------------------- | :-------------------------------------------------------- |
| `[data-state]` | `"open" \| "closed"` | Indicates whether the portal is currently open or closed. |

### usePortalContext

A hook that provides access to the `Portal` component's internal state, allowing descendant components to interact with it.

| Property   | Type                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------- | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`     | `ReadonlySignal<boolean>`      | A readonly signal that reflects the current open state of the portal. Its value reflects the `value` of the `open` prop passed to the `Portal.Root` component. If the `open` prop is not provided to `Portal.Root`, this signal's value will be `false`. Its value is `true` when the portal is displayed and `false` when it's hidden.                                                                                                               |
| `setOpen$` | `QRL<(open: boolean) => void>` | A `QRL` function used to imperatively control the open state of the portal. Calling this function with `true` will attempt to open the portal, while calling it with `false` will hide it. This action directly changes the `value` of the signal passed via the `open` prop to the `Portal.Root` component, but only if the `open` prop was actually provided to `Portal.Root`. Otherwise, calling this function with any value will have no effect. |

## Examples

This section provides practical code examples demonstrating common use cases for the `Portal` component. Each example showcases how to effectively implement and control the portal in various scenarios, helping you quickly integrate it into your projects.

### Basic example

This example demonstrates the fundamental usage of the `Portal` component. It shows how to control the portal's visibility using a boolean signal passed to the `open` prop of `Portal.Root`. The simplest way to open the portal is by changing the signal's value directly, often triggered by a button click, allowing content to be displayed in the top layer upon interaction.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Portal } from 'rilix-ui';

const Demo = component$(() => {
  const open = useSignal(false);

  return (
    <>
      <button type="button" onClick$={() => (open.value = true)}>
        Open portal
      </button>

      <Portal.Root open={open} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '25px',
            backgroundColor: 'white',
          }}
        >
          <button type="button" onClick$={() => (open.value = false)}>
            Close portal
          </button>
        </div>
      </Portal.Root>
    </>
  );
});
```

### Initially open

This example demonstrates how to set the `Portal` to open automatically when the component loads. This is required if the portal needs to be initially open, as it cannot be opened during Server-Side Rendering (SSR) because the portal utilizes the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), which is only available in a browser environment. This can be achieved by updating the `Portal.Root` component's `open` boolean signal within a `useOnDocument` hook (specifically listening for the `DOMContentLoaded` event) or by using a `useVisibleTask$` hook with a `strategy` like `"document-ready"` or `"document-idle"`. In both cases, the portal will be visible from the moment the page's content is fully loaded.

```tsx
import { component$, useSignal, useOnDocument, $ } from '@builder.io/qwik';
import { Portal } from 'rilix-ui';

const Demo = component$(() => {
  const open = useSignal(false);

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      open.value = true;
    })
  );

  return (
    <>
      <button type="button" onClick$={() => (open.value = true)}>
        Open portal
      </button>

      <Portal.Root open={open} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '25px',
            backgroundColor: 'white',
          }}
        >
          <button type="button" onClick$={() => (open.value = false)}>
            Close portal
          </button>
        </div>
      </Portal.Root>
    </>
  );
});
```

### Rendering different elements

By default, `Portal`'s subcomponents (specifically `Portal.Root`) render a sensible HTML element. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the `Portal`'s core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import { component$, useSignal, Slot } from '@builder.io/qwik';
import { Portal } from 'rilix-ui';

const Demo = component$(() => {
  const open = useSignal(false);

  return (
    <>
      <button type="button" onClick$={() => (open.value = true)}>
        Open portal
      </button>

      <Portal.Root
        open={open}
        render$={(props) => (
          <section {...props}>
            <Slot />
          </section>
        )}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '25px',
            backgroundColor: 'white',
          }}
        >
          <button type="button" onClick$={() => (open.value = false)}>
            Close portal
          </button>
        </div>
      </Portal.Root>
    </>
  );
});
```

## Caveats

This section highlights important considerations and potential limitations when working with the `Portal` component. Understanding these details will help you avoid common pitfalls and ensure your implementation works as expected across different environments.

### SSR limitations

The `Portal` component relies on the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) for its functionality. Since the Popover API is a browser-specific Web API, it is not available in Server-Side Rendering (SSR) environments. This means the `Portal` component cannot be opened or rendered in an `"open"` state on the server. Attempting to do so will result in an error, as the browser APIs required to display the portal are absent. To ensure proper behavior, always manage the portal's `open` state to be `false` during SSR.

### No popover attribute polyfill

The `Portal` component currently doesn't include a polyfill for the Popover API. This decision was made because modern browser support for the native Popover API is already quite extensive. You can check the current compatibility on [Can I use: Popover API](https://caniuse.com/mdn-api_htmlelement_popover).

By relying on native support, we keep the component lightweight and performant. While a polyfill isn't included now, we might consider adding one in the future if broader support is needed or if significant use cases arise where native support is insufficient.
