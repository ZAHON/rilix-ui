# Accordion

A vertically stacked set of interactive headings that each reveal an associated section of content.

## Features

- Full keyboard navigation.

- Can expand one or multiple items.

- Can be uncontrolled or controlled.

- Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Import

```tsx
import { Accordion } from 'rilix-ui';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent />
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

## Rendered elements

Each of `Accordion`'s subcomponents renders a default HTML element that is sensible for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component                 | Default rendered element |
| :------------------------ | :----------------------- |
| `Accordion.Root`          | `<div>`                  |
| `Accordion.Item`          | `<div>`                  |
| `Accordion.ItemHeader`    | `<h3>`                   |
| `Accordion.ItemTrigger`   | `<button>`               |
| `Accordion.ItemPanel`     | `<div>`                  |
| `Accordion.ItemContent`   | `<div>`                  |
| `Accordion.ItemIndicator` | `<span>`                 |

## API Reference

This section provides a detailed breakdown of the props, attributes, and methods available for each of the `Accordion` subcomponents. The following overviews will guide you in customizing the component's behavior, appearance, and accessibility to suit your specific needs.

### Root

Contains all the parts of an accordion. Renders a `<div>` element.

| Prop              | Type                                                                                                                           | Default      | Description                                                                                                                                                                                                                                |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------- | :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type*`           | `"single" \| "multiple"`                                                                                                       | `-`          | Determines whether one or multiple accordion items can be opened at the same time.                                                                                                                                                         |
| `defaultValue`    | `string[]`                                                                                                                     | `-`          | The value of the accordion item or items to expand when initially rendered. When `type` is `"single"`, this array should contain at most one element. Use when you do not need to control the state of the accordion items.                |
| `value`           | `Signal<string[]>`                                                                                                             | `-`          | The controlled value of the accordion item or items to expand. When `type` is `"single"`, this array should contain at most one element. Must be used in conjunction with `onValueChange$`.                                                |
| `onValueChange$`  | `QRL<(value: string[]) => void>`                                                                                               | `-`          | Event handler called when the expanded state of an accordion item or items changes.                                                                                                                                                        |
| `collapsible`     | `boolean`                                                                                                                      | `false`      | When `type` is set to `"single"`, this prop determines if the currently open accordion item can be closed by clicking its trigger. If `true`, clicking the trigger of an open accordion item will close it.                                |
| `arrowNavigation` | `boolean`                                                                                                                      | `true`       | When `true`, enables keyboard navigation using arrow keys between the accordion's item triggers.                                                                                                                                           |
| `loop`            | `boolean`                                                                                                                      | `true`       | When `arrowNavigation` is `true`, this determines whether keyboard focus should loop back to the first accordion item trigger when the end of the list is reached (and vice-versa).                                                        |
| `disabled`        | `boolean`                                                                                                                      | `false`      | When `true`, prevents the user from interacting with the accordion and all its items.                                                                                                                                                      |
| `dir`             | `"ltr" \| "rtl"`                                                                                                               | `"ltr"`      | The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.                                                                                                                              |
| `orientation`     | `"horizontal" \| "vertical"`                                                                                                   | `"vertical"` | The orientation of the accordion.                                                                                                                                                                                                          |
| `render$`         | `(props: Record<string, unknown>, state: { value: ReadonlySignal<string[]>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`          | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute     | Values                       | Description                                                           |
| :----------------- | :--------------------------- | :-------------------------------------------------------------------- |
| `data-disabled`    | `-`                          | Present when the accordion is disabled and cannot be interacted with. |
| `data-orientation` | `"horizontal" \| "vertical"` | Indicates the current orientation of the accordion.                   |

### Item

Contains all the parts of a collapsible section. Renders a `<div>` element.

