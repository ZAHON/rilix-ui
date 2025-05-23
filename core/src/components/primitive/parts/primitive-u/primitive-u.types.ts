import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveUProps extends PropsOf<'u'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
