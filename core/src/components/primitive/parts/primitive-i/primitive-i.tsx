import type { PrimitiveIProps } from './primitive-i.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders an `i` element.
 * The `i` HTML element represents a range of text that is set off from the normal text for some reason,
 * such as idiomatic text, technical terms, taxonomical designations, among others. Historically,
 * these have been presented using italicized type, which is the original source of the `i` naming of this element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i).
 */
export const PrimitiveI = component$<PrimitiveIProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'i';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
