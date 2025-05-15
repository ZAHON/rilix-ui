import { AspectRatioRootProps } from './aspect-ratio-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { combineStyle } from '@/utilities';
import { AspectRatioContext } from '../../context';

/**
 * Contains all the parts of an aspect ratio.
 * This component is based on the `div` element.
 */
export const AspectRatioRoot = component$<AspectRatioRootProps>((props) => {
  const { as, ratio = 1, style, ...others } = props;

  const aspect = useComputed$(() => (1 / ratio) * 100);

  const combinedStyle = useComputed$(() =>
    combineStyle({ position: 'relative', width: '100%', paddingBottom: `${aspect.value}%` }, style)
  );

  useContextProvider(AspectRatioContext, { aspect });

  const Component = as || 'div';

  return (
    <Component
      data-rilix-ui-aspect-ratio-root=""
      data-scope="aspect-ratio"
      data-part="root"
      data-aspect={aspect.value}
      style={combinedStyle.value}
      {...others}
    >
      <Slot />
    </Component>
  );
});
