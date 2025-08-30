# Changelog

## 0.10.0 (30.08.2025)

### 🚀 Features

- **Add `Dialog` component, a robust and accessible modal window solution.** This component is built on the native `<dialog>` element, which simplifies issues related to z-index and provides accessibility features like focus trapping and scroll locking. Its overlay is based on the Popover API, which provides better control over styling and animations.

- **Add `AlertDialog` component, a robust and accessible modal dialog.** This component is built on the native `<dialog>` element, which simplifies issues related to z-index and provides accessibility features like focus trapping and scroll locking. Its overlay is based on the Popover API for enhanced styling and animation control.

- **Add `useBodyScrollLock` hook for managing body scroll.** This hook provides a centralized and robust way to lock and unlock scrolling on the `<body>` element, which is essential for components like modals and overlays.

- **Add `useFocusTrap` hook for managing keyboard focus.** This hook is essential for accessibility, ensuring that user focus remains contained within a specific element (e.g., a modal or dialog) and can optionally be configured to loop through tabbable elements.

## 0.9.0 (16.08.2025)

### 🚨 Breaking Changes

- **Remove `data-scope` and `data-part` attributes from all components.** These attributes were removed to simplify the component structure and reduce unnecessary DOM output. This change may require updates to any custom styling or logic that relied on these attributes.

- **Remove the `aspect` property from the `state` object passed to the `render$` prop in the `AspectRatio.Root` component.** This change simplifies the component's API. Components using the `render$` prop will need to be updated to no longer rely on the `aspect` property from the state object.

- **Remove `data-scope` attribute from the `AspectRatio.Root` component.** This change simplifies the DOM output and reduces unnecessary attributes, but may require updates to any custom CSS or JavaScript that relied on this attribute for styling or logic.

- **Remove the `aspect` property from the `state` object passed to the `render$` prop in the `AspectRatio.Content` component.** This change simplifies the component's API. Components using the `render$` prop will need to be updated to no longer rely on the `aspect` property from the state object.

- **Remove the `data-aspect` attribute from the `AspectRatio.Content` component.** This change simplifies the DOM output and reduces unnecessary attributes, but may require updates to any custom CSS or JavaScript that relied on this attribute for styling or logic.

- **Remove the `preventDblClickTextSelection` property from the `state` object passed to the `render$` prop in the `Label.Root` component.** This change simplifies the component's API. Components using the `render$` prop will need to be updated to no longer rely on the `preventDblClickTextSelection` property from the `state` object.

- **Remove `data-prevent-dbl-click-text-selection` attribute from `Label.Root` component.** This change simplifies the DOM output and reduces unnecessary attributes, but may require updates to any custom CSS or JavaScript that relied on this attribute for styling or logic.

- **Remove the `decorative` property from the `state` object passed to the `render$` prop in the `Separator.Root` component.** This change simplifies the component's API. Components using the `render$` prop will need to be updated to no longer rely on the `decorative` property from the `state` object.

- **Remove `useId` hook.** This hook has been removed as it is now redundant. Its functionality is handled more efficiently by the underlying framework. Any components that used `useId` will need to be updated.

### 🐞 Bug Fixes

- **`Link.Root` component now correctly removes `aria-disabled` and `data-disabled` attributes.** Previously, these attributes were not being removed when the `disabled` prop was dynamically changed from `true` to `false`. This led to incorrect behavior and accessibility issues.

- **`Separator.Root` component now correctly renders the `data-orientation` attribute.** Previously, the attribute was not rendering the correct value. This led to incorrect styling and behavior.

### 🚀 Features

- **Add developer warning for missing `href` prop in `Link.Root`.** A warning is now displayed in the developer console when the `Link.Root` component is used without an `href` prop. This helps to prevent unexpected behavior and improves the developer experience.

- **Change type for `disabled` property in the `state` object of `Link.Root`'s `render$` prop to `ReadonlySignal<boolean>`.** Previously, the type was `ReadonlySignal<boolean | undefined>`. This change improves type safety and predictability by ensuring the signal always returns a boolean value.

