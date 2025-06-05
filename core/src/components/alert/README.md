# Alert

Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.

## Features

- Adheres to the [Alert WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).

## Import

```tsx
import { Alert } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Alert } from 'rilix-ui';

const Demo = component$(() => {
  return <Alert.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Alert } from 'rilix-ui';

const Demo = component$(() => {
  return <Alert.Root>Access denied. Please contact the network administrator to view this page.</Alert.Root>;
});
```

## API Reference

### Root

Contains the content for the alert. This component is based on the `div` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                |
| --------- | ---------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute | Values    |
| -------------- | --------- |
| `[data-scope]` | `"alert"` |
| `[data-part]`  | `"root"`  |

## Accessibility

Adheres to the [Alert WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).
