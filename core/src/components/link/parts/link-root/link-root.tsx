import type { LinkRootProps } from './link-root.types';
import { component$, useComputed$, Slot } from '@builder.io/qwik';
import { Primitive } from '@/components';

/**
 * Contains the content for the link.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { as, href, disabled: _disabled, ...others } = props;

  const disabled = useComputed$(() => _disabled);

  const Component = as || (Primitive.a as unknown as 'a');

  return (
    <Component
      role={disabled.value ? 'link' : undefined}
      href={disabled.value ? undefined : href}
      aria-disabled={disabled.value ? 'true' : undefined}
      data-rilix-ui-link-root=""
      data-scope="link"
      data-part="root"
      data-disabled={disabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
