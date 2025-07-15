import type { AllEventMaps, AddEventListenerOnceParams } from './add-event-listener-once.types';

/**
 * Attaches an event listener to the specified target that will be invoked at most once.
 */
export const addEventListenerOnce = <K extends keyof AllEventMaps>(params: AddEventListenerOnceParams<K>) => {
  const { target, type, listener, options } = params;

  target.addEventListener(type, listener as EventListenerOrEventListenerObject, { ...options, once: true });
};
