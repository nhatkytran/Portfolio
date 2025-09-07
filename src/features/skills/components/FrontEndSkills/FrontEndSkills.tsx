import { cn } from '@/shared/utils/helpers';
import {
  HTML5Icon,
  CSS3Icon,
  SassIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextIcon,
  ReactRouterIcon,
  ReactQueryIcon,
  ReduxIcon,
  ZustandIcon,
  ReactHookFormIcon,
  MaterialUIIcon,
  TailwindCSSIcon,
  FramerMotionIcon,
  AngularIcon,
  AngularMaterialIcon,
  RxJSIcon,
  VueJSIcon,
  D3Icon,
  MaterializeIcon,
} from '@/shared/icons/skills/fe';

const SKILLS = [
  { name: 'HTML5', Icon: HTML5Icon },
  { name: 'CSS3', Icon: CSS3Icon },
  { name: 'Sass', Icon: SassIcon },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextIcon },
  { name: 'React Router', Icon: ReactRouterIcon },
  { name: 'React Query', Icon: ReactQueryIcon },
  { name: 'Redux', Icon: ReduxIcon },
  { name: 'Zustand', Icon: ZustandIcon },
  { name: 'React Hook Form', Icon: ReactHookFormIcon },
  { name: 'Material UI', Icon: MaterialUIIcon },
  { name: 'Tailwind CSS', Icon: TailwindCSSIcon },
  { name: 'Framer Motion', Icon: FramerMotionIcon },
  { name: 'Angular', Icon: AngularIcon },
  { name: 'Angular Material', Icon: AngularMaterialIcon },
  { name: 'RxJS', Icon: RxJSIcon },
  { name: 'Vue.js', Icon: VueJSIcon },
  { name: 'D3.js', Icon: D3Icon },
  { name: 'Materialize', Icon: MaterializeIcon },
];

/** Front-end skills component. */
export default function FrontEndSkills() {
  return (
    <section className={cn('flex items-center justify-center', 'bg-neutral-50 py-10', 'sm:py-14', 'lg:py-20')}>
      <div className={cn('flex flex-col gap-9', 'max-w-8xl w-full px-4', 'xs:px-6', 'sm:gap-11 sm:px-9', 'lg:gap-14')}>
        <h2 className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>
          Front-end Skills
        </h2>
        <div
          className={cn(
            'grid grid-cols-2 gap-3',
            'xs:gap-4',
            'sm:grid-cols-3',
            'md:grid-cols-4',
            'mp:grid-cols-5',
            'lgx:grid-cols-6',
            'xl:grid-cols-7',
          )}
        >
          {SKILLS.map(({ name, Icon }) => (
            <div
              key={name}
              className={cn(
                'flex flex-col items-center gap-4',
                'bg-white px-4 py-6 transition-all',
                'cursor-pointer rounded-sm border-2 border-neutral-100 shadow-xs',
                'hover:border-red-600 hover:shadow-lg',
              )}
            >
              {<Icon className={cn('size-14', 'xs:size-16', 'lg:size-18')} />}
              <p
                className={cn(
                  'font-mark-pro-bold text-center text-[11px] text-neutral-900',
                  'xxs:text-[13px]',
                  'lg:text-sm',
                )}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
