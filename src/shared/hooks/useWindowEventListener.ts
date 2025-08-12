import { useEffect } from 'react';

// prettier-ignore
type Props = {

  /** The event name. */
  readonly eventName: string;

  /** The event handler. */
  readonly handler: (event: Event) => void;
};

/** Use window event listener. */
export function useWindowEventListener({ eventName, handler }: Props) {
  useEffect(() => {
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, [eventName, handler]);
}
