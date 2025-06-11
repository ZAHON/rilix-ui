import type { VisuallyHiddenRootProps } from './visually-hidden-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { combineStyle, visuallyHiddenStyle } from '@/utilities';

/**
 * Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
 * This component is based on the `span` element.
 */
export const VisuallyHiddenRoot = component$<VisuallyHiddenRootProps>((props) => {
  const { style, ...others } = props;

  return (
    <Render
      as="span"
      data-rilix-ui-visually-hidden-root=""
      data-scope="visually-hidden"
      data-part="root"
      style={combineStyle(visuallyHiddenStyle, style)}
      defaultRender$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
      {...others}
    />
  );
});
