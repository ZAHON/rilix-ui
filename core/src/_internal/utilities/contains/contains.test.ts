import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import { contains } from '.';

const createDOM = () => {
  document.body.innerHTML = `
    <div id="container1">
      <div id="element1">
        <span id="child1"></span>
      </div>
      <div id="element2"></div>
    </div>
    <div id="container2"></div>
  `;
};

describe('contains', () => {
  beforeEach(() => {
    createDOM();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should return true when container directly contains the element', () => {
    const container = document.getElementById('container1') as HTMLElement;
    const element = document.getElementById('element1') as HTMLElement;
    expect(contains({ container, element })).toBe(true);
  });

  it('should return true when container contains a deeply nested element', () => {
    const container = document.getElementById('container1') as HTMLElement;
    const element = document.getElementById('child1') as HTMLElement;
    expect(contains({ container, element })).toBe(true);
  });

  it('should return true when element is the same as the container', () => {
    const container = document.getElementById('container1') as HTMLElement;
    const element = document.getElementById('container1') as HTMLElement;
    expect(contains({ container, element })).toBe(true);
  });

  it('should return false when element is not a child of the container', () => {
    const container = document.getElementById('container1') as HTMLElement;
    const element = document.getElementById('container2') as HTMLElement;
    expect(contains({ container, element })).toBe(false);
  });

  it('should return false when container is inside the element (reversed order)', () => {
    const container = document.getElementById('element1') as HTMLElement;
    const element = document.getElementById('container1') as HTMLElement;
    expect(contains({ container, element })).toBe(false);
  });

  it('should return false when elements are siblings', () => {
    const container = document.getElementById('element1') as HTMLElement;
    const element = document.getElementById('element2') as HTMLElement;
    expect(contains({ container, element })).toBe(false);
  });

  it('should return false when element is not in the DOM', () => {
    const container = document.getElementById('container1') as HTMLElement;
    const element = document.createElement('div');
    expect(contains({ container, element })).toBe(false);
  });
});
