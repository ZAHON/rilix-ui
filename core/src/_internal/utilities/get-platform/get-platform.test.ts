import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getPlatform } from '.';

interface MockNavigator extends Navigator {
  userAgentData?: { platform: string | undefined };
  platform: string;
}

const originalNavigator = global.navigator;
const originalWindow = global.window;

describe('getPlatform', () => {
  beforeEach(() => {
    global.navigator = { ...originalNavigator } as MockNavigator;
    global.window = originalWindow;

    Object.defineProperty(global.navigator, 'userAgentData', {
      writable: true,
      value: undefined,
    });
    Object.defineProperty(global.navigator, 'platform', {
      writable: true,
      value: '',
    });
  });

  afterEach(() => {
    global.navigator = originalNavigator;
    global.window = originalWindow;
  });

  it('should return platform from userAgentData if available', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: 'macOS' };
    (global.navigator as MockNavigator).platform = 'Win32';
    expect(getPlatform()).toBe('macOS');
  });

  it('should return platform from navigator.platform if userAgentData is not available', () => {
    (global.navigator as MockNavigator).userAgentData = undefined;
    (global.navigator as MockNavigator).platform = 'Win32';
    expect(getPlatform()).toBe('Win32');
  });

  it('should return platform from navigator.platform if userAgentData.platform is undefined', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: undefined };
    (global.navigator as MockNavigator).platform = 'Linux x86_64';
    expect(getPlatform()).toBe('Linux x86_64');
  });

  it('should return an empty string if neither userAgentData nor navigator.platform are available (edge case)', () => {
    (global.navigator as MockNavigator).userAgentData = undefined;
    (global.navigator as MockNavigator).platform = '';
    expect(getPlatform()).toBe('');
  });

  it('should correctly identify Windows from userAgentData', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: 'Windows' };
    (global.navigator as MockNavigator).platform = 'MacIntel';
    expect(getPlatform()).toBe('Windows');
  });

  it('should correctly identify Linux from userAgentData', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: 'Linux' };
    (global.navigator as MockNavigator).platform = 'Linux x86_64';
    expect(getPlatform()).toBe('Linux');
  });

  it('should correctly identify Android from userAgentData', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: 'Android' };
    (global.navigator as MockNavigator).platform = 'Linux armv7l';
    expect(getPlatform()).toBe('Android');
  });

  it('should correctly identify iOS from userAgentData', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: 'iOS' };
    (global.navigator as MockNavigator).platform = 'iPhone';
    expect(getPlatform()).toBe('iOS');
  });

  it('should correctly identify Windows from navigator.platform (fallback)', () => {
    (global.navigator as MockNavigator).userAgentData = undefined;
    (global.navigator as MockNavigator).platform = 'Win32';
    expect(getPlatform()).toBe('Win32');
  });

  it('should correctly identify macOS from navigator.platform (fallback)', () => {
    (global.navigator as MockNavigator).userAgentData = undefined;
    (global.navigator as MockNavigator).platform = 'MacIntel';
    expect(getPlatform()).toBe('MacIntel');
  });

  it('should correctly identify iPhone from navigator.platform (fallback)', () => {
    (global.navigator as MockNavigator).userAgentData = undefined;
    (global.navigator as MockNavigator).platform = 'iPhone';
    expect(getPlatform()).toBe('iPhone');
  });

  it('should correctly identify iPad from navigator.platform (fallback)', () => {
    (global.navigator as MockNavigator).userAgentData = undefined;
    (global.navigator as MockNavigator).platform = 'iPad';
    expect(getPlatform()).toBe('iPad');
  });

  it('should return platform from navigator.platform even if userAgentData exists but platform is an empty string', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: '' };
    (global.navigator as MockNavigator).platform = 'Win32';
    expect(getPlatform()).toBe('');
  });

  it('should return an empty string if both userAgentData.platform and navigator.platform are empty strings', () => {
    (global.navigator as MockNavigator).userAgentData = { platform: '' };
    (global.navigator as MockNavigator).platform = '';
    expect(getPlatform()).toBe('');
  });

  it('should handle complex navigator.platform strings', () => {
    (global.navigator as MockNavigator).userAgentData = undefined;
    (global.navigator as MockNavigator).platform = 'Linux armv7l';
    expect(getPlatform()).toBe('Linux armv7l');
  });
});
