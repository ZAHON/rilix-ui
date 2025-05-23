import type { PrimitiveStrongProps } from './primitive-strong.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that renders a `strong` element.
 * The `strong` HTML element indicates that its contents have strong importance, seriousness, or urgency.
 * Browsers typically render the contents in bold type.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong).
 */
export const PrimitiveStrong = component$<PrimitiveStrongProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'strong';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
