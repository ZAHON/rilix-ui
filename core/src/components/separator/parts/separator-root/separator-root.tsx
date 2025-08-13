import type { SeparatorRootProps } from './separator-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { Render } from '@/_internal';
import { SeparatorContext } from '../../contexts';

/**
 * The separator.
 * This component is based on the `div` element.
 */
export const SeparatorRoot = component$<SeparatorRootProps>((props) => {
  const { orientation: _orientation, decorative: _decorative, ...others } = props;

  const orientation = useComputed$(() => _orientation ?? 'horizontal');
  const decorative = useComputed$(() => _decorative ?? false);

  useContextProvider(SeparatorContext, { orientation, decorative });

  return (
    <Render
      as="div"
      role={decorative.value ? 'none' : 'separator'}
      aria-orientation={decorative.value ? undefined : orientation.value === 'vertical' ? 'vertical' : undefined}
      data-rilix-ui-separator-root
      data-orientation={orientation.value}
      state={{ orientation }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
