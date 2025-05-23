import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveTrackProps extends PropsOf<'track'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
