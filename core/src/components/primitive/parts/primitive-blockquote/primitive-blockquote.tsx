import type { PrimitiveBlockquoteProps } from './primitive-blockquote.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `blockquote` element.
 * The `blockquote` HTML element indicates that the enclosed text is an extended quotation.
 * Usually, this is rendered visually by indentation. A URL for the source of the quotation
 * may be given using the `cite` attribute, while a text representation of the source can be given using the `cite` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote).
 */
export const PrimitiveBlockquote = component$<PrimitiveBlockquoteProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'blockquote';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
