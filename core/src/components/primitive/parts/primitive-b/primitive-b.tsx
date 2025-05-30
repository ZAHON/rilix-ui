import type { PrimitiveBProps } from './primitive-b.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `b` element.
 * The `b` HTML element is used to draw the reader's attention to the element's contents,
 * which are not otherwise granted special importance. This was formerly known as the Boldface element,
 * and most browsers still draw the text in boldface. However, you should not use `b` for styling text
 * or granting importance. If you wish to create boldface text, you should use the CSS `font-weight` property.
 * If you wish to indicate an element is of special importance, you should use the `strong` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b).
 */
export const PrimitiveB = component$<PrimitiveBProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'b';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
