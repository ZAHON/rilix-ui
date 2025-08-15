# useArrowNavigation

A hook for enabling keyboard arrow navigation between focusable items within a specified element.

## Import

```tsx
import { useArrowNavigation } from 'rilix-ui';
```

## Usage

The `useArrowNavigation` hook lets you easily implement keyboard navigation using <kbd>←</kbd>, <kbd>→</kbd>, <kbd>↑</kbd>, <kbd>↓</kbd>, <kbd>Home</kbd>, and <kbd>End</kbd> keys within any HTML element. To use it, you need to provide a reference to the `element` where the navigation should operate, and an `itemSelectors` string that identifies the navigable items within that container.

To enable the navigation, you must call the `activate$` function returned by the hook. This design choice gives you full control over exactly when and how the navigation is activated and deactivated. When activated, the container `element` automatically receives the `data-rilix-ui-arrow-navigation` attribute, which is removed upon deactivation.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { useArrowNavigation } from 'rilix-ui';

const Demo = component$(() => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);

  const { activate$ } = useArrowNavigation({
    element: elementRef,
    itemSelectors: '[data-item]',
  });

  return (
    <div ref={elementRef} onFocusIn$={activate$}>
      <button type="button" data-item>
        Item 1
      </button>
      <button type="button" data-item>
        Item 2
      </button>
      <button type="button" data-item>
        Item 3
      </button>
    </div>
  );
});
```

## API reference

This section provides a detailed breakdown of the `useArrowNavigation` hook's API, including its parameters and what it returns.

### Parameters

The `useArrowNavigation` hook accepts an object as its parameter, with the following properties:

| Property         | Type                                                                               | Default        | Description                                                                                                                  |
| :--------------- | :--------------------------------------------------------------------------------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `element*`       | `SignalOrReadonlySignal<HTMLElement \| undefined \| null>`                         | `-`            | The container element within which arrow navigation will be active.                                                          |
| `itemSelectors*` | `string \| SignalOrReadonlySignal<string>`                                         | `-`            | CSS selector(s) used to identify the navigable items within the container element                                            |
| `preventScroll`  | `boolean \| SignalOrReadonlySignal<boolean>`                                       | `true`         | Determines whether the default scroll behavior should be prevented when navigating.                                          |
| `loop`           | `boolean \| SignalOrReadonlySignal<boolean>`                                       | `true`         | Determines whether navigation should loop from the last item to the first, and vice-versa.                                   |
| `dir`            | `"ltr" \| "rtl" \| SignalOrReadonlySignal<"ltr" \| "rtl">`                         | `"ltr"`        | Specifies the direction of navigation for `"horizontal"` orientation (`"ltr"` for left-to-right, `"rtl"` for right-to-left). |
| `orientation`    | `"horizontal" \| "vertical" \| SignalOrReadonlySignal<"horizontal" \| "vertical">` | `"horizontal"` | Specifies the orientation of arrow navigation.                                                                               |

### Returns

The `useArrowNavigation` hook returns an object containing the following properties:

| Property      | Type                      | Description                                                                                    |
| :------------ | :------------------------ | :--------------------------------------------------------------------------------------------- |
| `active`      | `ReadonlySignal<boolean>` | A readonly signal whose value indicates whether the arrow navigation is currently active.      |
| `activate$`   | `QRL<() => void>`         | A `QRL` function to activate the arrow navigation functionality, enabling keyboard control.    |
| `deactivate$` | `QRL<() => void>`         | A `QRL` function to deactivate the arrow navigation functionality, disabling keyboard control. |
