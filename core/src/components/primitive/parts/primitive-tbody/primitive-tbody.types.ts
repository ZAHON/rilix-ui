import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTbodyProps extends PropsOf<'tbody'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
