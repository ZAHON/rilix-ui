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

const LinkDemo = component$(() => {
  return <Link.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const LinkDemo = component$(() => {
  return <Link.Root href="https://github.com/ZAHON/rilix-ui/tree/main">Rilix UI</Link.Root>;
});
```

## API Reference

### Root

Contains the content for the link. This component is based on the `a` element.

| Prop       | Type        | Default | Description                                                                                                                                                                |
| ---------- | ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `Component` | `-`     | The component that this component should render as.                                                                                                                        |
| `href`     | `string`    | `-`     | The URL that the hyperlink points to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href).                                              |
| `active`   | `boolean`   | `-`     | Used to identify the link as the currently active page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current#page). |
| `disabled` | `boolean`   | `-`     | Whether the link is disabled. Native navigation will be disabled, and the link will be exposed as disabled to assistive technology.                                        |

| Data attribute    | Values                                                            |
| ----------------- | ----------------------------------------------------------------- |
| `[data-scope]`    | `"link"`                                                          |
| `[data-part]`     | `"root"`                                                          |
| `[data-active]`   | Present when the link is identified as the currently active page. |
| `[data-disabled]` | Present when the link is disabled.                                |

## Examples

### Disabled

Use the `disabled` prop to disable a link while keeping it accessible for screen readers.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'rilix-ui';

const LinkDemo = component$(() => {
  return (
    <Link.Root disabled={true} href="https://github.com/ZAHON/rilix-ui/tree/main">
      Rilix UI
    </Link.Root>
  );
});
```

## Accessibility

This component is based on the native `a` element.

### Keyboard Interactions

| Key              | Description         |
| ---------------- | ------------------- |
| <kbd>Enter</kbd> | Activates the link. |
