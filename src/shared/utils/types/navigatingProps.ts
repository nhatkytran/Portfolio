// prettier-ignore
/** Navigating props. */
export type NavigatingProps = {

  /** Whether is navigating. */
  readonly isNavigating: boolean;

  /** Trigger navigating. */
  readonly onTriggerNavigating: (event: { preventDefault: () => void }) => void;
};
