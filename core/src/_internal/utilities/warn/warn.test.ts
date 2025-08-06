import { describe, it, expect, vi, beforeEach } from 'vitest';
import { warn } from '.';

const mockConsoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

describe('warn', () => {
  beforeEach(() => {
    mockConsoleWarn.mockClear();
  });

  it('should log a simple warning message with the correct prefix', () => {
    warn('A simple test message.');

    expect(mockConsoleWarn).toHaveBeenCalledTimes(1);
    expect(mockConsoleWarn).toHaveBeenCalledWith('Rilix UI: A simple test message.');
  });

  it('should log the same message multiple times', () => {
    warn('Duplicate message.');
    warn('Duplicate message.');

    expect(mockConsoleWarn).toHaveBeenCalledTimes(2);
  });

  it('should join multiple string arguments into a single message', () => {
    warn('This', 'is', 'a', 'multi-part', 'message');

    expect(mockConsoleWarn).toHaveBeenCalledWith('Rilix UI: This is a multi-part message');
  });
});
