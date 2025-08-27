'use client';

import LearningJourneyLargeDesktop from './components/LearningJourneyLargeDesktop';
import LearningJourneyDesktop from './components/LearningJourneyDesktop';
import LearningJourneyMobile from './components/LearningJourneyMobile';

import { cn } from '@/shared/utils/helpers';
import { useResponsiveDisplay } from '@/shared/hooks';
import { DISPLAY_SCREEN } from '@/shared/constants';

/** Learning journey. */
export default function LearningJourney() {
  const { display } = useResponsiveDisplay();

  return (
    <>
      <div className={cn('h-[508px]', display != null && 'hidden')} />
      <LearningJourneyLargeDesktop shouldDisplay={display === DISPLAY_SCREEN.LARGE_DESKTOP} />
      <LearningJourneyDesktop shouldDisplay={display === DISPLAY_SCREEN.DESKTOP} />
      <LearningJourneyMobile shouldDisplay={display === DISPLAY_SCREEN.TABLET || display === DISPLAY_SCREEN.MOBILE} />
    </>
  );
}
