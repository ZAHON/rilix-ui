import type { LabelRootProps } from './label-root.types';
import { component$, useComputed$, sync$, useContextProvider, Slot } from '@builder.io/qwik';
import { Primitive } from '@/components';
import { LabelContext } from '../../context';

/**
 * Contains the content for the label.
 * This component is based on the `label` element.
 */
export const LabelRoot = component$<LabelRootProps>((props) => {
  const { as, preventDblClickTextSelection: _preventDblClickTextSelection = true, onMouseDown$, ...others } = props;

  const preventDblClickTextSelection = useComputed$(() => _preventDblClickTextSelection);

  const handleMouseDownSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    // Only prevent text selection if clicking inside the label itself.
    const target = event.target as HTMLElement;
    if (target.closest('button, input, select, textarea')) return;

    // Prevent text selection when double clicking label.
    const preventDblClickTextSelection = currentTarget.hasAttribute('data-prevent-dbl-click-text-selection');
    if (preventDblClickTextSelection && !event.defaultPrevented && event.detail > 1) event.preventDefault();
  });

  useContextProvider(LabelContext, { preventDblClickTextSelection });

  const Component = as || (Primitive.label as unknown as 'label');

  return (
    <Component
      data-rilix-ui-label-root=""
      data-scope="label"
      data-part="root"
      data-prevent-dbl-click-text-selection={preventDblClickTextSelection.value ? '' : undefined}
      onMouseDown$={[onMouseDown$, handleMouseDownSync$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
