# setStyleProperty

This utility sets an inline CSS property on an HTML element and returns a function to revert it.

## Import

```tsx
import { setStyleProperty } from 'rilix-ui';
```

## Usage

The `setStyleProperty` utility function is designed to set a specific inline CSS property on an HTML element. It applies the given `value` to the specified `property` of the `element`. The function returns a cleanup function that can be called to revert the CSS property back to its original value and remove the `style` attribute if no other inline styles remain. This function is intended for client-side use only and will throw an error if executed on the server in development mode.

```tsx
import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { setStyleProperty } from 'rilix-ui';

const Demo = component$(() => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);
  const isStyleApplied = useSignal(false);

  useTask$(({ track, cleanup }) => {
    track(() => isStyleApplied.value);

    if (isBrowser && elementRef.value && isStyleApplied.value) {
      const revertStyleProperty = setStyleProperty({
        element: elementRef.value,
        property: '--background-color',
        value: 'purple',
      });

      cleanup(() => {
        revertStyleProperty();
      });
    }
  });

  return (
    <>
      <div
        ref={elementRef}
        style={{ height: '100px', width: '100px', backgroundColor: 'var(--background-color, black)' }}
      />
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

The `setStyleProperty` utility accepts a single object parameter with the following required properties:

| Property    | Type          | Default | Description                                                                                                                                           |
| :---------- | :------------ | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `element*`  | `HTMLElement` | `-`     | The HTML element on which the CSS property will be set.                                                                                               |
| `property*` | `string`      | `-`     | The name of the CSS property to be set. This should be a valid CSS property name, typically in kebab-case.                                            |
| `value*`    | `string`      | `-`     | The value to be assigned to the specified CSS property. This value must be a valid CSS value for the given property, including units where necessary. |

### Returns

The `setStyleProperty` utility returns a function that, when called, reverts the element's style to its original state. This also removes the `style` attribute if no inline styles remain.

| Type         | Description                                                                                                                                                                                                                                                               |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `() => void` | A revert function that, when executed, restores the specific CSS property set by `setStyleProperty` to its state before this call. If no other inline styles remain on the element after reverting this property, the `style` attribute will be removed from the element. |
