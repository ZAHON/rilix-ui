# Utilities

Utilities are specialized functions and objects crafted to handle specific, recurrent programming challenges. Within **Rilix UI**, these utilities provide streamlined solutions for various development needs, including numerical calculations, sophisticated style management, and precise interactions with the Document Object Model. Engineered for reusability, efficiency, and seamless integration, they empower you to develop cleaner, more organized, and easily maintainable applications.

## Numerical operations

These utilities provide convenient methods for handling and manipulating numeric values, ensuring data integrity and predictable behavior.

| Utility                                                                         | Description                                                                                            |
| :------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------- |
| [`clamp`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/clamp) | Clamps a given number to a specified range, ensuring it does not exceed the minimum or maximum bounds. |

## Reactive data

These utilities simplify interactions with Qwik's reactive system, providing straightforward ways to access and manage signal values.

| Utility                                                                                        | Description                                                                                                 |
| :--------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| [`unwrapSignal`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/unwrap-signal) | Unwraps a signal, returning its current value. If the provided value is not a signal, it is returned as is. |

## UI and DOM

These utilities provide foundational building blocks for effectively interacting with the user interface and the Document Object Model, covering aspects from managing element references to handling and combining styles for diverse rendering and presentation needs.

| Utility                                                                                                        | Description                                                                                  |
| :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| [`combineStyle`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/combine-style)                 | Combines two style values, whether inline CSS strings or style objects, into one.            |
| [`composeRefs`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/compose-refs)                   | A utility function that allows assigning a single DOM element to multiple refs.              |
| [`getScrollDimensions`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/get-scroll-dimensions)  | Retrieves various scroll-related dimensions for a given HTML element along a specified axis. |
| [`setStyle`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/set-style)                         | Applies a set of inline CSS styles to an HTML element and returns a function to revert them. |
| [`setStyleProperty`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/set-style-property)        | Sets an inline CSS property on an HTML element and returns a function to revert it.          |
| [`stringStyleToObject`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/string-style-to-object) | Converts inline CSS style string into a key-value object format.                             |
| [`visuallyHiddenStyle`](https://github.com/ZAHON/rilix-ui/tree/main/core/src/utilities/visually-hidden-style)  | Style object that allows to hides content from the screen in an accessible way.              |
