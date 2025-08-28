# Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

## Features

- Can be uncontrolled or controlled.

- Manages screen reader announcements with `Title` and `Description` components.

- Focus is trapped and scrolling is blocked while it is open.

- Pressing <kbd>Esc</kbd> closes the dialog.

- The dialog closes by clicking or tapping outside of its content.

- Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

## Import

```tsx
import { Dialog } from 'rilix-ui';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Dialog.Root>
      <Dialog.Trigger />
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

## Rendered elements

Each of the `Dialog`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

**While it's possible to change the element rendered by `Dialog.Content`, for accessibility and correct component functionality, it should always render a `<dialog>` element. Otherwise, the component will throw an error.**

| Component            | Default rendered element |
| :------------------- | :----------------------- |
| `Dialog.Root`        | `-`                      |
| `Dialog.Trigger`     | `<button>`               |
| `Dialog.Overlay`     | `<div>`                  |
| `Dialog.Content`     | `<dialog>`               |
| `Dialog.Title`       | `<h2>`                   |
| `Dialog.Description` | `<p>`                    |
| `Dialog.Close`       | `<button>`               |

## API Reference

This section provides a comprehensive overview of the `Dialog` component's API, detailing the props, data attributes, and hooks available for each subcomponent. It's the essential reference for developers who want to configure and interact with the `Dialog`.

### Root

Contains all the parts of a dialog. Doesn’t render its own HTML element.

| Prop            | Type                                                               | Default | Description                                                                                                                                                                                                                                                               |
| :-------------- | :----------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultOpen`   | `boolean`                                                          | `-`     | The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.                                                                                                                                                           |
| `open`          | `Signal<boolean>`                                                  | `-`     | The controlled open state of the dialog. Must be used in conjunction with `onOpenChange$`.                                                                                                                                                                                |
| `onOpenChange$` | `QRL<(open: boolean) => void>`                                     | `-`     | A `QRL` callback function that is called when the open state of the dialog changes.                                                                                                                                                                                       |
| `ids`           | `Partial<{ content: string; title: string; description: string }>` | `-`     | An optional object to override the default generated IDs for internal elements. This is useful when you need to ensure specific, predictable IDs for integration with external tools, testing frameworks, or for more fine-grained control over accessibility attributes. |

### Trigger

A button that opens the dialog. Renders a `<button>` element.

| Prop       | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                                |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `boolean`                                                                                                                    | `false` | When `true`, prevents the user from interacting with the trigger.                                                                                                                                                                          |
| `render$`  | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values               | Description                                                         |
| :-------------- | :------------------- | :------------------------------------------------------------------ |
| `data-state`    | `"open" \| "closed"` | Indicates whether the dialog is currently open or closed.           |
| `data-disabled` | `-`                  | Present when the trigger is disabled and cannot be interacted with. |

### Content

Contains content to be rendered in the open dialog. Renders a `<dialog>` element.

