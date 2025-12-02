'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import Logo from '@/features/layout/components/Header/components/Logo';
import Navbar from '@/features/layout/components/Header/components/Navbar';
import Bringer from '@/features/layout/components/Header/components/Bringer';
import Sidebar from '@/features/layout/components/Header/components/Sidebar';

const NAVIGATING_TIMEOUT = 1000;

/** Header. */
export default function Header() {
  const { isNightbringer } = useBringer();
  const [isNavigating, setIsNavigating] = useState(false);

  /** Trigger navigating. */
  const handleTriggerNavigating = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isNavigating) {
      event.preventDefault();
      return;
    }
    setIsNavigating(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isNavigating) {
        setIsNavigating(false);
      }
    }, NAVIGATING_TIMEOUT);
    return () => clearTimeout(timeoutId);
  }, [isNavigating]);

  return (
    <>
      <header
        className={cn(
          'flex min-h-[60px] items-center justify-between',
          'bg-neutral-900 px-4 text-neutral-50',
          'xs:px-6',
          'sm:min-h-[72px] sm:px-9',
          'lg:min-h-[80px]',
        )}
      >
        <div className="flex items-center justify-start">
          <Logo isNavigating={isNavigating} onTriggerNavigating={handleTriggerNavigating} />
          <Navbar isNavigating={isNavigating} onTriggerNavigating={handleTriggerNavigating} />
        </div>
        <div className="flex items-center justify-end gap-3">
          <Bringer className="hidden sm:block" />
          <Sidebar isNavigating={isNavigating} onTriggerNavigating={handleTriggerNavigating} />
        </div>
      </header>
      <div
        className={cn(
          'navigation-loading-bg',
          'h-0.25 w-full bg-neutral-900 duration-0',
          isNightbringer ? 'navigation-loading-bg-night' : 'navigation-loading-bg-dawn',
          isNavigating && 'navigation-loading-bg-run',
        )}
      />
    </>
  );
}
