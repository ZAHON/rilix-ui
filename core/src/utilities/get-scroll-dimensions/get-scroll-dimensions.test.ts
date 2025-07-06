import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getScrollDimensions } from '.';

let mockIsDev = false;
let mockIsServer = false;

vi.mock('@builder.io/qwik/build', () => ({
  get isDev() {
    return mockIsDev;
  },
  get isServer() {
    return mockIsServer;
  },
}));

describe('getScrollDimensions', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockIsDev = false;
    mockIsServer = false;

    mockElement = {
      clientWidth: 100,
      clientHeight: 200,
      scrollLeft: 10,
      scrollTop: 20,
      scrollWidth: 300,
      scrollHeight: 400,
    } as any;
  });

  it('should return correct dimensions for "x" axis', () => {
    const dimensions = getScrollDimensions({ element: mockElement, axis: 'x' });

    expect(dimensions).toEqual({
      clientSize: mockElement.clientWidth,
      scrollOffset: mockElement.scrollLeft,
      scrollSize: mockElement.scrollWidth,
    });
  });

  it('should return correct dimensions for "y" axis', () => {
    const dimensions = getScrollDimensions({ element: mockElement, axis: 'y' });

    expect(dimensions).toEqual({
      clientSize: mockElement.clientHeight,
      scrollOffset: mockElement.scrollTop,
      scrollSize: mockElement.scrollHeight,
    });
  });

  it('should not throw an error when not in development mode (production build on server)', () => {
    mockIsDev = false;
    mockIsServer = true;

    expect(() => getScrollDimensions({ element: mockElement, axis: 'x' })).not.toThrow();
  });

  it('should not throw an error when on client-side (development mode on client)', () => {
    mockIsDev = true;
    mockIsServer = false;

    expect(() => getScrollDimensions({ element: mockElement, axis: 'x' })).not.toThrow();
  });

  it('should return zero dimensions when element properties are zero for "x" axis', () => {
    (mockElement as any).clientWidth = 0;
    (mockElement as any).scrollLeft = 0;
    (mockElement as any).scrollWidth = 0;

    const dimensions = getScrollDimensions({ element: mockElement, axis: 'x' });
    expect(dimensions).toEqual({
      clientSize: 0,
      scrollOffset: 0,
      scrollSize: 0,
    });
  });

  it('should return zero dimensions when element properties are zero for "y" axis', () => {
    (mockElement as any).clientHeight = 0;
    (mockElement as any).scrollTop = 0;
    (mockElement as any).scrollHeight = 0;

    const dimensions = getScrollDimensions({ element: mockElement, axis: 'y' });
    expect(dimensions).toEqual({
      clientSize: 0,
      scrollOffset: 0,
      scrollSize: 0,
    });
  });

  it('should return correct dimensions when there is no horizontal scroll', () => {
    (mockElement as any).clientWidth = 500;
    (mockElement as any).scrollLeft = 0;
    (mockElement as any).scrollWidth = 500;

    const dimensions = getScrollDimensions({ element: mockElement, axis: 'x' });
    expect(dimensions).toEqual({
      clientSize: 500,
      scrollOffset: 0,
      scrollSize: 500,
    });
  });

  it('should return correct dimensions when there is no vertical scroll', () => {
    (mockElement as any).clientHeight = 600;
    (mockElement as any).scrollTop = 0;
    (mockElement as any).scrollHeight = 600;

    const dimensions = getScrollDimensions({ element: mockElement, axis: 'y' });
    expect(dimensions).toEqual({
      clientSize: 600,
      scrollOffset: 0,
      scrollSize: 600,
    });
  });

  it('should return correct dimensions with large values for "x" axis', () => {
    (mockElement as any).clientWidth = 1000;
    (mockElement as any).scrollLeft = 500;
    (mockElement as any).scrollWidth = 2000;

    const dimensions = getScrollDimensions({ element: mockElement, axis: 'x' });
    expect(dimensions).toEqual({
      clientSize: 1000,
      scrollOffset: 500,
      scrollSize: 2000,
    });
  });

  it('should return correct dimensions with large values for "y" axis', () => {
    (mockElement as any).clientHeight = 1500;
    (mockElement as any).scrollTop = 750;
    (mockElement as any).scrollHeight = 3000;

    const dimensions = getScrollDimensions({ element: mockElement, axis: 'y' });
    expect(dimensions).toEqual({
      clientSize: 1500,
      scrollOffset: 750,
      scrollSize: 3000,
    });
  });
});
