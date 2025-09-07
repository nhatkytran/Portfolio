import { ReactNode } from 'react';

import { PropsWithClassName } from '@/shared/utils/types';
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
  RxJSIcon,
  AngularMaterialIcon,
  VueJSIcon,
  D3Icon,
  MaterializeIcon,
} from '@/shared/icons/skills/fe';

/** Light theme of the stack skills. */
export const STACK_SKILLS_LIGHT = 'light' as const;

/** Dark theme of the stack skills. */
export const STACK_SKILLS_DARK = 'dark' as const;

/** Theme of the stack skills. */
export type StackSkillsTheme = typeof STACK_SKILLS_LIGHT | typeof STACK_SKILLS_DARK;

// prettier-ignore
export type Skill = {
  
  /** Name of the skill. */
  readonly name: string;

  /** Icon of the skill. */
  readonly Icon: (props: PropsWithClassName) => ReactNode;
}

/** Front-end skills. */
export const FRONT_END_SKILLS: readonly Skill[] = [
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
  { name: 'RxJS', Icon: RxJSIcon },
  { name: 'Angular Material', Icon: AngularMaterialIcon },
  { name: 'Vue.js', Icon: VueJSIcon },
  { name: 'D3.js', Icon: D3Icon },
  { name: 'Materialize', Icon: MaterializeIcon },
];
