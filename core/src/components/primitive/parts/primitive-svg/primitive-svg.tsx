import type { PrimitiveSvgProps } from './primitive-svg.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `svg` element.
 * The `svg` SVG element is a container that defines a new coordinate system and viewport.
 * It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg).
 */
export const PrimitiveSvg = component$<PrimitiveSvgProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'svg';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
