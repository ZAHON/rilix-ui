# Changelog

## 0.3.1 (06.04.2025)

🐞 Bug Fixes

- Fix runtime error in `useUncontrolled` hook. Previously, tthis hook performed a type check on `controlledSignal` using `isSignal` without ensuring it was defined. In development mode, this could result in a runtime error when `controlledSignal` was undefined.

## 0.3.0 (05.04.2025)

### 🚀 Features

- Add `useUncontrolled` hook.

- Add `usePrevious` hook.

- Add `composeRefs` utility function.

## 0.2.0 (02.04.2025)

### 🚀 Features

- Add `Label` component.

## 0.1.0 (02.04.2025)

- Initial release.
