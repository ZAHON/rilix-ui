import type { LinkRootProps } from './link-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { LinkContext } from '../../context';

/**
 * Contains the content for the link.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { href, disabled: _disabled, ...others } = props;

  const disabled = useComputed$(() => _disabled);

  useContextProvider(LinkContext, { disabled });

  return (
    <Render
      as="a"
      role={disabled.value ? 'link' : undefined}
      href={disabled.value ? undefined : href}
      aria-disabled={disabled.value ? 'true' : undefined}
      data-rilix-ui-link-root=""
      data-scope="link"
      data-part="root"
      data-disabled={disabled.value ? '' : undefined}
      state={{ disabled }}
      defaultRender$={(props) => (
        <a {...props}>
          <Slot />
        </a>
      )}
      {...others}
    />
  );
});
