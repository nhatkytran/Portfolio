import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { ArrowExploreIcon } from '@/shared/icons';

/** Technologies overview introduction. */
export default function Introduction() {
  return (
    <div className={cn('w-full', 'flex flex-col items-center gap-4')}>
      <div className="flex items-center gap-4">
        <h2 className={cn('font-inter text-[32px] font-semibold text-white', 'sm:text-4xl')}>Technologies</h2>
        <Link
          href="/skills"
          className={cn(
            'hidden bg-red-600',
            'cursor-pointer rounded-sm p-1.5 opacity-90',
            'transition duration-200 hover:opacity-100',
            '2xl:block',
          )}
        >
          <ArrowExploreIcon fill="white" className="size-5" />
        </Link>
      </div>
      <p
        className={cn(
          'w-full max-w-100',
          'font-inter text-center text-[15px] text-white',
          'xs:text-base',
          'md:max-w-full',
        )}
      >
        My gear evolves with every battle, and here are some of the technologies at my side.
      </p>
    </div>
  );
}
