import Link from 'next/link';

import { CONTENTS } from '@/shared/constants';
import BringerLabel from '@/features/layout/components/Header/components/Logo/BringerLabel';

/** Logo - Ky Tran's Portfolio. */
export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <Link href="/">
        <h1 className="font-riot-bold-italic text-lg tracking-widest uppercase">{CONTENTS.ENGLISH_NAME}</h1>
      </Link>
      <BringerLabel />
    </div>
  );
}
