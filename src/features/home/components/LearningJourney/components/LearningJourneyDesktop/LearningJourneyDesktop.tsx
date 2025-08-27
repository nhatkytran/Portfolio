import Link from 'next/link';
import { motion } from 'framer-motion';

import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { LEARNINGS, LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE, LEARNING_JOURNEY_SOLDIER_QUOTE } from '@/features/home/data';
import { ArrowExploreIcon } from '@/shared/icons';

/** Learning journey desktop. */
export default function LearningJourneyDesktop({ shouldDisplay = true }: ShouldDisplayProps) {
  const { initialLoading } = useInitialLoading({ dependencies: [shouldDisplay] });

  return (
    <section className={cn('flex items-center justify-center py-20', !shouldDisplay && 'hidden')}>
      <div className="flex w-full gap-5 px-9">
        {initialLoading ? (
          <span className="w-full max-w-[474px] rounded-sm bg-neutral-100" />
        ) : (
          <motion.div
            className="max-w-[474px] rounded-sm p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
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
                <ArrowExploreIcon fill="#f03647" />
              </Link>
              <h2 className={cn('font-riot-sans-bold text-xl font-normal tracking-wider uppercase', 'lgx:text-2xl')}>
                Learning Journey
              </h2>
              <p className="font-inter text-[15px]">{LEARNING_JOURNEY_SOLDIER_QUOTE}</p>
              <p className="font-riot-bold text-red-base text-xs tracking-wider">
                {LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE}
              </p>
            </div>
          </motion.div>
        )}
        <ul className="grid min-w-[590px] flex-1 grid-cols-2 gap-4">
          {LEARNINGS.map(({ name, Icon }, index) =>
            initialLoading ? (
              <span key={name} className="h-[104px] w-full max-w-[341px] rounded-sm bg-neutral-100" />
            ) : (
              <motion.li
                key={name}
                className={cn('learning-item-bg-hover', 'min-w-[284px] rounded-md p-0.5 transition duration-100')}
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
                      'font-inter lgx:text-lg px-4 py-2 text-base font-bold tracking-wider',
                    )}
                  >
                    {name}
                  </p>
                </div>
              </motion.li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
