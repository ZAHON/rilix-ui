import type { CollapsibleRootProps } from './collapsible-root.types';
import { component$, useId, useComputed$, useConstant, useContextProvider, Slot } from '@builder.io/qwik';
import { useUncontrolled } from '@/hooks';
import { combineStyle } from '@/utilities';
import { Render } from '@/_internal';
import { CollapsibleContext } from '../../contexts';

/**
 * Contains all the parts of a collapsible.
 * Renders a `<div>` element.
 *
 * @example
 * ```tsx
 * <Collapsible.Root>
 * 	<Collapsible.Header>
 * 		<Collapsible.Trigger>
 * 			<Collapsible.Indicator />
 * 		</Collapsible.Trigger>
 * 	</Collapsible.Header>
 * 	<Collapsible.Panel>
 * 		<Collapsible.Content />
 * 	</Collapsible.Panel>
 * </Collapsible.Root>
 * ```
 */
export const CollapsibleRoot = component$<CollapsibleRootProps>((props) => {
  const { defaultOpen, open: _open, onOpenChange$, disabled: _disabled, ids: _ids, style, ...others } = props;

  const { state: open, setState$: setOpen$ } = useUncontrolled({
    uncontrolledValue: defaultOpen,
    controlledSignal: _open,
    onChange$: onOpenChange$,
    finalValue: false,
  });

  const id = useId();
  const disabled = useComputed$(() => _disabled ?? false);

  const ids = useConstant(() => ({
    trigger: `rilix-ui-collapsible-trigger-${id}`,
    panel: `rilix-ui-collapsible-panel-${id}`,
    ..._ids,
  }));

  useContextProvider(CollapsibleContext, { open, setOpen$, disabled, ids });

  return (
    <Render
      as="div"
      data-rilix-ui-collapsible-root
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      style={combineStyle(
        {
          // Performance optimization
          // The `contain: layout style;` CSS property is used here to improve rendering performance.
          // `contain: layout;` tells the browser that the internal layout of this component
          // is self-contained and does not affect the layout of elements outside of it. This prevents
          // costly re-calculations of the entire page layout when the collapsible panel expands or collapses,
          // which is especially beneficial during animations.
          // `contain: style;` ensures that CSS properties that can affect the rest of the page,
          // like counters, are isolated to this element.
          // Together, these properties create a performance "bubble," allowing the browser to optimize
          // rendering by treating the collapsible component as an independent unit.
          contain: 'layout style',
        },
        style
      )}
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
