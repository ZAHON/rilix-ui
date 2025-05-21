# Label

Renders an accessible label associated with controls.

## Features

- Text selection is prevented when double clicking label.

- Supports nested controls.

## Import

```tsx
import { Label } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const LabelDemo = component$(() => {
  return <Label.Root />;
});
```

## Usage

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

## API Reference

### Root

Contains the content for the label. This component is based on the `label` element.

| Prop                           | Type                | Default | Description                                                                                                                                                                                                              |
| ------------------------------ | ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `as`                           | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |
| `for`                          | `string`            | `-`     | The id of the element the label is associated with. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#for).                                                                           |
| `preventDblClickTextSelection` | `boolean`           | `true`  | When `true`, text selection is prevented when double clicking label.                                                                                                                                                     |

| Data attribute                            | Values                                                               |
| ----------------------------------------- | -------------------------------------------------------------------- |
| `[data-scope]`                            | `"label"`                                                            |
| `[data-part]`                             | `"root"`                                                             |
| `[data-prevent-dbl-click-text-selection]` | Present when text selection is prevented when double clicking label. |

## Examples

### Text selection when double clicking

By default text selection is prevented when double clicking label. If you want to remove this functionality pass `preventDblClickTextSelection={false}` on `Label.Root` component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const LabelDemo = component$(() => {
  return (
    <>
      <Label.Root preventDblClickTextSelection={false} for="first-name">
        First name
      </Label.Root>
      <input id="first-name" type="text" />
    </>
  );
});
```

## Implicit label

You can add the label to the control implicitly by wrapping the control inside the `Label.Root` component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'rilix-ui';

const LabelDemo = component$(() => {
  return (
    <Label.Root>
      First name
      <input type="text" />
    </Label.Root>
  );
});
```

## Explicit label

You can add a label to control explicitly by referencing control. To do this, give the `id` prop and `Label.Root` component `for` prop controls the same unique value.

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

## Accessibility

This component is based on the native `label` element, it will automatically apply the correct labelling when wrapping controls or using the `for` attribute. For your own custom controls to work correctly, ensure they use native elements such as `button` or `input` as a base.
