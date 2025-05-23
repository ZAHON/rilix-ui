import type { PropsOf, FunctionComponent } from '@builder.io/qwik';

export interface LabelRootProps extends PropsOf<'label'> {
  /**
   * The component that this component should render as.
   */
  as?: FunctionComponent;

  /**
   * The id of the element the label is associated with.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#for).
   */
  for?: string;

  /**
   * When `true`, text selection is prevented when double clicking label.
   * @default true
   */
  preventDblClickTextSelection?: boolean;
}
