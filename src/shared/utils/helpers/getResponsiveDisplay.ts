import { BREAK_POINTS, DISPLAY_SCREEN } from '@/shared/constants';

/** Get responsive display. */
export const getResponsiveDisplay = (width: number) => {
  if (width >= BREAK_POINTS.XL) {
    return DISPLAY_SCREEN.LARGE_DESKTOP;
  }
  if (width >= BREAK_POINTS.LG) {
    return DISPLAY_SCREEN.DESKTOP;
  }
  if (width >= BREAK_POINTS.SM) {
    return DISPLAY_SCREEN.TABLET;
  }
  return DISPLAY_SCREEN.MOBILE;
};
