import type { PrimitiveDfnProps } from './primitive-dfn.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `dfn` element.
 * The `dfn` HTML element indicates a term to be defined.
 * The `dfn` element should be used in a complete definition statement,
 * where the full definition of the term can be one of the following:
 * - The ancestor paragraph (a block of text, sometimes marked by a `p` element).
 * - The `dt`/`dd` pairing.
 * - The nearest section ancestor of the `dfn` element.
 *
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn).
 */
export const PrimitiveDfn = component$<PrimitiveDfnProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'dfn';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
