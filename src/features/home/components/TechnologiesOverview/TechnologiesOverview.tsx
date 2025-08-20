import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import {
  AngularIcon,
  ArrowExploreIcon,
  HtmlIcon,
  JavaScriptIcon,
  NodeIcon,
  ReactIcon,
  TypeScriptIcon,
} from '@/shared/icons';

const TECHNOLOGIES_OVERVIEW = [
  { name: 'HTML / CSS', Icon: HtmlIcon },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'React / Next', Icon: ReactIcon },
  { name: 'Angular', Icon: AngularIcon },
  { name: 'Node / Express', Icon: NodeIcon },
];

/** Technologies overview. */
export default function TechnologiesOverview() {
  return (
    <section className={cn('flex items-center justify-center', 'relative bg-black pt-20 pb-24')}>
      <div className={cn('technologies-overview-full-site-clip-path bg-red-600', 'absolute top-0 right-0 size-28')}>
        <Link href="/skills" className="absolute top-3.5 right-3.5 cursor-pointer p-2">
          <ArrowExploreIcon fill="white" className="size-5" />
        </Link>
      </div>
      <div className={cn('max-w-8xl w-full', 'flex flex-col items-center gap-16 px-4', 'xs:px-6', 'sm:px-9')}>
        <div className={cn('w-full', 'flex flex-col items-center gap-4')}>
          <h2 className="font-inter text-4xl font-semibold text-white">Technologies</h2>
          <p className={cn('font-inter w-full max-w-100 text-center text-base text-white', 'md:max-w-full')}>
            My gear evolves with every battle, and here are some of the technologies at my side.
          </p>
        </div>
        <div
          className={cn(
            'w-full max-w-115',
            'grid grid-cols-2 gap-x-2 gap-y-12',
            'xs:gap-x-6',
            'md:max-w-176 md:grid-cols-3',
            'mp:max-w-3xl',
          )}
        >
          {TECHNOLOGIES_OVERVIEW.map(({ name, Icon }, index) => (
            <div key={index} className="relative">
              <div
                style={{ backgroundImage: `url('/images/tech-overview-${index}.webp')` }}
                className={cn(
                  'technologies-overview-clip-path',
                  'relative pt-[125%]',
                  'bg-cover bg-center bg-no-repeat',
                )}
              >
                <div className={cn('technologies-overview-bg size-[101%]', 'absolute top-0 left-0')} />
                <div
                  className={cn(
                    'font-riot-sans-bold',
                    'absolute bottom-4 left-5 hidden',
                    'text-base tracking-wider text-white italic',
                    'xs:block',
                    'md:text-lg',
                    'mp:left-6 mp:text-xl',
                  )}
                >
                  {name}
                </div>
              </div>
              <Icon
                className={cn(
                  'size-[54%] opacity-90',
                  'absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2',
                  'xs:-right-2 xs:bottom-11 xs:translate-x-0 xs:translate-y-0',
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
