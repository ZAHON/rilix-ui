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

- Fix runtime error in `useUncontrolled` hook. Previously, tthis hook performed a type check on `controlledSignal` using `isSignal` without ensuring it was defined. In development mode, this could result in a runtime error when `controlledSignal` was undefined.

## 0.3.0 (05.04.2025)

### 🚀 Features

- Add `useUncontrolled` hook, which manages both controlled and uncontrolled state within a component.

  ```tsx
  import type { Signal, QRL } from '@builder.io/qwik';
  import { component$, useSignal } from '@builder.io/qwik';
  import { useUncontrolled } from 'rilix-ui';

  interface CustomInputProps {
    /**
     * The default value of the custom input when initially rendered.
     * Use when you do not need to control its the value.
     */
    defaultValue?: string;

    /**
     * The controlled value of the custom input.
     * Must be used in conjunction with `onValueChange$`.
     */
    value?: Signal<string>;

    /**
     * Event handler called when the value of the custom input changes.
     */
    onValueChange$?: QRL<(value: string) => void>;
  }

  /**
   * This custom input can be controlled or uncontrolled.
   */
  const CustomInput = component$<CustomInputProps>((props) => {
    const { defaultValue, value, onValueChange$ } = props;

    const { state, setState$, controlled } = useUncontrolled({
      uncontrolledValue: defaultValue,
      controlledSignal: value,
      finalValue: '',
      onChange$: onValueChange$,
    });

    return (
      <>
        <input type="text" value={state.value} onInput$={(event, currentTarget) => setState$(currentTarget.value)} />
        <p>
          Component is: <code>{controlled ? 'controlled' : 'uncontrolled'}</code>
        </p>
      </>
    );
  });

  const ControlledDemo = component$(() => {
    const controlledValue = useSignal('controlled');

    return (
      <>
        <p>Controlled value: {controlledValue.value}</p>
        <button type="button" onClick$={() => (controlledValue.value = crypto.randomUUID())}>
          Set random controlled value
        </button>
        <CustomInput value={controlledValue} onValueChange$={(value) => (controlledValue.value = value)} />
      </>
    );
  });

  const UncontrolledDemo = component$(() => {
    return <CustomInput defaultValue="uncontrolled" />;
  });
  ```

- Add `usePrevious` hook, which tracks and returns the previous value of a given signal.

  ```tsx
  import { component$, useSignal } from '@builder.io/qwik';
  import { usePrevious } from 'rilix-ui';

  const Demo = component$(() => {
    const currentValue = useSignal('');
    const { previousValue } = usePrevious({ value: currentValue });

    return (
      <>
        <label for="input">Enter some text here</label>
        <input
          type="text"
          id="input"
          autocomplete="off"
          value={currentValue.value}
          onInput$={(event, currentTarget) => (currentValue.value = currentTarget.value)}
        />
        <p>Current value: {currentValue.value}</p>
        <p>Previous value: {previousValue.value}</p>
      </>
    );
  });
  ```

- Add `useId` hook, which generates a unique identifier with an optional prefix and supports custom ID overrides.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { useId } from 'rilix-ui';

  interface InputProps {
    /**
     * A unique id of the input.
     */
    id?: string;
  }

  const Input = component$<InputProps>((props) => {
    const { id } = props;

    const { uuid } = useId({ id });

    return (
      <>
        <label for={uuid}>Input label</label>
        <input type="text" id={uuid} />
      </>
    );
  });

  const Demo = component$(() => {
    return (
      <>
        {/* Input and label will have unique id. */}
        <Input />

        {/* Input and label will have id "my-id". */}
        <Input id="my-id" />
      </>
    );
  });
  ```

- Add `randomId` utility function, which returns a random ID.

  ```tsx
  import { component$, useConstant } from '@builder.io/qwik';
  import { randomId } from 'rilix-ui';

  const Demo = component$(() => {
    const { uuid } = useConstant(randomId());

    return (
      <>
        <label for={uuid}>Input label</label>
        <input type="text" id={uuid} />
      </>
    );
  });
  ```

- Add `composeRefs` utility function, which allows assigning a single DOM element to multiple refs.

  ```tsx
  import type { PropsOf } from '@builder.io/qwik';
  import { component$, useSignal } from '@builder.io/qwik';
  import { composeRefs } from 'rilix-ui';

  const Demo = component$<PropsOf<'div'>>((props) => {
    const { ref, ...others } = props;

    const localRef = useSignal<HTMLElement | undefined>(undefined);

    return <div ref={composeRefs([ref, localRef])} {...others} />;
  });
  ```

## 0.2.0 (02.04.2025)

### 🚀 Features

- Add `Label` component, which renders an accessible label associated with controls.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { Label } from 'rilix-ui';

  const LabelDemo = component$(() => {
    return (
      <>
        <Label.Root for="first-name">First name</Label.Root>
        <input id="first-name" type="text" />
      </>
    );
  });
  ```

## 0.1.0 (02.04.2025)

- Initial release.
