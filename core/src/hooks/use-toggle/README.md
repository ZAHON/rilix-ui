# useToggle

An intuitive hook to manage cyclical state transitions, allowing you to define and switch between any sequence of values with ease.

## Import

```tsx
import { useToggle } from 'rilix-ui';
```

## Usage

The `useToggle` hook helps you manage a state that cycles through a custom array of values. It's especially useful for implementing cyclical UI states, such as a theme switcher or a multi-step form. The hook gives you a `toggle$` method to effortlessly move to the next value in the sequence, and a `set$` method to jump directly to a specific value.

```tsx
import { component$ } from '@builder.io/qwik';
import { useToggle } from 'rilix-ui';

const Demo = component$(() => {
  const { value, toggle$, set$ } = useToggle(['blue', 'orange', 'cyan', 'teal'] as const);

  return (
    <>
      <p>
        Value: <code>{value.value}</code>
      </p>

      <button type="button" onClick$={toggle$} style={{ backgroundColor: value.value }}>
        Toggle
      </button>
      <button type="button" onClick$={() => set$('cyan')}>
        Set cyan
      </button>
    </>
  );
});
```

## API reference

This section provides a comprehensive breakdown of the `useToggle` hook's parameters and return values, including their types and detailed descriptions. Use this reference to understand how to correctly configure and interact with the hook.

### Parameters

The `useToggle` hook accepts a single, optional parameter called `options`. This array of values defines the sequence that the hook will cycle through. The first element of this array is also used as the initial value for the returned `value` readonly signal.

| Param     | Type           | Default         | Description                                                                                                                                      |
| :-------- | :------------- | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `options` | `readonly T[]` | `[false, true]` | An array of values that the hook will cycle through. The first element of this array is used to initialize the returned `value` readonly signal. |

### Returns

The `useToggle` hook returns an object containing the following properties:

| Property  | Type                         | Description                                                                                                                                                                                                                                             |
| :-------- | :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`   | `ReadonlySignal<T[]>`        | A readonly signal whose value represents the currently active option from the provided array. This signal is read-only, which means its value can only be changed by calling the `toggle$` or `set$` functions, ensuring predictable state transitions. |
| `toggle$` | `QRL<() => void>`            | A `QRL` function that advances the value to the next option in the sequence. Once the end of the `options` array is reached, it automatically cycles back to the first item, creating a loop.                                                           |
| `set$`    | `QRL<(newValue: T) => void>` | A `QRL` function that directly sets the `value` to a new option. This function includes a built-in validation check, and the value will only be updated if the `newValue` argument is present in the original `options` array provided to the hook.     |

## Type inference and assertions

By default, TypeScript infers a broad type for your `options` array. For stricter type safety and more precise autocompletion, it's highly recommended to use a `const` assertion (`as const`) or explicitly define the generic type `T`. This prevents type widening and ensures `value` is typed exactly to the literal values in your `options` array.

```tsx
// TypeScript infers 'string' for value, which is less specific.
useToggle(['light', 'dark']);

// Using 'as const' asserts a literal type, so value is inferred as 'dark' | 'light'.
useToggle(['light', 'dark'] as const);

// Explicitly defining the generic type achieves the same precise inference.
useToggle<'dark' | 'light'>(['light', 'dark']);
```
