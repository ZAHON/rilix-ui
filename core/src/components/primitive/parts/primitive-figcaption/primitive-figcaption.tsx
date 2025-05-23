import type { PrimitiveFigcaptionProps } from './primitive-figcaption.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `figcaption` element.
 * The `figcaption` HTML element represents a caption or legend describing the rest of the
 * contents of its parent `figure` element, providing the `figure` an accessible description.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption).
 */
export const PrimitiveFigcaption = component$<PrimitiveFigcaptionProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'figcaption';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
