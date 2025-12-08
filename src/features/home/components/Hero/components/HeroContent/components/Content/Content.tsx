'use client';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { heroCopy } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Hero content. */
export default function Content() {
  const { isNightbringer } = useBringer();

  return (
    <div className={cn('flex flex-3 flex-col gap-6', 'sm:pr-7.5', 'mp:gap-7', 'lg:gap-8 lg:pr-8')}>
      <FadeInMotion
        as="span"
        className={cn(
          'w-fit px-6 py-2',
          'font-mark-pro-bold text-xs text-neutral-200 uppercase',
          'rounded-3xl border-2 border-neutral-400',
          'mp:text-[15px]',
          'lg:text-base',
        )}
      >
        {heroCopy.heroBrand}
      </FadeInMotion>
      <FadeInMotion
        as="p"
        transition={{ delay: 0.05 }}
        className={cn('font-riot-sans-bold text-[15px] text-white uppercase', 'mp:text-lg')}
      >
        {heroCopy.heroName}
      </FadeInMotion>
      <FadeInMotion
        as="h2"
        transition={{ delay: 0.1 }}
        className={cn(
          'text-mark-pro-bold text-[28px] font-bold tracking-wider text-neutral-50',
          'xs:text-3xl',
          'lg:text-4xl',
        )}
      >
        {heroCopy.getMainHeroTitle(isNightbringer)}
      </FadeInMotion>
      <FadeInMotion
        as="p"
        transition={{ delay: 0.15 }}
        className={cn('font-inter text-sm font-semibold tracking-wide text-neutral-200', 'mp:text-base')}
      >
        {heroCopy.subHeroTitle}
      </FadeInMotion>
      <FadeInMotion transition={{ delay: 0.2 }} className="py-3">
        <button
          className={cn(
            'w-fit rounded-sm px-6 py-4',
            'font-mark-pro-bold text-xs text-white uppercase',
            'mp:text-base',
            isNightbringer ? 'bg-red-600 hover:bg-red-700' : 'bg-sky-600 hover:bg-sky-700',
          )}
        >
          {heroCopy.heroCta}
        </button>
      </FadeInMotion>
    </div>
  );
}
