import type { LabelRootProps } from './label-root.types';
import { component$, sync$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the label.
 * This component is based on the `label` element.
 */
export const LabelRoot = component$<LabelRootProps>((props) => {
  const { as, preventDblClickTextSelection = true, onMouseDown$, ...others } = props;

  const handleMouseDownSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    // Only prevent text selection if clicking inside the label itself.
    const target = event.target as HTMLElement;
    if (target.closest('button, input, select, textarea')) return;

    // Prevent text selection when double clicking label.
    const preventDblClickTextSelection = currentTarget.hasAttribute('data-prevent-dbl-click-text-selection');
    if (preventDblClickTextSelection && !event.defaultPrevented && event.detail > 1) event.preventDefault();
  });

  const Component = as || 'label';

  return (
    <Component
      data-rilix-ui-label-root=""
      data-scope="label"
      data-part="root"
      data-prevent-dbl-click-text-selection={preventDblClickTextSelection ? '' : undefined}
      onMouseDown$={[handleMouseDownSync$, onMouseDown$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
