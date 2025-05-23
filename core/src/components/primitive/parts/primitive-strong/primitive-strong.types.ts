import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveStrongProps extends PropsOf<'strong'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
