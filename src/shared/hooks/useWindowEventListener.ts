import { useEffect } from 'react';

// prettier-ignore
type Props = {

  /** The event name. */
  readonly eventName: string;

  /** Whether to call the handler at first render. */
  readonly isInitialCall?: boolean;

  /** The event handler. */
  readonly handler: (event: Event | null) => void;
};

/** Use window event listener. */
export function useWindowEventListener({ eventName, isInitialCall = false, handler }: Props) {
  useEffect(() => {
    if (isInitialCall) {
      handler(null);
    }
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, [isInitialCall, eventName, handler]);
}
