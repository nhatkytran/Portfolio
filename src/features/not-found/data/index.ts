// prettier-ignore
type NotFoundCopy = {

  /** The code to display. */
  readonly code: string;

  /** The heading to display. */
  readonly heading: string;

  /** The call to action to display. */
  readonly cta: string;
};

/** The copy for the not found page. */
export const notFoundCopy: NotFoundCopy = {
  code: '404',
  heading: 'Page not found',
  cta: 'Return to home',
};
