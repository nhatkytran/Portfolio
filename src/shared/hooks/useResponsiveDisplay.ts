import { useEffect, useState } from 'react';

import { type ValueOf } from '@/shared/utils/types';
import { useWindowEventListener } from '@/shared/hooks';
import { BREAK_POINTS, DISPLAY_SCREEN } from '@/shared/constants';

/**
 * Get responsive display.
 * @param width - The width of the window.
 */
const getResponsiveDisplay = (width: number) => {
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

/** Hook for managing the responsive display. */
export function useResponsiveDisplay() {
  const [display, setDisplay] = useState<ValueOf<typeof DISPLAY_SCREEN> | null>(null);

  /** Handle responsive. */
  const handleResponsive = () => {
    const responsiveDisplay = getResponsiveDisplay(window.innerWidth);
    setDisplay(responsiveDisplay);
  };

  /** Handles responsive on resize event. */
  useWindowEventListener({
    eventName: 'resize',
    handler: handleResponsive,
  });

  /** Handles responsive at first render. */
  useEffect(() => {
    handleResponsive();
  }, []);

  return { display };
}
