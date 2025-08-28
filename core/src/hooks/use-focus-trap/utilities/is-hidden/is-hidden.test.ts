import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { isHidden } from './is-hidden';

describe('isHidden', () => {
  let container: HTMLElement;
  let parent: HTMLElement;
  let child: HTMLElement;
  let grandchild: HTMLElement;
  // Mapa do przechowywania stylów dla każdego elementu
  const elementStyles = new Map<Element, CSSStyleDeclaration>();

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="container">
        <div id="parent">
          <div id="child">
            <div id="grandchild"></div>
          </div>
        </div>
      </div>
    `;
    container = document.getElementById('container') as HTMLElement;
    parent = document.getElementById('parent') as HTMLElement;
    child = document.getElementById('child') as HTMLElement;
    grandchild = document.getElementById('grandchild') as HTMLElement;

    // Resetuj style przed każdym testem
    elementStyles.clear();

    // *** KLUCZOWA ZMIANA TUTAJ ***
    // Zainicjuj style dla WSZYSTKICH elementów, które będą używane w testach,
    // zanim zaczniemy je modyfikować.
    [container, parent, child, grandchild].forEach((el) => {
      const mockStyle = {
        display: 'block',
        visibility: 'visible',
        getPropertyValue: (prop: string) => {
          if (prop === 'display') return mockStyle.display;
          if (prop === 'visibility') return mockStyle.visibility;
          return '';
        },
      } as CSSStyleDeclaration;
      elementStyles.set(el, mockStyle);
    });

    // Ulepszone mockowanie getComputedStyle
    vi.spyOn(window, 'getComputedStyle').mockImplementation((element: Element) => {
      // Zwróć styl specyficzny dla danego elementu, powinien już istnieć w mapie
      if (!elementStyles.has(element)) {
        // Fallback na wypadek, gdyby jakiś nowy element pojawił się w teście, a nie był zainicjowany
        // Może to wskazywać na brak elementu w liście do inicjalizacji
        console.warn(`Attempted to get style for uninitialized element:`, element);
        // Można też rzucić błąd, jeśli chcesz, aby testy były bardziej rygorystyczne
        // throw new Error(`Style for element ${element.id || element.tagName} was not initialized.`);
      }
      return elementStyles.get(element)!;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('should return true if the element itself has display: none', () => {
    (elementStyles.get(child) as any).display = 'none';
    expect(isHidden({ element: child })).toBe(true);
  });

  it('should return true if the element itself has visibility: hidden', () => {
    (elementStyles.get(child) as any).visibility = 'hidden';
    expect(isHidden({ element: child })).toBe(true);
  });

  it('should return true if a parent has display: none', () => {
    (elementStyles.get(parent) as any).display = 'none';
    expect(isHidden({ element: child })).toBe(true);
  });

  it('should return true if an ancestor (grandparent) has display: none', () => {
    (elementStyles.get(container) as any).display = 'none';
    expect(isHidden({ element: grandchild })).toBe(true);
  });

  it('should stop checking and return false if `upTo` is the element itself and it is visible', () => {
    expect(isHidden({ element: child, upTo: child })).toBe(false);
  });

  it('should stop checking and return false if `upTo` is a visible ancestor and no hidden elements are found before it', () => {
    expect(isHidden({ element: child, upTo: container })).toBe(false);
  });

  it('should return true if an ancestor *before* `upTo` has display: none', () => {
    (elementStyles.get(parent) as any).display = 'none';
    expect(isHidden({ element: grandchild, upTo: container })).toBe(true);
  });

  it('should return false if `upTo` itself has display: none, but element is checked before it', () => {
    (elementStyles.get(container) as any).display = 'none';
    expect(isHidden({ element: grandchild, upTo: parent })).toBe(false);
  });

  it('should return false if `upTo` itself has visibility: hidden, but element is checked before it', () => {
    (elementStyles.get(container) as any).visibility = 'hidden';
    expect(isHidden({ element: grandchild, upTo: parent })).toBe(false);
  });

  it('should return false if element has no parent and is visible', () => {
    const isolatedElement = document.createElement('div');
    // Dla tego elementu też musimy zainicjować styl, jeśli będzie używany z getComputedStyle
    const mockStyle = {
      display: 'block',
      visibility: 'visible',
      getPropertyValue: (prop: string) => {
        if (prop === 'display') return mockStyle.display;
        if (prop === 'visibility') return mockStyle.visibility;
        return '';
      },
    } as CSSStyleDeclaration;
    elementStyles.set(isolatedElement, mockStyle);

    expect(isHidden({ element: isolatedElement })).toBe(false);
  });

  it('should handle nested elements with mixed visibility and display properties', () => {
    (elementStyles.get(parent) as any).display = 'none';
    expect(isHidden({ element: grandchild })).toBe(true);
  });

  it('should handle complex scenario: element is visible, but parent is hidden, and upTo is above parent', () => {
    (elementStyles.get(parent) as any).display = 'none';
    expect(isHidden({ element: child, upTo: container })).toBe(true);
  });
});
