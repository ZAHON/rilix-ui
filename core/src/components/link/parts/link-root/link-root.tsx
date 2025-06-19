import type { LinkRootProps } from './link-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Primitive } from '@/components';

/**
 * Contains the content for the link.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { as, href, disabled, ...others } = props;

  const Component = as || (Primitive.a as unknown as 'a');

  return (
    <Component
      role={disabled ? 'link' : undefined}
      href={disabled ? undefined : href}
      aria-disabled={disabled ? 'true' : undefined}
      data-rilix-ui-link-root=""
      data-scope="link"
      data-part="root"
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
