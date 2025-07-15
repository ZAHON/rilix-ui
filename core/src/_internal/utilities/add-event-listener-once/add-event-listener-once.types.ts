export type AllEventMaps = HTMLElementEventMap & DocumentEventMap & WindowEventMap;

export interface AddEventListenerOnceParams<K extends keyof AllEventMaps> {
  /**
   * The target element to which the event listener is attached.
   */
  target: HTMLElement | Document | Window;

  /**
   * A case-sensitive string representing the event type to listen for.
   */
  type: K;

  /**
   * The function to be called when the event occurs.
   */
  listener: (this: HTMLElement | Document | Window, ev: AllEventMaps[K]) => any;

  /**
   * An options object that specifies characteristics about the event listener.
   * The 'once' option is automatically set to `true`.
   */
  options?: Omit<AddEventListenerOptions, 'once'>;
}
