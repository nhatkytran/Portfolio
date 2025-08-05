import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE, LEARNINGS } from '@/features/home/data';
import { ArrowExploreIcon } from '@/shared/icons';

/** Learning journey desktop. */
export default function LearningJourneyDesktop() {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="flex w-full gap-5 px-9">
        <div className="rounded-sm p-1">
          <div
            className={cn('relative size-full', 'flex flex-col justify-center gap-2.5', 'rounded-sm bg-neutral-50 p-9')}
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
            <p className="font-inter text-[15px]">
              Keep pushing forward as a soldier, growing and improving my skills.
            </p>
            <p className="font-riot-bold text-red-base text-xs tracking-wider">
              {LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE}
            </p>
          </div>
        </div>
        <ul className="grid min-w-[590px] grid-cols-2 gap-4">
          {LEARNINGS.map(({ name, Icon }) => (
            <li
              key={name}
              className={cn('learning-item-bg-hover', 'min-w-[284px] rounded-md p-0.5 transition duration-100')}
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
