import type { PropsOf, Component } from '@builder.io/qwik';

export interface AlertRootProps extends PropsOf<'div'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
