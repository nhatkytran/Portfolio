'use client';

import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { ArrowExploreIcon } from '@/shared/icons/layout';

/** Technologies full site link. */
export default function FullSiteLink() {
  const { isNightbringer } = useBringer();

  return (
    <div
      className={cn(
        'technologies-overview-full-site-clip-path',
        'absolute top-0 right-0 size-20',
        'xs:size-28',
        '2xl:hidden',
        isNightbringer ? 'bg-red-600' : 'bg-sky-600',
      )}
    >
      <Link href="/skills" className={cn('absolute top-1.5 right-1.5 cursor-pointer p-2', 'xs:top-3.5 xs:right-3.5')}>
        <ArrowExploreIcon fill="white" className="size-5" />
      </Link>
    </div>
  );
}
