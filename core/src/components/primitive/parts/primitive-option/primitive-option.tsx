import type { PrimitiveOptionProps } from './primitive-option.types';
import { component$ } from '@builder.io/qwik';

/**
 * A component that renders an `option` element.
 * The `option` HTML element is used to define an item contained in a `select`, an `optgroup`, or a `datalist` element.
 * As such, `option` can represent menu items in popups and other lists of items in an HTML document.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option).
 */
export const PrimitiveOption = component$<PrimitiveOptionProps>((props) => {
  const { as, textContent, ...others } = props;

  const Component = as || 'option';

  return <Component {...others}>{textContent}</Component>;
});
