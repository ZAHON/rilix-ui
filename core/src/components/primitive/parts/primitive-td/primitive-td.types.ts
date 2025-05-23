import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTdProps extends PropsOf<'td'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
