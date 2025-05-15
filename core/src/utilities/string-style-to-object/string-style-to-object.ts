import type { CSSProperties } from '@builder.io/qwik';

/**
 * Converts inline CSS style string into a key-value object format.
 */
export const stringStyleToObject = (style: string) => {
  const styleWithoutComments = style.replace(/\/\*[\s\S]*?\*\//g, '');
  const extractCSSregex = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
  const object: Record<string, string> = {};

  let match: RegExpExecArray | null;

  while ((match = extractCSSregex.exec(styleWithoutComments))) {
    const property = match[1]!.trim();
    const value = match[2]!.trim();

    if (property.startsWith('--')) {
      object[property] = value;
    } else {
      object[property.replace(/-./g, (match) => match.charAt(1).toUpperCase())] = value;
    }
  }

  return object as CSSProperties;
};
