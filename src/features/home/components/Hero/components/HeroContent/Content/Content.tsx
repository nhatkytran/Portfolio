'use client';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Hero content. */
export default function Content() {
  const { isNightbringer } = useBringer();

  return (
    <div className={cn('flex flex-3 flex-col gap-6', 'sm:pr-8', 'mp:gap-8')}>
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
        Web Developer
      </FadeInMotion>
      <FadeInMotion
        as="p"
        transition={{ delay: 0.05 }}
        className={cn('font-riot-sans-bold text-base text-white uppercase', 'mp:text-lg')}
      >
        Ky Tran - (陳 / 陈) 日 祺
      </FadeInMotion>
      <FadeInMotion
        as="h2"
        transition={{ delay: 0.1 }}
        className={cn(
          'text-mark-pro-bold text-[28px] font-bold tracking-wider text-neutral-50',
          'xs:text-[32px]',
          'lg:text-4xl',
        )}
      >
        On The{' '}
        <span className="whitespace-nowrap">
          <span
            className={cn(
              'relative top-0.25',
              'font-riot-bold-italic',
              isNightbringer ? 'text-red-600' : 'text-sky-500',
            )}
          >
            Frontlines
          </span>{' '}
          of Code
        </span>
      </FadeInMotion>
      <FadeInMotion
        as="p"
        transition={{ delay: 0.15 }}
        className={cn('font-inter text-sm font-semibold tracking-wide text-neutral-200', 'mp:text-base')}
      >
        Serving as a Frontend Web Developer since July 2024, armed with{' '}
        <span className="text-amber-300">Vanilla JavaScript</span>, <span>Next</span>,{' '}
        <span className="text-blue-400">React</span>, <span className="text-red-500">Angular</span>, and{' '}
        <span className="whitespace-nowrap">
          self-training in <span className="text-green-400">Vue</span>.
        </span>
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
          Deploy Me on Your Next Mission
        </button>
      </FadeInMotion>
    </div>
  );
}
