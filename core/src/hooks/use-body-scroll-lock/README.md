# useBodyScrollLock

A hook to enable and disable `<body>` element scrolling, preventing the content behind a modal or overlay from scrolling.

## Import

```tsx
import { useBodyScrollLock } from 'rilix-ui';
```

## Usage

This hook provides `QRL` functions to control scrolling on the `<body>` element. Use the `disable$` function to prevent the background content from scrolling when components like modals or overlays are active. The `enable$` function restores normal scrolling behavior on the `<body>` element. If needed, the `clearAll$` function can be used to forcefully remove any active scroll locks and restore scrolling immediately.

When scrolling is disabled, the `<body>` element receives a `--rilix-ui-body-scrollbar-width` CSS variable and a `data-rilix-ui-body-scroll-lock` attribute.

```ts
import { component$ } from '@builder.io/qwik';
import { useBodyScrollLock } from 'rilix-ui';

const Demo = component$(() => {
  const { disable$, enable$ } = useBodyScrollLock();

  return (
    <>
      <button type="button" onClick$={disable$}>
        Disable
      </button>
      <button type="button" onClick$={enable$}>
        Enable
      </button>
      <div style={{ height: '200vh' }} />
    </>
  );
});
```

## API reference

This section provides a detailed breakdown of the `useBodyScrollLock` hook's API.

### Parameters

The `useBodyScrollLock` hook does not accept any parameters.

### Returns

The `useBodyScrollLock` hook returns an object containing the following properties:

| Property    | Type              | Description                                                                                                                                                                                             |
| :---------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `disable$`  | `QRL<() => void>` | A `QRL` function that disables scrolling on the `<body>` element. This function safely handles requests from multiple components to ensure the scroll lock is applied correctly across the application. |
| `enable$`   | `QRL<() => void>` | A `QRL` function that enables scrolling on the `<body>` element. Scrolling is re-enabled only after all components that requested a scroll lock have released it.                                       |
| `clearAll$` | `QRL<() => void>` | A `QRL` function that immediately clears any active scroll locks and restores scrolling on the `<body>` element.                                                                                        |
