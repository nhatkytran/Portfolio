'use client';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { TECHNOLOGIES_OVERVIEW } from '@/features/home/data';

/** Technologies display. */
export default function TechnologiesDisplay() {
  const { initialLoading } = useInitialLoading({ initialLoadingState: true });

  return TECHNOLOGIES_OVERVIEW.map(({ name, Icon }, index) => (
    <div key={index} className="group relative">
      <div
        style={{ backgroundImage: `url('/images/technologies/overview/tech-overview-${index}.webp')` }}
        className={cn(
          'technologies-overview-clip-path',
          'relative bg-cover bg-center bg-no-repeat pt-[125%]',
          'origin-bottom-left transition-all duration-250 ease-in-out',
          'group-hover:scale-107',
        )}
      >
        <div className={cn('technologies-overview-bg size-[101%]', 'absolute top-0 left-0')} />
        <div
          className={cn(
            'size-[101%] bg-neutral-800',
            'absolute top-0 left-0',
            'opacity-0 transition duration-200 ease-in-out',
            initialLoading && 'opacity-100',
          )}
        />
        <div
          className={cn(
            'font-riot-sans-bold',
            'absolute bottom-4 left-5 hidden',
            'text-base tracking-wider text-white italic',
            'xs:block',
            'md:text-lg',
            'mp:left-6 mp:text-xl',
          )}
        >
          {name}
        </div>
      </div>
      <Icon
        className={cn(
          'size-[54%] opacity-100',
          'origin-bottom-left transition-all duration-250 ease-in-out',
          'absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2',
          'xs:-right-2 xs:bottom-11 xs:translate-x-0 xs:translate-y-0 xs:opacity-90',
          'group-hover:scale-112 group-hover:opacity-100',
        )}
      />
    </div>
  ));
}
