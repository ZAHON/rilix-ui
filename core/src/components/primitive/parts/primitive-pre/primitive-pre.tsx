import type { PrimitivePreProps } from './primitive-pre.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `pre` element.
 * The `pre` HTML element represents preformatted text which is to be presented exactly as written in the HTML file.
 * The text is typically rendered using a non-proportional, or monospaced font.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre).
 */
export const PrimitivePre = component$<PrimitivePreProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'pre';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
