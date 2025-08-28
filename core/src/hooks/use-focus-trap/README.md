# useFocusTrap

A hook for trapping keyboard focus within a given element, offering optional looping and control over initial and final focus.

## Import

```tsx
import { useFocusTrap } from 'rilix-ui';
```

## Usage

The `useFocusTrap` hook is crucial for managing keyboard navigation within UI components, ensuring accessibility by confining user focus to a designated area. When the focus trap is active, the designated `element` will receive a `data-rilix-ui-focus-trap` attribute. Upon activation, focus will automatically move to the `initialFocus` element if it's specified. If `initialFocus` isn't provided or is not a tabbable element, the hook will focus the first tabbable element within the `element`. If no tabbable elements are found, focus will fall back to the `element` itself. This hook also provides an option for enabling "looping" behavior, which cycles focus within the trap.

Conversely, when the focus trap is not active, the `data-rilix-ui-focus-trap` attribute is removed. Upon deactivation, focus will attempt to return to the `finalFocus` element if it's specified. If `finalFocus` isn't provided or is not a valid element, focus will by default return to the element that was focused before the trap was activated, falling back to `document.body` if necessary. This behavior is especially useful for modals, dialogs, and other overlays.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { useFocusTrap } from 'rilix-ui';

const Demo = component$(() => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);
  const { activate$, deactivate$ } = useFocusTrap({ element: elementRef });

  return (
    <>
      <button type="button" onClick$={activate$}>
        Activate
      </button>

      <div ref={elementRef} style={{ border: '1px solid black' }}>
        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input</label>
        <input id="second-input" type="text" placeholder="Second input" />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <button type="button" onClick$={deactivate$}>
          Deactivate
        </button>
      </div>
    </>
  );
});
```

## API reference

The `useFocusTrap` hook provides a flexible API to manage focus behavior. It accepts an object to configure the trap's behavior, and returns an object containing signals and QRL functions to control the trap's state and actions. This allows for fine-grained control over focus management, enabling you to build accessible components that handle user interactions gracefully. The detailed API is described below.

### Parameters

The `useFocusTrap` hook accepts an object as its parameter, with the following properties:

| Property          | Type                                                                                                                                                              | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `element*`        | `SignalOrReadonlySignal<HTMLElement \| undefined \| null>`                                                                                                        | `-`     | The signal that resolves to the HTML element in which focus should be trapped.                                                                                                                                                                                                                                                                                                                                                                                                         |
| `loop`            | `boolean \| SignalOrReadonlySignal<boolean>`                                                                                                                      | `false` | When `true`, enables "looping" behavior for the focus trap. If the user presses <kbd>Tab</kbd> from the last focusable element, focus will cycle back to the first. If <kbd>Shift + Tab</kbd> from the first, focus will go to the last.                                                                                                                                                                                                                                               |
| `initialFocus`    | `SignalOrReadonlySignal<HTMLElement \| undefined \| null> \| QRL<() => HTMLElement \| undefined \| null> \| QRL<() => Promise<HTMLElement \| undefined \| null>>` | `-`     | Specifies the element that should receive focus when the focus trap is activated. This can be a `Signal` that resolves to an element, or a `QRL` function that returns an element (or a `Promise` resolving to one). If the provided `initialFocus` is not a tabbable element, or if not provided, the first tabbable element within the `element` will be focused. If the `element` itself does not contain any tabbable elements, focus will then fall back to the `element` itself. |
| `finalFocus`      | `SignalOrReadonlySignal<HTMLElement \| undefined \| null> \| QRL<() => HTMLElement \| undefined \| null> \| QRL<() => Promise<HTMLElement \| undefined \| null>>` | `-`     | Specifies the element that should receive focus when the focus trap is deactivated. This can be a `Signal` resolving to an element, or a `QRL` function that returns an element (or a `Promise` resolving to one). If not provided or if the provided `finalFocus` is not a tabbable element, focus will attempt to return to the element that was focused before the trap was activated, or to `document.body` as a fallback.                                                         |
| `onInitialFocus$` | `QRL<() => void>`                                                                                                                                                 | `-`     | Optional `QRL` callback function invoked when the focus trap is successfully activated and the `initialFocus` (or the first tabbable element) has received focus. This can be used for side effects, like logging or setting internal state, after the trap's initial focus routine completes.                                                                                                                                                                                         |
| `onFinalFocus$`   | `QRL<() => void>`                                                                                                                                                 | `-`     | Optional `QRL` callback function invoked when the focus trap is successfully deactivated and focus has been returned to the `finalFocus` or the previously focused element. This is useful for cleanup or state updates after the trap's deactivation routine finishes.                                                                                                                                                                                                                |

### Returns

The `useFocusTrap` hook returns an object containing the following properties:

| Property      | Type                      | Description                                                                                                                                                                                                                                     |
| :------------ | :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`      | `ReadonlySignal<boolean>` | A readonly signal whose value indicates whether the focus trap is currently active. When `true`, the trap is enabled and managing focus.                                                                                                        |
| `activate$`   | `QRL<() => void>`         | A `QRL` function to activate the focus trap. When called, it ensures that focus is contained within the element. It attempts to move focus to the `initialFocus` element (if specified), or to the first tabbable element within the container. |
| `deactivate$` | `QRL<() => void>`         | A `QRL` function to deactivate the focus trap. This will disable the trap's behavior and return focus to the `finalFocus` element (if specified) or to the element that had focus before the trap was activated.                                |

