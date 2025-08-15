import { AspectRatioContentProps } from './aspect-ratio-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { combineStyle } from '@//utilities';

/**
 * Contains the content you want to constrain to a given ratio.
 * Renders a `<div>` element.
 */
export const AspectRatioContent = component$<AspectRatioContentProps>((props) => {
  const { style, ...others } = props;

  return (
    <Render
      as="div"
      data-rilix-ui-aspect-ratio-content=""
      data-scope="aspect-ratio"
      data-part="content"
      style={combineStyle(
        {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
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
