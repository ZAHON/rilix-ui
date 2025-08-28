import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { focus } from '.';

describe('focus', () => {
  let inputElement: HTMLInputElement;
  let divElement: HTMLDivElement;
  let customFocusObject: { focus: () => void };

  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="testInput" />
      <div id="testDiv" tabindex="0"></div>
    `;
    inputElement = document.getElementById('testInput') as HTMLInputElement;
    divElement = document.getElementById('testDiv') as HTMLDivElement;

    vi.spyOn(inputElement, 'focus').mockImplementation(() => {
      vi.spyOn(document, 'activeElement', 'get').mockReturnValue(inputElement);
    });
    vi.spyOn(divElement, 'focus').mockImplementation(() => {
      vi.spyOn(document, 'activeElement', 'get').mockReturnValue(divElement);
    });

    customFocusObject = { focus: vi.fn() };
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('should focus on a standard HTMLInputElement', () => {
    focus({ element: inputElement });
    expect(inputElement.focus).toHaveBeenCalledOnce();
    expect(document.activeElement).toBe(inputElement);
  });

  it('should focus on a standard HTMLDivElement with tabindex', () => {
    focus({ element: divElement });
    expect(divElement.focus).toHaveBeenCalledOnce();
    expect(document.activeElement).toBe(divElement);
  });

  it('should call the focus method on an object with a focus property', () => {
    focus({ element: customFocusObject });
    expect(customFocusObject.focus).toHaveBeenCalledOnce();
  });

  it('should not throw an error or do anything if element is null', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    focus({ element: null });
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(inputElement.focus).not.toHaveBeenCalled();
    expect(divElement.focus).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should not throw an error or do anything if element is undefined', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    focus({ element: undefined });
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(inputElement.focus).not.toHaveBeenCalled();
    expect(divElement.focus).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should prevent scrolling when focusing an element', () => {
    focus({ element: inputElement });
    expect(inputElement.focus).toHaveBeenCalledWith({ preventScroll: true });
  });

  it('should select the content of an HTMLInputElement when `select` is true', () => {
    vi.spyOn(inputElement, 'select');
    focus({ element: inputElement, select: true });
    expect(inputElement.focus).toHaveBeenCalledOnce();
    expect(inputElement.select).toHaveBeenCalledOnce();
  });

  it('should not select the content if `select` is false', () => {
    vi.spyOn(inputElement, 'select');
    focus({ element: inputElement, select: false });
    expect(inputElement.focus).toHaveBeenCalledOnce();
    expect(inputElement.select).not.toHaveBeenCalled();
  });

  it('should not select the content if `select` is true but element is not an HTMLInputElement', () => {
    vi.spyOn(divElement, 'focus');
    focus({ element: divElement, select: true });
    expect(divElement.focus).toHaveBeenCalledOnce();
  });

  it('should not select if the element was already focused', () => {
    vi.spyOn(document, 'activeElement', 'get').mockReturnValue(inputElement);
    vi.spyOn(inputElement, 'select');

    focus({ element: inputElement, select: true });

    expect(inputElement.focus).toHaveBeenCalledOnce();
    expect(inputElement.select).not.toHaveBeenCalled();
  });

  it('should not select an element that does not have a select method even if `select` is true', () => {
    vi.spyOn(divElement, 'focus');
    focus({ element: divElement, select: true });
    expect(divElement.focus).toHaveBeenCalledOnce();
  });
});
