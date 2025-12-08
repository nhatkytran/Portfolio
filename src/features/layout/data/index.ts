import { ReactNode } from 'react';

import { IconAppearanceProps, PropsWithClassName } from '@/shared/utils/types';
import {
  EnvelopIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MapIcon,
  NextIcon,
  PhoneIcon,
  TailwindCssIcon,
} from '@/shared/icons/layout';
import { CssIcon } from '@/shared/icons/layout';
import { HtmlIcon, JavaScriptIcon, ReactIcon, TypeScriptIcon } from '@/shared/icons/technologies';

/** Portal id. */
export const PORTAL_ID = 'portal' as const;

/** Nightbringer mode. */
export const NIGHTBRINGER_MODE = 'NIGHTBRINGER_MODE' as const;

/** Dawnbringer mode. */
export const DAWNBRINGER_MODE = 'DAWNBRINGER_MODE' as const;

// prettier-ignore
type LayoutCopy = {

  /** English name. */
  readonly englishName: string;

}

/** The copy for the layout. */
export const layoutCopy: LayoutCopy = {
  englishName: 'Ky Tran',
};

/** Breakpoints. */
export const BREAK_POINTS = {
  SM: 640,
  LG: 1024,
  XL: 1280,
} as const;

/** Display screen. */
export const DISPLAY_SCREEN = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
  LARGE_DESKTOP: 'LARGE_DESKTOP',
} as const;

// prettier-ignore
type AppNavigationLink = {

  /** URL. */
  readonly href: string;

  /** Label. */
  readonly label: string;
};

// prettier-ignore
/** Navigating props. */
export type NavigatingProps = {

  /** Whether is navigating. */
  readonly isNavigating: boolean;

  /** Trigger navigating. */
  readonly onTriggerNavigating: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

/** App navigation links. */
export const APP_NAVIGATION_LINKS: readonly AppNavigationLink[] = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Exp / Edu' },
  { href: '/projects', label: 'Projects' },
  { href: '/learning', label: 'Learning' },
  { href: '/cv', label: 'CV' },
];

/** Technology icons. */
export const TECHNOLOGY_ICONS: readonly ((className: PropsWithClassName) => ReactNode)[] = [
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextIcon,
  TailwindCssIcon,
  HtmlIcon,
  CssIcon,
];

// prettier-ignore
type EssentialInformation = {

  /** Label. */
  readonly label: string;

  /** Content. */
  readonly content: string;

  /** Icon. */
  readonly Icon: (props: IconAppearanceProps) => ReactNode;
};

/** Essential information. */
export const ESSENTIAL_INFORMATION: readonly EssentialInformation[] = [
  {
    label: 'Gmail',
    content: 'nhockktean2@gmail.com',
    Icon: EnvelopIcon,
  },
  {
    label: 'Location',
    content: 'HCMC (Saigon), Vietnam',
    Icon: MapIcon,
  },
  {
    label: 'Phone',
    content: '(+84) 813 659 939',
    Icon: PhoneIcon,
  },
];

/** Essential information icon styles. */
export const ESSENTIAL_INFORMATION_ICON_STYLES: readonly IconAppearanceProps[] = [
  { width: 44, height: 44 },
  { width: 54, height: 54 },
  { width: 54, height: 54 },
];

// prettier-ignore
type SocialMediaAccount = {

  /** URL. */
  readonly url: string;

  /** Icon. */
  readonly Icon: (props: PropsWithClassName) => ReactNode;
};

export const SOCIAL_MEDIA_ACCOUNTS: readonly SocialMediaAccount[] = [
  {
    url: 'https://www.linkedin.com/in/nhatkytran/',
    Icon: LinkedInIcon,
  },
  {
    url: 'https://github.com/nhatkytran/',
    Icon: GithubIcon,
  },
  {
    url: 'https://leetcode.com/u/nhockkutean2/',
    Icon: LeetCodeIcon,
  },
];

// prettier-ignore
type CVCopy = {

  /** Title. */
  readonly title: string;
};

/** The copy for the CV call to action button. */
export const cvCopy: CVCopy = {
  title: 'CV',
};
