# useUncontrolled

A hook for managing both controlled and uncontrolled state in a component.

## Import

```tsx
import { useUncontrolled } from 'rilix-ui';
```

## Usage

The `useUncontrolled` hook manages state for both controlled and uncontrolled components.

```tsx
import type { Signal, QRL } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { useUncontrolled } from 'rilix-ui';

interface CustomInputProps {
  /**
   * The default value of the custom input when initially rendered.
   * Use when you do not need to control its the value.
   */
  defaultValue?: string;

  /**
   * The controlled value of the custom input.
   * Must be used in conjunction with `onValueChange$`.
   */
  value?: Signal<string>;

  /**
   * Event handler called when the value of the custom input changes.
   */
  onValueChange$?: QRL<(value: string) => void>;
}

/**
 * This custom input can be controlled or uncontrolled.
 */
const CustomInput = component$<CustomInputProps>((props) => {
  const { defaultValue, value, onValueChange$ } = props;

  const { state, setState$, controlled } = useUncontrolled({
    uncontrolledValue: defaultValue,
    controlledSignal: value,
    finalValue: '',
    onChange$: onValueChange$,
  });

  return (
    <>
      <input type="text" value={state.value} onInput$={(event, currentTarget) => setState$(currentTarget.value)} />
      <p>
        Component is: <code>{controlled ? 'controlled' : 'uncontrolled'}</code>
      </p>
    </>
  );
});

const ControlledDemo = component$(() => {
  const controlledValue = useSignal('controlled');

  return (
    <>
      <p>Controlled value: {controlledValue.value}</p>
      <button type="button" onClick$={() => (controlledValue.value = crypto.randomUUID())}>
        Set random controlled value
      </button>
      <CustomInput value={controlledValue} onValueChange$={(value) => (controlledValue.value = value)} />
    </>
  );
});

const UncontrolledDemo = component$(() => {
  return <CustomInput defaultValue="uncontrolled" />;
});
```

## API reference

### Parameters

| Property            | Type                      | Default | Description                                                                                             |
| ------------------- | ------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `finalValue*`       | `T`                       | `-`     | A fallback value that is used when neither `uncontrolledValue` nor `controlledSignal` are set.          |
| `uncontrolledValue` | `T`                       | `-`     | Default value used when the state is uncontrolled. Ignored if `controlledSignal` is provided.           |
| `controlledSignal`  | `Signal<T>`               | `-`     | A reactive signal that fully controls the component's state. Requires `onChange$` to propagate updates. |
| `onChange$`         | `QRL<(value: T) => void>` | `-`     | Callback triggered when the state changes. Used to synchronize controlled state updates.                |

### Returns

| Property     | Type                      | Description                                                                                                                                                              |
| ------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `state`      | `ReadonlySignal<T>`       | A readonly signal representing the current state. If `controlledSignal` is provided, it reflects the controlled state; otherwise, it holds the internal unmanaged state. |
| `setState$`  | `QRL<(value: T) => void>` | Function to update the state. Calls `onChange$` when the state is controlled, or updates the internal state otherwise.                                                   |
| `controlled` | `boolean`                 | Indicates whether the state is controlled or uncontrolled.                                                                                                               |
