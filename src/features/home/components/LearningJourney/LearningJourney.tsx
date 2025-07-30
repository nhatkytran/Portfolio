'use client';

import { useEffect, useState } from 'react';

import { type ValueOf } from '@/shared/utils/types';
import { DISPLAY_SCREEN } from '@/shared/constants';
import { cn, getResponsiveDisplay } from '@/shared/utils/helpers';
import { useWindowEventListener } from '@/shared/hooks';
import { HeartIcon, JavaScriptIcon, LanguageIcon, MusicIcon } from '@/shared/icons';

const learnings = [
  { name: 'Coding - JavaScript Full Stack', Icon: JavaScriptIcon },
  { name: 'Language - English and Chinese', Icon: LanguageIcon },
  { name: 'Music - Piano and Guitar', Icon: MusicIcon },
  { name: 'Health - Fitness and Nutrition', Icon: HeartIcon },
];

/** Learning journey. */
export default function LearningJourney() {
  const [display, setDisplay] = useState<ValueOf<typeof DISPLAY_SCREEN> | null>(null);

  /** Handle responsive. */
  const handleResponsive = () => {
    const responsiveDisplay = getResponsiveDisplay(window.innerWidth);
    setDisplay(responsiveDisplay);
  };

  /** Handles responsive on resize event. */
  useWindowEventListener({
    eventName: 'resize',
    handler: handleResponsive,
  });

  /** Handles responsive at first render. */
  useEffect(() => {
    handleResponsive();
  }, []);

  if (display == null) {
    return null;
  }

  if (display === DISPLAY_SCREEN.LARGE_DESKTOP) {
    return (
      <section className="flex items-center justify-center pt-20 pb-24">
        <div className="max-w-8xl flex w-full flex-col gap-10 px-9">
          <div className="flex flex-col gap-4">
            <h2 className="font-inter text-4xl font-semibold">On The Learning Journey</h2>
            <p className="font-inter text-base">Keep pushing forward as a soldier, growing and improving my skills.</p>
          </div>
          <ul className="grid grid-cols-4 gap-6">
            {learnings.map(({ name, Icon }) => (
              <li key={name} className={cn('learning-item-bg-hover', 'rounded-md p-0.5 transition duration-100')}>
                <div
                  className={cn(
                    'flex h-full min-h-[100px]',
                    'overflow-hidden rounded-md border-2 border-white bg-neutral-100',
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
        </div>
      </section>
    );
  }

  if (display === DISPLAY_SCREEN.DESKTOP) {
    return <section>Desktop</section>;
  }

  return <section>Mobile</section>;
}
