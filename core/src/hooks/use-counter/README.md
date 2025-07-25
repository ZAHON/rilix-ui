# useCounter

A hook for managing a numeric counter with customizable minimum and maximum bounds.

## Import

```tsx
import { useCounter } from 'rilix-ui';
```

## Usage

The `useCounter` hook manages a numeric state, providing methods to increment, decrement, set, and reset its value. You can define an `initialValue`, set `min` and `max` bounds.

```tsx
import { component$, $ } from '@builder.io/qwik';
import { useCounter } from 'rilix-ui';

const Demo = component$(() => {
  const { count, increment$, decrement$, set$, reset$ } = useCounter();

  return (
    <>
      <p>Count: {count.value}</p>
      <button type="button" onClick$={increment$}>
        Increment
      </button>
      <button type="button" onClick$={decrement$}>
        Decrement
      </button>
      <button type="button" onClick$={() => set$(5)}>
        Set 5
      </button>
      <button type="button" onClick$={reset$}>
        Reset
      </button>
    </>
  );
});
```

## API reference

### Parameters

The `useCounter` hook accepts a **single, optional object** as its parameter, with the following properties:

| Property       | Type     | Default     | Description                                                                                                               |
| :------------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------ |
| `initialValue` | `number` | `0`         | The initial numeric value for the counter. The counter's value will be clamped between `min` and `max` at initialization. |
| `step`         | `number` | `1`         | The amount by which the counter's value will be incremented or decremented.                                               |
| `min`          | `number` | `-Infinity` | The minimum allowed value for the counter.The counter's value will not go below this number.                              |
| `max`          | `number` | `Infinity`  | The maximum allowed value for the counter. The counter's value will not exceed this number.                               |

### Returns

The `useCounter` hook returns an **object** containing the following properties:

| Property     | Type                           | Description                                                                                                          |
| :----------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| `count`      | `ReadonlySignal<number>`       | A readonly signal containing the current value of the counter. Its value is always clamped between `min` and `max`.  |
| `increment$` | `QRL<() => void>`              | A function to increment the counter's value by the specified `step`. The value will not exceed `max`.                |
| `decrement$` | `QRL<() => void>`              | A function to decrement the counter's value by the specified `step`. The value will not go below `min`.              |
| `set$`       | `QRL<(value: number) => void>` | A function to set the counter to a specific `value`. The provided `value` will be clamped between `min` and `max`.   |
| `reset$`     | `QRL<() => void>`              | A function to reset the counter to its `initialValue`. The `initialValue` itself is clamped between `min` and `max`. |
