# composeRefs

A utility function that allows assigning a single DOM element to multiple refs.

## Import

```tsx
import { composeRefs } from 'rilix-ui';
```

## Usage

You can use `composeRefs` when you need to assign a DOM node to multiple refs — for example, when combining a parent-provided `ref` with a local one. This is especially useful in components that forward refs or need to access the same element from multiple places.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { composeRefs } from 'rilix-ui';

const Demo = component$<PropsOf<'div'>>((props) => {
  const { ref, ...others } = props;

  const localRef = useSignal<HTMLElement | undefined>(undefined);

  return <div ref={composeRefs([ref, localRef])} {...others} />;
});
```

## API reference

### Parameters

The `composeRefs` function accepts a single, **required** parameter named `refs`.

| Param   | Type               | Default | Description                                                                                                                                                      |
| ------- | ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refs*` | `PossibleRef<T>[]` | `-`     | An array of refs that can be either signals, callback refs, or undefined. Each ref will be assigned the provided DOM node when the returned function is invoked. |

### Returns

| Type                     | Description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| `QRL<(node: T) => void>` | A function that accepts a DOM node and assigns it to each provided ref. |
