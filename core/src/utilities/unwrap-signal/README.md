# unwrapSignal

Unwraps a signal, returning its current value. If the provided value is not a signal, it is returned as is.

## Import

```tsx
import { unwrapSignal } from 'rilix-ui';
```

## Usage

The `unwrapSignal` utility streamlines handling values that can be either plain data types (like strings or numbers) or Qwik `Signal` objects. It eliminates the need for manual checks (`isSignal`) by consistently returning the underlying value: if you pass a Qwik Signal, it returns its current `.value`; otherwise, it returns the value as is. This ensures your code always accesses the data directly, simplifying logic and improving readability.

```tsx
import type { Signal } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { unwrapSignal } from 'rilix-ui';

interface MessageDisplayProps {
  /**
   * The message to be displayed.
   * It can be a plain string or a signal holding a string value.
   */
  message: string | Signal<string>;
}

const MessageDisplay = component$<MessageDisplayProps>((props) => {
  const { message } = props;

  // We use unwrapSignal to always get the current value of the message.
  // If `message` is a signal, `currentMessage` will be its value.
  // If `message` is a plain string, `currentMessage` will be that string.
  const currentMessage = unwrapSignal(message);

  return (
    <>
      <h3>Displayed Message:</h3>
      <p>{currentMessage}</p>
    </>
  );
});

const Demo = component$(() => {
  const staticMessage = 'This is a static welcome message.';
  const dynamicMessage = useSignal('This message can be changed.');

  return (
    <>
      <h2>Static Message:</h2>
      <MessageDisplay message={staticMessage} />

      <hr />

      <h2>Dynamic Message:</h2>
      <MessageDisplay message={dynamicMessage} />
      <button type="button" onClick$={() => (dynamicMessage.value = `${crypto.randomUUID()}`)}>
        Update Message
      </button>
    </>
  );
});
```

## API reference

### Parameters

The `unwrapSignal` utility function accepts one required parameter, named maybeSignal.

| Param          | Type                                  | Default | Description                                                                                                                                                                                   |
| :------------- | :------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maybeSignal*` | `T \| Signal<T> \| ReadonlySignal<T>` | `-`     | The value to unwrap. This can be a direct value of type `T`, a writable Qwik `Signal<T>`, or a read-only Qwik `ReadonlySignal<T>`. The function will return the underlying value of type `T`. |

### Returns

The `unwrapSignal` utility function returns the unwrapped value. This is the direct data type (e.g., string, number, object) that was either originally passed or extracted from the signal's `.value` property.

| Type | Description                                                                                                               |
| :--- | :------------------------------------------------------------------------------------------------------------------------ |
| `T`  | The unwrapped value. This is the raw value contained within the signal, or the input value itself if it was not a signal. |
