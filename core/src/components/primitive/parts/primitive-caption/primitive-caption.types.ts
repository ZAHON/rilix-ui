import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveCaptionProps extends PropsOf<'caption'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
