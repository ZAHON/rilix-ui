import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getScrollDimensions } from '.';

describe('getScrollDimensions', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockElement = {} as any as HTMLElement;

    (mockElement as any).clientWidth = 100;
    (mockElement as any).clientHeight = 200;
    (mockElement as any).scrollLeft = 10;
    (mockElement as any).scrollTop = 20;
    (mockElement as any).scrollWidth = 300;
    (mockElement as any).scrollHeight = 400;

    (mockElement as any).getBoundingClientRect = () => ({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON: () => ({ x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 }),
    });
    (mockElement as any).addEventListener = vi.fn();
    (mockElement as any).removeEventListener = vi.fn();
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
