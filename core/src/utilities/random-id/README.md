# randomId

A utility function that generates a unique identifier with an optional prefix.

## Usage

Utility function `randomId` that generates a random id with prefix. This function is usually used to generates a random id to bind input elements to labels.

```tsx
import { component$, useConstant } from '@builder.io/qwik';
import { randomId } from 'rilix-ui';

const Demo = component$(() => {
  const { uuid } = useConstant(randomId());

  return (
    <>
      <label for={uuid}>Input label</label>
      <input type="text" id={uuid} />
    </>
  );
});
```

## API reference

### Parameters

| Prop     | Type     | Default     | Description                                                                   |
| -------- | -------- | ----------- | ----------------------------------------------------------------------------- |
| `prefix` | `string` | `rilix-ui-` | An optional prefix that will be prepended to the generated unique identifier. |

### Returns

| Prop   | Type     | Description          |
| ------ | -------- | -------------------- |
| `uuid` | `string` | A unique identifier. |

## Examples

### Custom prefix

You can add your own prefix to be used in the generated id. To do this, use `prefix` prop.

```tsx
import { component$, useConstant } from '@builder.io/qwik';
import { randomId } from 'rilix-ui';

const Demo = component$(() => {
  const { uuid } = useConstant(randomId({ prefix: 'my-prefix-' }));

  return (
    <>
      <label for={uuid}>Input label</label>
      <input type="text" id={uuid} />
    </>
  );
});
```
