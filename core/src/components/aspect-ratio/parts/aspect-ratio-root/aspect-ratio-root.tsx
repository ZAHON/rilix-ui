import { AspectRatioRootProps } from './aspect-ratio-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { combineStyle } from '@/utilities';
import { AspectRatioContext } from '../../contexts';

/**
 * Contains all the parts of an aspect ratio.
 * Renders a `<div>` element.
 *
 * @example
 * ```tsx
 * <AspectRatio.Root>
 * 	<AspectRatio.Content />
 * </AspectRatio.Root>
 * ```
 */
export const AspectRatioRoot = component$<AspectRatioRootProps>((props) => {
  const { ratio = 1, style, ...others } = props;

  const aspect = useComputed$(() => (1 / ratio) * 100);

  useContextProvider(AspectRatioContext, { aspect });

  return (
    <Render
      as="div"
      data-rilix-ui-aspect-ratio-root=""
      data-scope="aspect-ratio"
      data-part="root"
      data-aspect={aspect.value}
      style={combineStyle(
        {
          position: 'relative',
          width: '100%',
          paddingBottom: `${aspect.value}%`,
        },
        style
      )}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
