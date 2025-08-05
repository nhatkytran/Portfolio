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
  { href: '/contact', label: 'Contact' },
  { href: '/blogs', label: 'Blogs' },
];
