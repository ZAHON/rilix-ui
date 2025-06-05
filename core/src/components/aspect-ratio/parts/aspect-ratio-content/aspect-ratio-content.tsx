import { AspectRatioContentProps } from './aspect-ratio-content.types';
import { component$, useContext, useComputed$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { combineStyle } from '@//utilities';
import { AspectRatioContext } from '../../context';

/**
 * Contains the content you want to constrain to a given ratio.
 * This component is based on the `div` element.
 */
export const AspectRatioContent = component$<AspectRatioContentProps>((props) => {
  const { style, ...others } = props;

  const { aspect } = useContext(AspectRatioContext);

  const combinedStyle = useComputed$(() =>
    combineStyle({ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }, style)
  );

  return (
    <Render
      as="div"
      data-rilix-ui-aspect-ratio-content=""
      data-scope="aspect-ratio"
      data-part="content"
      data-aspect={aspect.value}
      style={combinedStyle.value}
      state={{ aspect }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
