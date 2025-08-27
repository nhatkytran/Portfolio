import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { ArrowExploreIcon } from '@/shared/icons';

/** Technologies full site link. */
export default function FullSiteLink() {
  return (
    <div
      className={cn(
        'technologies-overview-full-site-clip-path',
        'size-20 bg-red-600',
        'absolute top-0 right-0',
        'xs:size-28',
        '2xl:hidden',
      )}
    >
      <Link href="/skills" className={cn('absolute top-1.5 right-1.5 cursor-pointer p-2', 'xs:top-3.5 xs:right-3.5')}>
        <ArrowExploreIcon fill="white" className="size-5" />
      </Link>
    </div>
  );
}
