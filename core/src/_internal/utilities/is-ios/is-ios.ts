import { getPlatform } from '../get-platform';

/**
 * Determines if the current Browse environment is an iOS device (iPhone, iPad, or Mac with touchscreen acting like an iPad).
 */
export const isIOS = () => {
  const platform = getPlatform();

  return (
    // Check if it's an iPhone
    /^iPhone/i.test(platform) ||
    // Check if it's an iPad
    /^iPad/i.test(platform) ||
    // Check if it's a Mac with a touchscreen (mimicking an iPad)
    (/^Mac/i.test(platform) && navigator.maxTouchPoints > 1)
  );
};
