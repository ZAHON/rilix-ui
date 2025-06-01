# usePrevious

Tracks and returns the previous value of a given signal.

## Import

```tsx
import { usePrevious } from 'rilix-ui';
```

## Usage

This hook is useful when you need to compare the current state with its previous state.

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

### Parameters

| Param   | Type        | Default | Description                                        |
| ------- | ----------- | ------- | -------------------------------------------------- |
| `value` | `Signal<T>` | `-`     | The signal whose previous value should be tracked. |

### Returns

| Type                             | Description                                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ReadonlySignal<T \| undefined>` | A readonly signal containing the previous value of the provided signal. Initially, this signal has a value of `undefined` until the first change is detected. |
