import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveImgProps extends PropsOf<'img'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
