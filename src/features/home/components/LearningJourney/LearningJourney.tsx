'use client';

import { cn } from '@/shared/utils/helpers';
import { useResponsiveDisplay } from '@/shared/hooks';
import { HeartIcon, JavaScriptIcon, LanguageIcon, MusicIcon } from '@/shared/icons';
import { DISPLAY_SCREEN } from '@/shared/constants';

const learnings = [
  { name: 'Coding - Full Stack Developer', Icon: JavaScriptIcon },
  { name: 'Language - English and Chinese', Icon: LanguageIcon },
  { name: 'Music - Piano and Guitar', Icon: MusicIcon },
  { name: 'Health - Fitness and Nutrition', Icon: HeartIcon },
];

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
          <div className="flex flex-col gap-4">
            <h2 className="font-inter text-4xl font-semibold">On The Learning Journey</h2>
            <p className="font-inter text-base">Keep pushing forward as a soldier, growing and improving my skills.</p>
          </div>
          <ul className="grid grid-cols-4 gap-5">
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
    return (
      <section className="flex items-center justify-center py-20">
        <div className="flex w-full gap-5 px-9">
          <div className="rounded-sm p-1">
            <div className="flex size-full flex-col justify-center gap-2.5 rounded-sm bg-neutral-100 p-9">
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

  return <section>Mobile</section>;
}
