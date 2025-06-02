# useId

Generates a unique identifier with an optional prefix, supporting custom id overrides.

## Import

```tsx
import { useId } from 'rilix-ui';
```

## Usage

`useId` hook generates a unique identifier that persists across renders. The hook is usually used to bind input elements to labels. If a custom `id` is provided, it will be used instead of generating one.

```tsx
import { component$ } from '@builder.io/qwik';
import { useId } from 'rilix-ui';

interface InputProps {
  /**
   * A unique id of the input.
   */
  id?: string;
}

const Input = component$<InputProps>((props) => {
  const { id } = props;

  const uuid = useId({ id });

  return (
    <>
      <label for={uuid}>Input label</label>
      <input type="text" id={uuid} />
    </>
  );
});

const Demo = component$(() => {
  return (
    <>
      {/* Input and label will have unique id. */}
      <Input />

      {/* Input and label will have id "my-id". */}
      <Input id="my-id" />
    </>
  );
});
```

## API reference

### Parameters

The `useId` hook accepts an **optional** object as its single parameter, with the following properties:

| Property | Type     | Default       | Description                                                                                          |
| :------- | :------- | :------------ | :--------------------------------------------------------------------------------------------------- |
| `id`     | `string` | `-`           | An optional custom id. If provided, the hook will return this id as-is without generating a new one. |
| `prefix` | `string` | `"rilix-ui-"` | An optional prefix to prepend to the automatically generated id.                                     |

### Returns

The `useId` hook returns a string that serves as the unique identifier.

| Type     | Description                                                                                                             |
| :------- | :---------------------------------------------------------------------------------------------------------------------- |
| `string` | A unique id. Either the custom `id` provided via parameters, or an auto-generated one prefixed with the given `prefix`. |
