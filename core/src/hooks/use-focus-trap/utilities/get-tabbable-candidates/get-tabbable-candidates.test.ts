import { describe, afterEach, it, expect } from 'vitest';
import { getTabbableCandidates } from '.';

describe('getTabbableCandidates', () => {
  const createElement = (
    tagName: string,
    attributes: Record<string, string> = {},
    parent: HTMLElement = document.body
  ) => {
    const element = document.createElement(tagName);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    parent.appendChild(element);
    return element;
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should return default tabbable elements', () => {
    const div = createElement('div');
    const button = createElement('button', {}, div);
    const input = createElement('input', { type: 'text' }, div);
    const select = createElement('select', {}, div);
    const textarea = createElement('textarea', {}, div);
    const anchor = createElement('a', { href: '#' }, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([button, input, select, textarea, anchor]);
  });

  it('should include elements with tabindex="0"', () => {
    const div = createElement('div');
    const customDiv = createElement('div', { tabindex: '0' }, div);
    const span = createElement('span', { tabindex: '0' }, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([customDiv, span]);
  });

  it('should include elements with positive tabindex and maintain DOM order', () => {
    const div = createElement('div');
    const item1 = createElement('div', { tabindex: '2' }, div);
    const item2 = createElement('button', {}, div);
    const item3 = createElement('span', { tabindex: '1' }, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([item1, item2, item3]);
  });

  it('should exclude elements with tabindex="-1"', () => {
    const div = createElement('div');
    const button = createElement('button', {}, div);
    createElement('div', { tabindex: '-1' }, div);
    createElement('input', { tabindex: '-1' }, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([button]);
  });

  it('should exclude disabled elements', () => {
    const div = createElement('div');
    createElement('button', { disabled: '' }, div);
    createElement('input', { disabled: '' }, div);
    createElement('select', { disabled: '' }, div);
    createElement('textarea', { disabled: '' }, div);
    const enabledButton = createElement('button', {}, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([enabledButton]);
  });

  it('should exclude input type="hidden"', () => {
    const div = createElement('div');
    createElement('input', { type: 'hidden' }, div);
    const textInput = createElement('input', { type: 'text' }, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([textInput]);
  });

  it('should return an empty array if no tabbable elements are found', () => {
    const div = createElement('div');
    createElement('div', {}, div);
    createElement('span', {}, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([]);
  });

  it('should handle complex nested structures', () => {
    document.body.innerHTML = '';
    const rootContainer = document.createElement('div');
    document.body.appendChild(rootContainer);

    const el1 = createElement('div', { id: 'el1' }, rootContainer);
    const btnA = createElement('button', { id: 'btnA' }, el1);
    const spanParent = createElement('span', { id: 'spanParent' }, rootContainer);
    const inputB = createElement('input', { id: 'inputB' }, spanParent);
    createElement('button', { id: 'disabledBtn', disabled: '' }, rootContainer);
    createElement('input', { id: 'hiddenInput', type: 'hidden' }, rootContainer);
    const aC = createElement('a', { id: 'aC', href: '#' }, rootContainer);
    const divWithNegativeTab = createElement('div', { id: 'divNegTab', tabindex: '-1' }, rootContainer);
    const inputD = createElement('input', { id: 'inputD', tabindex: '0' }, divWithNegativeTab);

    const tabbable = getTabbableCandidates(rootContainer);

    expect(tabbable).toEqual([btnA, inputB, aC, inputD]);
  });

  it('should include elements with visibility: hidden style', () => {
    const div = createElement('div');
    const button = createElement('button', { style: 'visibility: hidden;' }, div);
    const input = createElement('input', {}, div);

    const tabbable = getTabbableCandidates(div);

    expect(tabbable).toEqual([button, input]);
  });

  it('should return an empty array for an empty root element', () => {
    const div = createElement('div');
    const tabbable = getTabbableCandidates(div);
    expect(tabbable).toEqual([]);
  });

  it('should NOT traverse into open Shadow DOM by default', () => {
    if (!document.head.attachShadow) {
      return;
    }
    const host = createElement('div');
    const shadowRoot = host.attachShadow({ mode: 'open' });
    const shadowButton = document.createElement('button');
    shadowButton.textContent = 'Shadow Button';
    shadowRoot.appendChild(shadowButton);

    const normalButton = createElement('button');

    const tabbable = getTabbableCandidates(document.body);

    expect(tabbable).toEqual([normalButton]);
  });
});
