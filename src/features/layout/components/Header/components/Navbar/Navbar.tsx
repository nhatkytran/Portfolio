'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { APP_NAVIGATION_LINKS } from '@/features/layout/data';

/** Navbar. */
export default function Navbar() {
  const pathName = usePathname();
  const { isNightbringer } = useBringer();

  return (
    <nav className={cn('hidden px-6', 'lg:block')}>
      <ul className="flex items-center gap-1">
        {APP_NAVIGATION_LINKS.map(({ href, label }) => (
          <li key={href} className="group relative">
            <Link href={href} className="block py-3">
              <span
                className={cn(
                  'font-inter text-[13px] font-semibold tracking-wider uppercase',
                  'block rounded-md px-4 py-1.5',
                  'group-hover:bg-neutral-700',
                  pathName === href && 'bg-neutral-800',
                )}
              >
                {label}
              </span>
            </Link>
            <div
              className={cn(
                'absolute bottom-0 left-0 h-[3px] w-full',
                'rounded-md bg-transparent',
                isNightbringer ? 'group-hover:bg-red-400' : 'group-hover:bg-sky-400',
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
