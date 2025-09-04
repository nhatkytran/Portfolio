import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';

/** Link CV component. */
export default function LinkCV() {
  return (
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
  );
}
