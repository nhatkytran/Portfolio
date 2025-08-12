import { ReactNode } from 'react';

import {
  CssIcon,
  EnvelopIcon,
  GithubIcon,
  HtmlIcon,
  JavaScriptIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MapIcon,
  NextIcon,
  PhoneIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from '@/shared/icons';
import { IconAppearanceProps, PropsWithClassName } from '@/shared/utils/types';

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
    content: 'Sai Gon, Vietnam',
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

  /** Special color. */
  readonly specialColor: string;

  /** Icon. */
  readonly Icon: (props: PropsWithClassName) => ReactNode;
};

export const SOCIAL_MEDIA_ACCOUNTS: readonly SocialMediaAccount[] = [
  {
    url: 'https://www.linkedin.com/in/nhatkytran/',
    specialColor: '',
    Icon: LinkedInIcon,
  },
  {
    url: 'https://github.com/nhatkytran/',
    specialColor: '',
    Icon: GithubIcon,
  },
  {
    url: 'https://github.com/kytran-saritasa/',
    specialColor: 'orange',
    Icon: GithubIcon,
  },
  {
    url: 'https://leetcode.com/u/nhockkutean2/',
    specialColor: '',
    Icon: LeetCodeIcon,
  },
];
