# Changelog

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
