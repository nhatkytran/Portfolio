import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { CONTENTS } from '@/shared/constants';
import BringerLabel from '@/features/layout/components/Header/components/Logo/BringerLabel';
import { NavigatingProps } from '@/features/layout/data';

/** Logo - Ky Tran's Portfolio. */
export default function Logo({ isNavigating, onTriggerNavigating }: NavigatingProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Link href="/" onClick={onTriggerNavigating} className={cn(isNavigating && 'cursor-not-allowed')}>
        <h1 className="font-riot-bold-italic text-lg tracking-widest uppercase">{CONTENTS.ENGLISH_NAME}</h1>
      </Link>
      <BringerLabel />
    </div>
  );
}
