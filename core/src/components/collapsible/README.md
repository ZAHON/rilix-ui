# Collapsible

An interactive component which expands/collapses a panel.

## Features

- Full keyboard navigation.

- Can be uncontrolled or controlled.

- Adheres to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

## Import

```tsx
import { Collapsible } from 'rilix-ui';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Collapsible } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        <Collapsible.Indicator />
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content />
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

## Rendered elements

Each of `Collapsible`'s subcomponents renders a default HTML element that is sensible for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component               | Default rendered element |
| :---------------------- | :----------------------- |
| `Collapsible.Root`      | `<div>`                  |
| `Collapsible.Trigger`   | `<button>`               |
| `Collapsible.Panel`     | `<div>`                  |
| `Collapsible.Content`   | `<div>`                  |
| `Collapsible.Indicator` | `<span>`                 |

## API Reference

This section provides a detailed breakdown of the props, data attributes, and methods available for each of the `Collapsible` subcomponents. The following overviews will guide you in customizing the component's behavior, appearance, and accessibility to suit your specific needs.

### Root

Contains all the parts of a collapsible. Renders a `<div>` element.

| Prop            | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                                                               |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultOpen`   | `boolean`                                                                                                                    | `-`     | The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.                                                                                                                                                      |
| `open`          | `Signal<boolean>`                                                                                                            | `-`     | The controlled open state of the collapsible. Must be used in conjunction with `onOpenChange$`.                                                                                                                                                                           |
| `onOpenChange$` | `QRL<(open: boolean) => void>`                                                                                               | `-`     | Event handler called when the open state of the collapsible changes.                                                                                                                                                                                                      |
| `disabled`      | `boolean`                                                                                                                    | `false` | When `true`, prevents the user from interacting with the collapsible.                                                                                                                                                                                                     |
| `ids`           | `Partial<{ panel: string; }>`                                                                                                | `-`     | An optional object to override the default generated IDs for internal elements. This is useful when you need to ensure specific, predictable IDs for integration with external tools, testing frameworks, or for more fine-grained control over accessibility attributes. |
| `render$`       | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                |

| Data attribute    | Values               | Description                                                                                   |
| :---------------- | :------------------- | :-------------------------------------------------------------------------------------------- |
| `[data-state]`    | `"open" \| "closed"` | Indicates whether the collapsible is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `[data-disabled]` | `-`                  | Present when the collapsible is disabled and cannot be interacted with.                       |

### Trigger

The button that toggles the collapsible. Renders a `<button>` element.

| Prop      | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                               |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details |

| Data attribute    | Values               | Description                                                                                   |
| :---------------- | :------------------- | :-------------------------------------------------------------------------------------------- |
| `[data-state]`    | `"open" \| "closed"` | Indicates whether the collapsible is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `[data-disabled]` | `-`                  | Present when the collapsible is disabled and cannot be interacted with.                       |

### Panel

The expandable and collapsible wrapper for the actual content. Renders a `<div>` element.

| Prop                    | Type                                                                                                                                                                                                 | Default | Description                                                                                                                                                                                                                                                                                            |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onOpenChangeComplete$` | `QRL<(open: boolean) => void>`                                                                                                                                                                       | `-`     | A `QRL` callback function invoked after the collapsible panel's expansion or collapse animation/transition has fully completed. Use this to react once the panel has settled in its final open or closed state, regardless of whether it was animated with CSS `animation` or `transition` properties. |
| `render$`               | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean>; presence: ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                             |

| Data attribute    | Values                                         | Description                                                                                                                                                                                                              |
| :---------------- | :--------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[data-state]`    | `"open" \| "closed"`                           | Indicates whether the collapsible is currently expanded (`"open"`) or collapsed (`"closed"`).                                                                                                                            |
| `[data-presence]` | `"showing" \| "shown" \| "hiding" \| "hidden"` | Indicates the panel’s current presence state. Useful for managing animations, as `"showing"` and `"hiding"` are active during the animation, while `"shown"` and `"hidden"` are active once the animation has completed. |
| `[data-disabled]` | `-`                                            | Present when the collapsible is disabled and cannot be interacted with.                                                                                                                                                  |

### Content

The component that contains the collapsible content. Must be nested inside `Collapsible.Panel`. Renders a `<div>` element.

| Prop      | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                               |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details |

| Data attribute    | Values               | Description                                                                                   |
| :---------------- | :------------------- | :-------------------------------------------------------------------------------------------- |
| `[data-state]`    | `"open" \| "closed"` | Indicates whether the collapsible is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `[data-disabled]` | `-`                  | Present when the collapsible is disabled and cannot be interacted with.                       |

### Indicator

An optional visual indicator that reflects the collapsible's open or closed state. It typically displays an icon or other visual cue to show the current status. Renders a `<span>` element.

