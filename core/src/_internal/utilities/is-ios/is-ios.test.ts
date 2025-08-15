import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getPlatform } from '../get-platform';
import { isIOS } from '.';

const originalNavigator = global.navigator;
const originalWindow = global.window;

vi.mock('../get-platform', () => ({
  getPlatform: vi.fn(),
}));

describe('isIOS', () => {
  beforeEach(() => {
    (getPlatform as ReturnType<typeof vi.fn>).mockClear();

    global.navigator = {
      ...originalNavigator,
      maxTouchPoints: 0,
    };
    global.window = originalWindow;
  });

  afterEach(() => {
    global.navigator = originalNavigator;
    global.window = originalWindow;
  });

  it('should return true for iPhone platform', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('iPhone');
    expect(isIOS()).toBe(true);
  });

  it('should return true for iPad platform', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('iPad');
    expect(isIOS()).toBe(true);
  });

  it('should return true for Mac platform with more than 1 touch point', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('MacIntel');
    Object.defineProperty(global.navigator, 'maxTouchPoints', {
      value: 2,
      writable: true,
    });
    expect(isIOS()).toBe(true);
  });

  it('should return true for Mac platform with more than 1 touch point', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('MacIntel');
    Object.defineProperty(global.navigator, 'maxTouchPoints', {
      value: 2,
      writable: true,
    });
    expect(isIOS()).toBe(true);
  });

  it('should return false for Mac platform with 0 touch points', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('MacIntel');
    Object.defineProperty(global.navigator, 'maxTouchPoints', {
      value: 0,
      writable: true,
    });
    expect(isIOS()).toBe(false);
  });

  it('should return false for Windows platform', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('Win32');
    expect(isIOS()).toBe(false);
  });

  it('should return false for Android platform', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('Android');
    expect(isIOS()).toBe(false);
  });

  it('should return false for Linux platform', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('Linux');
    expect(isIOS()).toBe(false);
  });

  it('should return false for an unknown platform', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('UnknownOS');
    expect(isIOS()).toBe(false);
  });

  it('should prioritize iPhone over maxTouchPoints for Mac', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('iPhone');
    Object.defineProperty(global.navigator, 'maxTouchPoints', {
      value: 5,
      writable: true,
    });
    expect(isIOS()).toBe(true);
  });

  it('should prioritize iPad over maxTouchPoints for Mac', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('iPad');
    Object.defineProperty(global.navigator, 'maxTouchPoints', {
      value: 5,
      writable: true,
    });
    expect(isIOS()).toBe(true);
  });

  it('should return false if platform is not Mac, iPhone, or iPad, even with touch points', () => {
    (getPlatform as ReturnType<typeof vi.fn>).mockReturnValue('Android');
    Object.defineProperty(global.navigator, 'maxTouchPoints', {
      value: 5,
      writable: true,
    });
    expect(isIOS()).toBe(false);
  });
});
