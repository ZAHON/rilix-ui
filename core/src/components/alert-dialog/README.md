# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Features

- Can be uncontrolled or controlled.

- Manages screen reader announcements with `Title` and `Description` components.

- Focus is trapped and scrolling is blocked while it is open.

- Pressing <kbd>Esc</kbd> closes the component automatically.

- Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/).

## Import

```tsx
import { AlertDialog } from 'rilix-ui';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger />
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title />
        <AlertDialog.Description />
        <AlertDialog.Cancel />
        <AlertDialog.Action />
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

## Rendered elements

Each of the `AlertDialog`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

**While it's possible to change the element rendered by `AlertDialog.Content`, for accessibility and correct component functionality, it should always render a `<dialog>` element. Otherwise, the component will throw an error.**

| Component                 | Default rendered element |
| :------------------------ | :----------------------- |
| `AlertDialog.Root`        | `-`                      |
| `AlertDialog.Trigger`     | `<button>`               |
| `AlertDialog.Overlay`     | `<div>`                  |
| `AlertDialog.Content`     | `<dialog>`               |
| `AlertDialog.Title`       | `<h2>`                   |
| `AlertDialog.Description` | `<p>`                    |
| `AlertDialog.Cancel`      | `<button>`               |
| `AlertDialog.Action`      | `<button>`               |

## API Reference

This section provides a detailed overview of the props, types, and data attributes for each subcomponent of the `AlertDialog`, serving as a complete guide for developers to customize and interact with the component's behavior and appearance.

### Root

Contains all the parts of an alert dialog. Doesn’t render its own HTML element.

| Prop            | Type                                                               | Default | Description                                                                                                                                                                                                                                                               |
| :-------------- | :----------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultOpen`   | `boolean`                                                          | `-`     | The open state of the alert dialog when it is initially rendered. Use when you do not need to control its open state.                                                                                                                                                     |
| `open`          | `Signal<boolean>`                                                  | `-`     | The controlled open state of the alert dialog. Must be used in conjunction with `onOpenChange$`.                                                                                                                                                                          |
| `onOpenChange$` | `QRL<(open: boolean) => void>`                                     | `-`     | A `QRL` callback function that is called when the open state of the alert dialog changes.                                                                                                                                                                                 |
| `ids`           | `Partial<{ content: string; title: string; description: string }>` | `-`     | An optional object to override the default generated IDs for internal elements. This is useful when you need to ensure specific, predictable IDs for integration with external tools, testing frameworks, or for more fine-grained control over accessibility attributes. |

### Trigger

A button that opens the alert dialog. Renders a `<button>` element.

| Prop       | Type                                                                                                                         | Default | Description                                                                                                                                                                                                                                |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `boolean`                                                                                                                    | `false` | When `true`, prevents the user from interacting with the trigger.                                                                                                                                                                          |
| `render$`  | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values               | Description                                                         |
| :-------------- | :------------------- | :------------------------------------------------------------------ |
| `data-state`    | `"open" \| "closed"` | Indicates whether the alert dialog is currently open or closed.     |
| `data-disabled` | `-`                  | Present when the trigger is disabled and cannot be interacted with. |

### Overlay

A layer that covers the inert portion of the view when the alert dialog is open. Renders a `<div>` element.

| Prop                    | Type                                                                                                                                                              | Default | Description                                                                                                                                                                                                                                                                                         |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onOpenChangeComplete$` | `QRL<(open: boolean) => void>`                                                                                                                                    | `-`     | A `QRL` callback function invoked after the alert dialog overlay's open or close animation/transition has fully completed. Use this to react once the overlay has settled in its final open or closed state, regardless of whether it was animated with CSS `animation` or `transition` properties. |
| `render$`               | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; presence: ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                          |

| Data attribute  | Values                                         | Description                                                                                                                                                                                                                |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-state`    | `"open" \| "closed"`                           | Indicates whether the alert dialog is currently open or closed.                                                                                                                                                            |
| `data-presence` | `"showing" \| "shown" \| "hiding" \| "hidden"` | Indicates the overlay’s current presence state. Useful for managing animations, as `"showing"` and `"hiding"` are active during the animation, while `"shown"` and `"hidden"` are active once the animation has completed. |

### Content

Contains content to be rendered in the open alert dialog. Renders a `<dialog>` element.

