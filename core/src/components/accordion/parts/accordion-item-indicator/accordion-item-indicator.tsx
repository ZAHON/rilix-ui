import type { AccordionItemIndicatorProps } from './accordion-item-indicator.types';
import { component$, Slot } from '@builder.io/qwik';
import { combineStyle } from '@/utilities';
import { Render } from '@/_internal';
import { useAccordionContext, useAccordionItemContext } from '../../contexts';

/**
 * An optional visual indicator that reflects the accordion item's open or closed state.
 * It typically displays an icon or other visual cue to show the current status.
 * Renders a `<span>` element.
 */
export const AccordionItemIndicator = component$<AccordionItemIndicatorProps>((props) => {
  const { style, ...others } = props;

  const { orientation } = useAccordionContext();
  const { open, disabled } = useAccordionItemContext();

  return (
    <Render
      as="span"
      aria-hidden="true"
      data-rilix-ui-accordion-item-indicator
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      data-orientation={orientation.value}
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
