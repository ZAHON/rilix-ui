# combineStyle

Combines two style values, whether inline CSS strings or style objects, into one.

## Import

```tsx
import { combineStyle } from 'rilix-ui';
```

## Usage

The `combineStyle` function merges two inline CSS styles (objects or strings). If both are strings, it returns them joined by `;`. If one is a string and the other an object, the string is converted to an object before merging (second input's properties take precedence). `undefined` inputs are treated as empty styles. The output is a single merged CSS object or, if both inputs were strings, a string, ready for the style attribute.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, useComputed$ } from '@builder.io/qwik';
import { combineStyle } from 'rilix-ui';

const Demo = component$<PropsOf<'div'>>((props) => {
  const { style, ...others } = props;

  const combinedStyle = useComputed$(() =>
    combineStyle(
      {
        height: '100px',
        width: '100px',
        backgroundColor: 'purple',
      },
      style
    )
  );

  return <div style={combinedStyle.value} {...others} />;
});
```

## API reference

### Parameters

The `combineStyle` function accepts two **required** parameters: `style1` and `style2`:

| Param     | Type                                   | Default | Description                                             |
| --------- | -------------------------------------- | ------- | ------------------------------------------------------- |
| `style1*` | `string \| CSSProperties \| undefined` | `-`     | The first set of inline CSS styles (string or object).  |
| `style2*` | `string \| CSSProperties \| undefined` | `-`     | The second set of inline CSS styles (string or object). |

### Returns

| Type            | Description                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CSSProperties` | A new object containing the merged CSS styles. If both `style1` and `style2` are strings, it returns a single string with the styles concatenated using a semicolon. In cases where one is an object and the other a string, the string is converted to an object and then merged. If one or both inputs are `undefined`, they are treated as empty styles for the merging process. |
