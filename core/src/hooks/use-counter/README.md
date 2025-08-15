# useCounter

A hook for managing a numeric counter with customizable minimum and maximum bounds.

## Import

```tsx
import { useCounter } from 'rilix-ui';
```

## Usage

The `useCounter` hook simplifies managing a numeric state, providing a robust solution for use cases such as quantity selectors, sliders, or pagination controls. It offers a clean and declarative way to handle a number that needs to stay within specific boundaries.

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

This section provides a detailed overview of the `useCounter` hook's API, including its optional configuration parameters and the properties it returns.

### Parameters

The `useCounter` hook accepts a single, optional object as its parameter, with the following properties:

| Property       | Type     | Default     | Description                                                                                                               |
| :------------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------ |
| `initialValue` | `number` | `0`         | The initial numeric value for the counter. The counter's value will be clamped between `min` and `max` at initialization. |
| `step`         | `number` | `1`         | The amount by which the counter's value will be incremented or decremented.                                               |
| `min`          | `number` | `-Infinity` | The minimum allowed value for the counter.The counter's value will not go below this number.                              |
| `max`          | `number` | `Infinity`  | The maximum allowed value for the counter. The counter's value will not exceed this number.                               |

### Returns

The `useCounter` hook returns an object containing the following properties:

| Property     | Type                           | Description                                                                                                                    |
| :----------- | :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `count`      | `ReadonlySignal<number>`       | A readonly signal whose value indicates the current state of the counter. Its value is always clamped between `min` and `max`. |
| `increment$` | `QRL<() => void>`              | A `QRL` function to increment the counter's value by the specified `step`.                                                     |
| `decrement$` | `QRL<() => void>`              | A `QRL` function to decrement the counter's value by the specified `step`.                                                     |
| `set$`       | `QRL<(value: number) => void>` | A `QRL` function to set the counter to a specific `value`. The provided `value` will be clamped between `min` and `max`.       |
| `reset$`     | `QRL<() => void>`              | A `QRL` function to reset the counter to its `initialValue`. The `initialValue` itself is clamped between `min` and `max`.     |
