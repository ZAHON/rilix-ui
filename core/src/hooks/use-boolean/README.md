# useBoolean

Custom hook that handles boolean state with useful utility functions.

## Import

```tsx
import { useBoolean } from 'rilix-ui';
```

## Usage

`useBoolean` hook manages boolean state. It provides `setTrue$`, `setFalse$` and `toggle$` handlers and accepts optional `onStateChange$` callback.

```tsx
import { component$, $ } from '@builder.io/qwik';
import { useBoolean } from 'rilix-ui';

const Demo = component$(() => {
  const { state, setTrue$, setFalse$, toggle$ } = useBoolean({
    initialState: false,
    onStateChange$: $((state) => console.log(`State is: ${state}`)),
  });

  return (
    <>
      <p>
        State is: <code>{state.value ? 'true' : 'false'}</code>
      </p>

      <button onClick$={setTrue$}>Set true</button>
      <button onClick$={setFalse$}>Set false</button>
      <button onClick$={toggle$}>Toggle</button>
    </>
  );
});
```

## API reference

### Parameters

The `useBoolean` hook accepts a single parameter, which is an **object** with the following properties:

| Param            | Type                            | Default | Description                                                             |
| ---------------- | ------------------------------- | ------- | ----------------------------------------------------------------------- |
| `initialState`   | `boolean`                       | `false` | The initial value for the boolean state.                                |
| `onStateChange$` | `QRL<(state: boolean) => void>` | `-`     | Optional callback that is triggered whenever the boolean state changes. |

### Returns

The `useBoolean` hook returns an **object** containing the following properties:

| Param       | Type                      | Description                                             |
| ----------- | ------------------------- | ------------------------------------------------------- |
| `state`     | `ReadonlySignal<boolean>` | A readonly signal containing the current boolean value. |
| `setTrue$`  | `QRL<() => void>`         | Function to set the boolean state to `true`.            |
| `setFalse$` | `QRL<() => void>`         | Function to set the boolean state to `false`.           |
| `toggle$`   | `QRL<() => void>`         | Function to toggle the boolean `state`.                 |
