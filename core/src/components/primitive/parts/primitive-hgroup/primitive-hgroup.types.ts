import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveHgroupProps extends PropsOf<'hgroup'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
