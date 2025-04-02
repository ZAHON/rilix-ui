# useUncontrolled

Manage state of both controlled and uncontrolled components.

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
      <input
        type="text"
        value={state.value}
        onInput$={(event: Event, currentTarget: HTMLInputElement) => setState$(currentTarget.value)}
      />

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

| Prop                | Type                                   | Default | Description                                                                             |
| ------------------- | -------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| `uncontrolledValue` | `T \| undefined`                       | `-`     | Initial value for uncontrolled state. Use when you do not need to control the state     |
| `controlledSignal`  | `Signal<T> \| undefined`               | `-`     | The controlled signal. Must be used in conjunction with `onChange$.                     |
| `finalValue`        | `T`                                    | `-`     | Final value for state when `uncontrolledValue` and `controlledSignal` are not provided. |
| `onChange$`         | `QRL<(value: T) => void> \| undefined` | `-`     | Controlled state handler.                                                               |

### Returns

| Prop         | Type                      | Description                                                      |
| ------------ | ------------------------- | ---------------------------------------------------------------- |
| `state`      | `ReadonlySignal<T>`       | The current value.                                               |
| `setState$`  | `QRL<(value: T) => void>` | Function that allow change value.                                |
| `controlled` | `boolean`                 | The value that indicates if state is controlled or uncontrolled. |
