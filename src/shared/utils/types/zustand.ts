import { type StateCreator } from 'zustand';

/** Zustand setter. */
export type ZustandSetter<T> = Parameters<StateCreator<T>>[0];

/** Zustand getter. */
export type ZustandGetter<T> = Parameters<StateCreator<T>>[1];

/** Zustand actions. */
export type ZustandActions<TState, TActions> = (set: ZustandSetter<TState>, get: ZustandGetter<TState>) => TActions;
