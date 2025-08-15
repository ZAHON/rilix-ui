# useBoolean

Custom hook that handles boolean state with useful utility functions.

## Import

```tsx
import { useBoolean } from 'rilix-ui';
```

## Usage

The `useBoolean` hook provides a simple yet powerful way to manage boolean state within your Qwik components. It's designed to simplify common UI patterns where a component's state can be either `true` or `false`, such as controlling visibility of an element, managing a toggle, or handling a loading state.

The hook takes an optional `initialState` parameter to set the starting value of the state. By default, this value is `false`.

```tsx
import { component$, $ } from '@builder.io/qwik';
import { useBoolean } from 'rilix-ui';

const Demo = component$(() => {
  const { state, setTrue$, setFalse$, toggle$ } = useBoolean();

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

This section provides a detailed overview of the `useBoolean` hook's API, including its optional configuration parameter and the properties it returns.

### Parameters

The `useBoolean` hook accepts a single, optional boolean parameter:

| Param          | Type      | Default | Description                              |
| :------------- | :-------- | :------ | :--------------------------------------- |
| `initialState` | `boolean` | `false` | The initial value for the boolean state. |

### Returns

The `useBoolean` hook returns an object containing the following properties:

| Property    | Type                      | Description                                                        |
| :---------- | :------------------------ | :----------------------------------------------------------------- |
| `state`     | `ReadonlySignal<boolean>` | A readonly signal whose value indicates the current boolean state. |
| `setTrue$`  | `QRL<() => void>`         | A `QRL` function to set the boolean state to `true`.               |
| `setFalse$` | `QRL<() => void>`         | A `QRL` function to set the boolean state to `false`.              |
| `toggle$`   | `QRL<() => void>`         | A `QRL` function to toggle the boolean `state`.                    |
