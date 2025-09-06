# Closed components

Learn how to create reusable components using the example of an avatar.

## Motivation

Writing a few lines of code every time you need a simple `Avatar` is tedious. Creating a dedicated component encapsulates logic, simplifies the API, ensures consistent usage, and maintains clean code. This approach enhances reusability, making the component easier to maintain and test.

By extracting the `Avatar` component, we centralize its functionality. This means that any updates or improvements to how avatars are displayed or handled (like image loading strategies or fallback mechanisms) only need to be made in one place. This not only saves development time but also ensures a uniform and professional look across your entire application. It's about building robust, maintainable, and scalable UI elements that contribute to a better developer experience and a polished user interface.

Here's an example of an `Avatar` component that can be used consistently across your application:

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, useComputed$ } from '@builder.io/qwik';
import { Avatar as RilixAvatar } from 'rilix-ui';

export interface AvatarProps extends RilixAvatar.RootProps {
  /**
   * The name used to generate initials for the avatar when no `src` is provided.
   * Can be a single word (e.g., `"Christian"`) or multiple words (e.g., `"Colm Tuite"`).
   * If the name is not provided or is invalid, a default person icon will be shown.
   */
  name?: string;

  /**
   * The URL of the avatar image. If provided, this image will be displayed.
   * If not provided or invalid, initials will be generated from the `name` prop,
   * or a default person icon will be shown if `name` is also unavailable.
   */
  src?: string;
}

export const Avatar = component$<AvatarProps>((props) => {
  const { name, src, ...others } = props;

  const initials = useComputed$(() => getInitials(name));

  return (
    <RilixAvatar.Root {...others}>
      <RilixAvatar.Image src={src} alt={name} />
      <RilixAvatar.Fallback>{initials.value || <PersonIcon />}</RilixAvatar.Fallback>
    </RilixAvatar.Root>
  );
});

const PersonIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});

/**
 * Generates initials from a given `name` string for avatar display.
 *
 * - Single word name: If the `name` is a single word (e.g., `"Christian"`), it returns the first two letters in uppercase (e.g., `"CH"`). If the word is only one letter long (e.g., `"A"`), it returns that letter in uppercase (e.g., `"A"`).
 * - Multiple word name: If the `name` consists of multiple words (e.g., `"Colm Tuite"`), it returns the first letter of each word in uppercase, joined together (e.g., `"CT"`).
 * - No name provided: If the `name` is not provided, is an empty string, or is not a valid string, it returns an empty string (`""`).
 */
const getInitials = (name?: string) => {
  if (!name || typeof name !== 'string') {
    return '';
  }

  const words = name.trim().split(/\s+/);

  if (words.length === 0 || words[0] === '') {
    return '';
  }

  if (words.length === 1) {
    const word = words[0];

    if (word.length === 1) {
      return word.toUpperCase();
    }

    return word.substring(0, 2).toUpperCase();
  }

  return words.map((word) => word.charAt(0).toUpperCase()).join('');
};
```

## Usage

To use the `Avatar` component, you can pass the `name` and `src` props. The `src` prop is used for the image URL, and the `name` prop is used to generate initials if the image is not available or if you choose not to provide one.

Here's an example of how to use the `Avatar` component:

```tsx
<Avatar name="Colm Tuite" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=64&h=64&dpr=2&q=80" />
```
