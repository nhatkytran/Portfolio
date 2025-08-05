import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE, LEARNINGS } from '@/features/home/data';
import { ArrowExploreIcon } from '@/shared/icons';

/** Learning journey large desktop. */
export default function LearningJourneyLargeDesktop() {
  return (
    <section className="flex items-center justify-center pt-20 pb-24">
      <div className="max-w-8xl flex w-full flex-col gap-10 px-9">
        <div className="relative flex flex-col gap-4">
          <h2 className="font-inter text-4xl font-semibold">On The Learning Journey</h2>
          <p className="font-inter text-base">Keep pushing forward as a soldier, growing and improving my skills.</p>
          <Link
            href="/learning-journey"
            className={cn('flex items-center gap-1', 'absolute top-4 right-0 rounded-sm p-1')}
          >
            <ArrowExploreIcon fill="#e80029" />
            <p className={cn('font-inter hidden text-sm font-semibold text-red-600 uppercase underline', 'sm:block')}>
              Full site
            </p>
          </Link>
        </div>
        <ul className="grid grid-cols-4 gap-5">
          {LEARNINGS.map(({ name, Icon }) => (
            <li key={name} className={cn('learning-item-bg-hover', 'rounded-md p-0.5 transition duration-100')}>
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
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-6">
          <p className="font-riot-bold text-red-base text-sm tracking-wider">{LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE}</p>
        </div>
      </div>
    </section>
  );
}
