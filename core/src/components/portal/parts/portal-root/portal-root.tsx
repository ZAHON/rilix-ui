import type { PortalRootProps } from './portal-root.types';
import { component$, useSignal, useComputed$, useTask$, $, useContextProvider, Slot } from '@builder.io/qwik';
import { isDev, isServer, isBrowser } from '@builder.io/qwik/build';
import { composeRefs, combineStyle } from '@/utilities';
import { error, Render } from '@/_internal';
import { PortalContext } from '../../contexts';

/**
 * A robust component that leverages the native Popover API to display its children in the browser's top layer.
 * Renders a `<div>` element.
 */
export const PortalRoot = component$<PortalRootProps>((props) => {
  const { ref: _ref, open: _open, style, ...others } = props;

  const ref = useSignal<HTMLElement | undefined>(undefined);
  const open = useComputed$(() => _open?.value ?? false);

  if (isDev && isServer && open.value) {
    error(
      `The 'Portal' component cannot be open on the server because the 'Portal' component utilizes the Popover API, which is only available in a browser environment.`,
      `Ensure the value of the signal passed to the 'open' prop for the 'Portal.Root' component is false during SSR.`
    );
  }

  if (isDev && isBrowser && open.value && !('popover' in HTMLElement.prototype)) {
    error(
      `The 'Portal' component cannot be opened because the browser does not support the native Popover API.`,
      `Ensure you are using a browser with Popover API support.`
    );
  }

  useTask$(({ track, cleanup }) => {
    const isOpen = track(() => open.value);

    const rootRef = ref.value;

    if (isBrowser && isOpen && rootRef) {
      rootRef.showPopover();

      cleanup(() => {
        rootRef.hidePopover();
      });
    }
  });

  const setOpen$ = $((open: boolean) => {
    if (_open) {
      _open.value = open;
    }
  });

  useContextProvider(PortalContext, { open, setOpen$ });

  return (
    <Render
      as="div"
      ref={composeRefs([_ref, ref])}
      popover="manual"
      data-rilix-ui-portal-root
      data-state={open.value ? 'open' : 'closed'}
      style={combineStyle(
        {
          position: 'fixed',
          inset: 0,
          width: 'unset',
          height: 'unset',
          color: 'unset',
          backgroundColor: 'unset',
          margin: 'unset',
          padding: 'unset',
          border: 'unset',
          overflow: 'unset',
        },
        style
      )}
      state={{ open }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
