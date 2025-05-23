import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveRubyProps extends PropsOf<'ruby'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
