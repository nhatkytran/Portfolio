'use client';

import LearningJourneyLargeDesktop from './components/LearningJourneyLargeDesktop';
import LearningJourneyDesktop from './components/LearningJourneyDesktop';
import LearningJourneyMobile from './components/LearningJourneyMobile';

import { useResponsiveDisplay } from '@/shared/hooks';
import { DISPLAY_SCREEN } from '@/shared/constants';

/** Learning journey. */
export default function LearningJourney() {
  const { display } = useResponsiveDisplay();

  if (display == null) {
    return null;
  }

  if (display === DISPLAY_SCREEN.LARGE_DESKTOP) {
    return <LearningJourneyLargeDesktop />;
  }

  if (display === DISPLAY_SCREEN.DESKTOP) {
    return <LearningJourneyDesktop />;
  }

  return <LearningJourneyMobile />;
}
