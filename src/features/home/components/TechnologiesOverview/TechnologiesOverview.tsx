import { cn } from '@/shared/utils/helpers';
import { AngularIcon, HtmlIcon, JavaScriptIcon, NodeIcon, ReactIcon, TypeScriptIcon } from '@/shared/icons';

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
    <section className={cn('flex items-center justify-center', 'bg-black pt-20 pb-24')}>
      <div className={cn('max-w-8xl w-full', 'flex flex-col items-center gap-10 px-9')}>
        <div className={cn('w-full text-center', 'flex flex-col gap-4')}>
          <h2 className="font-inter text-4xl font-semibold text-white">Technologies</h2>
          <p className="font-inter text-base text-white">Technologies I use to build web applications.</p>
        </div>
        <div className={cn('w-full max-w-3xl', 'grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-12')}>
          {TECHNOLOGIES_OVERVIEW.map((technology, index) => (
            <div key={index} className="relative">
              <div
                style={{ backgroundImage: `url('/images/tech-overview-${index}.webp')` }}
                className={cn('technologies-overview-clip-path relative', 'bg-cover bg-center bg-no-repeat pt-[125%]')}
              >
                <div className={cn('technologies-overview-bg size-full', 'absolute top-0 left-0')} />
                <div
                  className={cn(
                    'font-riot-sans-bold',
                    'absolute bottom-4 left-6',
                    'text-[20px] tracking-wider text-white italic',
                  )}
                >
                  {technology.name}
                </div>
              </div>
              <technology.Icon className={cn('size-[54%] opacity-90', 'absolute -right-2 bottom-11')} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
