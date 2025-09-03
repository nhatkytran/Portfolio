import Link from 'next/link';

import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { useBringer } from '@/shared/hooks';
import {
  LEARNINGS,
  LEARNING_ICON_STYLES,
  LEARNING_JOURNEY_SOLDIER_QUOTE,
  LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE,
  LEARNING_JOURNEY_DAWN_BRINGER_QUOTE,
} from '@/features/home/data';
import { ArrowExploreIcon, LearningBookIcon } from '@/shared/icons';
import FadeInMotion from '@/shared/components/FadeInMotion';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'rounded-sm bg-neutral-100' });

/** Learning journey mobile. */
export default function LearningJourneyMobile({ shouldDisplay = true }: ShouldDisplayProps) {
  const { initialLoading } = useInitialLoading({ dependencies: [shouldDisplay] });
  const { isNightbringer } = useBringer();

  return (
    <section className={cn('py-14', !shouldDisplay && 'hidden')}>
      <div className={cn('flex flex-col gap-7 px-4', 'xs:px-6', 'sm:gap-9 sm:px-9')}>
        {initialLoading ? (
          <SkeletonLoading className="h-[158px] w-full" />
        ) : (
          <FadeInMotion
            className={cn(
              'relative flex size-full flex-col justify-center gap-2.5',
              'overflow-hidden rounded-sm bg-neutral-50 px-6 pt-6 pb-7',
              'sm:py-9 sm:pr-34 sm:pl-9',
            )}
          >
            <h2 className="font-riot-sans-bold text-xl font-normal tracking-wider uppercase">Learning Journey</h2>
            <p className="font-inter text-[15px]">{LEARNING_JOURNEY_SOLDIER_QUOTE}</p>
            <p
              className={cn('font-riot-bold text-xs tracking-wider', isNightbringer ? 'text-red-base' : 'text-sky-600')}
            >
              {isNightbringer ? LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE : LEARNING_JOURNEY_DAWN_BRINGER_QUOTE}
            </p>
            <div
              className={cn(
                'learning-journey-clip-path',
                'h-full w-32',
                'absolute top-0 right-0 hidden',
                'sm:flex sm:items-center sm:justify-center',
                isNightbringer ? 'bg-red-600' : 'bg-sky-500',
              )}
            >
              <LearningBookIcon className="relative left-1" />
            </div>
          </FadeInMotion>
        )}
        {initialLoading ? (
          <SkeletonLoading className="h-[412px] w-full" />
        ) : (
          <FadeInMotion className={cn('flex flex-col gap-6', 'rounded-sm bg-neutral-50 px-6 pt-6 pb-8', 'sm:px-10')}>
            <div className="flex items-center justify-between">
              <h3 className="font-inter text-xl font-semibold">Improvement Status</h3>
              {/* TODO (Ky Tran): Implement learning journey page. */}
              <Link
                href="/learning-journey"
                className={cn('flex items-center gap-1.5 rounded-sm bg-neutral-200 p-1', 'sm:bg-transparent sm:p-0')}
              >
                <p
                  className={cn(
                    'hidden',
                    'font-inter text-sm font-bold uppercase',
                    'sm:block',
                    isNightbringer ? 'text-red-600' : 'text-sky-600',
                  )}
                >
                  Full site
                </p>
                <ArrowExploreIcon fill={isNightbringer ? '#e80029' : '#007dd2'} />
              </Link>
            </div>
            <ul className="flex flex-col gap-4">
              {LEARNINGS.map(({ name, Icon }, index) => (
                <li key={name} className="group rounded-sm p-0.5">
                  <div
                    className={cn(
                      'flex flex-col items-start justify-between gap-2',
                      'rounded-sm bg-white px-5 py-4',
                      'group-hover:rounded-xs',
                      'xxs:px-6',
                      'sm:flex-row sm:items-center',
                    )}
                  >
                    <div className={cn('flex items-center gap-2', 'xxs:gap-2.5')}>
                      <div
                        className={cn(
                          'flex size-7.5 flex-shrink-0 items-center justify-center',
                          'rounded-sm bg-neutral-50',
                        )}
                      >
                        <Icon {...LEARNING_ICON_STYLES[index]} />
                      </div>
                      <p className="font-inter text-sm font-semibold tracking-wider text-neutral-900">{name}</p>
                    </div>
                    <div className="flex flex-row-reverse items-center gap-2">
                      <span className="font-inter text-sm tracking-wider text-neutral-400 uppercase">On Learning</span>
                      <span className="block size-4 rounded-full bg-lime-400" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </FadeInMotion>
        )}
      </div>
    </section>
  );
}
