import type { PrimitiveBdiProps } from './primitive-bdi.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `bdi` element.
 * The `bdi` HTML element tells the browser's bidirectional algorithm
 * to treat the text it contains in isolation from its surrounding text.
 * It's particularly useful when a website dynamically inserts some text
 * and doesn't know the directionality of the text being inserted.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi).
 */
export const PrimitiveBdi = component$<PrimitiveBdiProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'bdi';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
