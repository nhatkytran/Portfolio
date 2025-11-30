import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { ArrowExploreIcon } from '@/shared/icons/layout';
import { LEARNINGS, LEARNING_ICON_STYLES } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Card content */
export default function CardContent() {
  const { isNightbringer } = useBringer();

  return (
    <FadeInMotion className={cn('flex flex-col gap-6', 'rounded-sm bg-neutral-50 px-6 pt-6 pb-8', 'sm:px-10')}>
      <div className="flex items-center justify-between">
        <h3 className="font-inter text-xl font-semibold">Improvement Status</h3>
        <Link
          href="#"
          className={cn('flex items-center gap-1.5 rounded-sm bg-neutral-200 p-1', 'sm:bg-transparent sm:p-0')}
        >
          <p
            className={cn(
              'font-inter hidden text-sm font-bold uppercase',
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
                  className={cn('flex size-7.5 flex-shrink-0 items-center justify-center', 'rounded-sm bg-neutral-50')}
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
  );
}
