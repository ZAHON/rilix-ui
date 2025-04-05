import type { Signal } from '@builder.io/qwik';

export type PossibleRef<T> = Signal<Element | undefined> | ((node: T) => void) | undefined;
