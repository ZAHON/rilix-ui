import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getTabbableEdges } from '.';

describe('getTabbableEdges', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should return undefined for both first and last if no tabbable elements exist', () => {
    const [first, last] = getTabbableEdges(container);
    expect(first).toBeUndefined();
    expect(last).toBeUndefined();
  });

  it('should return the same element for first and last if only one tabbable element exists', () => {
    const button = document.createElement('button');
    button.textContent = 'Test Button';
    container.appendChild(button);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(button);
    expect(last).toBe(button);
  });

  it('should correctly identify first and last tabbable elements', () => {
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const input3 = document.createElement('input');

    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(input3);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(input1);
    expect(last).toBe(input3);
  });

  it('should ignore disabled elements', () => {
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button2.disabled = true;
    const button3 = document.createElement('button');

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(button1);
    expect(last).toBe(button3);
  });

  it('should ignore hidden elements (display: none)', () => {
    const link1 = document.createElement('a');
    link1.href = '#';
    const link2 = document.createElement('a');
    link2.href = '#';
    link2.style.display = 'none';
    const link3 = document.createElement('a');
    link3.href = '#';

    container.appendChild(link1);
    container.appendChild(link2);
    container.appendChild(link3);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(link1);
    expect(last).toBe(link3);
  });

  it('should ignore hidden elements (visibility: hidden)', () => {
    const span1 = document.createElement('span');
    span1.tabIndex = 0;
    const span2 = document.createElement('span');
    span2.tabIndex = 0;
    span2.style.visibility = 'hidden';
    const span3 = document.createElement('span');
    span3.tabIndex = 0;

    container.appendChild(span1);
    container.appendChild(span2);
    container.appendChild(span3);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(span1);
    expect(last).toBe(span3);
  });

  it('should correctly handle nested tabbable elements', () => {
    const div = document.createElement('div');
    const inputOuter = document.createElement('input');
    const innerDiv = document.createElement('div');
    const buttonInner = document.createElement('button');
    const selectOuter = document.createElement('select');

    container.appendChild(inputOuter);
    container.appendChild(div);
    div.appendChild(innerDiv);
    innerDiv.appendChild(buttonInner);
    container.appendChild(selectOuter);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(inputOuter);
    expect(last).toBe(selectOuter);
  });

  it('should return undefined if all tabbable elements are hidden or disabled', () => {
    const inputHidden = document.createElement('input');
    inputHidden.style.display = 'none';
    const buttonDisabled = document.createElement('button');
    buttonDisabled.disabled = true;

    container.appendChild(inputHidden);
    container.appendChild(buttonDisabled);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBeUndefined();
    expect(last).toBeUndefined();
  });

  it('should prioritize document order regardless of tabindex > 0 (as per getTabbableCandidates)', () => {
    const element2 = document.createElement('div');
    element2.tabIndex = 0;
    const element1 = document.createElement('div');
    element1.tabIndex = 1;
    const element3 = document.createElement('div');
    element3.tabIndex = 2;

    container.appendChild(element2);
    container.appendChild(element1);
    container.appendChild(element3);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(element2);
    expect(last).toBe(element3);
  });

  it('should handle elements with tabindex="-1" correctly (they are not tabbable)', () => {
    const tabbable = document.createElement('button');
    const notTabbable = document.createElement('div');
    notTabbable.tabIndex = -1;

    container.appendChild(tabbable);
    container.appendChild(notTabbable);

    const [first, last] = getTabbableEdges(container);
    expect(first).toBe(tabbable);
    expect(last).toBe(tabbable);
  });
});
