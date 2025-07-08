import { describe, it, expect, beforeEach, vi, beforeAll, afterAll } from 'vitest';
import { isScrollContainer } from '.';

const mockGetComputedStyle = vi.fn();
let currentTagName: string;

beforeAll(() => {
  global.getComputedStyle = mockGetComputedStyle;
});

afterAll(() => {
  delete (global as any).getComputedStyle;
});

describe('isScrollContainer', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockGetComputedStyle.mockClear();
    currentTagName = 'DIV';

    mockElement = {
      get tagName() {
        return currentTagName;
      },
    } as HTMLElement;

    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'visible',
    });
  });

  it('should return true if overflowX is "scroll" for "x" axis', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'scroll',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'x' });
    expect(result).toBe(true);
  });

  it('should return true if overflowX is "auto" for "x" axis', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'auto',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'x' });
    expect(result).toBe(true);
  });

  it('should return false if overflowX is "visible" for "x" axis on non-HTML element', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'x' });
    expect(result).toBe(false);
  });

  it('should return false if overflowX is "hidden" for "x" axis', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'hidden',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'x' });
    expect(result).toBe(false);
  });

  it('should return true if overflowY is "scroll" for "y" axis', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'scroll',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'y' });
    expect(result).toBe(true);
  });

  it('should return true if overflowY is "auto" for "y" axis', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'auto',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'y' });
    expect(result).toBe(true);
  });

  it('should return false if overflowY is "visible" for "y" axis on non-HTML element', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'y' });
    expect(result).toBe(false);
  });

  it('should return false if overflowY is "hidden" for "y" axis', () => {
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'hidden',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'y' });
    expect(result).toBe(false);
  });

  it('should return true for HTML element with overflowX "visible" for "x" axis', () => {
    currentTagName = 'HTML';
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'x' });
    expect(result).toBe(true);
  });

  it('should return true for HTML element with overflowY "visible" for "y" axis', () => {
    currentTagName = 'HTML';
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'y' });
    expect(result).toBe(true);
  });

  it('should return false for HTML element with overflowX "hidden" for "x" axis', () => {
    currentTagName = 'HTML';
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'hidden',
      overflowY: 'visible',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'x' });
    expect(result).toBe(false);
  });

  it('should return false for HTML element with overflowY "hidden" for "y" axis', () => {
    currentTagName = 'HTML';
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'visible',
      overflowY: 'hidden',
    });
    const result = isScrollContainer({ element: mockElement, axis: 'y' });
    expect(result).toBe(false);
  });

  it('should handle mixed overflow styles', () => {
    currentTagName = 'DIV';
    mockGetComputedStyle.mockReturnValue({
      overflowX: 'scroll',
      overflowY: 'hidden',
    });
    let result = isScrollContainer({ element: mockElement, axis: 'x' });
    expect(result).toBe(true);
    result = isScrollContainer({ element: mockElement, axis: 'y' });
    expect(result).toBe(false);
  });
});
