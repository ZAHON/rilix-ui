import type { CollapsibleRootProps } from './collapsible-root.types';
import { component$, useId, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { useUncontrolled } from '@/hooks';
import { Render } from '@/_internal';
import { CollapsibleContext } from '../../contexts';

/**
 * Contains all the parts of a collapsible.
 * Renders a `<div>` element.
 */
export const CollapsibleRoot = component$<CollapsibleRootProps>((props) => {
  const { defaultOpen, open: _open, onOpenChange$, disabled: _disabled, ids: _ids, ...others } = props;

  const { state: open, setState$: setOpen$ } = useUncontrolled({
    uncontrolledValue: defaultOpen,
    controlledSignal: _open,
    onChange$: onOpenChange$,
    finalValue: false,
  });

  const id = useId();
  const disabled = useComputed$(() => _disabled ?? false);

  const ids = {
    panel: `rilix-ui-collapsible-panel-${id}`,
    ..._ids,
  };

  useContextProvider(CollapsibleContext, { open, setOpen$, disabled, ids });

  return (
    <Render
      as="div"
      data-rilix-ui-collapsible-root
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      state={{ open, disabled }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
