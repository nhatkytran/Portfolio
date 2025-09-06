import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';

/** Link CV component. */
export default function LinkCV() {
  return (
    <>
      <div
        className={cn(
          'hidden xl:block',
          'animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]',
          'fixed bottom-4.5 left-4.5 z-50 size-[38px]',
          'rounded-full border border-neutral-500',
        )}
      />
      <Link
        href="/cv"
        className={cn(
          'fixed bottom-4.5 left-4.5 z-50',
          'group flex size-[38px] items-center justify-center',
          'cursor-pointer rounded-full border border-white/20 bg-black p-2',
          'font-riot-sans-bold text-sm text-white/80',
          'group-hover:text-white',
        )}
      >
        CV
      </Link>
    </>
  );
}
