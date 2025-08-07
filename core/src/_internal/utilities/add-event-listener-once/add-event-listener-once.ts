import type { AllEventMaps, AddEventListenerOnceParams } from './add-event-listener-once.types';

/**
 * Attaches an event listener to the specified target that will be invoked at most once.
 * Returns a `cleanup` function to remove the event listener.
 */
export const addEventListenerOnce = <K extends keyof AllEventMaps>(params: AddEventListenerOnceParams<K>) => {
  const { target, type, listener, options } = params;

  const eventOptions = { ...options, once: true };

  target.addEventListener(type, listener as EventListenerOrEventListenerObject, eventOptions);

  const cleanup = () => {
    target.removeEventListener(type, listener as EventListenerOrEventListenerObject, eventOptions);
  };

  return cleanup;
};
