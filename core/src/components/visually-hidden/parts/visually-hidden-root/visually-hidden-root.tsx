import type { VisuallyHiddenRootProps } from './visually-hidden-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { combineStyle, visuallyHiddenStyle } from '@/utilities';

/**
 * Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
 * Renders a `<span>` element.
 */
export const VisuallyHiddenRoot = component$<VisuallyHiddenRootProps>((props) => {
  const { style, ...others } = props;

  return (
    <Render
      as="span"
      data-rilix-ui-visually-hidden-root
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
