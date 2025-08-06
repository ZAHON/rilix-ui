/**
 * Displays a warning message in the console.
 *
 * This function is a wrapper around `console.warn` that automatically
 * prepends the "Rilix UI:" prefix to the message for easy identification
 * of warnings coming from the Rilix UI library.
 *
 */
export const warn = (...messages: string[]) => {
  const message = messages.join(' ');

  console.warn(`Rilix UI: ${message}`);
};
