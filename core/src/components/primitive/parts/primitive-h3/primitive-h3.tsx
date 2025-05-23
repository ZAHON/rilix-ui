import type { PrimitiveH3Props } from './primitive-h3.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders an `h3` element.
 * The `h1` to `h6` HTML elements represent six levels of section headings.
 * `h1` is the highest section level and `h6` is the lowest.
 * By default, all heading elements create a block-level box in the layout,
 * starting on a new line and taking up the full width available in their containing block.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).
 */
export const PrimitiveH3 = component$<PrimitiveH3Props>((props) => {
  const { as, ...others } = props;

  const Component = as || 'h3';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
