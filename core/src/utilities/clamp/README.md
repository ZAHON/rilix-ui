# clamp

Clamps a given number to a specified range, ensuring it does not exceed the minimum or maximum bounds.

## Import

```tsx
import { clamp } from 'rilix-ui';
```

## Usage

The `clamp` utility function ensures a numeric value stays within a specified minimum and maximum range. This is vital for maintaining data integrity and preventing unexpected behavior from dynamic numbers.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { clamp } from 'rilix-ui';

const Demo = component$(() => {
  const count = useSignal(5);

  const MIN_COUNT = 0;
  const MAX_COUNT = 10;

  const decrement$ = $(() => {
    count.value = clamp({ value: count.value - 1, min: MIN_COUNT, max: MAX_COUNT });
  });

  const increment$ = $(() => {
    count.value = clamp({ value: count.value + 1, min: MIN_COUNT, max: MAX_COUNT });
  });

  return (
    <>
      <p>Limited Counter</p>
      <p>Current value: {count.value}</p>
      <button type="button" onClick$={decrement$}>
        - Decrease
      </button>
      <button type="button" onClick$={increment$}>
        + Increase
      </button>
    </>
  );
});
```

## API reference

### Parameters

The `clamp` function accepts a **single, required object** as its parameter, with all of the following required properties:

| Property | Type     | Default | Description                                                                                   |
| :------- | :------- | :------ | :-------------------------------------------------------------------------------------------- |
| `value*` | `number` | `-`     | The number to be clamped. This is the value you want to ensure stays within a specific range. |
| `min*`   | `number` | `-`     | The lower bound of the clamping range. The `value` will not be less than this.                |
| `max*`   | `number` | `-`     | The upper bound of the clamping range. The `value` will not be greater than this.             |

### Returns

The `clamp` function returns a single numeric value that has been adjusted to fit within the specified `min` and `max` bounds.

| Type     | Description                                                                                                                                                                                                          |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | The clamped value, which will be `min` if the original `value` is less than `min`, `max` if the original `value` is greater than `max`, or the original `value` itself if it falls within the `min` and `max` range. |
