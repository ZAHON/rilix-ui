import type { PropsOf, FunctionComponent } from '@builder.io/qwik';

export interface VisuallyHiddenRootProps extends PropsOf<'span'> {
  /**
   * The component that this component should render as.
   */
  as?: FunctionComponent;
}
