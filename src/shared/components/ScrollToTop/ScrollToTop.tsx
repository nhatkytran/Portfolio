'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { cn } from '@/shared/utils/helpers';
import { useWindowEventListener } from '@/shared/hooks';
import { ScrollToTopIcon } from '@/shared/icons';
import FadeInMotion from '@/shared/components/FadeInMotion';

const VISIBILITY_THRESHOLD = 250;

/** Scroll to top component. */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  /** Scrolls to the top of the page. */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  /** Handles the visibility of the scroll to top button. */
  const handleVisible = () => setIsVisible(window.scrollY > VISIBILITY_THRESHOLD);

  useWindowEventListener({ eventName: 'scroll', handler: handleVisible });

  return (
    <AnimatePresence>
      {isVisible && (
        <FadeInMotion
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className={cn(
            'fixed right-4 bottom-4 z-50',
            'group flex items-center justify-center',
            'cursor-pointer rounded-sm border border-white/20 bg-black p-0.5',
          )}
        >
          <ScrollToTopIcon className={cn('size-7 fill-white/80', 'group-hover:fill-white')} />
        </FadeInMotion>
      )}
    </AnimatePresence>
  );
}
