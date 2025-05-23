import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveHeaderProps extends PropsOf<'header'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
