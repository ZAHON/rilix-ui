import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveBrProps extends PropsOf<'br'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
