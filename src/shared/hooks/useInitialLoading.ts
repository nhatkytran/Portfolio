import { useEffect, useState } from 'react';

const INITIAL_LOADING_DURATION = 1000;

// prettier-ignore
type Props = {

  /** Initial loading state. */
  readonly initialLoadingState?: boolean;

  /** Dependencies to trigger initial loading. */
  readonly dependencies?: readonly unknown[];
};

/** Hook for managing the initial loading. */
export function useInitialLoading({ initialLoadingState = false, dependencies = [] }: Props = {}) {
  const [initialLoading, setInitialLoading] = useState(initialLoadingState);

  useEffect(() => {
    setInitialLoading(true);
    const timeoutId = setTimeout(() => setInitialLoading(false), INITIAL_LOADING_DURATION);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);

  return { initialLoading };
}
