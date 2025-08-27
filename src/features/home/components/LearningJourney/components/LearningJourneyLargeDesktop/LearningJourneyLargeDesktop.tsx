import Link from 'next/link';
import { motion } from 'framer-motion';

import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { LEARNINGS, LEARNING_JOURNEY_SOLDIER_QUOTE, LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE } from '@/features/home/data';
import { ArrowExploreIcon } from '@/shared/icons';
import SkeletonLoading from '@/features/home/components/LearningJourney/components/SkeletonLoading';

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
    <section className={cn('flex items-center justify-center pt-20 pb-24', !shouldDisplay && 'hidden')}>
      <div className="max-w-8xl flex w-full flex-col gap-16 px-9">
        <div className="relative">
          {initialLoading ? (
            <div className="flex flex-col gap-4">
              <SkeletonLoading className="h-[40px] w-[440px]" />
              <SkeletonLoading className="h-[24px] w-[512px]" />
            </div>
          ) : (
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="font-inter text-4xl font-semibold">On The Learning Journey</h2>
              <p className="font-inter text-base">{LEARNING_JOURNEY_SOLDIER_QUOTE}</p>
            </motion.div>
          )}
          <Link
            href="/learning-journey"
            onClick={handleLinkPrevention}
            className={cn('absolute top-4 right-0 rounded-sm p-1', initialLoading && 'cursor-default')}
          >
            {initialLoading ? (
              <SkeletonLoading className="block h-[28px] w-[96px]" />
            ) : (
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowExploreIcon fill="#e80029" />
                <p className="font-inter text-sm font-semibold text-red-600 uppercase underline">Full site</p>
              </motion.div>
            )}
          </Link>
        </div>
        <ul className="grid grid-cols-4 gap-5">
          {LEARNINGS.map(({ name, Icon }, index) =>
            initialLoading ? (
              <SkeletonLoading key={name} className="h-[104px] w-full max-w-[305px]" />
            ) : (
              <motion.li
                key={name}
                className={cn('learning-item-bg-hover', 'rounded-md p-0.5 transition duration-100')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
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
              </motion.li>
            ),
          )}
        </ul>
        <div className="flex flex-col gap-6">
          {initialLoading ? (
            <SkeletonLoading className="h-[20px] w-[496px]" />
          ) : (
            <motion.p
              className="font-riot-bold text-red-base text-sm tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
