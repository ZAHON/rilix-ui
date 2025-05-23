# Changelog

## 0.5.0 (24.05.2025)

### 🚀 Features

- Add the `AspectRatio` component that displays content within a desired ratio.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { AspectRatio } from 'rilix-ui';

  const AspectRatioDemo = component$(() => {
    return (
      <div style={{ width: '18.75rem', overflow: 'hidden' }}>
        <AspectRatio.Root ratio={16 / 9}>
          <AspectRatio.Content>
            <img
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              alt="Landscape photograph by Tobias Tullius"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </AspectRatio.Content>
        </AspectRatio.Root>
      </div>
    );
  });
  ```

- Add the `Alert` component to display a brief, important message in a way that attracts the user's attention without interrupting their task.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { Alert } from 'rilix-ui';

  const AlertDemo = component$(() => {
    return <Alert.Root>Access denied. Please contact the network administrator to view this page.</Alert.Root>;
  });
  ```

- Add the `Primitive` component, which offers base components that wrap standard HTML elements, providing their default behavior and props. These can be rendered using an alternative element type or your own component via the `as` prop, enabling flexible composition and overriding the underlying element.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { Primitive } from 'rilix-ui';

  const PrimitiveDemo = component$(() => {
    return (
      <>
        <Primitive.p>This is a paragraph element.</Primitive.p>
        <Primitive.div>This is a div element.</Primitive.div>
        <Primitive.span>This is a span element.</Primitive.span>
      </>
    );
  });
  ```

## 0.4.0 (15.05.2025)

### 🚀 Features

- Add `useBoolean` hook, a custom hook that handles boolean state with useful utility functions.

- Add `visuallyHiddenStyle` utility, a style object that allows to hide content from the screen in an accessible way.

- Add `stringStyleToObject` utility function which converts inline CSS style string into a key-value object format.

- Add `combineStyle` utility function to combine two style values, whether inline CSS strings or style objects, into one.

- Add `VisuallyHidden` component that allows to hide content from the screen in an accessible way.

- Enhance `style` prop handling in `Label.Root` component. The `style` prop now explicitly supports accepting both `string` and `CSSProperties` types. Previously, it only accepted `CSSProperties`.

### 🚨 Breaking Changes

- Remove `randomId` utility function.

- Change `useId` hook return type to `string`. The `useId` hook now returns the unique ID string directly. Previously, the hook returned an object with the ID nested under the `uuid` key. This change simplifies the consumption of the hook for users, allowing direct access to the ID string without destructuring.

- Change `usePrevious` hook return type to `ReadonlySignal`. The `usePrevious` hook now returns the `ReadonlySignal` containing the previous value directly. Previously, the hook returned an object with the previous value signal nested under the `previousValue` key. This change simplifies the consumption of the hook for users, allowing direct access to the signal without destructuring.

## 0.3.1 (06.04.2025)

🐞 Bug Fixes

- Fix runtime error in `useUncontrolled` hook. Previously, tthis hook performed a type check on `controlledSignal` using `isSignal` without ensuring it was defined. In development mode, this could result in a runtime error when `controlledSignal` was undefined.

## 0.3.0 (05.04.2025)

### 🚀 Features

- Add `useUncontrolled` hook.

- Add `randomId` utility function.

- Add `usePrevious` hook.

- Add `useId` hook.

- Add `composeRefs` utility function.

## 0.2.0 (02.04.2025)

### 🚀 Features

- Add `Label` component.

## 0.1.0 (02.04.2025)

- Initial release.
