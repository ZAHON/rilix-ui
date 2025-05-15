import type { PropsOf, FunctionComponent } from '@builder.io/qwik';

export interface VisuallyHiddenRootProps extends PropsOf<'span'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.
   */
  as?: FunctionComponent;
}
