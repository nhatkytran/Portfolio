'use client';

import { cn } from '@/shared/utils/helpers';
import { useBringer, useInitialLoading } from '@/shared/hooks';

/** Hero image. */
export default function HomePage() {
  const { isNightbringer } = useBringer();
  const { initialLoading } = useInitialLoading({ initialLoadingState: true });

  return (
    <div
      className={cn(
        'hero-image-clip-path h-[442px] w-full',
        'absolute right-0 bottom-0 flex-2 self-stretch',
        'bg-cover bg-center bg-no-repeat',
        'md:top-0 md:h-full md:w-[42%]',
        isNightbringer ? 'bg-[url("/images/hero/ky-tran.jpg")]' : 'bg-[url("/images/hero/ky-tran-light.jpg")]',
      )}
    >
      <div className={cn('hero-image-overlay-bg size-[101%]', 'absolute top-0 left-0')} />
      <div
        className={cn(
          'size-[101%] bg-neutral-800',
          'absolute top-0 left-0',
          'opacity-0 transition duration-200 ease-in-out',
          initialLoading && 'opacity-100',
        )}
      />
    </div>
  );
}
