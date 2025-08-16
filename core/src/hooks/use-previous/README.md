# usePrevious

Tracks and returns the previous value of a given signal.

## Import

```tsx
import { usePrevious } from 'rilix-ui';
```

## Usage

This hook is great for when you need to compare a signal's current value against its last one. It gives you a clean way to track changes and build logic based on past and present state.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { usePrevious } from 'rilix-ui';

const Demo = component$(() => {
  const currentValue = useSignal('');
  const previousValue = usePrevious(currentValue);

  return (
    <>
      <label for="input">Enter some text here</label>
      <input
        type="text"
        id="input"
        autocomplete="off"
        value={currentValue.value}
        onInput$={(event, currentTarget) => (currentValue.value = currentTarget.value)}
      />
      <p>Current value: {currentValue.value}</p>
      <p>Previous value: {previousValue.value}</p>
    </>
  );
});
```

## API reference

This section provides detailed information on the `usePrevious` hook's parameters and return value, helping you understand how to use it effectively.

### Parameters

The `usePrevious` hook accepts a single, required parameter named `value`, which should be the signal whose previous value you want to track:

| Param    | Type        | Default | Description                                        |
| :------- | :---------- | :------ | :------------------------------------------------- |
| `value*` | `Signal<T>` | `-`     | The signal whose previous value should be tracked. |

### Returns

The `usePrevious` hook returns a readonly signal that provides access to the previous value of the signal you're tracking.

| Type                             | Description                                                                                                                                  |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReadonlySignal<T \| undefined>` | A readonly signal whose value is the previous value of the tracked signal. Initially, it is `undefined` until the first value change occurs. |
