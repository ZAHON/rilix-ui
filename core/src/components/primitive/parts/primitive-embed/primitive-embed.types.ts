import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveEmbedProps extends PropsOf<'embed'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
