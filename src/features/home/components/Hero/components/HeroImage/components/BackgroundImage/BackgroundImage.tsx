'use client';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';

/** Background image. */
export default function BackgroundImage() {
  const { initialLoading } = useInitialLoading({ initialLoadingState: true });

  return (
    <div
      className={cn(
        'pointer-events-none absolute top-0 left-0 size-[101%] bg-neutral-800',
        'opacity-0 transition duration-200 ease-in-out',
        initialLoading && 'opacity-100',
      )}
    />
  );
}
