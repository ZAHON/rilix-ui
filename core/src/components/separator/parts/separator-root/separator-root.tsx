import type { SeparatorRootProps } from './separator-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { SeparatorContext } from '../../context';

/**
 * The separator.
 * This component is based on the `div` element.
 */
export const SeparatorRoot = component$<SeparatorRootProps>((props) => {
  const { orientation: _orientation = 'horizontal', decorative: _decorative, ...others } = props;

  const orientation = useComputed$(() => _orientation);
  const decorative = useComputed$(() => _decorative);

  useContextProvider(SeparatorContext, { orientation, decorative });

  return (
    <Render
      as="div"
      role={decorative.value ? 'none' : 'separator'}
      aria-orientation={decorative.value ? undefined : orientation.value === 'vertical' ? 'vertical' : undefined}
      data-rilix-ui-separator-root=""
      data-scope="separator"
      data-part="root"
      data-orientation={orientation}
      state={{ orientation, decorative }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
