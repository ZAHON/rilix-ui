import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDlProps extends PropsOf<'dl'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
