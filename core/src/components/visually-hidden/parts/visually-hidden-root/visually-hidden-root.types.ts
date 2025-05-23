import type { PropsOf, Component } from '@builder.io/qwik';

export interface VisuallyHiddenRootProps extends PropsOf<'span'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