| Prop                        | Type                                                                                                                                                              | Default | Description                                                                                                                                                                                                                                                                                                                                               |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loop`                      | `boolean`                                                                                                                                                         | `true`  | When `true`, enables "looping" behavior. If the user presses <kbd>Tab</kbd> from the last focusable element, focus will cycle back to the first. If <kbd>Shift + Tab</kbd> from the first, focus will go to the last.                                                                                                                                     |
| `initialFocus`              | `SignalOrReadonlySignal<HTMLElement \| undefined \| null>`                                                                                                        | `-`     | Specifies the element that should receive focus when the dialog is opened. If `initialFocus` is not passed or its `value` is `undefined` or `null`, the first tabbable element within the dialog content will receive focus. If the dialog content itself does not contain any tabbable elements, focus will then fall back to the dialog content itself. |
| `finalFocus`                | `SignalOrReadonlySignal<HTMLElement \| undefined \| null>`                                                                                                        | `-`     | Specifies the element that should receive focus when the dialog is closed. If `finalFocus` is not passed or its `value` is `undefined` or `null`, and the dialog's trigger exists, focus will always return to the trigger element. Otherwise, focus will attempt to return to the element that was focused before the dialog was opened.                 |
| `scrollToFinalFocus`        | `boolean`                                                                                                                                                         | `true`  | When `true`, enables automatic scrolling to the element that receives focus after the dialog is closed. This is useful to ensure the final focused element (e.g., dialog's trigger) is visible within the viewport.                                                                                                                                       |
| `preventScroll`             | `boolean`                                                                                                                                                         | `true`  | When `true`, prevents scrolling of the page's `<body>` element when the dialog is open.                                                                                                                                                                                                                                                                   |
| `closeOnEscapeKeyDown`      | `boolean`                                                                                                                                                         | `true`  | When `true`, enables closing the dialog by pressing the `Escape` key.                                                                                                                                                                                                                                                                                     |
| `closeOnPointerDownOutside` | `boolean`                                                                                                                                                         | `true`  | When `true`, the dialog will close automatically if the user clicks or taps outside of the dialog content.                                                                                                                                                                                                                                                |
| `onEscapeKeyDown$`          | `QRL<() => void>`                                                                                                                                                 | `-`     | A `QRL` callback function invoked when the `Escape` key is pressed while the dialog is open. This can be used to perform side effects, such as logging or analytics, without affecting the default close behavior.                                                                                                                                        |
| `onPointerDownOutside$`     | `QRL<() => void>`                                                                                                                                                 | `-`     | A `QRL` callback function invoked when a pointerdown event is detected outside the dialog content. This can be used to perform side effects, such as logging or analytics, without affecting the default close behavior.                                                                                                                                  |
| `onOpenChangeComplete$`     | `QRL<(open: boolean) => void>`                                                                                                                                    | `-`     | A `QRL` callback function invoked after the dialog content's open or close animation/transition has fully completed. Use this to react once the content has settled in its final open or closed state, regardless of whether it was animated with CSS `animation` or `transition` properties.                                                             |
| `render$`                   | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; presence: ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                                                                                |

| Data attribute  | Values                                         | Description                                                                                                                                                                                                                |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-state`    | `"open" \| "closed"`                           | Indicates whether the dialog is currently open or closed.                                                                                                                                                                  |
| `data-presence` | `"showing" \| "shown" \| "hiding" \| "hidden"` | Indicates the content’s current presence state. Useful for managing animations, as `"showing"` and `"hiding"` are active during the animation, while `"shown"` and `"hidden"` are active once the animation has completed. |

### Overlay

A layer that covers the inert portion of the view when the dialog is open. Renders a `<div>` element.

| Prop                    | Type                                                                                                                                                              | Default | Description                                                                                                                                                                                                                                                                                   |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onOpenChangeComplete$` | `QRL<(open: boolean) => void>`                                                                                                                                    | `-`     | A `QRL` callback function invoked after the dialog overlay's open or close animation/transition has fully completed. Use this to react once the overlay has settled in its final open or closed state, regardless of whether it was animated with CSS `animation` or `transition` properties. |
| `render$`               | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; presence: ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                    |

| Data attribute  | Values                                         | Description                                                                                                                                                                                                                |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-state`    | `"open" \| "closed"`                           | Indicates whether the dialog is currently open or closed.                                                                                                                                                                  |
| `data-presence` | `"showing" \| "shown" \| "hiding" \| "hidden"` | Indicates the overlay’s current presence state. Useful for managing animations, as `"showing"` and `"hiding"` are active during the animation, while `"shown"` and `"hidden"` are active once the animation has completed. |

### Close

A button that closes the dialog. Renders a `<button>` element.

| Prop       | Type                                                                                          | Default | Description                                                                                                                                                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `boolean`                                                                                     | `false` | When `true`, prevents the user from interacting with the close button.                                                                                                                                                                     |
| `render$`  | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                              |
| :-------------- | :----- | :----------------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the close button is disabled and cannot be interacted with. |

### Title

An accessible title to be announced when the dialog is opened. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `Dialog.Content` component. If you remove the title, ensure you provide a descriptive `aria-label` directly on the `Dialog.Content` component, to provide an accessible label. Renders an `<h2>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

### Description

An optional accessible description to be announced when the dialog is opened. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Dialog.Content` component. Renders a `<p>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

### useDialogContext

A hook that provides access to the `Dialog` component's internal state. It exposes readonly signals and `QRL` functions to interact with the dialog's state, allowing descendant components to control or react to its open/closed state.

| Property   | Type                           | Description                                                                                                                                              |
| :--------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`     | `ReadonlySignal<boolean>`      | A readonly signal whose value indicates the dialog's current open state. It is `true` when the dialog is open, and `false` when closed.                  |
| `setOpen$` | `QRL<(open: boolean) => void>` | A `QRL` function used to programmatically set the open state of the dialog. When invoked with `true`, the dialog will open; with `false`, it will close. |

