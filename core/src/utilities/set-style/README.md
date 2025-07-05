# setStyle

Applies a set of inline CSS styles to an HTML element and returns a function to revert them. This utility allows for easy application and removal of temporary inline styles.

## Import

```tsx
import { setStyle } from 'rilix-ui';
```

## Usage

The `setStyle` utility is a powerful tool for dynamically applying CSS styles to any HTML element and easily reverting them to their original state. It instantly applies the given styles and returns a function that, when called, precisely removes those applied styles, restoring any overwritten originals.

```tsx
import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { setStyle } from 'rilix-ui';

const Demo = component$(() => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);
  const isStyleApplied = useSignal(false);

  useTask$(({ track, cleanup }) => {
    track(() => isStyleApplied.value);

    if (isBrowser && elementRef.value && isStyleApplied.value) {
      const revertStyle = setStyle({ element: elementRef.value, style: { backgroundColor: 'purple' } });

      cleanup(() => {
        revertStyle();
      });
    }
  });

  return (
    <>
      <div ref={elementRef} style={{ height: '100px', width: '100px', backgroundColor: 'black' }} />
      <button type="button" onClick$={() => (isStyleApplied.value = true)}>
        Set style
      </button>
      <button type="button" onClick$={() => (isStyleApplied.value = false)}>
        Revert style
      </button>
    </>
  );
});
```

## API reference

### Parameters

The `setStyle` utility accepts a single object parameter with the following required properties:

| Property   | Type                           | Default | Description                                                                            |
| :--------- | :----------------------------- | :------ | :------------------------------------------------------------------------------------- |
| `element*` | `HTMLElement`                  | `-`     | The HTML element to which the styles will be applied.                                  |
| `style*`   | `Partial<CSSStyleDeclaration>` | `-`     | An object containing the CSS properties and their values to be applied to the element. |

### Returns

The `setStyle` utility returns a function that, when called, reverts the element's styles to their original state. This also removes the `style` attribute if no inline styles remain.

| Type         | Description                                                                                                                                                                                                     |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `() => void` | A revert function that, when executed, undoes all styles previously applied by this specific `setStyle` call. It restores the element's inline styles to their exact state before `setStyle` was first invoked. |
