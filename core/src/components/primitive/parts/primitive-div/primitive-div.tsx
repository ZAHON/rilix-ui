import type { PrimitiveDivProps } from './primitive-div.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `div` element.
 * The `div` HTML element is the generic container for flow content.
 * It has no effect on the content or layout until styled in some way using CSS
 * (e.g., styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export const PrimitiveDiv = component$<PrimitiveDivProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'div';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