### useDialogTriggerContext

A hook that provides access to the `Dialog.Trigger` component's internal state. It exposes readonly signals that allow descendant components to interact with and react to the trigger's state.

| Property   | Type                      | Description                                                                                                                                    |
| :--------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the trigger is disabled. Its value is `true` if the trigger is disabled, preventing user interaction. |

### useDialogOverlayContext

A hook that provides access to the `Dialog.Overlay` component's internal state. It exposes readonly signals that allow descendant components to react to the dialog's overlay state and behavior.

| Property   | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :--------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `presence` | `ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"` | A readonly signal whose value indicates the dialog overlay's current presence state. This signal reflects the different phases of the overlay's lifecycle, especially during animations. It can be one of the following: <br /> <br /> - `"showing"`: The overlay is currently animating to an open state. <br /> - `"shown"`: The overlay is fully open and visible. <br /> - `"hiding"`: The overlay is currently animating to a closed state. <br /> - `"hidden"`: The overlay is fully closed and not visible. |

### useDialogContentContext

A hook that provides access to the `Dialog.Content` component's internal state. It exposes readonly signals that allow descendant components to react to the dialog's content state and behavior.

| Property                    | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :-------------------------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `presence`                  | `ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"` | A readonly signal whose value indicates the dialog content's current presence state. This signal reflects the different phases of the content's lifecycle, especially during animations. It can be one of the following: <br /> <br /> - `"showing"`: The content is currently animating to an open state. <br /> - `"shown"`: The content is fully open and visible. <br /> - `"hiding"`: The content is currently animating to a closed state. <br /> - `"hidden"`: The content is fully closed and not visible. |
| `loop`                      | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether the focus trap should have looping behavior. When `true`, focus will cycle from the last to the first tabbable element and vice versa.                                                                                                                                                                                                                                                                                                                             |
| `scrollToFinalFocus`        | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether automatic scrolling to the final focused element is enabled.                                                                                                                                                                                                                                                                                                                                                                                                       |
| `preventScroll`             | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether scrolling of the page's `<body>` element is prevented when the dialog is open.                                                                                                                                                                                                                                                                                                                                                                                     |
| `closeOnEscapeKeyDown`      | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether the dialog can be closed by pressing the `Escape` key.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `closeOnPointerDownOutside` | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether the dialog can be closed by clicking or tapping outside of the dialog content.                                                                                                                                                                                                                                                                                                                                                                                     |

### useDialogCloseContext

A hook that provides access to the `Dialog.Close` component's internal state. It exposes readonly signals that allow descendant components to interact with and react to the close button's state.

| Property   | Type                      | Description                                                                                                                                         |
| :--------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the close button is disabled. Its value is `true` if the trigger is disabled, preventing user interaction. |

## Examples

The following examples demonstrate the practical use of the `Dialog` component and its subcomponents. You can use them as a starting point to build your own fully functional dialogs, customized to your specific needs. Each example focuses on a particular functionality, from basic structure to advanced animations and behaviors.

### Uncontrolled state

The uncontrolled state allows the `Dialog` component to manage its own open/closed state internally. The `defaultOpen` prop is passed to `Dialog.Root` to set the initial state. However, because the `Dialog` component uses the native `<dialog>` element, it cannot be rendered in an open state on the server. Therefore, you must ensure `defaultOpen` is `false` during server-side rendering.

