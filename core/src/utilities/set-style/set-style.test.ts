import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { setStyle } from '.';

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

describe('setStyle', () => {
  let element: HTMLElement;

  beforeEach(() => {
    mockIsDev = false;
    mockIsServer = false;

    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (element.parentNode === document.body) {
      document.body.removeChild(element);
    }
  });

  it('should apply the specified styles to the element', () => {
    setStyle({
      element,
      style: {
        color: 'red',
        fontSize: '16px',
      },
    });

    expect(element.style.color).toBe('red');
    expect(element.style.fontSize).toBe('16px');
  });

  it('should return a function to revert the styles', () => {
    const revert = setStyle({
      element,
      style: {
        backgroundColor: 'blue',
      },
    });

    expect(element.style.backgroundColor).toBe('blue');

    revert();

    expect(element.style.backgroundColor).not.toBe('blue');
    expect(element.style.backgroundColor).toBe('');
  });

  it('should restore original styles if they existed', () => {
    element.style.setProperty('padding', '10px');

    const revert = setStyle({
      element,
      style: {
        padding: '20px',
        margin: '5px',
      },
    });

    expect(element.style.padding).toBe('20px');
    expect(element.style.margin).toBe('5px');

    revert();

    expect(element.style.padding).toBe('10px');
    expect(element.style.margin).toBe('');
  });

  it('should remove the "style" attribute if all styles are removed', () => {
    const revert = setStyle({
      element,
      style: {
        color: 'green',
      },
    });

    expect(element.hasAttribute('style')).toBe(true);
    expect(element.style.color).toBe('green');

    revert();

    expect(element.hasAttribute('style')).toBe(false);
    expect(element.style.color).toBe('');
  });

  it('should handle multiple calls without interfering', () => {
    const revert1 = setStyle({
      element,
      style: {
        width: '100px',
      },
    });

    const revert2 = setStyle({
      element,
      style: {
        height: '50px',
      },
    });

    expect(element.style.width).toBe('100px');
    expect(element.style.height).toBe('50px');

    revert2();
    expect(element.style.width).toBe('100px');
    expect(element.style.height).toBe('');

    revert1();
    expect(element.style.width).toBe('');
    expect(element.style.height).toBe('');
  });

  it('should correctly handle a mix of new and existing properties', () => {
    element.style.backgroundColor = 'purple';

    const revert = setStyle({
      element,
      style: {
        color: 'yellow',
        backgroundColor: 'orange',
        border: '1px solid black',
      },
    });

    expect(element.style.color).toBe('yellow');
    expect(element.style.backgroundColor).toBe('orange');
    expect(element.style.border).toBe('1px solid black');

    revert();

    expect(element.style.color).toBe('');
    expect(element.style.backgroundColor).toBe('purple');
    expect(element.style.border).toBe('');
  });

  it('should not modify other existing styles when applying new ones', () => {
    element.style.setProperty('opacity', '0.5');
    element.style.setProperty('z-index', '10');

    setStyle({
      element,
      style: {
        color: 'blue',
      },
    });

    expect(element.style.color).toBe('blue');
    expect(element.style.opacity).toBe('0.5');
    expect(element.style.zIndex).toBe('10');
  });

  it('should correctly revert styles when some properties were initially empty', () => {
    element.style.color = 'initial';

    const revert = setStyle({
      element,
      style: {
        color: 'red',
        padding: '10px',
      },
    });

    expect(element.style.color).toBe('red');
    expect(element.style.padding).toBe('10px');

    revert();

    expect(element.style.color).toBe('');
    expect(element.style.padding).toBe('');
  });

  it('should handle an empty style object gracefully', () => {
    const originalDisplay = element.style.display;
    const revert = setStyle({
      element,
      style: {},
    });

    expect(element.style.display).toBe(originalDisplay);
    revert();
    expect(element.style.display).toBe(originalDisplay);
    expect(element.hasAttribute('style')).toBe(false);
  });

  it('should not throw an error if the element has no style attribute initially', () => {
    expect(() => {
      setStyle({
        element,
        style: {
          display: 'none',
        },
      });
    }).not.toThrow();
    expect(element.style.display).toBe('none');
  });

  it('should not throw an error when in development mode but not on the server', () => {
    mockIsDev = true;
    mockIsServer = false;

    expect(() =>
      setStyle({
        element,
        style: { color: 'red' },
      })
    ).not.toThrow();
  });

  it('should not throw an error when not in development mode but on the server', () => {
    mockIsDev = false;
    mockIsServer = true;

    expect(() =>
      setStyle({
        element,
        style: { color: 'red' },
      })
    ).not.toThrow();
  });

  it('should not throw an error when not in development mode and not on the server', () => {
    mockIsDev = false;
    mockIsServer = false;

    expect(() =>
      setStyle({
        element,
        style: { color: 'red' },
      })
    ).not.toThrow();
  });
});