| Prop      | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                               |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details |

| Data attribute    | Values               | Description                                                                                   |
| :---------------- | :------------------- | :-------------------------------------------------------------------------------------------- |
| `[data-state]`    | `"open" \| "closed"` | Indicates whether the collapsible is currently expanded (`"open"`) or collapsed (`"closed"`). |
| `[data-disabled]` | `-`                  | Present when the collapsible is disabled and cannot be interacted with.                       |

### useCollapsibleContext

A hook that provides access to the `Collapsible` component internal context, exposing various properties to interact with and react to its open/closed state.

| Property   | Type                           | Description                                                                                                                                                        |
| :--------- | :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`     | `ReadonlySignal<boolean>`      | A readonly signal whose value indicates the collapsible's current open state. It is `true` when the collapsible is open, and `false` when closed.                  |
| `setOpen$` | `QRL<(open: boolean) => void>` | A `QRL` function used to programmatically set the open state of the collapsible. When invoked with `true`, the collapsible will open; with `false`, it will close. |
| `disabled` | `ReadonlySignal<boolean>`      | A readonly signal whose value indicates the collapsible's current disabled state. It is `true` when the collapsible is prevented from user interaction.            |

### useCollapsiblePanelContext

A hook that provides access to the `Collapsible.Panel` component internal context. This allows descendant components to retrieve shared state related to the panel's behavior.

| Property   | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `presence` | `ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"` | A readonly signal whose value indicates the collapsible panel's current presence state. This signal reflects the different phases of the panel's lifecycle, especially during animations. It can be one of the following: <br /> <br />- `"showing"`: The panel is currently animating to an open state. <br /> - `"shown"`: The panel is fully open and visible. <br />- `"hiding"`:The panel is currently animating to a closed state. <br />- `"hidden"`: The panel is fully closed and not visible. |

## Examples

This section offers practical demonstrations and code examples showcasing how to effectively implement and customize the `Collapsible` component. You'll explore common use cases, from managing the component's open/closed state (both self-managed and externally controlled) to creating engaging animations for panel height and dynamic icon rotations.

### Uncontrolled state

When using the uncontrolled mode, the `Collapsible` component manages its own open/closed state internally. You provide an initial state using `defaultOpen` prop, and the component handles subsequent changes. This is ideal for simpler use cases where you don't need to manage the state from a parent component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Collapsible } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Collapsible.Root defaultOpen={false}>
      <Collapsible.Trigger>What is Rilix UI?</Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          A collection of accessible and unstyled components, hooks and utilities for Qwik applications.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

### Controlled state

In the controlled mode, you take full control of the `Collapsible`'s open/closed state using the `open` prop. You must also provide an `onOpenChange$` event handler to update your state whenever the collapsible's state changes. This mode is suitable for more complex scenarios where you need to integrate the collapsible's state with other parts of your application logic or external state management.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Collapsible } from 'rilix-ui';

