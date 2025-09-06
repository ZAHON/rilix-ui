import type { AvatarFallbackProps } from './avatar-fallback.types';
import { component$, useSignal, useVisibleTask$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useAvatarContext } from '../../contexts';

/**
 * An element that renders when the image hasn't loaded.
 * This means whilst it's loading, or if there was an error.
 * If you notice a flash during loading, you can provide a `delayMs` prop
 * to delay its rendering so it only renders for those with slower connections.
 * For more control, use the `onLoadingStatusChange$` callback on `Avatar.Image` component.
 * Renders a `<span>` element.
 */
export const AvatarFallback = component$<AvatarFallbackProps>((props) => {
  const { delayMs, ...others } = props;

  const { imageLoadingStatus, strategy } = useAvatarContext();

  const canRender = useSignal(delayMs === undefined);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ track, cleanup }) => {
      const fallbackDelayMs = track(() => delayMs);

      if (fallbackDelayMs !== undefined) {
        const timerId = setTimeout(() => {
          canRender.value = true;
        }, fallbackDelayMs);

        cleanup(() => {
          clearTimeout(timerId);
        });
      }
    },
    { strategy }
  );

  return (
    canRender.value &&
    imageLoadingStatus.value !== 'loaded' && (
      <Render
        as="span"
        data-rilix-ui-avatar-fallback
        state={{ imageLoadingStatus }}
        defaultRender$={(props) => (
          <span {...props}>
            <Slot />
          </span>
        )}
        {...others}
      />
    )
  );
});