## Examples

The following examples illustrate the common use cases and demonstrate how to leverage the `useFocusTrap` hook to build accessible and interactive components. Each example is a complete code snippet that you can use as a reference.

### Looping

You can enable "looping" behavior for the focus trap by setting the `loop` property to `true` in the hook's parameters. When looping is active, if the user presses <kbd>Tab</kbd> from the last focusable element, focus will cycle back to the first. Similarly, if <kbd>Shift + Tab</kbd> is pressed from the first focusable element, focus will go to the last.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { useFocusTrap } from 'rilix-ui';

const Demo = component$(() => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);
  const { activate$, deactivate$ } = useFocusTrap({ element: elementRef, loop: true });

  return (
    <>
      <button type="button" onClick$={activate$}>
        Activate
      </button>

      <div ref={elementRef} style={{ border: '1px solid black' }}>
        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input</label>
        <input id="second-input" type="text" placeholder="Second input" />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <button type="button" onClick$={deactivate$}>
          Deactivate
        </button>
      </div>
    </>
  );
});
```

### Initial focus

The `initialFocus` property specifies which element should receive focus when the focus trap is activated. You can provide a `Signal` resolving to an element, or a `QRL` function that returns an element (or a `Promise` resolving to one). If the provided `initialFocus` isn't a tabbable element, or if the property isn't set, the first tabbable element within the `element` will be focused instead. If the `element` itself doesn't contain any tabbable elements, focus will then fall back to the `element` itself.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { useFocusTrap } from 'rilix-ui';

const Demo = component$(() => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);
  const initialFocusRef = useSignal<HTMLElement | undefined>(undefined);
  const { activate$, deactivate$ } = useFocusTrap({ element: elementRef, initialFocus: initialFocusRef });

  return (
    <>
      <button type="button" onClick$={activate$}>
        Activate
      </button>

      <div ref={elementRef} style={{ border: '1px solid black' }}>
        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input (initial focus element)</label>
        <input ref={initialFocusRef} id="second-input" type="text" placeholder="Second input (initial focus element)" />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <button type="button" onClick$={deactivate$}>
          Deactivate
        </button>
      </div>
    </>
  );
});
```

### Final focus

The `finalFocus` property defines which element should receive focus when the focus trap is deactivated. This can be a `Signal` resolving to an element, or a `QRL` function that returns an element (or a `Promise` resolving to one). If `finalFocus` is not provided or if the provided element isn't tabbable, focus will by default attempt to return to the element that was focused before the trap was activated, falling back to `document.body` if necessary.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { useFocusTrap } from 'rilix-ui';

const Demo = component$(() => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);
  const finalFocusRef = useSignal<HTMLElement | undefined>(undefined);
  const { activate$, deactivate$ } = useFocusTrap({ element: elementRef, finalFocus: finalFocusRef });

  return (
    <>
      <button type="button" onClick$={activate$}>
        Activate
      </button>

      <button ref={finalFocusRef} type="button">
        Button (final focus element)
      </button>

      <div ref={elementRef} style={{ border: '1px solid black' }}>
        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input</label>
        <input id="second-input" type="text" placeholder="Second input" />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <button type="button" onClick$={deactivate$}>
          Deactivate
        </button>
      </div>
    </>
  );
});
```
