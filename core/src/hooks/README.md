# Hooks

Hooks are special functions that let you reuse and share stateful logic across your Qwik apps. They're a powerful way to manage complex component behaviors, simplify common patterns, and keep your code tidy. **Rilix UI** offers essential hooks to make your development smoother and your projects easier to maintain.

## State management

These hooks provide effective solutions for managing your component's internal data. They offer robust and easy-to-use tools to keep your application's state consistent and predictable.

| Hook              | Description                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `useBoolean`      | Custom hook that handles boolean state with useful utility functions. Check the full documentation [here](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-boolean).               |
| `useCounter`      | A hook for managing a numeric counter with customizable minimum and maximum bounds. Check the full documentation [here](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-counter). |
| `useId`           | Generates a unique identifier with an optional prefix, supporting custom id overrides. Check the full documentation [here](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-id).   |
| `usePrevious`     | Tracks and returns the previous value of a given signal. Check the full documentation [here](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-previous).                           |
| `useUncontrolled` | A hook for managing both controlled and uncontrolled state in a component. Check the full documentation [here](https://github.com/ZAHON/rilix-ui/tree/main/core/src/hooks/use-uncontrolled).     |