| Prop                        | Type                                                                                                                                                              | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loop`                      | `boolean`                                                                                                                                                         | `true`  | When `true`, enables "looping" behavior. If the user presses <kbd>Tab</kbd> from the last focusable element, focus will cycle back to the first. If <kbd>Shift + Tab</kbd> from the first, focus will go to the last.                                                                                                                                                                                                                                                                                                |
| `initialFocus`              | `SignalOrReadonlySignal<HTMLElement \| undefined \| null>`                                                                                                        | `-`     | Specifies the element that should receive focus when the alert dialog is opened. If `initialFocus` is not passed or its `value` is `undefined` or `null`, focus is automatically set to the first enabled alert dialog cancel element within the content. If such an element does not exist, the first tabbable element within the alert dialog content will receive focus. If the alert dialog content itself does not contain any tabbable elements, focus will then fall back to the alert dialog content itself. |
| `finalFocus`                | `SignalOrReadonlySignal<HTMLElement \| undefined \| null>`                                                                                                        | `-`     | Specifies the element that should receive focus when the alert dialog is closed. If `finalFocus` is not passed or its `value` is `undefined` or `null`, and the alert dialog's trigger exists, focus will always return to the trigger element. Otherwise, focus will attempt to return to the element that was focused before the alert dialog was opened.                                                                                                                                                          |
| `scrollToFinalFocus`        | `boolean`                                                                                                                                                         | `true`  | When `true`, enables automatic scrolling to the element that receives focus after the alert dialog is closed. This is useful to ensure the final focused element (e.g., alert dialog's trigger) is visible within the viewport.                                                                                                                                                                                                                                                                                      |
| `preventScroll`             | `boolean`                                                                                                                                                         | `true`  | When `true`, prevents scrolling of the page's `<body>` element when the alert dialog is open.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `closeOnEscapeKeyDown`      | `boolean`                                                                                                                                                         | `true`  | When `true`, enables closing the alert dialog by pressing the `Escape` key.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `closeOnPointerDownOutside` | `boolean`                                                                                                                                                         | `false` | When `true`, the alert dialog will close automatically if the user clicks or taps outside of the alert dialog content.                                                                                                                                                                                                                                                                                                                                                                                               |
| `onEscapeKeyDown$`          | `QRL<() => void>`                                                                                                                                                 | `-`     | A `QRL` callback function invoked when the `Escape` key is pressed while the alert dialog is open. This can be used to perform side effects, such as logging or analytics, without affecting the default close behavior.                                                                                                                                                                                                                                                                                             |
| `onPointerDownOutside$`     | `QRL<() => void>`                                                                                                                                                 | `-`     | A `QRL` callback function invoked when a pointerdown event is detected outside the alert dialog content. This can be used to perform side effects, such as logging or analytics, without affecting the default close behavior.                                                                                                                                                                                                                                                                                       |
| `onOpenChangeComplete$`     | `QRL<(open: boolean) => void>`                                                                                                                                    | `-`     | A `QRL` callback function invoked after the alert dialog content's open or close animation/transition has fully completed. Use this to react once the content has settled in its final open or closed state, regardless of whether it was animated with CSS `animation` or `transition` properties.                                                                                                                                                                                                                  |
| `render$`                   | `(props: Record<string, unknown>, state: { open: ReadonlySignal<boolean>; presence: ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.                                                                                                                                                                                                                                                                           |

| Data attribute  | Values                                         | Description                                                                                                                                                                                                                |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-state`    | `"open" \| "closed"`                           | Indicates whether the alert dialog is currently open or closed.                                                                                                                                                            |
| `data-presence` | `"showing" \| "shown" \| "hiding" \| "hidden"` | Indicates the content’s current presence state. Useful for managing animations, as `"showing"` and `"hiding"` are active during the animation, while `"shown"` and `"hidden"` are active once the animation has completed. |

### Cancel

A button that closes the alert dialog. This button should be distinguished visually from `AlertDialog.Action` buttons. Renders a `<button>` element.

| Prop       | Type                                                                                          | Default | Description                                                                                                                                                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `boolean`                                                                                     | `false` | When `true`, prevents the user from interacting with the cancel button.                                                                                                                                                                    |
| `render$`  | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                               |
| :-------------- | :----- | :------------------------------------------------------------------------ |
| `data-disabled` | `-`    | Present when the cancel button is disabled and cannot be interacted with. |

### Action

A button that closes the alert dialog. These buttons should be distinguished visually from the `AlertDialog.Cancel` button. Renders a `<button>` element.

| Prop       | Type                                                                                          | Default | Description                                                                                                                                                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `boolean`                                                                                     | `false` | When `true`, prevents the user from interacting with the action button.                                                                                                                                                                    |
| `render$`  | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                               |
| :-------------- | :----- | :------------------------------------------------------------------------ |
| `data-disabled` | `-`    | Present when the action button is disabled and cannot be interacted with. |

### Title

An accessible title to be announced when the alert dialog is opened. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `AlertDialog.Content` component, or pass `ids={{ title: undefined }}` to `AlertDialog.Root`. If you remove the title, ensure you provide a descriptive `aria-label` directly on the `AlertDialog.Content` component to provide an accessible label. Renders an `<h2>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

### Description

An accessible description to be announced when the alert dialog is opened. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `AlertDialog.Content` component, or pass `ids={{ description: undefined }}` to `AlertDialog.Root`. Renders a `<p>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :--------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

### useAlertDialogContext

A hook that provides access to the `AlertDialog` component's internal state. It exposes readonly signals and `QRL` functions to interact with the alert dialog's state, allowing descendant components to control or react to its open/closed state.

| Property   | Type                           | Description                                                                                                                                                          |
| :--------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`     | `ReadonlySignal<boolean>`      | A readonly signal whose value indicates the alert dialog's current open state. It is `true` when the dialog is open, and `false` when closed.                        |
| `setOpen$` | `QRL<(open: boolean) => void>` | A `QRL` function used to programmatically set the open state of the alert dialog. When invoked with `true`, the alert dialog will open; with `false`, it will close. |

### useAlertDialogTriggerContext

A hook that provides access to the `AlertDialog.Trigger` component's internal state. It exposes readonly signals that allow descendant components to interact with and react to the trigger's state.

| Property   | Type                      | Description                                                                                                                                    |
| :--------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the trigger is disabled. Its value is `true` if the trigger is disabled, preventing user interaction. |

### useAlertDialogOverlayContext

A hook that provides access to the `AlertDialog.Overlay` component's internal state. It exposes readonly signals that allow descendant components to react to the alert dialog's overlay state and behavior.

| Property   | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :--------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `presence` | `ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"` | A readonly signal whose value indicates the alert dialog overlay's current presence state. This signal reflects the different phases of the overlay's lifecycle, especially during animations. It can be one of the following: <br /> <br /> - `"showing"`: The overlay is currently animating to an open state. <br /> - `"shown"`: The overlay is fully open and visible. <br /> - `"hiding"`: The overlay is currently animating to a closed state. <br /> - `"hidden"`: The overlay is fully closed and not visible. |

### useAlertDialogContentContext

A hook that provides access to the `AlertDialog.Content` component's internal state. It exposes readonly signals that allow descendant components to react to the alert dialog's content state and behavior.

| Property                    | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :-------------------------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `presence`                  | `ReadonlySignal<"showing" \| "shown" \| "hiding" \| "hidden"` | A readonly signal whose value indicates the alert dialog content's current presence state. This signal reflects the different phases of the content's lifecycle, especially during animations. It can be one of the following: <br /> <br /> - `"showing"`: The content is currently animating to an open state. <br /> - `"shown"`: The content is fully open and visible. <br /> - `"hiding"`: The content is currently animating to a closed state. <br /> - `"hidden"`: The content is fully closed and not visible. |
| `loop`                      | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether the focus trap should have looping behavior. When `true`, focus will cycle from the last to the first tabbable element and vice versa.                                                                                                                                                                                                                                                                                                                                   |
| `scrollToFinalFocus`        | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether automatic scrolling to the final focused element is enabled.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `preventScroll`             | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether scrolling of the page's `<body>` element is prevented when the alert dialog is open.                                                                                                                                                                                                                                                                                                                                                                                     |
| `closeOnEscapeKeyDown`      | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether the alert dialog can be closed by pressing the <kbd>Esc</kbd> key.                                                                                                                                                                                                                                                                                                                                                                                                       |
| `closeOnPointerDownOutside` | `ReadonlySignal<boolean>`                                     | A readonly signal whose value indicates whether the alert dialog can be closed by clicking or tapping outside of the alert dialog content.                                                                                                                                                                                                                                                                                                                                                                               |

### useAlertDialogCancelContext

A hook that provides access to the `AlertDialog.Cancel` component's internal state. It exposes readonly signals that allow descendant components to interact with and react to the cancel button's state.

| Property   | Type                      | Description                                                                                                                                                |
| :--------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the cancel button is disabled. Its value is `true` if the cancel button is disabled, preventing user interaction. |

### useAlertDialogActionContext

A hook that provides access to the `AlertDialog.Action` component's internal state. It exposes readonly signals that allow descendant components to interact with and react to the action button's state.

| Property   | Type                      | Description                                                                                                                                                |
| :--------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the action button is disabled. Its value is `true` if the action button is disabled, preventing user interaction. |

## Examples

This section provides practical examples to help you understand how to implement the `AlertDialog` component in different scenarios. You'll find code snippets for both controlled and uncontrolled usage, as well as examples demonstrating how to customize the rendered HTML elements and manage focus behavior.

### Uncontrolled state

The uncontrolled state allows the `AlertDialog` component to manage its own open/closed state internally. The `defaultOpen` prop is passed to `AlertDialog.Root` to set the initial state. However, because the `AlertDialog` component uses the native `<dialog>` element, it cannot be rendered in an open state on the server. Therefore, you must ensure `defaultOpen` is `false` during server-side rendering.

```tsx
import { component$ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <AlertDialog.Root defaultOpen={false}>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Controlled state

In the controlled mode, you take full control of the alert dialog's open/closed state using the `open` prop, which is passed to `AlertDialog.Root` component. This prop requires a boolean signal, which you must also update using the `onOpenChange$` event handler, also passed to `AlertDialog.Root`, whenever the alert dialog's state changes. This gives you full control over when the alert dialog opens and closes. However, because the `AlertDialog` component uses the native `<dialog>` element, it cannot be rendered in an open state on the server. Therefore, you must ensure your signal's value is `false` during server-side rendering. This mode is suitable for more complex scenarios where you need to integrate the alert dialog's state with other parts of your application logic or external state management.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const Demo = component$(() => {
  const isOpen = useSignal(false);

  return (
    <AlertDialog.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Initially open

To render a alert dialog in an initially open state, you must use the controlled mode with the `open` prop. Since the `AlertDialog` component uses the native `<dialog>` element, it cannot be rendered as open on the server. This can be achieved by updating the `AlertDialog.Root` component's `open` boolean signal within a `useOnDocument` hook (specifically for the `DOMContentLoaded` event) or by using a `useVisibleTask$` hook with a strategy like `"document-ready"` or `"document-idle"`. In both cases, the dialog will be visible from the moment the page's content is fully loaded.

```tsx
import { component$, useSignal, useOnDocument, $ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const Demo = component$(() => {
  const isOpen = useSignal(false);

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      isOpen.value = true;
    })
  );

  return (
    <AlertDialog.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Close after asynchronous form submission

This example demonstrates how to close the alert dialog after a form has been submitted and the asynchronous operation (such as an API call) has completed. By using a controlled state with a signal, you can programmatically close the alert dialog by updating the signal's value to `false` in the `.then()` block of your asynchronous function. This ensures the alert dialog remains open until the form submission process is complete.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1500));

const Demo = component$(() => {
  const isOpen = useSignal(false);

  const handleSubmit$ = $(async () => {
    wait().then(() => (isOpen.value = false));
  });

  return (
    <AlertDialog.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>

        <form preventdefault:submit={true} onSubmit$={handleSubmit$}>
          <button type="submit">Submit</button>
        </form>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Initial focus

This section demonstrates how to control which element receives focus when the alert dialog opens. The `initialFocus` prop, passed to `AlertDialog.Content`, allows you to specify a particular element to receive focus. If you don't use the `initialFocus` prop (or if its value is `undefined` or `null`), the component will follow a specific focus hierarchy. First, focus is automatically set to the first enabled alert dialog cancel element within the content. If such an element does not exist, the first tabbable element within the alert dialog content will receive focus. Finally, if the alert dialog content itself contains no tabbable elements, focus will fall back to the `AlertDialog.Content` element itself.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const Demo = component$(() => {
  const initialFocusRef = useSignal<HTMLElement | undefined>(undefined);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content initialFocus={initialFocusRef}>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>

        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input (initial focus element)</label>
        <input ref={initialFocusRef} id="second-input" type="text" placeholder="Second input (initial focus element)" />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Final focus

This section demonstrates how to control which element receives focus when the dialog is closed. The `finalFocus` prop, passed to `AlertDialog.Content`, is used to specify the element that should receive focus when the alert dialog is closed. If the `finalFocus` prop is not used, and a trigger exists, focus will return to the trigger element by default. Otherwise, focus will attempt to return to the element that was focused before the dialog was opened.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const Demo = component$(() => {
  const finalFocusRef = useSignal<HTMLElement | undefined>(undefined);

  return (
    <>
      <button ref={finalFocusRef} type="button">
        Button (final focus element)
      </button>

      <AlertDialog.Root>
        <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
        <AlertDialog.Overlay />
        <AlertDialog.Content finalFocus={finalFocusRef}>
          <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
          <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
          <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
});
```

### Animating content with CSS animations

You can animate the `AlertDialog.Content` component's appearance and disappearance by applying CSS animations based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct keyframes for the enter and exit animations. Additionally, the `data-presence` attribute transitions through `"showing"`, `"shown"`, `"hiding"`, and `"hidden"` states, giving you more granular control over the animation lifecycle.

While CSS animations (`@keyframes`) can be used to control the `AlertDialog.Content` component's open and close state, CSS transitions are generally recommended for creating smoother animations. This is because transitions offer smoother cancellation mid-way through an animation. For example, if a user quickly opens and then closes the alert dialog before it is fully visible, a transition would allow it to smoothly animate back to its closed state without any abrupt jumps, unlike some CSS animation implementations.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

```css
.alert-dialog-content {
  margin: unset;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  will-change: opacity, transform;
}

.alert-dialog-content[data-state='open'] {
  animation: alert-dialog-content-show 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.alert-dialog-content[data-state='closed'] {
  animation: alert-dialog-content-hide 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes alert-dialog-content-show {
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes alert-dialog-content-hide {
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

You can animate the `AlertDialog.Content` component's appearance and disappearance by applying CSS transitions based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct transition properties for the enter and exit animations. Additionally, the `data-presence` attribute transitions through `"showing"`, `"shown"`, `"hiding"`, and `"hidden"` states, giving you more granular control over the animation lifecycle.

Transitions are the recommended method for creating smoother animations for the `AlertDialog.Content` component when it opens and closes. They allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the alert dialog before it is fully visible, a transition will smoothly animate it back to its closed state without any abrupt jumps.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

```css
.alert-dialog-content {
  margin: unset;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  will-change: opacity, transform;
  transition-property: opacity, transform;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.alert-dialog-content[data-state='open'] {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.alert-dialog-content[data-state='closed'] {
  opacity: 0;
  transform: translate(-50%, -48%) scale(0.96);
}
```

### Animating overlay with CSS animations

You can animate the `AlertDialog.Overlay` component's appearance and disappearance by applying CSS animations based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct `@keyframes` for the enter and exit animations. This approach offers greater control compared to the native `::backdrop` CSS pseudo-element provided by `AlertDialog.Content` (which currently cannot be animated in Firefox).

While CSS animations (`@keyframes`) can be used to control the `AlertDialog.Overlay` component's open and close state, CSS transitions are generally the recommended method for creating smoother animations. This is because transitions offer better performance and allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the alert dialog before the overlay is fully visible, a transition would allow it to smoothly animate back to its closed state without any abrupt jumps, unlike some CSS animation implementations.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay class="alert-dialog-overlay" />
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

```css
.alert-dialog-content::backdrop {
  background-color: transparent;
}

.alert-dialog-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
}

.alert-dialog-overlay[data-state='open'] {
  animation: alert-dialog-overlay-show 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.alert-dialog-overlay[data-state='closed'] {
  animation: alert-dialog-overlay-hide 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes alert-dialog-overlay-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes alert-dialog-overlay-hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

### Animating overlay with CSS transitions

You can animate the `AlertDialog.Overlay` component's appearance and disappearance by applying CSS transitions based on its `data-state` attribute. This attribute changes between `"open"` and `"closed"`, allowing you to define distinct transition properties for the enter and exit animations. This approach offers greater control compared to the native `::backdrop` CSS pseudo-element provided by `AlertDialog.Content` (which currently cannot be animated in Firefox).

Transitions are the recommended method for creating smoother animations for the `AlertDialog.Overlay` component when it opens and closes. They allow for smooth cancellation mid-way through an animation. For example, if a user quickly opens and then closes the alert dialog before the overlay is fully visible, a transition will smoothly animate it back to its closed state without any abrupt jumps.

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';
import styles from './styles.css?inline';

const Demo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Overlay class="alert-dialog-overlay" />
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

```css
.alert-dialog-content::backdrop {
  background-color: transparent;
}

.alert-dialog-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
  transition-property: opacity;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.alert-dialog-overlay[data-state='open'] {
  opacity: 1;
}

.alert-dialog-overlay[data-state='closed'] {
  opacity: 0;
}
```

### Rendering different elements

By default, the `AlertDialog`'s subcomponents each render a sensible HTML element. For example, `AlertDialog.Trigger` renders a `<button>`, and `AlertDialog.Title` renders an `<h2>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag with any other valid HTML element that fits your design and semantic needs.

- Integrate your own Qwik components, wrapping them with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

**While it's possible to change the element rendered by `AlertDialog.Content`, for accessibility and correct component functionality, it should always render a `<dialog>` element. Otherwise, the component will throw an error.**

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { AlertDialog } from 'rilix-ui';

const MyCustomButton = component$<PropsOf<'button'>>((props) => {
  return (
    <button style={{ color: 'white', backgroundColor: 'purple' }} {...props}>
      <Slot />
    </button>
  );
});

const Demo = component$(() => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        render$={(props) => (
          <MyCustomButton {...props}>
            <Slot />
          </MyCustomButton>
        )}
      >
        Open alert dialog
      </AlertDialog.Trigger>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title
          render$={(props) => (
            <p {...props}>
              <Slot />
            </p>
          )}
        >
          Alert dialog title
        </AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

## Accessibility

`AlertDialog` component is designed to be fully accessible, adhering to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/). It manages screen reader announcements with `Title` and `Description` components. Focus is managed automatically, moving inside the alert dialog content when it opens and returning to the trigger when it closes.

### Keyboard interactions

Users can interact with the `AlertDialog` component efficiently using only a keyboard. The following overview outlines the primary keyboard shortcuts and their actions:

| Key                    | Description                                                                                                                            |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Space</kbd>       | When focus is on `AlertDialog.Trigger`, it opens the alert dialog; when on `AlertDialog.Cancel` or `AlertDialog.Action`, it closes it. |
| <kbd>Enter</kbd>       | When focus is on `AlertDialog.Trigger`, it opens the alert dialog; when on `AlertDialog.Cancel` or `AlertDialog.Action`, it closes it. |
| <kbd>Tab</kbd>         | Moves focus to the next focusable element inside the `AlertDialog.Content`.                                                            |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous focusable element inside the `AlertDialog.Content`.                                                        |
| <kbd>Esc</kbd>         | Closes the alert dialog and moves focus to `AlertDialog.Trigger`.                                                                      |

## Caveats

This section highlights important technical details and specific implementation choices related to the `AlertDialog` component that might not be immediately obvious. Understanding these nuances can help you use the component more effectively, especially when it comes to customization and advanced use cases.

### Rationale for the `<dialog>` element

The `AlertDialog.Content` component is based on the native `<dialog>` element to provide a robust solution for creating modal dialogs. This choice was made because Qwik does not support the Portal API, which is common in other frameworks. Instead of relying on a dedicated API, the `<dialog>` element leverages the native top layer behavior in browsers.

This approach ensures that the dialog is automatically rendered on top of the rest of the page content, simplifying issues related to z-index and stacking contexts. By building on native browser specifications, this component reduces the amount of JavaScript that needs to be pre-fetched, which can lead to better performance. You can check the current compatibility for the `<dialog>` element on [Can I Use: dialog element](https://caniuse.com/mdn-html_elements_dialog).

### Rationale for the `AlertDialog.Overlay` component

The `AlertDialog.Overlay` component is a crucial part of the alert dialog's structure, primarily used for styling and animating the backdrop. It offers greater control than the native `::backdrop` CSS pseudo-element, which is available through the `AlertDialog.Content` component (as it's based on the native `<dialog>` element). The reason for this approach is that native `::backdrop` currently has limited animation support in some browsers, like Firefox.

This implementation leverages the Popover API to create the overlay. This decision was made because modern browser support for the native Popover API is already quite extensive. You can check the current compatibility on [Can I use: Popover API](https://caniuse.com/mdn-api_htmlelement_popover).
