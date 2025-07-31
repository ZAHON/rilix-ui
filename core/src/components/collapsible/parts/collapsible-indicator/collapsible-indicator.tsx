import type { CollapsibleIndicatorProps } from './collapsible-indicator.types';
import { component$, Slot } from '@builder.io/qwik';
import { combineStyle } from '@/utilities';
import { Render } from '@/_internal';
import { useCollapsibleContext } from '../../contexts';

/**
 * An optional visual indicator that reflects the collapsible's open or closed state.
 * It typically displays an icon or other visual cue to show the current status.
 * Renders a `<span>` element.
 */
export const CollapsibleIndicator = component$<CollapsibleIndicatorProps>((props) => {
  const { style, ...others } = props;

  const { open, disabled } = useCollapsibleContext();

  return (
    <Render
      as="span"
      aria-hidden="true"
      data-rilix-ui-collapsible-indicator
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      style={combineStyle({ pointerEvents: 'none' }, style)}
      defaultRender$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
      {...others}
    />
  );
});
