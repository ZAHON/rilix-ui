import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveLabelProps extends PropsOf<'label'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
