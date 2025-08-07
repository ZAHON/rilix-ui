# Link

Semantic element for navigation between pages.

## Features

- Support for disabled links.

## Import

```tsx
import { Link } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const Demo = component$(() => {
  return <Link.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const Demo = component$(() => {
  return <Link.Root href="https://github.com/ZAHON/rilix-ui/tree/main">Rilix UI</Link.Root>;
});
```

## API Reference

### Root

Contains the content for the link. This component is based on the `a` element.

| Prop       | Type                                                                                                       | Default | Description                                                                                                                                                                                                                                |
| :--------- | :--------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `href`     | `string`                                                                                                   | `-`     | The URL that the hyperlink points to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href).                                                                                                              |
| `disabled` | `boolean`                                                                                                  | `-`     | Whether the link is disabled. Native navigation will be disabled, and the link will be exposed as disabled to assistive technology.                                                                                                        |
| `render$`  | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean \| undefined> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute    | Values                             |
| :---------------- | :--------------------------------- |
| `[data-scope]`    | `"link"`                           |
| `[data-part]`     | `"root"`                           |
| `[data-disabled]` | Present when the link is disabled. |

### useLinkContext

A hook that gives access to a context object containing properties to interact with the link.

| Property   | Type                                   | Description                   |
| :--------- | :------------------------------------- | :---------------------------- |
| `disabled` | `ReadonlySignal<boolean \| undefined>` | Whether the link is disabled. |

## Examples

### Disabled

Use the `disabled` prop to disable a link while keeping it accessible for screen readers.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <Link.Root disabled={true} href="https://github.com/ZAHON/rilix-ui/tree/main">
      Rilix UI
    </Link.Root>
  );
});
```

## Accessibility

This component is based on the native `a` element.

### Keyboard interactions

| Key              | Description         |
| :--------------- | :------------------ |
| <kbd>Enter</kbd> | Activates the link. |