const Demo = component$(() => {
  const isOpen = useSignal(false);

  return (
    <Collapsible.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <Collapsible.Trigger>What is Rilix UI?</Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          A collection of accessible and unstyled components, hooks and utilities for Qwik applications.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

### Animating panel height with animations

While CSS animations (`@keyframes`) can be used to control the `Collapsible.Panel`'s expansion and collapse, transitions are generally recommended for animating panel height. This is because transitions offer smoother cancellation mid-way through an animation. For example, if a user quickly opens and then closes the collapsible before it fully expands, a transition would allow it to smoothly animate back to its closed state without any abrupt jumps, unlike some CSS animation implementations.

To animate the panel's height with CSS animations, you can use the `grid-template-rows` CSS property with `0fr` (for closed) and `1fr` (for open) values. This approach allows for fluid size changes of the panel. Define your desired animation using CSS `@keyframes` and apply them to the `Collapsible.Panel` based on its `data-state` attribute, which dynamically changes between `"open"` and `"closed"`.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Collapsible.Root>
      <Collapsible.Trigger>What is Rilix UI?</Collapsible.Trigger>
      <Collapsible.Panel class="collapsible-panel">
        <Collapsible.Content>
          A collection of accessible and unstyled components, hooks and utilities for Qwik applications.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

```css
.collapsible-panel[data-state='open'] {
  animation: collapsible-panel-down 300ms ease-out;
}

.collapsible-panel[data-state='closed'] {
  animation: collapsible-panel-up 300ms ease-out;
}

@keyframes collapsible-panel-down {
  0% {
    grid-template-rows: 0fr;
  }
  100% {
    grid-template-rows: 1fr;
  }
}

@keyframes collapsible-panel-up {
  0% {
    grid-template-rows: 1fr;
  }
  100% {
    grid-template-rows: 0fr;
  }
}
```

### Animating panel height with transitions

Transitions are the recommended method for animating the `Collapsible.Panel`'s height, especially because they allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the collapsible before it fully expands, a transition will smoothly animate it back to its closed state without any abrupt jumps.

To animate the panel's height using CSS transitions, simply apply a `transition` property to the `Collapsible.Panel`. The changes to the `grid-template-rows` property are handled automatically by the component's internal logic, ensuring a fluid and responsive animation experience without the need for additional CSS rules based on data attributes. This approach simplifies your styling, allowing you to focus on defining the transition properties, such as duration and easing, while the component takes care of the rest.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Collapsible.Root>
      <Collapsible.Trigger>What is Rilix UI?</Collapsible.Trigger>
      <Collapsible.Panel class="collapsible-panel">
        <Collapsible.Content>
          A collection of accessible and unstyled components, hooks and utilities for Qwik applications.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

```css
.collapsible-panel {
  transition: grid-template-rows 300ms ease-out;
}
```

### Rotated icon when open

The `Collapsible.Indicator` component is designed to display a visual cue for the panel's open or closed state. A common pattern is to rotate an icon (like an arrow or chevron) when the collapsible is open.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        What is Rilix UI?
        <Collapsible.Indicator class="collapsible-indicator">
          <svg
            aria-hidden="true"
            focusable="false"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="collapsible-indicator-icon"
          >
            <path
              d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          A collection of accessible and unstyled components, hooks and utilities for Qwik applications.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

```css
.collapsible-indicator[data-state='open'] > .collapsible-indicator-icon {
  transform: rotate(-90deg);
}
```

### Rendering different elements

By default, `Collapsible`'s subcomponents each render a sensible HTML element. For example, `Collapsible.Trigger` renders a `<button>`, and `Collapsible.Content` renders a `<div>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the `Collapsible`'s core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Collapsible } from 'rilix-ui';

const MyCustomButton = component$<PropsOf<'button'>>((props) => {
  return (
    <button style={{ color: 'white', backgroundColor: 'purple' }} {...props}>
      <Slot />
    </button>
  );
});

const Demo = component$(() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger
        render$={(props) => (
          <MyCustomButton {...props}>
            <Slot />
          </MyCustomButton>
        )}
      >
        What languages do you support?
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content
          render$={(props) => (
            <ul {...props}>
              <Slot />
            </ul>
          )}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

## Accessibility

The `Collapsible` component is built with accessibility in mind, strictly adhering to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/). This ensures the component is usable and understandable for everyone, including users relying on assistive technologies like screen readers. By following this pattern, it automatically handles crucial ARIA attributes and keyboard interactions, providing a robust and inclusive user experience.

### Keyboard Interactions

Users can interact with the `Collapsible` component efficiently using only a keyboard. The following overview outlines the primary keyboard shortcuts and their actions:

| Key              | Description                                                              |
| :--------------- | :----------------------------------------------------------------------- |
| <kbd>Space</kbd> | When focus is on `Collapsible.Trigger`, opens or closes the collapsible. |
| <kbd>Enter</kbd> | When focus is on `Collapsible.Trigger`, opens or closes the collapsible. |

## Caveats

While the `Collapsible` component provides a flexible and accessible solution for expanding and collapsing content, there are specific design choices that are important to understand for effective use.

### Why `Collapsible.Panel` and `Collapsible.Content`?

The `Collapsible` component utilizes two distinct subcomponents, `Collapsible.Panel` and `Collapsible.Content`, to manage the collapsible area. This separation serves a crucial purpose, especially when it comes to animating the panel's height using CSS transitions or animations. It provides a robust alternative to animating fixed `height` values, which can often lead to choppy animations or require JavaScript to calculate the content's exact height. Instead, the `grid-template-rows` property offers a more fluid and reliable approach. You can check the excellent browser support for animating `grid-template-rows` on Can I use [here](https://caniuse.com/mdn-css_properties_grid-template-rows_animation).

- `Collapsible.Panel`: This component acts as the outer wrapper for the collapsible content. It's responsible for controlling the visual expansion and collapse of the area. When animating height (using `grid-template-rows`), the `Collapsible.Panel` is the element to which you apply the `transition` or `animation` properties. It exposes the `data-presence` attribute (for transitions) and the `data-state` attribute (for CSS animations), both essential for triggering these animations.

- `Collapsible.Content`: This component serves as the inner container for the actual content you want to display or hide. Its primary role is to ensure that the content is always rendered, but its visibility is controlled by the `Collapsible.Panel`. This separation prevents issues like content reflows or scrollbar glitches that can occur when animating the content directly. It ensures that the content is ready to be displayed as soon as the panel finishes its animation.

This architectural choice allows for robust and performant height animations, providing a smooth user experience without compromising content rendering or accessibility.
