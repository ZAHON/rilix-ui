import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveBlockquoteProps extends PropsOf<'blockquote'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
