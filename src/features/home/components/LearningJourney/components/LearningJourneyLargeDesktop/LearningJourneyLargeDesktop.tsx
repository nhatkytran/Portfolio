import Link from 'next/link';

import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { LEARNINGS, LEARNING_JOURNEY_SOLDIER_QUOTE, LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE } from '@/features/home/data';
import { ArrowExploreIcon } from '@/shared/icons';
import FadeInMotion from '@/shared/components/FadeInMotion';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'rounded-sm bg-neutral-100' });

/** Learning journey large desktop. */
export default function LearningJourneyLargeDesktop({ shouldDisplay = true }: ShouldDisplayProps) {
  const { initialLoading } = useInitialLoading({ dependencies: [shouldDisplay] });

  /**
   * Prevents the link from navigating.
   * @param event The click event.
   */
  const handleLinkPrevention = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <section className={cn('flex items-center justify-center py-20', !shouldDisplay && 'hidden')}>
      <div className="max-w-8xl flex w-full flex-col gap-14 px-9">
        <div className="relative">
          {initialLoading ? (
            <div className="flex flex-col gap-4">
              <SkeletonLoading className="h-[40px] w-[440px]" />
              <SkeletonLoading className="h-[24px] w-[512px]" />
            </div>
          ) : (
            <FadeInMotion className="flex flex-col gap-4">
              <h2 className="font-inter text-4xl font-semibold">On The Learning Journey</h2>
              <p className="font-inter text-base font-semibold text-neutral-600">{LEARNING_JOURNEY_SOLDIER_QUOTE}</p>
            </FadeInMotion>
          )}
          <Link
            href="/learning-journey"
            onClick={handleLinkPrevention}
            className={cn('absolute top-4 right-0 rounded-sm p-1', initialLoading && 'cursor-default')}
          >
            {initialLoading ? (
              <SkeletonLoading className="block h-[28px] w-[96px]" />
            ) : (
              <FadeInMotion className="flex items-center gap-1">
                <ArrowExploreIcon fill="#e80029" />
                <p className="font-inter text-sm font-semibold text-red-600 uppercase underline">Full site</p>
              </FadeInMotion>
            )}
          </Link>
        </div>
        <ul className="grid grid-cols-4 gap-5">
          {LEARNINGS.map(({ name, Icon }, index) =>
            initialLoading ? (
              <SkeletonLoading key={name} className="h-[104px] w-full max-w-[305px]" />
            ) : (
              <FadeInMotion
                key={name}
                as="li"
                className={cn('learning-item-bg-hover', 'rounded-md p-0.5 transition duration-100')}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className={cn(
                    'flex h-full min-h-[100px]',
                    'overflow-hidden rounded-md border-2 border-white bg-neutral-50',
                    'hover:rounded-sm',
                  )}
                >
                  <div className={cn('learning-item-clip-path', 'flex items-center justify-center', 'w-14 bg-red-600')}>
                    <Icon />
                  </div>
                  <p
                    className={cn(
                      'flex flex-1 items-center justify-center',
                      'font-inter px-4 py-2 text-lg font-bold tracking-wider',
                    )}
                  >
                    {name}
                  </p>
                </div>
              </FadeInMotion>
            ),
          )}
        </ul>
        <div className="flex flex-col gap-6">
          {initialLoading ? (
            <SkeletonLoading className="h-[20px] w-[496px]" />
          ) : (
            <FadeInMotion as="p" className="font-riot-bold text-red-base text-sm tracking-wider">
              {LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE}
            </FadeInMotion>
          )}
        </div>
      </div>
    </section>
  );
}
