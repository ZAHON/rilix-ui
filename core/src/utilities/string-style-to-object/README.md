# stringStyleToObject

Converts inline CSS style string into a key-value object format.

## Import

```tsx
import { stringStyleToObject } from 'rilix-ui';
```

## Usage

The `stringStyleToObject` function converts an inline CSS style string into a object where CSS property names become keys and their values become the corresponding object values.

```tsx
import { component$, useSignal, useComputed$ } from '@builder.io/qwik';
import { stringStyleToObject } from 'rilix-ui';

const Demo = component$(() => {
  const input = useSignal('color: #C0FFEE; background-color: #BADA55;');
  const output = useComputed$(() => stringStyleToObject(input.value));

  return (
    <>
      <label for="input">Input</label>
      <input
        id="input"
        type="text"
        value={input.value}
        onInput$={(_, currentTarget) => (input.value = currentTarget.value)}
      />

      <p>Output</p>
      <pre>
        <code>{JSON.stringify(output.value, null, 2)}</code>
      </pre>
    </>
  );
});
```

## API reference

### Parameters

The `stringStyleToObject` function accepts a single **required** parameter: `style`.

| Param    | Type     | Default | Description                            |
| :------- | :------- | :------ | :------------------------------------- |
| `style*` | `string` | `-`     | A string containing inline CSS styles. |

### Returns

The `stringStyleToObject` function returns an object representing the parsed CSS styles from the input string.

| Type            | Description                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------- |
| `CSSProperties` | An object where keys are CSS property names and values are their corresponding style values. |
