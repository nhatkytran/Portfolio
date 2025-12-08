import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Mode } from '@/shared/utils/types';
import { ZustandActions } from '@/shared/utils/types/zustand';
import { DAWNBRINGER_MODE } from '@/features/layout/data';

const MODE_STORAGE_KEY = 'NIGHT_DAWN_BRINGER_MODE';

// prettier-ignore
type ModeStateValue = {

  /** Current mode. */
  readonly mode: Mode;
};

// prettier-ignore
type ModeStateActions = {

  /** Set mode. */
  readonly setMode: (mode: Mode) => void;
};

// prettier-ignore
type ModeState = ModeStateValue & {

  /** Actions. */
  readonly actions: ModeStateActions;
};

/**
 * Get initial mode state.
 * @param initialMode Initial mode.
 */
const getInitialModeState = (initialMode: Mode) => ({ mode: initialMode });

// prettier-ignore
/**
 * Get mode actions.
 * @param set Zustand setter.
 */
const getActions: ZustandActions<ModeState, ModeStateActions> = set => ({
  
  /**
   * Set mode.
   * @param mode Mode.
   */
  setMode: (mode: Mode) => set({ mode }),
});

const useModeStore = create<ModeState>()(
  persist(
    (set, get) => {
      const value = getInitialModeState(DAWNBRINGER_MODE);
      const actions = getActions(set, get);
      return { ...value, actions };
    },
    {
      name: MODE_STORAGE_KEY,

      /** Storage. */
      storage: createJSONStorage(() => localStorage),

      /**
       * Partialize.
       * @param state State.
       */
      partialize: (state): ModeStateValue => ({ mode: state.mode }),

      /**
       * Merge.
       * @param persistedState Persisted state.
       * @param currentState Current state.
       */
      merge(persistedState, currentState): ModeState {
        if (persistedState != null) {
          const { mode } = persistedState as ModeStateValue;
          return { ...currentState, mode };
        }
        return currentState;
      },
    },
  ),
);

/** Use mode. */
export const useMode = () => useModeStore(state => state.mode);

/** Use mode actions. */
export const useModeActions = () => useModeStore(state => state.actions);
