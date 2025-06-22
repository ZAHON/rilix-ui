# Separator

Visually or semantically separates content.

## Features

- Supports horizontal and vertical orientations.

## Import

```tsx
import { Separator } from 'rilix-ui';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'rilix-ui';

const Demo = component$(() => {
  return <Separator.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <>
      <h1>Rilix UI</h1>
      <p>Unstyled, accessible components for building high-quality design systems and web apps in Qwik.</p>
      <Separator.Root style={{ margin: '1rem 0', height: '0.0625rem', width: '100%', backgroundColor: '#000000' }} />
      <div style={{ height: '1rem', display: 'flex', alignItems: 'center' }}>
        <span>Blog</span>
        <Separator.Root
          orientation="vertical"
          style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
        />
        <span>Docs</span>
        <Separator.Root
          orientation="vertical"
          style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
        />
        <span>Source</span>
      </div>
    </>
  );
});
```

## API Reference

### Root

The separator. This component is based on the `div` element.

| Prop          | Type                                                                                                                                                 | Default        | Description                                                                                                                                                                                                                                |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation` | `"horizontal" \| "vertical"`                                                                                                                         | `"horizontal"` | The orientation of the component.                                                                                                                                                                                                          |
| `decorative`  | `boolean`                                                                                                                                            | `-`            | Whether or not the component is purely decorative. When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.                                                     |
| `render$`     | `(props: Record, state: { orientation: ReadonlySignal<"vertical" \| "horizontal">, decorative: ReadonlySignal<boolean \| undefined> }) => JSXOutput` | `-`            | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute       | Values                       |
| -------------------- | ---------------------------- |
| `[data-scope]`       | `"separator"`                |
| `[data-part]`        | `"root"`                     |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

### useSeparatorContext

A hook that gives access to a context object containing properties to interact with the separator.

| Property      | Type                                         | Description                                                                                                                                                                            |
| :------------ | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation` | `ReadonlySignal<"vertical" \| "horizontal">` | The orientation of the component.                                                                                                                                                      |
| `decorative`  | `ReadonlySignal<boolean \| undefined>`       | Whether or not the component is purely decorative. When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree. |

## Examples

### Vertical orientation

Use the `orientation` prop to create a vertical separator.

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <div style={{ height: '1rem', display: 'flex', alignItems: 'center' }}>
      <span>Blog</span>
      <Separator.Root
        orientation="vertical"
        style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
      />
      <span>Docs</span>
      <Separator.Root
        orientation="vertical"
        style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
      />
      <span>Source</span>
    </div>
  );
});
```

## Accessibility

Adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).
