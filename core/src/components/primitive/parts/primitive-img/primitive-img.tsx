import type { PrimitiveImgProps } from './primitive-img.types';
import { component$ } from '@builder.io/qwik';

/**
 * A component that renders an `img` element.
 * The `img` HTML element embeds an image into the document.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).
 */
export const PrimitiveImg = component$<PrimitiveImgProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'img';

  return <Component {...others} />;
});
