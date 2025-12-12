'use client';

import StraightStick from './components/StraightStick';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { ESSENTIAL_INFORMATION, ESSENTIAL_INFORMATION_ICON_STYLES } from '@/features/layout/data';

/** Essential information. */
export default function EssentialInformation() {
  const { isNightbringer } = useBringer();

  return (
    <div
      className={cn(
        'flex flex-col justify-center',
        'w-full max-w-6xl gap-6',
        'sm:gap-8',
        'lg:flex-row lg:gap-6',
        'xl:gap-8',
      )}
    >
      {ESSENTIAL_INFORMATION.map(({ label, content, Icon }, index) => (
        <div
          key={index}
          className={cn(
            'group relative flex gap-2.5',
            'overflow-hidden rounded-sm bg-neutral-800 px-3 py-4.5',
            'xxs:gap-4 xxs:px-5 xxs:py-5',
            'lg:w-80 lg:px-4 xl:px-5',
          )}
        >
          <div className="flex items-center justify-center">
            <div className={cn('rounded-full bg-neutral-900 p-3', 'xxs:p-4')}>
              <Icon />
            </div>
          </div>
          <div className={cn('flex flex-col justify-center gap-0.5', 'font-inter z-1 text-[15px] text-white')}>
            <p className={cn('font-semibold tracking-wide', 'lg:text-base')}>{label}</p>
            <p className="tracking-wider">{content}</p>
          </div>
          <StraightStick
            className={cn(
              'left-20 -rotate-75',
              'lgx:left-25',
              'group-hover:lgx:left-5 group-hover:left-10',
              isNightbringer ? 'bg-red-600' : 'bg-sky-600',
            )}
          />
          <StraightStick
            className={cn(
              'left-25 -rotate-75',
              'lgx:left-30',
              'group-hover:left-20',
              isNightbringer ? 'bg-red-600' : 'bg-sky-600',
            )}
          />
          <StraightStick
            className={cn(
              'left-35 -rotate-75',
              'lgx:left-40',
              'group-hover:lgx:left-43 group-hover:left-38',
              isNightbringer ? 'bg-blue-400' : 'bg-red-500',
            )}
          />
          <div
            className={cn(
              'absolute top-0 right-0 hidden h-full',
              'aspect-square opacity-8',
              'sm:flex sm:items-center sm:justify-center',
              'lg:hidden',
            )}
          >
            <Icon {...ESSENTIAL_INFORMATION_ICON_STYLES[index]} />
          </div>
        </div>
      ))}
    </div>
  );
}
