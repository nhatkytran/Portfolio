import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';

/** Not found page. */
export default function NotFound() {
  return (
    <div
      style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}
      className={cn('font-riot-sans-bold min-h-[672px] bg-black', 'flex flex-col items-center justify-center gap-8')}
    >
      <h2 className={cn('text-9xl text-red-600', 'lg:text-[196px]')}>404</h2>
      <p className={cn('text-4xl text-neutral-100 uppercase', 'lg:text-6xl')}>Page not found</p>
      <Link
        href="/"
        className={cn('text-[22px] text-neutral-200 uppercase', 'underline underline-offset-4', 'lg:text-3xl')}
      >
        Return to home
      </Link>
    </div>
  );
}
