import Link from 'next/link';

import {
  LEARNINGS,
  LEARNING_JOURNEY_DAWN_BRINGER_QUOTE,
  LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE,
  LEARNING_JOURNEY_SOLDIER_QUOTE,
} from '@/features/home/data';
import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { useBringer } from '@/shared/hooks';
import { ArrowExploreIcon } from '@/shared/icons';
import FadeInMotion from '@/shared/components/FadeInMotion';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'rounded-sm bg-neutral-100' });

/** Learning journey desktop. */
export default function LearningJourneyDesktop({ shouldDisplay = true }: ShouldDisplayProps) {
  const { initialLoading } = useInitialLoading({ dependencies: [shouldDisplay] });
  const { isNightbringer } = useBringer();

  return (
    <section className={cn('flex items-center justify-center py-20', !shouldDisplay && 'hidden')}>
      <div className="flex w-full gap-5 px-9">
        {initialLoading ? (
          <SkeletonLoading className="w-full max-w-[474px]" />
        ) : (
          <FadeInMotion className="max-w-[474px] rounded-sm p-1">
            <div
              className={cn(
                'relative size-full',
                'flex flex-col justify-center gap-2.5',
                'rounded-sm bg-neutral-50 p-9',
              )}
            >
              <Link
                href="/learning-journey"
                className={cn('absolute top-4 right-4 rounded-sm p-1', 'hover:bg-neutral-200')}
              >
                <ArrowExploreIcon fill={isNightbringer ? '#f03647' : '#08b0f0'} />
              </Link>
              <h2 className={cn('font-riot-sans-bold text-xl font-normal tracking-wider uppercase', 'lgx:text-2xl')}>
                Learning Journey
              </h2>
              <p className="font-inter text-[15px]">{LEARNING_JOURNEY_SOLDIER_QUOTE}</p>
              <p
                className={cn(
                  'font-riot-bold text-xs tracking-wider',
                  isNightbringer ? 'text-red-base' : 'text-sky-600',
                )}
              >
                {isNightbringer ? LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE : LEARNING_JOURNEY_DAWN_BRINGER_QUOTE}
              </p>
            </div>
          </FadeInMotion>
        )}
        <ul className="grid min-w-[590px] flex-1 grid-cols-2 gap-4">
          {LEARNINGS.map(({ name, Icon }, index) =>
            initialLoading ? (
              <SkeletonLoading key={name} className="h-[104px] w-full max-w-[341px]" />
            ) : (
              <FadeInMotion
                key={name}
                as="li"
                transition={{ delay: index * 0.05 }}
                className={cn(
                  'min-w-[284px] rounded-md p-0.5 transition duration-100',
                  isNightbringer ? 'learning-item-bg-hover' : 'learning-item-bg-dawn-hover',
                )}
              >
                <div
                  className={cn(
                    'flex h-full min-h-[100px]',
                    'overflow-hidden rounded-md border-2 border-white bg-neutral-50',
                    'hover:rounded-sm',
                  )}
                >
                  <div
                    className={cn(
                      'learning-item-clip-path',
                      'flex w-14 items-center justify-center',
                      isNightbringer ? 'bg-red-600' : 'bg-sky-500',
                    )}
                  >
                    <Icon />
                  </div>
                  <p
                    className={cn(
                      'flex flex-1 items-center justify-center',
                      'font-inter lgx:text-lg px-4 py-2 text-base font-bold tracking-wider',
                    )}
                  >
                    {name}
                  </p>
                </div>
              </FadeInMotion>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
