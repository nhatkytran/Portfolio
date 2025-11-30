import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { CodeIcon } from '@/shared/icons/layout';
import { SOCIAL_MEDIA_ACCOUNTS } from '@/features/layout/data';

/** Social media accounts. */
export default function SocialMediaAccounts() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-4">
        {SOCIAL_MEDIA_ACCOUNTS.map(({ url, Icon }, index) => (
          <Link
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('group flex items-center justify-center', 'rounded-sm bg-neutral-800 p-2')}
          >
            <Icon className={cn('size-6 fill-neutral-300', 'group-hover:fill-white', 'sm:size-7')} />
          </Link>
        ))}
      </div>
      <p className={cn('text-center text-sm font-semibold text-neutral-500', 'sm:text-base')}>
        © 2025 by Ky Tran (nhatky.tran.2002@gmail.com)
      </p>
      <Link
        href="https://github.com/nhatkytran/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group flex items-center justify-center gap-2',
          'rounded-sm border border-neutral-600 p-2',
          'hover:border-neutral-500 hover:text-neutral-500',
        )}
      >
        <CodeIcon className="group-hover:fill-neutral-500" />
        <span
          className={cn(
            'text-center text-sm font-semibold text-neutral-600',
            'group-hover:text-neutral-500',
            'sm:text-base',
          )}
        >
          Portfolio source code
        </span>
      </Link>
    </div>
  );
}
