import type { PropsOf, FunctionComponent } from '@builder.io/qwik';

export interface LabelRootProps extends PropsOf<'label'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/rilix-ui/blob/main/core/docs/guides/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The id of the element the label is associated with.
   */
  for?: string;

  /**
   * When `true`, text selection is prevented when double clicking label.
   * @default true
   */
  preventDblClickTextSelection?: boolean;
}
