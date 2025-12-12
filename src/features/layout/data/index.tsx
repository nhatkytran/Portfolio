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

  /** Nightbringer label. */
  readonly nightbringerLabel: string;

  /** Dawnbringer label. */
  readonly dawnbringerLabel: string;

  /** To nightbringer label. */
  readonly toNightbringerLabel: string;

  /** To dawnbringer label. */
  readonly toDawnbringerLabel: string;

  /** Sidebar quote getter. */
  readonly getSidebarQuote: (isNightbringer: boolean) => string;

  /** Riot Games inspired. */
  readonly riotInspire: ReactNode;

  /** Riot Games credit. */
  readonly riotCredit: string;

  /** Copyright. */
  readonly copyRight: string;

  /** Source code. */
  readonly sourceCode: string;
}

/** The copy for the layout. */
export const layoutCopy: LayoutCopy = {
  englishName: 'Ky Tran',
  nightbringerLabel: 'Nightbringer',
  dawnbringerLabel: 'Dawnbringer',
  toNightbringerLabel: 'To.Night',
  toDawnbringerLabel: 'To.Dawn',

  /**
   * Sidebar quote getter.
   * @param isNightbringer Whether is nightbringer.
   */
  getSidebarQuote: (isNightbringer: boolean) => `-- Live on the ${isNightbringer ? 'dark' : 'bright'} side --`,

  riotInspire: (
    <>
      Inspired by <span className="text-red-600">Riot Games</span>
    </>
  ),

  riotCredit: `
    This portfolio design was inspired by Riot's UI/UX.
    All rights to original assets belong to Riot Games.
    Personal, non-commercial project.
  `,

  copyRight: '© 2025 by Ky Tran (nhatky.tran.2002@gmail.com)',
  sourceCode: 'Portfolio source code',
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
    content: 'Saigon, Vietnam',
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

/** Portfolio source code. */
export const PORTFOLIO_SOURCE_CODE = 'https://github.com/nhatkytran/portfolio';

// prettier-ignore
type CVCopy = {

  /** Title. */
  readonly title: string;
};

/** The copy for the CV call to action button. */
export const cvCopy: CVCopy = {
  title: 'CV',
};
