import type { PropsOf, Component } from '@builder.io/qwik';

export interface LinkRootProps extends PropsOf<'a'> {
  /**
   * The component that this component should render as.
   */
  as?: Component;

  /**
   * The URL that the hyperlink points to.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#href).
   */
  href?: string;

  /**
   * Used to identify the link as the currently active page.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current#page).
   */
  active?: boolean;

  /**
   * Whether the link is disabled.
   * Native navigation will be disabled, and the link will be exposed as disabled to assistive technology.
   */
  disabled?: boolean;
}
