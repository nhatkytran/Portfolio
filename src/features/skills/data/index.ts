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
  AxiosIcon,
  ReactHookFormIcon,
  MaterialUIIcon,
  TailwindCSSIcon,
  FramerMotionIcon,
  AngularIcon,
  RxJSIcon,
  AngularMaterialIcon,
  VueJSIcon,
  D3Icon,
  BootstrapIcon,
  MaterializeIcon,
} from '@/shared/icons/skills/fe';
import {
  NodeJSIcon,
  NodemonIcon,
  PassportIcon,
  ExpressIcon,
  MongoDBIcon,
  MongooseIcon,
  RedisIcon,
  GraphQLIcon,
  FirebaseIcon,
  SupabaseIcon,
  CloudinaryIcon,
  AwsIcon,
  PugIcon,
  StripeIcon,
  MySQLIcon,
  PostgreSQLIcon,
  PostmanIcon,
} from '@/shared/icons/skills/be';
import { JestIcon, PuppeteerIcon, CypressIcon } from '@/shared/icons/skills/testing';

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
  { name: 'Axios', Icon: AxiosIcon },
  { name: 'React Hook Form', Icon: ReactHookFormIcon },
  { name: 'Material UI', Icon: MaterialUIIcon },
  { name: 'Tailwind CSS', Icon: TailwindCSSIcon },
  { name: 'Framer Motion', Icon: FramerMotionIcon },
  { name: 'Angular', Icon: AngularIcon },
  { name: 'RxJS', Icon: RxJSIcon },
  { name: 'Angular Material', Icon: AngularMaterialIcon },
  { name: 'Vue.js', Icon: VueJSIcon },
  { name: 'D3.js', Icon: D3Icon },
  { name: 'Bootstrap', Icon: BootstrapIcon },
  { name: 'Materialize', Icon: MaterializeIcon },
];

/** Back-end skills. */
export const BACK_END_SKILLS: readonly Skill[] = [
  { name: 'Node.js', Icon: NodeJSIcon },
  { name: 'Nodemon', Icon: NodemonIcon },
  { name: 'Passport', Icon: PassportIcon },
  { name: 'Express', Icon: ExpressIcon },
  { name: 'MongoDB', Icon: MongoDBIcon },
  { name: 'Mongoose', Icon: MongooseIcon },
  { name: 'Redis', Icon: RedisIcon },
  { name: 'GraphQL', Icon: GraphQLIcon },
  { name: 'Firebase', Icon: FirebaseIcon },
  { name: 'Supabase', Icon: SupabaseIcon },
  { name: 'Cloudinary', Icon: CloudinaryIcon },
  { name: 'AWS', Icon: AwsIcon },
  { name: 'Pug', Icon: PugIcon },
  { name: 'Stripe', Icon: StripeIcon },
  { name: 'MySQL', Icon: MySQLIcon },
  { name: 'PostgreSQL', Icon: PostgreSQLIcon },
  { name: 'Postman', Icon: PostmanIcon },
];

/** Testing skills. */
export const TESTING_SKILLS: readonly Skill[] = [
  { name: 'Jest', Icon: JestIcon },
  { name: 'Puppeteer', Icon: PuppeteerIcon },
  { name: 'Cypress', Icon: CypressIcon },
];
