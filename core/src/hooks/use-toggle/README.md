# useToggle

An intuitive hook to manage cyclical state transitions, allowing you to define and switch between any sequence of values with ease.

## Import

```tsx
import { useToggle } from 'rilix-ui';
```

## Usage

The `useToggle` hook manages a cyclical state across a custom array of values. It provides the `toggle$` method to effortlessly cycle through a predefined sequence and the `set$` method to directly set the current value

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

      <button type="button" onClick$={toggle$}>
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

### Parameters

The `useToggle` hook accepts a **single, optional parameter** called `options`. This parameter is an array of values that the hook will cycle through, and its first element will be the initial value.

| Param     | Type           | Default         | Description                                                                                                     |
| :-------- | :------------- | :-------------- | :-------------------------------------------------------------------------------------------------------------- |
| `options` | `readonly T[]` | `[false, true]` | An array of values that the hook will cycle through. The first element in this array will be the initial value. |

### Returns

The `useToggle` hook returns an **object** containing the following properties:

| Property  | Type                         | Description                                                                                                                                                                                                                                                      |
| :-------- | :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`   | `ReadonlySignal<T[]>`        | A `ReadonlySignal` containing the current active value from the `options` array. This signal is read-only, meaning its value can only be changed by calling `toggle$` or `set$`.                                                                                 |
| `toggle$` | `QRL<() => void>`            | A function that, when called, advances the `value` to the next item in the `options` array. If the current value is the last one in the array, it cycles back to the first item.                                                                                 |
| `set$`    | `QRL<(newValue: T) => void>` | A function that takes a `newValue` as an argument. It sets the `value` directly to this `newValue`, but only if `newValue` is present in the `options` array provided to the hook. If `newValue` is not one of the valid options, the `value` remains unchanged. |

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
