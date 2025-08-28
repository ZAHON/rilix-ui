import type { MockInstance } from 'vitest';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getPaddingProperty } from '.';

describe('getPaddingProperty', () => {
  let getBoundingClientRectSpy: MockInstance;
  let scrollLeftSpy: MockInstance;

  beforeEach(() => {
    getBoundingClientRectSpy = vi.spyOn(document.documentElement, 'getBoundingClientRect');
    scrollLeftSpy = vi.spyOn(document.documentElement, 'scrollLeft', 'get');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return "paddingLeft" when scrollbarX is positive', () => {
    getBoundingClientRectSpy.mockReturnValue({ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 });
    scrollLeftSpy.mockReturnValue(100);

    expect(getPaddingProperty()).toBe('paddingLeft');
  });

  it('should return "paddingLeft" when documentLeft is negative', () => {
    getBoundingClientRectSpy.mockReturnValue({ left: -50, top: 0, right: 0, bottom: 0, width: 0, height: 0 });
    scrollLeftSpy.mockReturnValue(0);

    expect(getPaddingProperty()).toBe('paddingLeft');
  });

  it('should return "paddingRight" when scrollbarX is zero', () => {
    getBoundingClientRectSpy.mockReturnValue({ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 });
    scrollLeftSpy.mockReturnValue(0);

    expect(getPaddingProperty()).toBe('paddingRight');
  });

  it('should return "paddingRight" when scrollbarX is very small and rounds to zero', () => {
    getBoundingClientRectSpy.mockReturnValue({ left: 0.4, top: 0, right: 0, bottom: 0, width: 0, height: 0 });
    scrollLeftSpy.mockReturnValue(0);

    expect(getPaddingProperty()).toBe('paddingRight');
  });

  it('should return "paddingLeft" when scrollbarX is small but rounds to one or more', () => {
    getBoundingClientRectSpy.mockReturnValue({ left: 0.5, top: 0, right: 0, bottom: 0, width: 0, height: 0 });
    scrollLeftSpy.mockReturnValue(0);

    expect(getPaddingProperty()).toBe('paddingLeft');
  });
});
