'use client';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';

/** Hero image. */
export default function HomePage() {
  const { initialLoading } = useInitialLoading({ initialLoadingState: true });

  return (
    <div
      className={cn(
        'hero-image-clip-path h-[432px] w-full',
        'absolute right-0 bottom-0 flex-2 self-stretch',
        'bg-[url("/images/hero/ky-tran.jpg")] bg-cover bg-center bg-no-repeat',
        'sm:top-0 sm:h-full sm:w-[42%]',
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
