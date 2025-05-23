import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveVideoProps extends PropsOf<'video'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
