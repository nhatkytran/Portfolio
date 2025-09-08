import { ReactNode } from 'react';

import { PropsWithClassName } from '@/shared/utils/types';
import {

  // HTML5Icon,
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
  PostCSSIcon,
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
  BunIcon,
} from '@/shared/icons/skills/be';
import { JestIcon, PuppeteerIcon, CypressIcon } from '@/shared/icons/skills/testing';
import {
  GitIcon,
  GithubIcon,
  GithubCopilotIcon,
  ParcelIcon,
  WebpackIcon,
  BabelIcon,
  EslintIcon,
  PrettierIcon,
  NPMIcon,
  JSONIcon,
  NetlifyIcon,
  VercelIcon,
} from '@/shared/icons/skills/other';
import { VSCodeIcon, WindsurfIcon, ChatGPTIcon, SlackIcon, JiraIcon, FigmaIcon } from '@/shared/icons/skills/tooling';

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

  /** URL. */
  readonly url: string;


  /** Icon of the skill. */
  readonly Icon: (props: PropsWithClassName) => ReactNode;
}

/** Front-end skills. */
export const FRONT_END_SKILLS: readonly Skill[] = [

  // {
  //   name: 'HTML5',
  //   url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax',
  //   Icon: HTML5Icon,
  // },
  { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', Icon: CSS3Icon },
  { name: 'Sass', url: 'https://sass-lang.com/', Icon: SassIcon },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', Icon: TypeScriptIcon },
  { name: 'React', url: 'https://react.dev/', Icon: ReactIcon },
  { name: 'Next.js', url: 'https://nextjs.org/docs', Icon: NextIcon },
  { name: 'React Router', url: 'https://reactrouter.com/', Icon: ReactRouterIcon },
  { name: 'React Query', url: 'https://tanstack.com/query/latest/docs/framework/react/overview', Icon: ReactQueryIcon },
  { name: 'Redux', url: 'https://redux.js.org/', Icon: ReduxIcon },
  { name: 'Zustand', url: 'https://zustand-demo.pmnd.rs/', Icon: ZustandIcon },
  { name: 'Axios', url: 'https://axios-http.com/docs/intro', Icon: AxiosIcon },
  { name: 'React Hook Form', url: 'https://react-hook-form.com/', Icon: ReactHookFormIcon },
  { name: 'Material UI', url: 'https://mui.com/', Icon: MaterialUIIcon },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', Icon: TailwindCSSIcon },
  { name: 'Framer Motion', url: 'https://motion.dev/docs/react', Icon: FramerMotionIcon },
  { name: 'Angular', url: 'https://angular.dev/', Icon: AngularIcon },
  { name: 'RxJS', url: 'https://rxjs.dev/', Icon: RxJSIcon },
  { name: 'Angular Material', url: 'https://material.angular.dev/', Icon: AngularMaterialIcon },
  { name: 'Vue.js', url: 'https://vuejs.org/', Icon: VueJSIcon },
  { name: 'D3.js', url: 'https://d3js.org/', Icon: D3Icon },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/', Icon: BootstrapIcon },
  { name: 'Materialize', url: 'https://materializecss.com/', Icon: MaterializeIcon },
  { name: 'PostCSS', url: 'https://postcss.org/', Icon: PostCSSIcon },
];

/** Back-end skills. */
export const BACK_END_SKILLS: readonly Skill[] = [
  { name: 'Node.js', url: 'https://nodejs.org/api/documentation.html', Icon: NodeJSIcon },
  { name: 'Nodemon', url: 'https://nodemon.io/', Icon: NodemonIcon },
  { name: 'Passport', url: 'https://www.passportjs.org/', Icon: PassportIcon },
  { name: 'Express', url: 'https://expressjs.com/', Icon: ExpressIcon },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', Icon: MongoDBIcon },
  { name: 'Mongoose', url: 'https://mongoosejs.com/', Icon: MongooseIcon },
  { name: 'Redis', url: 'https://redis.io/docs/latest/', Icon: RedisIcon },
  { name: 'GraphQL', url: 'https://graphql.org/learn/', Icon: GraphQLIcon },
  { name: 'Firebase', url: 'https://firebase.google.com/', Icon: FirebaseIcon },
  { name: 'Supabase', url: 'https://supabase.com/', Icon: SupabaseIcon },
  { name: 'Cloudinary', url: 'https://cloudinary.com/documentation', Icon: CloudinaryIcon },
  { name: 'AWS', url: 'https://aws.amazon.com/', Icon: AwsIcon },
  { name: 'Pug', url: 'https://pugjs.org/api/getting-started.html', Icon: PugIcon },
  { name: 'Stripe', url: 'https://stripe.com/payments', Icon: StripeIcon },
  { name: 'MySQL', url: 'https://www.mysql.com/', Icon: MySQLIcon },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', Icon: PostgreSQLIcon },
  { name: 'Postman', url: 'https://www.postman.com/', Icon: PostmanIcon },
  { name: 'Bun', url: 'https://bun.com/', Icon: BunIcon },
];

/** Testing skills. */
export const TESTING_SKILLS: readonly Skill[] = [
  { name: 'Jest', url: 'https://jestjs.io/', Icon: JestIcon },
  { name: 'Puppeteer', url: 'https://pptr.dev/', Icon: PuppeteerIcon },
  { name: 'Cypress', url: 'https://www.cypress.io/', Icon: CypressIcon },
];

/** Other skills. */
export const OTHER_SKILLS: readonly Skill[] = [
  { name: 'Git', url: 'https://git-scm.com/', Icon: GitIcon },
  { name: 'Github', url: 'https://github.com/', Icon: GithubIcon },
  { name: 'Github Copilot', url: 'https://github.com/features/copilot', Icon: GithubCopilotIcon },
  { name: 'Parcel', url: 'https://parceljs.org/', Icon: ParcelIcon },
  { name: 'Webpack', url: 'https://webpack.js.org/', Icon: WebpackIcon },
  { name: 'Babel', url: 'https://babeljs.io/', Icon: BabelIcon },
  { name: 'Eslint', url: 'https://eslint.org/', Icon: EslintIcon },
  { name: 'Prettier', url: 'https://prettier.io/', Icon: PrettierIcon },
  { name: 'NPM', url: 'https://www.npmjs.com/', Icon: NPMIcon },
  { name: 'JSON', url: 'https://www.json.org/json-en.html', Icon: JSONIcon },
  { name: 'Netlify', url: 'https://app.netlify.com/', Icon: NetlifyIcon },
  { name: 'Vercel', url: 'https://vercel.com/', Icon: VercelIcon },
];

/** Tooling skills. */
export const TOOLING_SKILLS: readonly Skill[] = [
  { name: 'VSCode', url: 'https://code.visualstudio.com/', Icon: VSCodeIcon },
  { name: 'Windsurf', url: 'https://windsurf.com/', Icon: WindsurfIcon },
  { name: 'ChatGPT', url: 'https://chatgpt.com/', Icon: ChatGPTIcon },
  { name: 'Slack', url: 'https://slack.com/', Icon: SlackIcon },
  { name: 'Jira', url: 'https://saritasa.atlassian.net/', Icon: JiraIcon },
  { name: 'Figma', url: 'https://www.figma.com/', Icon: FigmaIcon },
];
