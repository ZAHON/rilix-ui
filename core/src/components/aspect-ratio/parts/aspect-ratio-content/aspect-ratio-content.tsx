import { AspectRatioContentProps } from './aspect-ratio-content.types';
import { component$, useContext, useComputed$, Slot } from '@builder.io/qwik';
import { Primitive } from '@/components';
import { combineStyle } from '@//utilities';
import { AspectRatioContext } from '../../context';

/**
 * Contains the content you want to constrain to a given ratio.
 * This component is based on the `div` element.
 */
export const AspectRatioContent = component$<AspectRatioContentProps>((props) => {
  const { as, style, ...others } = props;

  const { aspect } = useContext(AspectRatioContext);

  const combinedStyle = useComputed$(() =>
    combineStyle({ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }, style)
  );

  const Component = as || (Primitive.div as unknown as 'div');

  return (
    <Component
      data-rilix-ui-aspect-ratio-content=""
      data-scope="aspect-ratio"
      data-part="content"
      data-aspect={aspect.value}
      style={combinedStyle.value}
      {...others}
    >
      <Slot />
    </Component>
  );
});
