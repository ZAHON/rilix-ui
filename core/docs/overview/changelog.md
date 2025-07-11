# Changelog

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

- Add `VisuallyHidden` component that allows to hide content from the screen in an accessible way.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { VisuallyHidden } from 'rilix-ui';

  const VisuallyHiddenDemo = component$(() => {
    return (
      <button type="button">
        <svg
          aria-hidden="true"
          focusable="false"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
        <VisuallyHidden.Root>Settings</VisuallyHidden.Root>
      </button>
    );
  });
  ```

- Enhance `style` prop handling in `Label.Root` component. The `style` prop now explicitly supports accepting both `string` and `CSSProperties` types. Previously, it only accepted `CSSProperties`.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { Label } from 'rilix-ui';

  const LabelDemo = component$(() => {
    return (
      <>
        <Label.Root style="color: purple;">Label</Label.Root>
        <Label.Root style={{ color: 'purple' }}>Label</Label.Root>
      </>
    );
  });
  ```

- Add `useBoolean` hook, a custom hook that handles boolean state with useful utility functions.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { useBoolean } from 'rilix-ui';

  const Demo = component$(() => {
    const { state, setTrue$, setFalse$, toggle$ } = useBoolean({
      initialState: false,
      onStateChange$: $((state) => console.log(`State is: ${state}`)),
    });

    return (
      <>
        <p>
          State is: <code>{state.value ? 'true' : 'false'}</code>
        </p>

        <button onClick$={setTrue$}>Set true</button>
        <button onClick$={setFalse$}>Set false</button>
        <button onClick$={toggle$}>Toggle</button>
      </>
    );
  });
  ```

- Add `visuallyHiddenStyle` utility, a style object that allows to hide content from the screen in an accessible way.

  ```tsx
  import { component$ } from '@builder.io/qwik';
  import { visuallyHiddenStyle } from 'rilix-ui';

  const Demo = component$(() => {
    return (
      <button type="button">
        <svg
          aria-hidden="true"
          focusable="false"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
        <span style={visuallyHiddenStyle}>Settings</span>
      </button>
    );
  });
  ```

- Add `stringStyleToObject` utility function which converts inline CSS style string into a key-value object format.

  ```tsx
  import { component$, useSignal, useComputed$ } from '@builder.io/qwik';
  import { stringStyleToObject } from 'rilix-ui';

  const Demo = component$(() => {
    const input = useSignal('color: #C0FFEE; background-color: #BADA55;');
    const output = useComputed$(() => stringStyleToObject(input.value));

    return (
      <>
        <label for="input">Input</label>
        <input
          id="input"
          type="text"
          value={input.value}
          onInput$={(_, currentTarget) => (input.value = currentTarget.value)}
        />

        <p>Output</p>
        <pre>
          <code>{JSON.stringify(output.value, null, 2)}</code>
        </pre>
      </>
    );
  });
  ```

- Add `combineStyle` utility function to combine two style values, whether inline CSS strings or style objects, into one.

  ```tsx
  import type { PropsOf } from '@builder.io/qwik';
  import { component$, useComputed$ } from '@builder.io/qwik';
  import { combineStyle } from 'rilix-ui';

  const Demo = component$<PropsOf<'div'>>((props) => {
    const { style, ...others } = props;

    const combinedStyle = useComputed$(() =>
      combineStyle(
        {
          height: '100px',
          width: '100px',
          backgroundColor: 'purple',
        },
        style
      )
    );

    return <div style={combinedStyle.value} {...others} />;
  });
  ```

### 🚨 Breaking Changes

- Remove `randomId` utility function.

- Change `useId` hook return type to `string`. The `useId` hook now returns the unique ID string directly. Previously, the hook returned an object with the ID nested under the `uuid` key. This change simplifies the consumption of the hook for users, allowing direct access to the ID string without destructuring.

- Change `usePrevious` hook return type to `ReadonlySignal`. The `usePrevious` hook now returns the `ReadonlySignal` containing the previous value directly. Previously, the hook returned an object with the previous value signal nested under the `previousValue` key. This change simplifies the consumption of the hook for users, allowing direct access to the signal without destructuring.

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
