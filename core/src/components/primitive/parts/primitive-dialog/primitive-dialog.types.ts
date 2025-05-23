import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveDialogProps extends PropsOf<'dialog'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
