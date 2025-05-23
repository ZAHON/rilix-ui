import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveIframeProps extends PropsOf<'iframe'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
