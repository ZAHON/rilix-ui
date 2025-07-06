# getScrollDimensions

Retrieves various scroll-related dimensions for a given HTML element along a specified axis.

## Import

```tsx
import { getScrollDimensions } from 'rilix-ui';
```

## Usage

The `getScrollDimensions` function provides a straightforward way to obtain crucial scroll-related metrics for any HTML element. By specifying an `element` and an `axis` (`"x"` for horizontal or `"y"` for vertical), you can retrieve its client size (the visible portion of the element), its scroll offset (how far it's currently scrolled from its origin), and its scroll size (the total scrollable content dimension). This makes it ideal for tasks like implementing custom scrollbars, infinite scrolling, or checking scroll boundaries. This function is designed for client-side use only.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { getScrollDimensions } from 'rilix-ui';

const Demo = component$(() => {
  const xDimensions = useSignal<ReturnType<typeof getScrollDimensions> | undefined>(undefined);
  const yDimensions = useSignal<ReturnType<typeof getScrollDimensions> | undefined>(undefined);

  const handleScroll$ = $((event: Event, currentTarget: HTMLElement) => {
    xDimensions.value = getScrollDimensions({ element: currentTarget, axis: 'x' });
    yDimensions.value = getScrollDimensions({ element: currentTarget, axis: 'y' });
  });

  return (
    <>
      <div onScroll$={handleScroll$} style={{ height: '200px', width: '200px', overflow: 'auto' }}>
        <div style={{ height: 'calc(100% + 1000px)', width: 'calc(100% + 1000px)' }} />
      </div>

      <h2>Current Scroll Dimensions:</h2>

      {!xDimensions.value && !yDimensions.value && <p class="text-gray-500">Loading scroll dimensions...</p>}

      {xDimensions.value && (
        <>
          <h3>X-Axis (horizontal):</h3>
          <p>Client size: {xDimensions.value.clientSize}px</p>
          <p>Scroll offset: {xDimensions.value.scrollOffset}px</p>
          <p>Scroll size: {xDimensions.value.scrollSize}px</p>
        </>
      )}

      {yDimensions.value && (
        <>
          <h3>Y-Axis (vertical):</h3>
          <p>Client size: {yDimensions.value.clientSize}px</p>
          <p>Scroll offset: {yDimensions.value.scrollOffset}px</p>
          <p>Scroll size: {yDimensions.value.scrollSize}px</p>
        </>
      )}
    </>
  );
});
```

## API reference

### Parameters

The `getScrollDimensions` utility accepts a single object parameter with the following required properties:

| Property   | Type          | Default | Description                                              |
| :--------- | :------------ | :------ | :------------------------------------------------------- |
| `element*` | `HTMLElement` | `-`     | The HTML element for which to get the scroll dimensions. |
| `axis*`    | `"x" \| "y"`  | `-`     | The axis along which to measure the scroll dimensions.   |

### Returns

The `getScrollDimensions` utility returns an object with the following properties, providing dimensions based on the specified `axis`:

| Property       | Type     | Description                                                                                          |
| :------------- | :------- | :--------------------------------------------------------------------------------------------------- |
| `clientSize`   | `number` | The inner width or height of the element in pixels, including padding but not borders or scrollbars. |
| `scrollOffset` | `number` | The number of pixels that the content of an element is scrolled from its top or left edge.           |
| `scrollSize`   | `number` | The entire scrollable width or height of an element in pixels (the total content dimension).         |
