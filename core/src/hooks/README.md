# Hooks

Hooks are special functions that let you reuse and share stateful logic across your Qwik apps. They're a powerful way to manage complex component behaviors, simplify common patterns, and keep your code tidy. **Rilix UI** offers essential hooks to make your development smoother and your projects easier to maintain.

## State management

These hooks provide effective solutions for managing your component's internal data. They offer robust and easy-to-use tools to keep your application's state consistent and predictable.

| Hook                                                                                             | Description                                                                                                                         |
| :----------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [`useBoolean`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-boolean)           | Custom hook that handles boolean state with useful utility functions.                                                               |
| [`useCounter`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-counter)           | A hook for managing a numeric counter with customizable minimum and maximum bounds.                                                 |
| [`usePrevious`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-previous)         | Tracks and returns the previous value of a given signal.                                                                            |
| [`useToggle`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-toggle)             | An intuitive hook to manage cyclical state transitions, allowing you to define and switch between any sequence of values with ease. |
| [`useUncontrolled`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-uncontrolled) | A hook for managing both controlled and uncontrolled state in a component.                                                          |

## UI and DOM

These hooks offer solutions for managing UI interactions and DOM manipulation, providing tools to create more interactive and accessible components.

| Hook                                                                                                    | Description                                                                                                               |
| :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| [`useArrowNavigation`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-arrow-navigation) | A hook for enabling keyboard arrow navigation between focusable items within a specified element.                         |
| [`useBodyScrollLock`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-body-scroll-lock)  | A hook to enable and disable `<body>` element scrolling, preventing the content behind a modal or overlay from scrolling. |
