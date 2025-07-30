import { cn } from '@/shared/utils/helpers';
import { HeartIcon, JavaScriptIcon, LanguageIcon, MusicIcon } from '@/shared/icons';

const learnings = [
  { name: 'Coding - JavaScript Full Stack', Icon: JavaScriptIcon },
  { name: 'Language - English and Chinese', Icon: LanguageIcon },
  { name: 'Music - Piano and Guitar', Icon: MusicIcon },
  { name: 'Health - Fitness and Nutrition', Icon: HeartIcon },
];

/** Home page. */
export default function Home() {
  return (
    <>
      <section className="h-[460px] bg-black"></section>
      <section className="flex items-center justify-center pt-20 pb-24">
        <div className="max-w-8xl flex w-full flex-col gap-10 px-9">
          <div className="flex flex-col gap-4">
            <h2 className="font-inter text-4xl font-semibold">On The Learning Journey</h2>
            <p className="font-inter text-base">Keep pushing forward as a soldier, growing and improving my skills.</p>
          </div>
          <ul className="grid grid-cols-4 gap-6">
            {learnings.map(({ name, Icon }) => (
              <li key={name} className="flex min-h-[92px] overflow-hidden rounded-sm bg-neutral-100">
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
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
