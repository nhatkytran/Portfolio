import {
  CssIcon,
  HtmlIcon,
  JavaScriptIcon,
  NextIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from '@/shared/icons';

// prettier-ignore
type AppNavigationLink = {

  /** URL. */
  readonly href: string;

  /** Label. */
  readonly label: string;
};

/** App navigation links. */
export const APP_NAVIGATION_LINKS: readonly AppNavigationLink[] = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/learning', label: 'Learning' },
  { href: '/blogs', label: 'Blogs' },
];

/** Technology icons. */
export const TECHNOLOGY_ICONS = [
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextIcon,
  TailwindCssIcon,
  HtmlIcon,
  CssIcon,
];
