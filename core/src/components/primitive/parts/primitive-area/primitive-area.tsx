import type { PrimitiveAreaProps } from './primitive-area.types';
import { component$ } from '@builder.io/qwik';

/**
 * A component that renders an `area` element.
 * The `area` HTML element defines an area inside an image map that has predefined clickable areas.
 * An image map allows geometric areas on an image to be associated with hypertext links.
 * This element is used only within a `map` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area).
 */
export const PrimitiveArea = component$<PrimitiveAreaProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'area';

  return <Component {...others} />;
});
