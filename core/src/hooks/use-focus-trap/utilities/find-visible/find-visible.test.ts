import { describe, it, expect, beforeEach, vi } from 'vitest';
import { findVisible } from './find-visible';

const getComputedStyleSpy = vi.spyOn(window, 'getComputedStyle');

describe('findVisible', () => {
  let container: HTMLElement;
  let element1: HTMLElement;
  let element2: HTMLElement;
  let element3: HTMLElement;
  let nestedElement: HTMLElement;
  let parentOfNested: HTMLElement;
  let anotherContainer: HTMLElement;
  let elementOutsideContainer: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    getComputedStyleSpy.mockClear();

    container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    element1 = document.createElement('div');
    element1.id = 'element1';
    container.appendChild(element1);

    element2 = document.createElement('div');
    element2.id = 'element2';
    container.appendChild(element2);

    parentOfNested = document.createElement('div');
    parentOfNested.id = 'parentOfNested';
    container.appendChild(parentOfNested);

    nestedElement = document.createElement('span');
    nestedElement.id = 'nestedElement';
    parentOfNested.appendChild(nestedElement);

    element3 = document.createElement('div');
    element3.id = 'element3';
    container.appendChild(element3);

    elementOutsideContainer = document.createElement('div');
    elementOutsideContainer.id = 'elementOutsideContainer';
    document.body.appendChild(elementOutsideContainer);

    anotherContainer = document.createElement('section');
    anotherContainer.id = 'anotherContainer';
    document.body.appendChild(anotherContainer);

    getComputedStyleSpy.mockImplementation((el: Element) => {
      const style = {
        display: (el as HTMLElement).style.display || 'block',
        visibility: (el as HTMLElement).style.visibility || 'visible',
        getPropertyValue: (prop: string) => {
          if (prop === 'display') return style.display;
          if (prop === 'visibility') return style.visibility;
          return '';
        },
      } as CSSStyleDeclaration;
      return style;
    });
  });

  it('should return the first visible element when all are visible', () => {
    const result = findVisible({ container, elements: [element1, element2, element3] });
    expect(result).toBe(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
    expect(getComputedStyle).not.toHaveBeenCalledWith(element2);
  });

  it('should return the second element if the first one is hidden via `display: none`', () => {
    element1.style.display = 'none';
    const result = findVisible({ container, elements: [element1, element2, element3] });
    expect(result).toBe(element2);
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(element2);
  });

  it('should return the second element if the first one is hidden via `visibility: hidden`', () => {
    element1.style.visibility = 'hidden';
    const result = findVisible({ container, elements: [element1, element2, element3] });
    expect(result).toBe(element2);
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(element2);
  });

  it('should return undefined if no elements are visible', () => {
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
    const result = findVisible({ container, elements: [element1, element2, element3] });
    expect(result).toBeUndefined();
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(element2);
    expect(getComputedStyle).toHaveBeenCalledWith(element3);
  });

  it('should handle an empty elements array', () => {
    const result = findVisible({ container, elements: [] });
    expect(result).toBeUndefined();
    expect(getComputedStyle).not.toHaveBeenCalled();
  });

  it('should return nested visible element', () => {
    const result = findVisible({ container, elements: [nestedElement] });
    expect(result).toBe(nestedElement);
    expect(getComputedStyle).toHaveBeenCalledWith(nestedElement);
    expect(getComputedStyle).toHaveBeenCalledWith(parentOfNested);
    expect(getComputedStyle).not.toHaveBeenCalledWith(container);
  });

  it('should consider element hidden if its ancestor (but not container) has `display: none`', () => {
    parentOfNested.style.display = 'none';
    const result = findVisible({ container, elements: [nestedElement] });
    expect(result).toBeUndefined();
    expect(getComputedStyle).toHaveBeenCalledWith(nestedElement);
    expect(getComputedStyle).toHaveBeenCalledWith(parentOfNested);
    expect(getComputedStyle).not.toHaveBeenCalledWith(container);
  });

  it('should return the first element if it is the only one and is visible', () => {
    const result = findVisible({ container, elements: [element1] });
    expect(result).toBe(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
  });

  it('should return undefined if the only element is hidden', () => {
    element1.style.display = 'none';
    const result = findVisible({ container, elements: [element1] });
    expect(result).toBeUndefined();
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
  });

  it('should return the container itself if it is in the elements array and is visible', () => {
    const result = findVisible({ container, elements: [container, element1] });
    expect(result).toBe(container);
    expect(getComputedStyle).toHaveBeenCalledWith(container);
  });

  it('should return an element that is a direct child of body if container is body', () => {
    const bodyElement = document.createElement('div');
    document.body.appendChild(bodyElement);
    const result = findVisible({ container: document.body, elements: [bodyElement] });
    expect(result).toBe(bodyElement);
    expect(getComputedStyle).toHaveBeenCalledWith(bodyElement);
    expect(getComputedStyle).not.toHaveBeenCalledWith(document.body);
  });

  it('should find element if its container is hidden, but element is considered visible relative to that container', () => {
    container.style.display = 'none';
    const result = findVisible({ container, elements: [element1] });
    expect(result).toBe(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
    expect(getComputedStyle).not.toHaveBeenCalledWith(container);
  });

  it('should return an element that is outside the specified container if it is found first and considered visible', () => {
    const result = findVisible({ container, elements: [elementOutsideContainer, element1] });
    expect(result).toBe(elementOutsideContainer);
    expect(getComputedStyle).toHaveBeenCalledWith(elementOutsideContainer);
    expect(getComputedStyle).not.toHaveBeenCalledWith(element1);
  });

  it('should correctly handle multiple levels of nesting with hidden ancestors', () => {
    const grandParentElement = document.createElement('div');
    grandParentElement.id = 'grandParentElement';
    container.appendChild(grandParentElement);

    const childElement = document.createElement('div');
    childElement.id = 'childElement';
    grandParentElement.appendChild(childElement);

    grandParentElement.style.display = 'none';

    const result = findVisible({ container, elements: [childElement, element1] });
    expect(result).toBe(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(childElement);
    expect(getComputedStyle).toHaveBeenCalledWith(grandParentElement);
    expect(getComputedStyle).not.toHaveBeenCalledWith(container);
  });

  it('should find nested element even if its intermediate parent has `visibility: hidden` (due to isHidden implementation)', () => {
    parentOfNested.style.visibility = 'hidden';

    const result = findVisible({ container, elements: [nestedElement, element2] });
    expect(result).toBe(nestedElement);
    expect(getComputedStyle).toHaveBeenCalledWith(nestedElement);
    expect(getComputedStyle).toHaveBeenCalledWith(parentOfNested);
    expect(getComputedStyle).not.toHaveBeenCalledWith(element2);
  });

  it('should return element if container has display: none and element is visible relative to container', () => {
    container.style.display = 'none';
    element1.style.display = 'block';

    const result = findVisible({ container, elements: [element1] });
    expect(result).toBe(element1);
    expect(getComputedStyle).toHaveBeenCalledWith(element1);
    expect(getComputedStyle).not.toHaveBeenCalledWith(container);
  });
});
