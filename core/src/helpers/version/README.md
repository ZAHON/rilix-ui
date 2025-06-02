# version

A constant that exports the current version number of the **Rilix UI** package.

## Import

```tsx
import { version } from 'rilix-ui';
```

## Usage

The `version` constant provides direct access to the current version string of the **Rilix UI** library. This can be useful for displaying the version in your application's footer, in debugging logs, or for programmatic checks.

```tsx
import { component$ } from '@builder.io/qwik';
import { version } from 'rilix-ui';

const Demo = component$(() => {
  return (
    <p>
      Currently using <strong>Rilix UI</strong> version: <code>{version}</code>
    </p>
  );
});
```
