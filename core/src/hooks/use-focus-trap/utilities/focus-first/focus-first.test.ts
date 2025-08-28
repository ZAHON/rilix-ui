import { describe, afterEach, it, expect, beforeEach, vi } from 'vitest';
import { focusFirst } from '.';

let mockActiveElement: Element | null = null;

Object.defineProperty(document, 'activeElement', {
  get: vi.fn(() => mockActiveElement),
  configurable: true,
});

beforeEach(() => {
  mockActiveElement = document.body;

  vi.spyOn(HTMLElement.prototype, 'focus').mockImplementation(function (this: HTMLElement) {
    mockActiveElement = this;
  });

  vi.spyOn(HTMLInputElement.prototype, 'select').mockImplementation(function (this: HTMLInputElement) {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('focusFirst', () => {
  it('should focus the first focusable element in the list', () => {
    const el1 = document.createElement('div');
    const el2 = document.createElement('button');
    const el3 = document.createElement('input');

    const spyEl1Focus = vi.spyOn(el1, 'focus');
    const spyEl2Focus = vi.spyOn(el2, 'focus');
    const spyEl3Focus = vi.spyOn(el3, 'focus');

    mockActiveElement = document.body;

    focusFirst({ candidates: [el1, el2, el3] });

    expect(spyEl1Focus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(el1);
    expect(spyEl2Focus).not.toHaveBeenCalled();
    expect(spyEl3Focus).not.toHaveBeenCalled();
  });

  it('should focus the second element if the first one is not focusable or already active', () => {
    const el1 = document.createElement('div');
    const el2 = document.createElement('button');
    const el3 = document.createElement('input');

    const spyEl1Focus = vi.spyOn(el1, 'focus');
    const spyEl2Focus = vi.spyOn(el2, 'focus');
    const spyEl3Focus = vi.spyOn(el3, 'focus');

    spyEl1Focus.mockImplementationOnce(() => {
      //
    });

    mockActiveElement = document.body;

    focusFirst({ candidates: [el1, el2, el3] });

    expect(spyEl1Focus).toHaveBeenCalledTimes(1);
    expect(spyEl2Focus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(el2);
    expect(spyEl3Focus).not.toHaveBeenCalled();
  });

  it('should not focus any element if candidates array is empty', () => {
    mockActiveElement = document.body;
    const initialActiveElement = mockActiveElement;

    focusFirst({ candidates: [] });

    expect(mockActiveElement).toBe(initialActiveElement);
  });

  it('should select text in an input element if "select" is true', () => {
    const inputEl = document.createElement('input');
    const el2 = document.createElement('button');

    const spyInputElFocus = vi.spyOn(inputEl, 'focus');
    const spyInputElSelect = vi.spyOn(inputEl, 'select');

    mockActiveElement = document.body;

    focusFirst({ candidates: [inputEl, el2], select: true });

    expect(spyInputElFocus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(inputEl);
    expect(spyInputElSelect).toHaveBeenCalledTimes(1);
  });

  it('should not select text if "select" is true but the element is not an input', () => {
    const divEl = document.createElement('div');
    const buttonEl = document.createElement('button');

    const spyDivElFocus = vi.spyOn(divEl, 'focus');
    const spyButtonElFocus = vi.spyOn(buttonEl, 'focus');

    mockActiveElement = document.body;

    focusFirst({ candidates: [divEl, buttonEl], select: true });

    expect(spyDivElFocus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(divEl);
    expect(HTMLInputElement.prototype.select).not.toHaveBeenCalled();
    expect(spyButtonElFocus).not.toHaveBeenCalled();
  });

  it('should not select text if "select" is false', () => {
    const inputEl = document.createElement('input');
    const spyInputElFocus = vi.spyOn(inputEl, 'focus');
    const spyInputElSelect = vi.spyOn(inputEl, 'select');

    mockActiveElement = document.body;

    focusFirst({ candidates: [inputEl], select: false });

    expect(spyInputElFocus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(inputEl);
    expect(spyInputElSelect).not.toHaveBeenCalled();
  });

  it('should stop iterating once an element gets focus', () => {
    const el1 = document.createElement('button');
    const el2 = document.createElement('input');
    const el3 = document.createElement('div');

    const spyEl1Focus = vi.spyOn(el1, 'focus');
    const spyEl2Focus = vi.spyOn(el2, 'focus');
    const spyEl3Focus = vi.spyOn(el3, 'focus');

    mockActiveElement = document.body;

    focusFirst({ candidates: [el1, el2, el3] });

    expect(spyEl1Focus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(el1);
    expect(spyEl2Focus).not.toHaveBeenCalled();
    expect(spyEl3Focus).not.toHaveBeenCalled();
  });

  it('should handle cases where no element in the list gets focus', () => {
    const el1 = document.createElement('div');
    const el2 = document.createElement('span');

    const spyEl1Focus = vi.spyOn(el1, 'focus');
    const spyEl2Focus = vi.spyOn(el2, 'focus');

    spyEl1Focus.mockImplementationOnce(() => {});
    spyEl2Focus.mockImplementationOnce(() => {});

    mockActiveElement = document.body;
    const initialActiveElement = mockActiveElement;

    focusFirst({ candidates: [el1, el2] });

    expect(spyEl1Focus).toHaveBeenCalledTimes(1);
    expect(spyEl2Focus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(initialActiveElement);
  });

  it('should correctly handle a list with a single candidate', () => {
    const el1 = document.createElement('button');
    const spyEl1Focus = vi.spyOn(el1, 'focus');

    mockActiveElement = document.body;

    focusFirst({ candidates: [el1] });

    expect(spyEl1Focus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(el1);
  });

  it('should not throw an error if no focusable element is found in a non-empty list', () => {
    const el1 = document.createElement('div');
    const el2 = document.createElement('span');

    const spyEl1Focus = vi.spyOn(el1, 'focus');
    const spyEl2Focus = vi.spyOn(el2, 'focus');

    spyEl1Focus.mockImplementationOnce(() => {});
    spyEl2Focus.mockImplementationOnce(() => {});

    mockActiveElement = document.body;
    const initialActiveElement = mockActiveElement;

    expect(() => focusFirst({ candidates: [el1, el2] })).not.toThrow();
    expect(mockActiveElement).toBe(initialActiveElement);
    expect(spyEl1Focus).toHaveBeenCalledTimes(1);
    expect(spyEl2Focus).toHaveBeenCalledTimes(1);
  });

  it('should prioritize earlier elements in the candidates array', () => {
    const el1 = document.createElement('button');
    const el2 = document.createElement('input');
    const el3 = document.createElement('a');

    const spyEl1Focus = vi.spyOn(el1, 'focus');
    const spyEl2Focus = vi.spyOn(el2, 'focus');
    const spyEl3Focus = vi.spyOn(el3, 'focus');

    mockActiveElement = document.body;

    focusFirst({ candidates: [el1, el2, el3] });

    expect(spyEl1Focus).toHaveBeenCalledTimes(1);
    expect(mockActiveElement).toBe(el1);
    expect(spyEl2Focus).not.toHaveBeenCalled();
    expect(spyEl3Focus).not.toHaveBeenCalled();
  });
});
