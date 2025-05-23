import type { PropsOf, Component } from '@builder.io/qwik';

export interface PrimitiveArticleProps extends PropsOf<'article'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;
}