- **Change type for `disabled` property returned by `useLinkContext` hook to `ReadonlySignal<boolean>`.** Previously, the type was `ReadonlySignal<boolean | undefined>`. This change improves type safety and predictability by ensuring the signal always returns a boolean value.

- **Change type for `decorative` property returned by `useSeparatorContext` hook to `ReadonlySignal<boolean>`.** Previously, the type was `ReadonlySignal<boolean | undefined>`. This change improves type safety and predictability by ensuring the signal always returns a boolean value.

## 0.8.0 (08.08.2025)

### 🚨 Breaking Changes

- **Remove `clamp` utility function.**
  The `clamp` utility function has been removed.

### 🚀 Features

- **Introduce `Accordion` component.** The new `Accordion` component has been added, providing a vertically stacked set of interactive headings that each reveal an associated section of content.

- **Introduce `Collapsible` component.**
  The new `Collapsible` component has been added, providing an interactive, accessible, and unstyled solution for expanding and collapsing content.

- **Introduce `Portal` component.**
  The new `Portal` component has been added, leveraging the native Popover API to lift content to the browser's top layer. It provides simplified control for non-modal overlays, with full SSR compatibility considerations.

- **Introduce `useArrowNavigation` hook.**
  A new `useArrowNavigation` hook has been added, providing an accessible way to navigate between focusable elements within a container using keyboard arrow keys.

- **Introduce `SignalOrReadonlySignal` utility type.**
  A new utility type `SignalOrReadonlySignal` has been added, allowing component props and function arguments to accept either a mutable `Signal` or a `ReadonlySignal`. This enhances flexibility and improves type safety for components that don't need to modify the state of a signal.

## 0.7.0 (22.06.2025)

### 🚨 Breaking Changes

- **Remove `onCountChange$` callback from `useCounter` hook.**
  The `onCountChange$` callback has been removed from the `useCounter` hook.

- **Remove `onStateChange$` callback from `useBoolean` hook.**
  The `onStateChange$` callback has been removed from the `useBoolean` hook.

- **Simplify `useBoolean` hook by removing `UseBooleanParams` interface.**
  The `useBoolean` hook no longer accepts a `params` object. Instead, provide the `initialState` directly as the first argument, like `useBoolean(initialState)`. The `UseBooleanParams` interface has been removed.

### 🚀 Features

- **Introduce `Separator` component for visual and semantic content separation.**
  Adds a new `Separator` component for visually and semantically separating content. It supports both `horizontal` and `vertical` orientations, adheres to accessibility standards, and offers styling customization.

- **Add `useToggle` hook for managing cyclical state.**
  Introduces a new `useToggle` hook that provides a flexible way to manage state which cycles through a predefined list of values. It includes `toggle$` for sequential changes and `set$` for direct value assignment.

## 0.6.0 (19.06.2025)

### 🚨 Breaking Changes

- **Replace `as` prop with `render$` prop for enhanced component composition.**
  The `as` prop, previously used for polymorphic rendering, has been replaced with a more flexible `render$` prop across relevant components. The `render$` prop offers a more powerful and explicit way to control the rendered HTML element or compose with another component. Instead of just defining the element type, `render$` accepts a function that provides the component's internal props and state, allowing for highly customizable and robust rendering logic. For more in-depth information, refer to our [Composition guide](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md).

- **Remove `Primitive` component.**
  The `Primitive` component, its associated documentation, and its tests have been entirely removed. This simplification reduces the library's API surface and bundle size,

- **`usePrevious` hook now directly accepts a `Signal` as its parameter.**
  The API for the `usePrevious` hook has been simplified for better ergonomics.
  Previously, it required an object with a `value` property (`{ value: mySignal }`).
  It now directly accepts the `Signal` instance.

- **`useUncontrolled` hook parameters made optional**
  The `useUncontrolled` hook's parameter interface (`UseUncontrolledParams`) has been updated. The `uncontrolledValue`, `controlledSignal`, and `onChange$` properties are now explicitly marked as optional. This change offers greater flexibility when configuring the hook, allowing you to omit these properties if they are not needed.

