# Label

Renders an accessible label associated with controls.

## Features

- Text selection is prevented when double clicking label.

- Supports nested controls.

## Import

```tsx
import { Label } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const Demo = component$(() => {
  return <Label.Root />;
});
```

## Rendered elements

Each of `Label`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

**While it's possible to change the element rendered by `Label.Root`, for accessibility and correct component functionality, it should always render a `<label>` element.**

| Component    | Default rendered element |
| :----------- | :----------------------- |
| `Label.Root` | `<label>`                |

## API Reference

This section provides a detailed overview of the `Label` component's public API, including its props, hooks, and their corresponding types, default values, and descriptions, enabling you to customize their behavior and appearance.

### Root

Contains the content for the label. Renders a `<label>` element.

| Prop                           | Type                                                       | Default | Description                                                                                                                                                                                                                                                                                           |
| :----------------------------- | :--------------------------------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `for`                          | `string`                                                   | `-`     | The ID of the form-related element (e.g., an `<input>`, `<textarea>`, or `<select>`) that the label is associated with. Clicking the label will focus or activate the associated element. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#for) for more details. |
| `preventDblClickTextSelection` | `boolean`                                                  | `true`  | When `true`, text selection is prevented when the user double-clicks the label. This enhances the user experience by avoiding unintended text highlighting when interacting with the label.                                                                                                           |
| `render$`                      | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                            |

### useLabelContext

A hook that provides access to the `Label` component's internal context, exposing a readonly signals to interact with and react to the component's state.

| Property                       | Type                      | Description                                                                                                 |
| :----------------------------- | :------------------------ | :---------------------------------------------------------------------------------------------------------- |
| `preventDblClickTextSelection` | `ReadonlySignal<boolean>` | A readonly signal whose value indicates whether text selection is prevented when double-clicking the label. |

## Examples

### Text selection when double clicking

The `Label` component automatically prevents text highlighting when a user double-clicks it, a feature designed to enhance the overall user experience. If you need to disable this default behavior, pass the `preventDblClickTextSelection` prop with a value of `false` to the `Label.Root` component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <>
      <Label.Root preventDblClickTextSelection={false} for="first-name">
        First name
      </Label.Root>
      <input id="first-name" type="text" />
    </>
  );
});
```

## Explicit label

To explicitly link a label to a form control, use the `for` prop on the `Label.Root` component. The value of the `for` prop must match the unique `id` of the corresponding form control (e.g., an `<input>`). This is the standard HTML practice for creating an explicit association, which allows users to focus the control by clicking the label.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <>
      <Label.Root for="first-name">First name</Label.Root>
      <input id="first-name" type="text" />
    </>
  );
});
```

## Implicit label

An implicit label is created by nesting a form control (e.g., an `<input>`) directly within the `Label.Root` component. This is a convenient and accessible alternative to using the `for` prop.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Label.Root>
      First name
      <input type="text" />
    </Label.Root>
  );
});
```

### Rendering different elements

By default, the `Label` component (specifically `Label.Root`) renders a `<label>` element. For a complete overview of the default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

**While it's possible to change the element rendered by `Label.Root`, for accessibility and correct component functionality, it should always render a `<label>` element.**

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const MyCustomLabel = component$<PropsOf<'label'>>((props) => {
  return (
    <label style={{ color: 'purple' }} {...props}>
      <Slot />
    </label>
  );
});

const Demo = component$(() => {
  return (
    <>
      <Label.Root
        for="first-name"
        render$={(props) => (
          <MyCustomLabel {...props}>
            <Slot />
          </MyCustomLabel>
        )}
      >
        First name
      </Label.Root>
      <input id="first-name" type="text" />
    </>
  );
});
```

## Accessibility

This component is based on the native `label` element, it will automatically apply the correct labelling when wrapping controls or using the `for` attribute. For your own custom controls to work correctly, ensure they use native elements such as `button` or `input` as a base.