| Prop       | Type                                                                                                                                                        | Default | Description                                                                                                                                                                                                                                                               |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value*`   | `string`                                                                                                                                                    | `-`     | A unique identifier for the accordion item. This is used to identify the item and control its open/closed state within the accordion component.                                                                                                                           |
| `disabled` | `boolean`                                                                                                                                                   | `false` | When `true`, prevents the user from interacting with the accordion item.                                                                                                                                                                                                  |
| `ids`      | `Partial<{ trigger: string; panel: string }>`                                                                                                               | `-`     | An optional object to override the default generated IDs for internal elements. This is useful when you need to ensure specific, predictable IDs for integration with external tools, testing frameworks, or for more fine-grained control over accessibility attributes. |
| `render$`  | `(props: Record<string, unknown>, state: { value: ReadonlySignal<string>; open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                |

| Data attribute     | Values                       | Description                                                                                      |
| :----------------- | :--------------------------- | :----------------------------------------------------------------------------------------------- |
| `data-state`       | `"open" \| "closed"`         | Indicates whether the accordion item is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `data-disabled`    | `-`                          | Present when the accordion item is disabled and cannot be interacted with.                       |
| `data-orientation` | `"horizontal" \| "vertical"` | Indicates the current orientation of the accordion.                                              |

### ItemHeader

Wraps an `Accordion.ItemTrigger`. Use the `render$` prop to update it to the appropriate heading level for your page. Renders an `<h3>` element.

| Prop      | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute     | Values                       | Description                                                                                      |
| :----------------- | :--------------------------- | :----------------------------------------------------------------------------------------------- |
| `data-state`       | `"open" \| "closed"`         | Indicates whether the accordion item is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `data-disabled`    | `-`                          | Present when the accordion item is disabled and cannot be interacted with.                       |
| `data-orientation` | `"horizontal" \| "vertical"` | Indicates the current orientation of the accordion.                                              |

### ItemTrigger

Toggles the collapsed state of its associated item. It should be nested inside of an `Accordion.ItemHeader`. Renders a `<button>` element.

| Prop      | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute     | Values                       | Description                                                                                      |
| :----------------- | :--------------------------- | :----------------------------------------------------------------------------------------------- |
| `data-state`       | `"open" \| "closed"`         | Indicates whether the accordion item is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `data-disabled`    | `-`                          | Present when the accordion item is disabled and cannot be interacted with.                       |
| `data-orientation` | `"horizontal" \| "vertical"` | Indicates the current orientation of the accordion.                                              |

### ItemPanel

The expandable and collapsible wrapper for the actual content for an item. Renders a `<div>` element.

| Prop                    | Type                                                                                                                                                                                                 | Default | Description                                                                                                                                                                                                                                                                                               |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onOpenChangeComplete$` | `QRL<(open: boolean) => void>`                                                                                                                                                                       | `-`     | A `QRL` callback function invoked after the accordion item panel's expansion or collapse animation/transition has fully completed. Use this to react once the panel has settled in its final open or closed state, regardless of whether it was animated with CSS `animation` or `transition` properties. |
| `render$`               | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean>; presence: ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                                |

| Data attribute     | Values                                         | Description                                                                                                                                                                                                                             |
| :----------------- | :--------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-state`       | `"open" \| "closed"`                           | Indicates whether the accordion item is currently expanded (`"open"`) or collapsed (`"closed"`).                                                                                                                                        |
| `data-presence`    | `"showing" \| "shown" \| "hiding" \| "hidden"` | Indicates the accordion item panel's current presence state. Useful for managing animations, as `"showing"` and `"hiding"` are active during the animation, while `"shown"` and `"hidden"` are active once the animation has completed. |
| `data-disabled`    | `-`                                            | Present when the accordion item is disabled and cannot be interacted with.                                                                                                                                                              |
| `data-orientation` | `"horizontal" \| "vertical"`                   | Indicates the current orientation of the accordion.                                                                                                                                                                                     |

### ItemContent

The component that contains the collapsible content for an item. Must be nested inside `Accordion.ItemPanel`. Renders a `<div>` element.

| Prop      | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute     | Values                       | Description                                                                                      |
| :----------------- | :--------------------------- | :----------------------------------------------------------------------------------------------- |
| `data-state`       | `"open" \| "closed"`         | Indicates whether the accordion item is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `data-disabled`    | `-`                          | Present when the accordion item is disabled and cannot be interacted with.                       |
| `data-orientation` | `"horizontal" \| "vertical"` | Indicates the current orientation of the accordion.                                              |

### ItemIndicator

An optional visual indicator that reflects the accordion item's open or closed state. It typically displays an icon or other visual cue to show the current status. Renders a `<span>` element.

| Prop      | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute     | Values                       | Description                                                                                      |
| :----------------- | :--------------------------- | :----------------------------------------------------------------------------------------------- |
| `data-state`       | `"open" \| "closed"`         | Indicates whether the accordion item is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `data-disabled`    | `-`                          | Present when the accordion item is disabled and cannot be interacted with.                       |
| `data-orientation` | `"horizontal" \| "vertical"` | Indicates the current orientation of the accordion.                                              |

### useAccordionContext

A hook that provides access to the `Accordion` component internal context, exposing various properties to interact with and react to the open/closed state of its items.

| Property          | Type                                         | Description                                                                                                                                                                                                                                                                       |
| :---------------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`           | `ReadonlySignal<string[]>`                   | A readonly signal whose value is an array of strings representing the currently expanded accordion item or items values. This signal reflects the internal state of which accordion items are open.                                                                               |
| `setValue$`       | `QRL<(value: string[]) => void>`             | A `QRL` function used to programmatically set the open state of the accordion items. This function takes an array of strings, where each string represents the value of the accordion items to be opened.                                                                         |
| `type`            | `ReadonlySignal<"single" \| "multiple">`     | A readonly signal whose value indicates whether the accordion allows a single accordion item or multiple accordion items to be open at once.                                                                                                                                      |
| `collapsible`     | `ReadonlySignal<boolean>`                    | A readonly signal whose value indicates whether the `collapsible` prop passed to the `Accordion.Root` component has been set to `true`. This is relevant only when `type` is `"single"`, as it determines if the open accordion item can be closed by clicking its trigger again. |
| `arrowNavigation` | `ReadonlySignal<boolean>`                    | A readonly signal whose value indicates whether keyboard arrow navigation is enabled for the accordion item triggers.                                                                                                                                                             |
| `loop`            | `ReadonlySignal<boolean>`                    | A readonly signal whose value indicates whether keyboard navigation (using arrow keys) should loop back to the first accordion item trigger after reaching the last one. This is only applicable when the `arrowNavigation` readonly signal's value is `true`.                    |
| `disabled`        | `ReadonlySignal<boolean>`                    | A readonly signal whose value indicates whether the entire accordion is disabled. When `true`, all interaction with the accordion and its items is prevented.                                                                                                                     |
| `dir`             | `ReadonlySignal<"ltr" \| "rtl">`             | A readonly signal whose value indicates the reading direction of the accordion. This can be `"ltr"` (left-to-right) or `"rtl"` (right-to-left), affecting keyboard navigation and layout.                                                                                         |
| `orientation`     | `ReadonlySignal<"horizontal" \| "vertical">` | A readonly signal whose value indicates the orientation of the accordion. This determines whether the accordion items are arranged `"vertical"` (stacked) or `"horizontal"` (side-by-side).                                                                                       |

### useAccordionItemContext

A hook that provides access to an individual `Accordion.Item` component internal context exposing properties related to its specific state and unique identification.

| Property   | Type                      | Description                                                                                                                                                                                                      |
| :--------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`    | `ReadonlySignal<string>`  | A readonly signal whose value is the unique identifier for the specific accordion item. This is used to identify the item and control its open/closed state within the accordion component.                      |
| `open`     | `ReadonlySignal<boolean>` | A readonly signal whose value indicates whether the accordion item is currently in an open (expanded) state. A value of `true` means the item's panel is visible, while `false` means it's hidden.               |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal whose value specifies if the accordion item is disabled. When `true`, the item cannot be interacted with by the user, and its trigger might be visually styled to reflect this inactive state. |

### useAccordionItemPanelContext

A hook that provides access to an individual `Accordion.ItemPanel` component internal context. It exposes properties related to the panel's visibility and animation state.

| Property   | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------- | :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `presence` | `ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"` | A readonly signal whose value indicates the accordion item panel's current presence state. This signal reflects the different phases of the panel's lifecycle, especially during animations. It can be one of the following: <br /> <br />- `"showing"`: The panel is currently animating to an open state. <br /> - `"shown"`: The panel is fully open and visible. <br />- `"hiding"`:The panel is currently animating to a closed state. <br />- `"hidden"`: The panel is fully closed and not visible. |

## Examples

The following examples demonstrate the various ways you can use and configure the `Accordion` component. They cover common use cases, such as managing state, controlling behavior, changing orientation, and adding custom styling and animations. Each example is accompanied by a code snippet to help you implement these features in your own projects.

### Uncontrolled state

When using the uncontrolled mode, the `Accordion` component handles the open/closed state of its individual items internally. You define the initial state by providing an array of strings to the `defaultValue` prop on `Accordion.Root`. When `type` is `"single"`, this array should contain at most one element. Each string in this array must correspond to the unique `value` prop of an `Accordion.Item`, which will be initially open. The component then takes full control over subsequent changes to the state of these items, based on user interactions, such as clicking an `Accordion.ItemTrigger`. This approach is ideal for simpler use cases where the state does not need to be managed from a parent component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Accordion.Root type="single" defaultValue={[]}>
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Controlled state

When using the controlled mode, the parent component is responsible for managing the open/closed state of the accordion items. You achieve this by passing a signal to the `value` prop on the `Accordion.Root` component and listening for changes with the `onValueChange$` event handler. The `value` signal should be an array of strings, where each string corresponds to the `value` of an `Accordion.Item` that you want to be open. When `type` is `"single"`, this array should contain at most one element. This approach is ideal for more complex use cases, such as integrating with external state management or enabling a parent component to dynamically control the state.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';

const Demo = component$(() => {
  const value = useSignal<string[]>([]);

  return (
    <Accordion.Root type="single" value={value} onValueChange$={(_value) => (value.value = _value)}>
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Allow collapsing all items

Use the `collapsible` prop on the `Accordion.Root` component to allow all items to close. When `collapsible` is set to `true` (and `type` is `"single"`), clicking the trigger of an open accordion item will close it, making it possible for all items to be in a closed state simultaneously.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Accordion.Root type="single" collapsible={true}>
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Multiple items open at the same time

Set the `type` prop on the `Accordion.Root` component to `"multiple"` to enable opening multiple items at once. This mode allows users to expand any number of accordion items simultaneously, providing a view of multiple content sections at the same time.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Horizontal orientation

By default, the `Accordion` component is arranged vertically. To change this to a horizontal layout, set the `orientation` prop on the `Accordion.Root` component to `"horizontal"`. This property informs the component of the layout, which is essential for ensuring proper keyboard navigation and accessibility attributes. For the layout to be displayed correctly, you will also need to apply a CSS style, such as `display: flex`, to the `Accordion.Root` component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Accordion.Root type="single" orientation="horizontal" style={{ display: 'flex' }}>
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Rotated icon when item open

The `Accordion.ItemIndicator` component, an optional visual cue, exposes a `data-state` attribute that reflects the current open or closed state of its parent item. This allows you to style the indicator based on the state of the accordion item. A common use case is to rotate an icon, like an arrow or chevron, when the item is open.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it accessible?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <svg
                aria-hidden="true"
                focusable="false"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="accordion-item-indicator-icon"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it unstyled?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <svg
                aria-hidden="true"
                focusable="false"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="accordion-item-indicator-icon"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Can it be animated?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <svg
                aria-hidden="true"
                focusable="false"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="accordion-item-indicator-icon"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

```css
.accordion-item-indicator[data-state='open'] > .accordion-item-indicator-icon {
  transform: rotate(-90deg);
}
```

### Animating item panel height with animations

While CSS animations (`@keyframes`) can be used to control the `Accordion.ItemPanel`'s expansion and collapse, transitions are generally recommended for animating panel height. This is because transitions offer smoother cancellation mid-way through an animation. For example, if a user quickly opens and then closes the item before it fully expands, a transition would allow it to smoothly animate back to its closed state without abrupt jumps, unlike some CSS animation implementations.

To animate the panel's height with CSS animations, you can use the `grid-template-rows` CSS property with `0fr` (for closed) and `1fr` (for open) values. This approach allows for fluid size changes of the panel. Define your desired animation using CSS `@keyframes` and apply them to the `Accordion.ItemPanel` based on its `data-state` attribute, which dynamically changes between `"open"` and `"closed"`.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

```css
.accordion-item-panel[data-state='open'] {
  animation: accordion-item-panel-down 300ms ease-out;
}

.accordion-item-panel[data-state='closed'] {
  animation: accordion-item-panel-up 300ms ease-out;
}

@keyframes accordion-item-panel-down {
  0% {
    grid-template-rows: 0fr;
  }
  100% {
    grid-template-rows: 1fr;
  }
}

@keyframes accordion-item-panel-up {
  0% {
    grid-template-rows: 1fr;
  }
  100% {
    grid-template-rows: 0fr;
  }
}
```

### Animating item panel height with transitions

Transitions are the recommended method for animating the `Accordion.ItemPanel`'s height, especially because they allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the item before it fully expands, a transition will smoothly animate it back to its closed state without any abrupt jumps.

To animate the panel's height using CSS transitions, simply apply a `transition` property to the `Accordion.ItemPanel`. The changes to the `grid-template-rows` property are handled automatically by the component's internal logic, ensuring a fluid and responsive animation experience without the need for additional CSS rules based on data attributes. This approach simplifies your styling, allowing you to focus on defining the transition properties, such as duration and easing, while the component takes care of the rest.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

```css
.accordion-item-panel {
  transition: grid-template-rows 300ms ease-out;
}
```

### Rendering different elements

By default, the `Accordion` subcomponents each render a sensible HTML element. For example, `Accordion.ItemTrigger` renders a `<button>`, and `Accordion.ItemHeader` renders an `<h3>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs (e.g., changing `<h3>` to `<h2>` for `Accordion.ItemHeader`).

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Accordion } from 'rilix-ui';

const MyCustomButton = component$<PropsOf<'button'>>((props) => {
  return (
    <button style={{ color: 'white', backgroundColor: 'purple' }} {...props}>
      <Slot />
    </button>
  );
});

const Demo = component$(() => {
  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader
          render$={(props) => (
            <h2 {...props}>
              <Slot />
            </h2>
          )}
        >
          <Accordion.ItemTrigger
            render$={(props) => (
              <MyCustomButton {...props}>
                <Slot />
              </MyCustomButton>
            )}
          >
            Is it accessible?
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader
          render$={(props) => (
            <h2 {...props}>
              <Slot />
            </h2>
          )}
        >
          <Accordion.ItemTrigger
            render$={(props) => (
              <MyCustomButton {...props}>
                <Slot />
              </MyCustomButton>
            )}
          >
            Is it unstyled?
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader
          render$={(props) => (
            <h2 {...props}>
              <Slot />
            </h2>
          )}
        >
          <Accordion.ItemTrigger
            render$={(props) => (
              <MyCustomButton {...props}>
                <Slot />
              </MyCustomButton>
            )}
          >
            Can it be animated?
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>
            Yes! You can animate the Accordion with CSS transitions or animations.
          </Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

## Accessibility

Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/), ensuring that the component is fully accessible and usable for all users, including those relying on assistive technologies.

## Keyboard interactions

The `Accordion` component is fully keyboard navigable, adhering to the WAI-ARIA design pattern for keyboard interactions. This ensures that users can operate the component without a mouse, providing a seamless and accessible experience.

| Key                    | Description                                                                                                                                                                                                                                                                   |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Space</kbd>       | When focus is on an `Accordion.ItemTrigger` of a collapsed section, it expands the section. If focus is on an `Accordion.ItemTrigger` of an expanded section, it collapses the section when `type` is `"single"` and `collapsible` is `true`, or when `type` is `"multiple"`. |
| <kbd>Enter</kbd>       | When focus is on an `Accordion.ItemTrigger` of a collapsed section, it expands the section. If focus is on an `Accordion.ItemTrigger` of an expanded section, it collapses the section when `type` is `"single"` and `collapsible` is `true`, or when `type` is `"multiple"`. |
| <kbd>Tab</kbd>         | When focus is on an `Accordion.ItemTrigger`, moves focus to the next focusable element.                                                                                                                                                                                       |
| <kbd>Shift + Tab</kbd> | When focus is on an `Accordion.ItemTrigger`, moves focus to the previous focusable element.                                                                                                                                                                                   |
| <kbd>↓</kbd>           | When focus is on an `Accordion.ItemTrigger`, moves focus to the next enabled `Accordion.ItemTrigger` when `orientation` is `vertical` and `arrowNavigation` is set to `true`.                                                                                                 |
| <kbd>↑</kbd>           | When focus is on an `Accordion.ItemTrigger`, moves focus to the previous enabled `Accordion.ItemTrigger` when `orientation` is `vertical` and `arrowNavigation` is set to `true`.                                                                                             |
| <kbd>→</kbd>           | When focus is on an `Accordion.ItemTrigger`, moves focus to the next enabled `Accordion.ItemTrigger` when `orientation` is `horizontal` and `arrowNavigation` is set to `true`.                                                                                               |
| <kbd>←</kbd>           | When focus is on an `Accordion.ItemTrigger`, moves focus to the previous enabled `Accordion.ItemTrigger` when `orientation` is `horizontal` and `arrowNavigation` is set to `true`.                                                                                           |
| <kbd>Home</kbd>        | When focus is on an `Accordion.ItemTrigger`, moves focus to the first enabled `Accordion.ItemTrigger` when `arrowNavigation` is set to `true`.                                                                                                                                |
| <kbd>End</kbd>         | When focus is on an `Accordion.ItemTrigger`, moves focus to the last enabled `Accordion.ItemTrigger` when `arrowNavigation` is set to `true`.                                                                                                                                 |

## Caveats

While the `Accordion` component provides a flexible and accessible solution for expanding and collapsing content, there are specific design choices that are important to understand for effective use.

### Why `Accordion.ItemPanel` and `Accordion.ItemContent`?

The `Accordion` component uses two distinct subcomponents, `Accordion.ItemPanel` and `Accordion.ItemContent`, to manage the collapsible area. This separation serves a crucial purpose, especially when it comes to animating the panel's height using CSS transitions or animations. It provides a robust alternative to animating fixed `height` values, which can often lead to choppy animations or require JavaScript to calculate the content's exact height. Instead, the `grid-template-rows` property offers a more fluid and reliable approach. You can check the excellent browser support for animating `grid-template-rows` on [Can I use](https://caniuse.com/mdn-css_properties_grid-template-rows_animation).

- `Accordion.ItemPanel`: This component acts as the outer wrapper for the collapsible content. It's responsible for controlling the visual expansion and collapse of the area. When animating height (using `grid-template-rows`), the `Accordion.ItemPanel` is the element to which you apply the `transition` or `animation` properties. It exposes the `data-presence` attribute (for transitions) and the `data-state` attribute (for CSS animations), both essential for triggering these animations.

- `Accordion.ItemContent`: This component serves as the inner container for the actual content you want to display or hide. Its primary role is to ensure that the content is always rendered, but its visibility is controlled by the `Accordion.ItemPanel`. This separation prevents issues like content reflows or scrollbar glitches that can occur when animating the content directly. It ensures that the content is ready to be displayed as soon nutritious as the panel finishes its animation.

This architectural choice allows for robust and performant height animations, providing a smooth user experience without compromising content rendering or accessibility.
