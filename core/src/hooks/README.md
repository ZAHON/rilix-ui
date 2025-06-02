# Hooks

Hooks are special functions that let you reuse and share stateful logic across your Qwik apps. They're a powerful way to manage complex component behaviors, simplify common patterns, and keep your code tidy. **Rilix UI** offers essential hooks to make your development smoother and your projects easier to maintain.

## State management

These hooks provide effective solutions for managing your component's internal data. They offer robust and easy-to-use tools to keep your application's state consistent and predictable.

| Hook                                                                                             | Description                                                                            |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [`useBoolean`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-boolean)           | Custom hook that handles boolean state with useful utility functions.                  |
| [`useCounter`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-counter)           | A hook for managing a numeric counter with customizable minimum and maximum bounds.    |
| [`useId`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-id)                     | Generates a unique identifier with an optional prefix, supporting custom id overrides. |
| [`usePrevious`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-previous)         | Tracks and returns the previous value of a given signal.                               |
| [`useUncontrolled`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-uncontrolled) | A hook for managing both controlled and uncontrolled state in a component.             |
