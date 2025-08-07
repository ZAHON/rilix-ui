import type { AccordionRootProps } from './accordion-root.types';
import { component$, useSignal, useComputed$, useTask$, $, useContextProvider, Slot } from '@builder.io/qwik';
import { isDev, isBrowser } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities';
import { useUncontrolled, useArrowNavigation } from '@/hooks';
import { error, Render } from '@/_internal';
import { AccordionContext } from '../../contexts';

/**
 * Contains all the parts of an accordion.
 * Renders a `<div>` element.
 */
export const AccordionRoot = component$<AccordionRootProps>((props) => {
  const {
    ref: _ref,
    type: _type,
    defaultValue,
    value: _value,
    onValueChange$,
    collapsible: _collapsible,
    arrowNavigation: _arrowNavigation,
    loop: _loop,
    disabled: _disabled,
    dir: _dir,
    orientation: _orientation,
    onFocusIn$,
    ...others
  } = props;

  const { state: value, setState$: setValue$ } = useUncontrolled({
    uncontrolledValue: defaultValue,
    controlledSignal: _value,
    onChange$: onValueChange$,
    finalValue: [],
  });

  const ref = useSignal<HTMLElement | undefined>(undefined);
  const type = useComputed$(() => _type);
  const collapsible = useComputed$(() => _collapsible ?? false);
  const arrowNavigation = useComputed$(() => _arrowNavigation ?? true);
  const loop = useComputed$(() => _loop ?? true);
  const disabled = useComputed$(() => _disabled ?? false);
  const dir = useComputed$(() => _dir ?? 'ltr');
  const orientation = useComputed$(() => _orientation ?? 'vertical');

  const { activate$: activateArrowNavigation$, deactivate$: deactivateArrowNavigation$ } = useArrowNavigation({
    element: ref,
    itemSelectors: '[data-rilix-ui-accordion-item-trigger]',
    loop: loop,
    dir: dir,
    orientation: orientation,
  });

  useTask$(({ track }) => {
    const _disabled = track(() => disabled.value);
    const _arrowNavigation = track(() => arrowNavigation.value);

    if (isBrowser && _arrowNavigation) {
      if (_disabled) {
        deactivateArrowNavigation$();
      } else {
        activateArrowNavigation$();
      }
    }
  });

  if (isDev && type.value === 'single' && value.value.length > 1) {
    error(
      `When 'type' is "single", 'Accordion.Root' component expects at most one item to be open.`,
      `Multiple items were provided.`
    );
  }

  const handleFocusIn$ = $((event: FocusEvent) => {
    if (!event.defaultPrevented && !disabled.value && arrowNavigation.value) {
      activateArrowNavigation$();
    }
  });

  const handleItemOpen$ = $((itemValue: string) => {
    if (type.value === 'single') {
      setValue$([itemValue]);
    }

    if (type.value === 'multiple') {
      setValue$([...value.value, itemValue]);
    }
  });

  const handleItemClose$ = $((itemValue: string) => {
    if (type.value === 'single' && collapsible.value) {
      setValue$([]);
    }

    if (type.value === 'multiple') {
      setValue$(value.value.filter((value) => value !== itemValue));
    }
  });

  useContextProvider(AccordionContext, {
    value,
    setValue$,
    type,
    collapsible,
    arrowNavigation,
    loop,
    disabled,
    dir,
    orientation,
    onItemOpen$: handleItemOpen$,
    onItemClose$: handleItemClose$,
  });

  return (
    <Render
      as="div"
      ref={composeRefs([_ref, ref])}
      data-rilix-ui-accordion-root
      data-disabled={disabled.value ? '' : undefined}
      data-orientation={orientation.value}
      onFocusIn$={[onFocusIn$, handleFocusIn$]}
      state={{ value, disabled }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
