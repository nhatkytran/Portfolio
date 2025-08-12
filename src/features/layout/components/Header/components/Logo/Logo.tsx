import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { CONTENTS } from '@/shared/constants';
import { BringerIcon } from '@/shared/icons';

/** Logo - Ky Tran's Portfolio. */
export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <Link href="/">
        <h1 className="font-riot-bold-italic text-lg tracking-widest uppercase">{CONTENTS.ENGLISH_NAME}</h1>
      </Link>
      <div className={cn('flex items-center gap-0.5', 'relative top-0.25')}>
        <BringerIcon className="size-2.5 fill-red-600" />
        {/* TODO (Ky Tran): Dark light mode text Nightbringer / Dawnbringer. */}
        <span className="font-riot-sans-bold text-[10px] tracking-wider text-red-600 uppercase">Nightbringer</span>
      </div>
    </div>
  );
}
