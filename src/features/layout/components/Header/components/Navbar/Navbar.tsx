'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/helpers';
import { appNavigationLinks } from '@/features/layout/data/appNavigationLinks';

/** Navbar. */
export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="px-6">
      <ul className="flex items-center gap-1">
        {appNavigationLinks.map(({ href, label }) => (
          <li key={href} className="group relative">
            <Link href={href} className="block py-3">
              <span
                className={cn(
                  'block rounded-md px-4 py-1.5',
                  'font-inter text-[13px] font-semibold tracking-wider uppercase',
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
                'rounded-md bg-transparent group-hover:bg-red-400',
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
