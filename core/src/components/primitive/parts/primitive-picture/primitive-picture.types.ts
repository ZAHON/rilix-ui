import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitivePictureProps extends PropsOf<'picture'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
