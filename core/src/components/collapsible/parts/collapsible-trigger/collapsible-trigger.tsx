import type { CollapsibleTriggerProps } from './collapsible-trigger.types';
import { component$, $, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { useCollapsibleContext } from '../../contexts';

/**
 * The button that toggles the collapsible.
 * Renders a `<button>` element.
 */
export const CollapsibleTrigger = component$<CollapsibleTriggerProps>((props) => {
  const { onClick$, ...others } = props;

  const { open, setOpen$, disabled, ids } = useCollapsibleContext();

  const handleClick$ = $((event: PointerEvent) => {
    if (!event.defaultPrevented && !disabled.value) {
      setOpen$(!open.value);
    }
  });

  return (
    <Render
      as="button"
      type="button"
      disabled={disabled.value}
      aria-controls={ids.panel}
      aria-expanded={ids.panel ? open.value : undefined}
      data-rilix-ui-collapsible-trigger
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      state={{ open, disabled }}
      defaultRender$={(props) => (
        <button {...props}>
          <Slot />
        </button>
      )}
      {...others}
    />
  );
});
