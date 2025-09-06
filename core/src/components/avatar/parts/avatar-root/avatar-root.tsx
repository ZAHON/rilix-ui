import type { AvatarRootProps } from './avatar-root.types';
import { component$, useSignal, useConstant, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { AvatarContext } from '../../contexts';

/**
 * Contains all the parts of an avatar.
 * Renders a `<span>` element.
 *
 * @example
 * ```tsx
 * <Avatar.Root>
 * 	<Avatar.Image />
 * 	<Avatar.Fallback />
 * </Avatar.Root>
 * ```
 */
export const AvatarRoot = component$<AvatarRootProps>((props) => {
  const { strategy: _strategy, ...others } = props;

  const imageLoadingStatus = useSignal<'idle' | 'loading' | 'loaded' | 'error'>('idle');
  const strategy = useConstant(() => _strategy ?? 'intersection-observer');

  useContextProvider(AvatarContext, { imageLoadingStatus, strategy });

  return (
    <Render
      as="span"
      data-rilix-ui-avatar-root
      state={{ imageLoadingStatus }}
      defaultRender$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
      {...others}
    />
  );
});