- **`useBoolean` hook's default `initialState` is now `false`**
  The `useBoolean` hook's default `initialState` has been corrected to `false`. Previously, it was inadvertently set to `true` in the code, despite documentation indicating `false`.

### 🚀 Features

- **Introduce new `Link` component.**
  A new `Link` component has been added, providing a semantic and accessible way to handle navigation. It's built on the native `a` element and offers enhanced control over its behavior, especially for disabled states.

- **Add `useLabelContext` hook.**
  This new hook is introduced to streamline accessing context-provided properties within the `Label` component's subtree. It simplifies how you retrieve shared label settings and behaviors, improving component reusability and maintainability.

- **Add `useCounter` hook for managing numeric counters.**
  The `useCounter` hook has been added to simplify the management of numeric counter states. This hook provides a robust way to create and control counters with customizable parameters.

- **Add `clamp` utility function.**
  A new `clamp` utility function has been introduced to easily restrict a numeric value within a specified minimum and maximum range. This is useful for ensuring numbers stay within desired bounds, preventing unexpected behavior in various calculations or UI elements.

## 0.5.0 (24.05.2025)

### 🚀 Features

- **Add `AspectRatio` component.** Adds a new component for displaying content within a desired ratio. It accepts any custom ratio.

- **Add `Alert` component.** A new component for displaying brief, important messages that attract user attention without interrupting their task.

- **Add `Primitive` component.** A component that provides base components wrapping standard HTML elements, offering default behavior and props. It allows for flexible composition and overriding the underlying element via the as prop.

## 0.4.0 (15.05.2025)

### 🚨 Breaking Changes

- **Remove `randomId` utility function.** The `randomId` utility function has been removed.

- **Change `useId` hook return type.** The `useId` hook now returns the unique ID string directly, simplifying its use by allowing direct access without destructuring.

- **Change `usePrevious` hook return type to `ReadonlySignal`.** The `usePrevious` hook now directly returns the `ReadonlySignal` containing the previous value, making it easier to consume without needing to destructure an object.

### 🚀 Features

- **Change type for `style` prop in `Label.Root` component.** This prop now explicitly accepts both `string` and `CSSProperties` types, replacing the previous limitation to `CSSProperties` only. This change improves flexibility but may require updates to components that assumed the old behavior.

- **Add `VisuallyHidden` component.** A component that visually hides content from the screen while keeping it accessible to assistive technology.

- **Add `useBoolean` hook.** A custom hook that handles boolean state, providing useful utility functions like `setTrue$`, `setFalse$` and `toggle$`.

- **Add `visuallyHiddenStyle` utility.** A style object that provides the necessary CSS to visually hide content in an accessible way.

- **Add `stringStyleToObject` utility.** A utility function that converts an inline CSS style string into a key-value object format.

- **Add `combineStyle` utility function.** A utility function to combine two style values, whether they are inline CSS strings or style objects, into a single, merged value.

## 0.3.1 (06.04.2025)

### 🐞 Bug Fixes

- **Fix runtime error in `useUncontrolled` hook.** Fixed an issue where the hook could throw a runtime error in development mode if `controlledSignal` was `undefined`, by ensuring the type check is performed safely.

## 0.3.0 (05.04.2025)

### 🚀 Features

- **Add `useUncontrolled` hook.** A hook that manages both controlled and uncontrolled state within a component.

- **Add `usePrevious` hook.** A hook that tracks and returns the previous value of a given signal.

- **Add `useId` hook.** A hook that generates a unique identifier with an optional prefix and supports custom ID overrides.

- **Add `randomId` utility function.** A utility function that returns a random ID.

- **Add `composeRefs` utility function.** A utility function that allows assigning a single DOM element to multiple refs.

## 0.2.0 (02.04.2025)

### 🚀 Features

- **Add `Label` component.** A component that renders an accessible label associated with controls.

## 0.1.0 (02.04.2025)

- **Initial release.**
