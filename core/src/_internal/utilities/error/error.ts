/**
 * Throws an error with a standardized "Rilix UI:" prefix.
 *
 * This utility function simplifies error handling by automatically
 * prepending a consistent prefix to all error messages originating
 * from the Rilix UI library.
 */
export const error = (...messages: string[]) => {
  const message = messages.join(' ');

  throw Error(`Rilix UI: ${message}`);
};
