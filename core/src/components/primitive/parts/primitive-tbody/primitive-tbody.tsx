import type { PrimitiveTbodyProps } from './primitive-tbody.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `tbody` element.
 * The `tbody` HTML element encapsulates a set of table rows (`tr` elements),
 * indicating that they comprise the body of a table's (main) data.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody).
 */
export const PrimitiveTbody = component$<PrimitiveTbodyProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'tbody';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
