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
    <section className="flex items-center justify-center bg-neutral-50 py-20">
      <div className="max-w-8xl flex w-full flex-col gap-14 px-9">
        <h2 className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>
          Front-end Skills
        </h2>
        <div className={cn('grid grid-cols-6 gap-4', 'lgx:grid-cols-7')}>
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
              {<Icon className="size-18" />}
              <p className="font-mark-pro-bold text-center text-sm text-neutral-900">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