```tsx
import { component$ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Dialog.Root defaultOpen={false}>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

### Controlled state

In the controlled mode, you take full control of the dialog's open/closed state using the `open` prop, which is passed to `Dialog.Root` component. This prop requires a boolean signal, which you must also update using the `onOpenChange$` event handler, also passed to `Dialog.Root`, whenever the dialog's state changes. This gives you full control over when the dialog opens and closes. However, because the `Dialog` component uses the native `<dialog>` element, it cannot be rendered in an open state on the server. Therefore, you must ensure your signal's value is `false` during server-side rendering. This mode is suitable for more complex scenarios where you need to integrate the dialog's state with other parts of your application logic or external state management.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const Demo = component$(() => {
  const isOpen = useSignal(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

## Initially open

To render a dialog in an initially open state, you must use the controlled mode with the `open` prop. Since the `Dialog` component uses the native `<dialog>` element, it cannot be rendered as open on the server. This can be achieved by updating the `Dialog.Root` component's `open` boolean signal within a `useOnDocument` hook (specifically for the `DOMContentLoaded` event) or by using a `useVisibleTask$` hook with a strategy like `"document-ready"` or `"document-idle"`. In both cases, the dialog will be visible from the moment the page's content is fully loaded.

```tsx
import { component$, useSignal, useOnDocument, $ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const Demo = component$(() => {
  const isOpen = useSignal(false);

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      isOpen.value = true;
    })
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

### Close after asynchronous form submission

This example demonstrates how to close the dialog after a form has been submitted and the asynchronous operation (such as an API call) has completed. By using a controlled state with a signal, you can programmatically close the dialog by updating the signal's value to `false` in the `.then()` block of your asynchronous function. This ensures the dialog remains open until the form submission process is complete.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1500));

const Demo = component$(() => {
  const isOpen = useSignal(false);

  const handleSubmit$ = $(async () => {
    wait().then(() => (isOpen.value = false));
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>

        <form preventdefault:submit={true} onSubmit$={handleSubmit$}>
          <button type="submit">Submit</button>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

### Initial focus

This section demonstrates how to control which element receives focus when the dialog opens. The `initialFocus` prop, passed to `Dialog.Content`, is used to specify the element that should receive focus when the dialog is opened. If the `initialFocus` prop is not used, the first tabbable element within the dialog content will receive focus by default. If no tabbable elements are present, focus will fall back to the dialog content itself.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const Demo = component$(() => {
  const initialFocusRef = useSignal<HTMLElement | undefined>(undefined);

  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content initialFocus={initialFocusRef}>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>

        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input (initial focus element)</label>
        <input ref={initialFocusRef} id="second-input" type="text" placeholder="Second input (initial focus element)" />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

### Final focus

This section demonstrates how to control which element receives focus when the dialog is closed. The `finalFocus` prop, passed to `Dialog.Content`, is used to specify the element that should receive focus when the dialog is closed. If the `finalFocus` prop is not used, and a trigger exists, focus will return to the trigger element by default. Otherwise, focus will attempt to return to the element that was focused before the dialog was opened.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const Demo = component$(() => {
  const finalFocusRef = useSignal<HTMLElement | undefined>(undefined);

  return (
    <>
      <button ref={finalFocusRef} type="button">
        Button (final focus element)
      </button>

      <Dialog.Root>
        <Dialog.Trigger>Open dialog</Dialog.Trigger>
        <Dialog.Overlay />
        <Dialog.Content finalFocus={finalFocusRef}>
          <Dialog.Title>Dialog title</Dialog.Title>
          <Dialog.Description>Dialog description</Dialog.Description>
          <Dialog.Close>Close dialog</Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
});
```

### Animating content with CSS animations

You can animate the `Dialog.Content` component's appearance and disappearance by applying CSS animations based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct keyframes for the enter and exit animations. Additionally, the `data-presence` attribute transitions through `"showing"`, `"shown"`, `"hiding"`, and `"hidden"` states, giving you more granular control over the animation lifecycle.

While CSS animations (`@keyframes`) can be used to control the `Dialog.Content` component's open and close state, CSS transitions are generally recommended for creating smoother animations. This is because transitions offer smoother cancellation mid-way through an animation. For example, if a user quickly opens and then closes the dialog before it is fully visible, a transition would allow it to smoothly animate back to its closed state without any abrupt jumps, unlike some CSS animation implementations.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content class="dialog-content">
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

```css
.dialog-content {
  margin: unset;
  border: unset;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  background-color: gray;
  will-change: opacity, transform;
}

.dialog-content[data-state='open'] {
  animation: dialog-content-show 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-content[data-state='closed'] {
  animation: dialog-content-hide 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes dialog-content-show {
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes dialog-content-hide {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
}
```

### Animating content with CSS transitions

You can animate the `Dialog.Content` component's appearance and disappearance by applying CSS transitions based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct transition properties for the enter and exit animations. Additionally, the `data-presence` attribute transitions through `"showing"`, `"shown"`, `"hiding"`, and `"hidden"` states, giving you more granular control over the animation lifecycle.

Transitions are the recommended method for creating smoother animations for the `Dialog.Content` component when it opens and closes. They allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the dialog before it is fully visible, a transition will smoothly animate it back to its closed state without any abrupt jumps.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content class="dialog-content">
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

```css
.dialog-content {
  margin: unset;
  border: unset;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  background-color: gray;
  will-change: opacity, transform;
  transition-property: opacity, transform;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-content[data-state='open'] {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.dialog-content[data-state='closed'] {
  opacity: 0;
  transform: translate(-50%, -48%) scale(0.96);
}
```

### Animating overlay with CSS animations

You can animate the `Dialog.Overlay` component's appearance and disappearance by applying CSS animations based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct `@keyframes` for the enter and exit animations. This approach offers greater control compared to the native `::backdrop` CSS pseudo-element provided by `Dialog.Content` (which currently cannot be animated in Firefox).

While CSS animations (`@keyframes`) can be used to control the `Dialog.Overlay` component's open and close state, CSS transitions are generally the recommended method for creating smoother animations. This is because transitions offer better performance and allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the dialog before the overlay is fully visible, a transition would allow it to smoothly animate back to its closed state without any abrupt jumps, unlike some CSS animation implementations.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay class="dialog-overlay" />
      <Dialog.Content class="dialog-content">
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

```css
.dialog-content::backdrop {
  background-color: transparent;
}

.dialog-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
}

.dialog-overlay[data-state='open'] {
  animation: dialog-overlay-show 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-overlay[data-state='closed'] {
  animation: dialog-overlay-hide 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes dialog-overlay-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dialog-overlay-hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

### Animating overlay with CSS transitions

You can animate the `Dialog.Overlay` component's appearance and disappearance by applying CSS transitions based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct transition properties for the enter and exit animations. This approach offers greater control compared to the native `::backdrop` CSS pseudo-element provided by `Dialog.Content` (which currently cannot be animated in Firefox).

Transitions are the recommended method for creating smoother animations for the `Dialog.Overlay` component when it opens and closes. They allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the dialog before the overlay is fully visible, a transition will smoothly animate it back to its closed state without any abrupt jumps.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Overlay class="dialog-overlay" />
      <Dialog.Content class="dialog-content">
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

```css
.dialog-content::backdrop {
  background-color: transparent;
}

.dialog-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
  transition-property: opacity;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-overlay[data-state='open'] {
  opacity: 1;
}

.dialog-overlay[data-state='closed'] {
  opacity: 0;
}
```

### Rendering different elements

By default, the `Dialog`'s subcomponents each render a sensible HTML element. For example, `Dialog.Trigger` renders a `<button>`, and `Dialog.Title` renders an `<h2>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the render$ prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

**While it's possible to change the element rendered by `Dialog.Content`, for accessibility and correct component functionality, it should always render a `<dialog>` element. Otherwise, the component will throw an error.**

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { Dialog } from 'rilix-ui';

const MyCustomButton = component$<PropsOf<'button'>>((props) => {
  return (
    <button style={{ color: 'white', backgroundColor: 'purple' }} {...props}>
      <Slot />
    </button>
  );
});

const Demo = component$(() => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render$={(props) => (
          <MyCustomButton {...props}>
            <Slot />
          </MyCustomButton>
        )}
      >
        Open dialog
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title
          render$={(props) => (
            <p {...props}>
              <Slot />
            </p>
          )}
        >
          Dialog title
        </Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

## Accessibility

`Dialog` component is designed to be fully accessible, adhering to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). It manages screen reader announcements with `Title` and `Description` components. Focus is managed automatically, moving inside the dialog content when it opens and returning to the trigger when it closes.

### Keyboard interactions

Users can interact with the `Dialog` component efficiently using only a keyboard. The following overview outlines the primary keyboard shortcuts and their actions:

| Key                    | Description                                                                                   |
| :--------------------- | :-------------------------------------------------------------------------------------------- |
| <kbd>Space</kbd>       | When focus is on `Dialog.Trigger`, it opens the dialog; when on `Dialog.Close`, it closes it. |
| <kbd>Enter</kbd>       | When focus is on `Dialog.Trigger`, it opens the dialog; when on `Dialog.Close`, it closes it. |
| <kbd>Tab</kbd>         | Moves focus to the next focusable element inside the `Dialog.Content`.                        |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous focusable element inside the `Dialog.Content`.                    |
| <kbd>Esc</kbd>         | Closes the dialog and moves focus to `Dialog.Trigger`.                                        |
