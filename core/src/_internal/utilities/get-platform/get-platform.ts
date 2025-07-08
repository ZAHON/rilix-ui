/**
 * Detects and returns the platform on which the browser is running.
 *
 * This utility function prioritizes the modern `navigator.userAgentData.platform`
 * property for more accurate and privacy-respecting platform detection.
 * If `userAgentData` is not available (e.g., in older browsers or certain environments),
 * it falls back to the legacy `navigator.platform` property.
 */
export const getPlatform = () => {
  const agent = (navigator as any).userAgentData as { platform: string } | undefined;
  return agent?.platform ?? navigator.platform;
};
