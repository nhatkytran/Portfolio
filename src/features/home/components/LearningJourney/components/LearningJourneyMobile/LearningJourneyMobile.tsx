/** Learning journey mobile. */
import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import {
  LEARNING_ICON_STYLES,
  LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE,
  LEARNING_JOURNEY_SOLDIER_QUOTE,
  LEARNINGS,
} from '@/features/home/data';
import { ArrowExploreIcon, LearningBookIcon } from '@/shared/icons';

/** Learning journey mobile. */
export default function LearningJourneyMobile() {
  return (
    <section className={cn('py-10', 'sm:py-14')}>
      <div className={cn('flex flex-col gap-7 px-4', 'xs:px-6', 'sm:gap-9 sm:px-9')}>
        <div
          className={cn(
            'relative flex size-full flex-col justify-center gap-2.5',
            'overflow-hidden rounded-sm bg-neutral-50 p-6',
            'sm:p-9',
          )}
        >
          <h2 className={cn('font-riot-sans-bold text-xl font-normal tracking-wider uppercase')}>Learning Journey</h2>
          <p className="font-inter text-[15px]">{LEARNING_JOURNEY_SOLDIER_QUOTE}</p>
          <p className="font-riot-bold text-red-base text-xs tracking-wider">{LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE}</p>
          <div
            className={cn(
              'learning-journey-clip-path',
              'h-full w-32',
              'absolute top-0 right-0 hidden bg-red-600',
              'md:flex md:items-center md:justify-center',
            )}
          >
            <LearningBookIcon className="relative left-1" />
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-sm bg-neutral-50 px-6 py-6 sm:px-10">
          <div className="flex items-center justify-between">
            <h3 className="font-inter text-xl font-semibold">Improvement Status</h3>
            {/* TODO (Ky Tran): Implement learning journey page. */}
            <Link
              href="/learning-journey"
              className={cn('flex items-center gap-1.5 rounded-sm bg-neutral-200 p-1', 'sm:bg-transparent sm:p-0')}
            >
              <p className="font-inter hidden text-sm font-bold text-red-600 uppercase sm:block">Full site</p>
              <ArrowExploreIcon fill="#e80029" />
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            {LEARNINGS.map(({ name, Icon }, index) => (
              <li key={name} className="group rounded-sm p-0.5">
                <div
                  className={cn(
                    'flex flex-col items-start justify-between gap-2',
                    'rounded-sm bg-white px-6 py-4',
                    'group-hover:rounded-xs',
                    'sm:flex-row sm:items-center',
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={cn('flex size-7.5 items-center justify-center', 'rounded-sm bg-neutral-50')}>
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
        </div>
      </div>
    </section>
  );
}
