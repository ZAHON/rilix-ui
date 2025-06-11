# Aspect Ratio

Displays content within a desired ratio.

## Features

- Accepts any custom ratio.

## Import

```tsx
import { AspectRatio } from 'rilix-ui';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { AspectRatio } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <AspectRatio.Root>
      <AspectRatio.Content />
    </AspectRatio.Root>
  );
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { AspectRatio } from 'rilix-ui';

const Demo = component$(() => {
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

## API Reference

### Root

Contains all the parts of an aspect ratio. This component is based on the `div` element.

| Prop      | Type                                                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :----------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ratio`   | `number`                                                                                   | `1`     | The desired ratio, e.g. `16 / 9`.                                                                                                                                                                                                          |
| `render$` | `(props: Record<string, unknown>, state: { aspect: ReadonlySignal<number> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values                           |
| :-------------- | :------------------------------- |
| `[data-scope]`  | `"aspect-ratio"`                 |
| `[data-part]`   | `"root"`                         |
| `[data-aspect]` | The current aspect ratio (in %). |

### Content

Contains the content you want to constrain to a given ratio. This component is based on the `div` element.

| Prop      | Type                                                                                       | Default | Description                                                                                                                                                                                                                                |
| :-------- | :----------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { aspect: ReadonlySignal<number> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values                           |
| --------------- | -------------------------------- |
| `[data-scope]`  | `"aspect-ratio"`                 |
| `[data-part]`   | `"content"`                      |
| `[data-aspect]` | The current aspect ratio (in %). |

### useAspectRatioContext

A hook that gives access to a context object containing properties to interact with the aspect ratio.

| Property | Type                     | Description                      |
| :------- | :----------------------- | :------------------------------- |
| `aspect` | `ReadonlySignal<number>` | The current aspect ratio (in %). |

## Examples

### Iframe embed

You can limit to a certain ratio any content, for example, image or inline frame element.

```tsx
import { component$ } from '@builder.io/qwik';
import { AspectRatio } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <div style={{ width: '18.75rem', overflow: 'hidden' }}>
      <AspectRatio.Root ratio={16 / 9}>
        <AspectRatio.Content>
          <iframe
            src="https://www.youtube.com/embed/2yJgwwDcgV8?si=KwBAFYZpeWUf3EOA"
            title="YouTube video player"
            style={{ objectFit: 'cover', height: '100%', width: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </AspectRatio.Content>
      </AspectRatio.Root>
    </div>
  );
});
```
