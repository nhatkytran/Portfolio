'use client';

import { cn } from '@/shared/utils/helpers';
import Introduction from '@/features/home/components/FreedomLover/components/Introduction';
import FlagsSlide from '@/features/home/components/FreedomLover/components/FlagsSlide';

/** Freedom lover. */
export default function FreedomLover() {
  return (
    <section>
      <div className={cn('flex items-center justify-center pb-12', 'sm:pt-4 sm:pb-16')}>
        <Introduction />
      </div>
      <FlagsSlide />
    </section>
  );
}
