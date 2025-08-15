import type { LabelRootProps } from './label-root.types';
import { component$, useComputed$, sync$, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { LabelContext } from '../../contexts';

/**
 * Contains the content for the label.
 * Renders a <label> element.
 */
export const LabelRoot = component$<LabelRootProps>((props) => {
  const { preventDblClickTextSelection: _preventDblClickTextSelection, onMouseDown$, ...others } = props;

  const preventDblClickTextSelection = useComputed$(() => _preventDblClickTextSelection ?? true);

  const handleMouseDownSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    // Only prevent text selection if clicking inside the label itself.
    const target = event.target as HTMLElement;
    if (target.closest('button, input, select, textarea')) return;

    // Prevent text selection when double clicking label.
    const preventDblClickTextSelection = currentTarget.hasAttribute('data-prevent-dbl-click-text-selection');
    if (preventDblClickTextSelection && !event.defaultPrevented && event.detail > 1) event.preventDefault();
  });

  useContextProvider(LabelContext, { preventDblClickTextSelection });

  return (
    <Render
      as="label"
      data-rilix-ui-label-root=""
      onMouseDown$={[onMouseDown$, handleMouseDownSync$]}
      defaultRender$={(props) => (
        <label {...props}>
          <Slot />
        </label>
      )}
      {...others}
    />
  );
});
