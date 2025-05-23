import type { VisuallyHiddenRootProps } from './visually-hidden-root.types';
import { component$, useComputed$, Slot } from '@builder.io/qwik';
import { combineStyle, visuallyHiddenStyle } from '@/utilities';

/**
 * Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
 * This component is based on the `span` element.
 */
export const VisuallyHiddenRoot = component$<VisuallyHiddenRootProps>((props) => {
  const { as, style, ...others } = props;

  const combinedStyle = useComputed$(() => combineStyle(visuallyHiddenStyle, style));

  const Component = as || 'span';

  return (
    <Component
      data-rilix-ui-visually-hidden-root=""
      data-scope="visually-hidden"
      data-part="root"
      style={combinedStyle.value}
      {...others}
    >
      <Slot />
    </Component>
  );
});
