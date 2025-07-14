import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { isElementVisible } from '.';

describe('isElementVisible', () => {
  let originalGetComputedStyle: (elt: Element, pseudoElt?: string | null) => CSSStyleDeclaration;

  beforeEach(() => {
    originalGetComputedStyle = window.getComputedStyle;
    vi.spyOn(window, 'getComputedStyle').mockImplementation((element: Element) => {
      if (!element) {
        return { display: 'none', visibility: 'hidden', opacity: '0' } as CSSStyleDeclaration;
      }

      const mockStyle = {
        display: 'block',
        visibility: 'visible',
        opacity: '1',
      } as CSSStyleDeclaration;

      const htmlElement = element as HTMLElement;

      for (let i = 0; i < htmlElement.style.length; i++) {
        const prop = htmlElement.style[i];
        (mockStyle as any)[prop] = htmlElement.style.getPropertyValue(prop);
      }

      return mockStyle;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    window.getComputedStyle = originalGetComputedStyle;
  });

  const createMockElement = (
    offsetWidth: number,
    offsetHeight: number,
    clientRects: DOMRect[] = [],
    styles: Partial<CSSStyleDeclaration> = {}
  ) => {
    const element = document.createElement('div');

    Object.defineProperty(element, 'offsetWidth', {
      value: offsetWidth,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(element, 'offsetHeight', {
      value: offsetHeight,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(element, 'getClientRects', {
      value: vi.fn(() => clientRects),
      writable: true,
      configurable: true,
    });

    const htmlElement = element as HTMLElement;

    for (const key in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, key)) {
        (htmlElement.style as any)[key] = (styles as any)[key];
      }
    }

    return htmlElement;
  };

  it('should return true when element has positive offsetWidth', () => {
    const element = createMockElement(100, 0);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true when element has positive offsetHeight', () => {
    const element = createMockElement(0, 50);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true when element has both positive offsetWidth and offsetHeight', () => {
    const element = createMockElement(100, 50);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true when element has client rectangles even with zero dimensions', () => {
    const clientRects = [{ width: 10, height: 10, top: 0, left: 0, right: 10, bottom: 10 } as DOMRect];
    const element = createMockElement(0, 0, clientRects);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true when element has multiple client rectangles', () => {
    const clientRects = [
      { width: 10, height: 10, top: 0, left: 0, right: 10, bottom: 10 } as DOMRect,
      { width: 20, height: 20, top: 20, left: 20, right: 40, bottom: 40 } as DOMRect,
    ];
    const element = createMockElement(0, 0, clientRects);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true when only offsetWidth is positive and offsetHeight is negative', () => {
    const element = createMockElement(100, -10);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true when only offsetHeight is positive and offsetWidth is negative', () => {
    const element = createMockElement(-10, 100);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true for element with dimensions and default styles', () => {
    const element = createMockElement(1, 1);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true for element with 1px width and height', () => {
    const element = createMockElement(1, 1);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return true for an inline element that gets client rects', () => {
    const span = document.createElement('span');
    Object.defineProperty(span, 'offsetWidth', { value: 50 });
    Object.defineProperty(span, 'offsetHeight', { value: 20 });
    Object.defineProperty(span, 'getClientRects', {
      value: vi.fn(() => [{ width: 50, height: 20 } as DOMRect]),
    });
    vi.spyOn(window, 'getComputedStyle').mockImplementationOnce(
      () =>
        ({
          display: 'inline',
          visibility: 'visible',
          opacity: '1',
        }) as CSSStyleDeclaration
    );
    expect(isElementVisible(span)).toBe(true);
  });

  it('should return false when element has zero dimensions and no client rectangles', () => {
    const element = createMockElement(0, 0);
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return false when element has negative offsetWidth and offsetHeight', () => {
    const element = createMockElement(-10, -5);
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return false when element display style is "none"', () => {
    const element = createMockElement(100, 100, [], { display: 'none' });
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return false when element visibility style is "hidden"', () => {
    const element = createMockElement(100, 100, [], { visibility: 'hidden' });
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return false when element has display:none even if it has dimensions', () => {
    const element = createMockElement(100, 100, [{ width: 10, height: 10 } as DOMRect], { display: 'none' });
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return false when element has visibility:hidden even if it has dimensions', () => {
    const element = createMockElement(100, 100, [{ width: 10, height: 10 } as DOMRect], { visibility: 'hidden' });
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return false for element with zero offsetWidth, zero offsetHeight, and empty client rectangles array', () => {
    const element = createMockElement(0, 0, []);
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return true if element has "content-visibility: hidden"', () => {
    const element = createMockElement(100, 100, [{ width: 10, height: 10 } as DOMRect], {
      contentVisibility: 'hidden',
    } as any);
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return false if element has "hidden" attribute', () => {
    const element = createMockElement(100, 100, [{ width: 10, height: 10 } as DOMRect]);
    element.hidden = true;
    vi.spyOn(window, 'getComputedStyle').mockImplementationOnce(
      () =>
        ({
          display: 'none',
          visibility: 'visible',
          opacity: '1',
        }) as CSSStyleDeclaration
    );
    expect(isElementVisible(element)).toBe(false);
  });

  it('should return false for an element within a parent with display: none', () => {
    const parent = createMockElement(0, 0, [], { display: 'none' });
    const child = createMockElement(100, 100, [{ width: 10, height: 10 } as DOMRect]);
    parent.appendChild(child);

    vi.spyOn(window, 'getComputedStyle').mockImplementationOnce((elem: Element) => {
      if (elem === child) {
        return { display: 'none', visibility: 'visible', opacity: '1' } as CSSStyleDeclaration;
      }
      return { display: 'block', visibility: 'visible', opacity: '1' } as CSSStyleDeclaration;
    });

    expect(isElementVisible(child)).toBe(false);
  });

  it('should return false for an element within a parent with visibility: hidden', () => {
    const parent = createMockElement(0, 0, [], { visibility: 'hidden' });
    const child = createMockElement(100, 100, [{ width: 10, height: 10 } as DOMRect]);
    parent.appendChild(child);

    vi.spyOn(window, 'getComputedStyle').mockImplementationOnce((elem: Element) => {
      if (elem === child) {
        return { display: 'block', visibility: 'hidden', opacity: '1' } as CSSStyleDeclaration;
      }
      return { display: 'block', visibility: 'visible', opacity: '1' } as CSSStyleDeclaration;
    });

    expect(isElementVisible(child)).toBe(false);
  });

  it('should return true for an element with opacity 0', () => {
    const element = createMockElement(100, 100, [{ width: 10, height: 10 } as DOMRect], { opacity: '0' });
    expect(isElementVisible(element)).toBe(true);
  });

  it('should return false for an element with empty text content and zero dimensions (e.g., an empty div)', () => {
    const div = document.createElement('div');
    Object.defineProperty(div, 'offsetWidth', { value: 0 });
    Object.defineProperty(div, 'offsetHeight', { value: 0 });
    Object.defineProperty(div, 'getClientRects', { value: vi.fn(() => []) });

    vi.spyOn(window, 'getComputedStyle').mockImplementationOnce(
      () =>
        ({
          display: 'block',
          visibility: 'visible',
          opacity: '1',
        }) as CSSStyleDeclaration
    );

    expect(isElementVisible(div)).toBe(false);
  });
});
