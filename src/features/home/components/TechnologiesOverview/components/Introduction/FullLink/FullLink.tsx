'use client';

import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { ArrowExploreIcon } from '@/shared/icons';

/** Technologies overview introduction full link. */
export default function FullLink() {
  const { isNightbringer } = useBringer();

  return (
    <Link
      href="/skills"
      className={cn(
        'hidden cursor-pointer rounded-sm p-1.5 opacity-90',
        'transition duration-200 hover:opacity-100',
        '2xl:block',
        isNightbringer ? 'bg-red-600' : 'bg-sky-600',
      )}
    >
      <ArrowExploreIcon fill="white" className="size-5" />
    </Link>
  );
}
