'use client';

import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';

/** Not found page. */
export default function NotFound() {
  const { isNightbringer } = useBringer();

  return (
    <div
      className={cn(
        'not-found-page-height',
        'font-riot-sans-bold bg-black',
        'flex flex-col items-center justify-center gap-8',
        'bg-[url("/images/hero/hero-bg.png")] bg-cover bg-left bg-no-repeat',
      )}
    >
      <h2 className={cn('text-9xl text-red-600', 'lg:text-[196px]', isNightbringer ? 'text-red-600' : 'text-sky-600')}>
        404
      </h2>
      <p className={cn('text-4xl text-neutral-100 uppercase', 'lg:text-6xl')}>Page not found</p>
      <Link
        href="/"
        className={cn(
          'text-[22px] text-neutral-200 uppercase',
          'underline underline-offset-4',
          'lg:text-3xl',
          isNightbringer ? 'hover:text-red-600' : 'hover:text-sky-600',
        )}
      >
        Return to home
      </Link>
    </div>
  );
}
