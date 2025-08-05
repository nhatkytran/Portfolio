'use client';

import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useResponsiveDisplay } from '@/shared/hooks';
import { ArrowExploreIcon, HeartIcon, JavaScriptIcon, LanguageIcon, LearningBookIcon, MusicIcon } from '@/shared/icons';
import { LearningIconProps } from '@/shared/utils/types';
import { DISPLAY_SCREEN } from '@/shared/constants';

const learnings = [
  { name: 'Coding - Full Stack Developer', Icon: JavaScriptIcon },
  { name: 'Language - English and Chinese', Icon: LanguageIcon },
  { name: 'Music - Piano and Guitar', Icon: MusicIcon },
  { name: 'Health - Fitness and Nutrition', Icon: HeartIcon },
];

const learningIconsData: Record<string, LearningIconProps> = {
  ['Coding - Full Stack Developer']: {
    width: 18,
    height: 18,
    fill: '#111111',
  },
  ['Language - English and Chinese']: {
    width: 16,
    height: 16,
    fill: '#111111',
  },
  ['Music - Piano and Guitar']: {
    width: 17,
    height: 17,
    fill: '#111111',
  },
  ['Health - Fitness and Nutrition']: {
    width: 13,
    height: 14,
    fill: '#111111',
  },
};

/** Learning journey. */
export default function LearningJourney() {
  const { display } = useResponsiveDisplay();

  if (display == null) {
    return null;
  }

  if (display === DISPLAY_SCREEN.LARGE_DESKTOP) {
    return (
      <section className="flex items-center justify-center pt-20 pb-24">
        <div className="max-w-8xl flex w-full flex-col gap-10 px-9">
          <div className="relative flex flex-col gap-4">
            <h2 className="font-inter text-4xl font-semibold">On The Learning Journey</h2>
            <p className="font-inter text-base">Keep pushing forward as a soldier, growing and improving my skills.</p>
            <Link href="/learning-journey" className="absolute top-4 right-0 flex items-center gap-1 rounded-sm p-1">
              <ArrowExploreIcon fill="#e80029" />
              <p className="font-inter hidden text-sm font-semibold text-red-600 uppercase underline sm:block">
                Full site
              </p>
            </Link>
          </div>
          <ul className="grid grid-cols-4 gap-5">
            {learnings.map(({ name, Icon }) => (
              <li key={name} className={cn('learning-item-bg-hover', 'rounded-md p-0.5 transition duration-100')}>
                <div
                  className={cn(
                    'flex h-full min-h-[100px]',
                    'overflow-hidden rounded-md border-2 border-white bg-neutral-50',
                    'hover:rounded-sm',
                  )}
                >
                  <div className={cn('flex items-center justify-center', 'learning-item-clip-path w-14 bg-red-600')}>
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
            <p className="font-riot-bold text-red-base text-sm tracking-wider">
              &quot;Let the light fade - I was never meant to follow it, only to surpass it.&quot;
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (display === DISPLAY_SCREEN.DESKTOP) {
    return (
      <section className="flex items-center justify-center py-20">
        <div className="flex w-full gap-5 px-9">
          <div className="rounded-sm p-1">
            <div className="relative flex size-full flex-col justify-center gap-2.5 rounded-sm bg-neutral-50 p-9">
              <Link href="/learning-journey" className="absolute top-4 right-4 rounded-sm p-1 hover:bg-neutral-200">
                <ArrowExploreIcon fill="#f03647" />
              </Link>
              <h2 className="font-riot-sans-bold lgx:text-2xl text-xl font-normal tracking-wider uppercase">
                Learning Journey
              </h2>
              <p className="font-inter text-[15px]">
                Keep pushing forward as a soldier, growing and improving my skills.
              </p>
              <p className="font-riot-bold text-red-base text-xs tracking-wider">
                &quot;Let the light fade - I was never meant to follow it, only to surpass it.&quot;
              </p>
              {/* <p className="font-riot-bold text-xs text-blue-600">
                &quot;Let the darkness come - I was not shaped to fear it, only to outshine it.&quot;
              </p> */}
            </div>
          </div>
          <ul className="grid min-w-[590px] grid-cols-2 gap-4">
            {learnings.map(({ name, Icon }) => (
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
                  <div className={cn('flex items-center justify-center', 'learning-item-clip-path w-14 bg-red-600')}>
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
          <p className="font-inter text-[15px]">Keep pushing forward as a soldier, growing and improving my skills.</p>
          <p className="font-riot-bold text-red-base text-xs tracking-wider">
            &quot;Let the light fade - I was never meant to follow it, only to surpass it.&quot;
          </p>
          {/* <p className="font-riot-bold text-xs text-blue-600">
                &quot;Let the darkness come - I was not shaped to fear it, only to outshine it.&quot;
              </p> */}
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
            {learnings.map(({ name, Icon }) => (
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
                      <Icon {...learningIconsData[name]} />
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
