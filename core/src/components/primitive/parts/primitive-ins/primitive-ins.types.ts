import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveInsProps extends PropsOf<'ins'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
