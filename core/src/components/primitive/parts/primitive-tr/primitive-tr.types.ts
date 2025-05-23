import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTrProps extends PropsOf<'tr'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
