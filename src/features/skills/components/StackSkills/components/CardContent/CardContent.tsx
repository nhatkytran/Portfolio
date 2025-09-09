import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { PropsWithIndex, PropsWithIsLight } from '@/shared/utils/types';
import { Skill } from '@/features/skills/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore
type Props = {

  /** Skill. */
  readonly skill: Skill;
}

/** Card content. */
export default function CardContent({
  skill: { name, url, Icon },
  isLight,
  index,
}: PropsWithIndex<PropsWithIsLight<Props>>) {
  const { isNightbringer } = useBringer();

  return (
    <FadeInMotion transition={{ duration: index * 0.1 }}>
      <Link
        href={url}
        target="_blank"
        className={cn(
          'flex flex-col items-center gap-4',
          'px-4 py-6 transition-all',
          'cursor-pointer rounded-sm border-2 shadow-xs',
          'hover:shadow-lg',
          isLight ? 'border-neutral-100 bg-white' : 'bg-neutral-750 border-neutral-900',
          isNightbringer ? 'hover:border-red-600' : isLight ? 'hover:border-blue-600' : 'hover:border-blue-500',
        )}
      >
        <Icon className={cn('size-14', 'xs:size-16', 'lg:size-18')} />
        <p
          className={cn(
            'font-mark-pro-bold text-center text-[11px]',
            'xxs:text-[13px]',
            'lg:text-sm',
            isLight ? 'text-neutral-900' : 'text-neutral-200',
          )}
        >
          {name}
        </p>
      </Link>
    </FadeInMotion>
  );
}
