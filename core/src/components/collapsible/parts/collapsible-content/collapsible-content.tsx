import type { CollapsibleContentProps } from './collapsible-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { combineStyle } from '@/utilities';
import { Render } from '@/_internal';
import { useCollapsibleContext, useCollapsiblePanelContext } from '../../contexts';

/**
 * The component that contains the collapsible content.
 * Must be nested inside `Collapsible.Panel`.
 * Renders a `<div>` element.
 */
export const CollapsibleContent = component$<CollapsibleContentProps>((props) => {
  const { style, ...others } = props;

  const { open, disabled } = useCollapsibleContext();
  const { isContentOverflowHidden } = useCollapsiblePanelContext();

  return (
    <Render
      as="div"
      data-rilix-ui-collapsible-content
      data-state={open.value ? 'open' : 'closed'}
      data-disabled={disabled.value ? '' : undefined}
      style={combineStyle({ overflow: isContentOverflowHidden.value ? 'hidden' : undefined }, style)}
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
