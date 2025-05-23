import type { PrimitiveCodeProps } from './primitive-code.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `code` element.
 * The `code` HTML element displays its contents styled in a fashion
 * intended to indicate that the text is a short fragment of computer code.
 * By default, the content text is displayed using the user agent's default monospace font.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code).
 */
export const PrimitiveCode = component$<PrimitiveCodeProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'code';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
