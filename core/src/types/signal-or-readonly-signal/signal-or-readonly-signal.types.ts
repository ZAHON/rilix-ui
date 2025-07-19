import type { ReadonlySignal, Signal } from '@builder.io/qwik';

/**
 * Represents a signal that can be either mutable (Signal) or readonly (ReadonlySignal).
 * This type is useful when a component or function needs to accept both types of signals.
 */
export type SignalOrReadonlySignal<T> = Signal<T> | ReadonlySignal<T>;
