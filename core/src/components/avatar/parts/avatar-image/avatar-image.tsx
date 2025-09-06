import type { AvatarImageProps } from './avatar-image.types';
import { component$, useSignal, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { isDev, isBrowser } from '@builder.io/qwik/build';
import { warn, Render } from '@/_internal';
import { useAvatarContext } from '../../contexts';

/**
 * The image to render.
 * By default it will only render when it has loaded.
 * You can use the `onLoadingStatusChange$` callback if you need more control.
 * Renders an `<img>` element.
 */
export const AvatarImage = component$<AvatarImageProps>((props) => {
  const { src, referrerPolicy, crossOrigin, onLoadingStatusChange$, ...others } = props;

  const { imageLoadingStatus, strategy } = useAvatarContext();

  const loadingStatus = useSignal<'idle' | 'loading' | 'loaded' | 'error'>('idle');

  if (isDev && !src) {
    warn(
      `The 'src' prop is missing on 'Avatar.Image'.`,
      `The component will not render an image.`,
      `Provide a valid 'src' URL or use 'Avatar.Fallback' component as a child of 'Avatar.Root' if an image is not required.`
    );
  }

  useTask$(({ track }) => {
    const status = track(() => loadingStatus.value);

    if (isBrowser && status !== 'idle') {
      imageLoadingStatus.value = status;

      if (onLoadingStatusChange$) {
        onLoadingStatusChange$(status);
      }
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ track, cleanup }) => {
      const imageSrc = track(() => src);
      const imageReferrerPolicy = track(() => referrerPolicy);
      const imageCrossOrigin = track(() => crossOrigin);

      if (!imageSrc) {
        loadingStatus.value = 'error';
        return;
      }

      let isMounted = true;
      const image = new window.Image();

      const updateStatus = (status: 'idle' | 'loading' | 'loaded' | 'error') => () => {
        if (!isMounted) {
          return;
        }

        loadingStatus.value = status;
      };

      loadingStatus.value = 'loading';

      image.onload = updateStatus('loaded');
      image.onerror = updateStatus('error');

      if (imageReferrerPolicy) {
        image.referrerPolicy = imageReferrerPolicy;
      }

      image.crossOrigin = imageCrossOrigin ?? null;
      image.src = imageSrc;

      cleanup(() => {
        isMounted = false;
      });
    },
    { strategy }
  );

  return (
    loadingStatus.value === 'loaded' && (
      <Render
        as="img"
        src={src}
        data-rilix-ui-avatar-image
        state={{ imageLoadingStatus: loadingStatus }}
        defaultRender$={(props) => <img {...props} />}
        {...others}
      />
    )
  );
});
