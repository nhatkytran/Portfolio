import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { type Language, STATEMENTS } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'rounded-sm bg-neutral-200' });

// prettier-ignore
type Props = {

  /** Language. */
  readonly language: Language;

  /** Whether it is translating. */
  readonly isTranslating: boolean;
};

/** Statement display. */
export default function StatementDisplay({ language, isTranslating }: Props) {
  const { isNightbringer } = useBringer();

  return (
    <div className={cn('rounded-sm bg-neutral-100 px-7 py-8', 'xs:px-10 xs:py-9', 'md:gap-4 md:px-14')}>
      {isTranslating ? (
        <div className="flex flex-col gap-3.5">
          {['h-[36px] max-w-[140px]', 'h-[20px] max-w-[124px]', 'h-[28px] max-w-[350px]', 'h-[24px] max-w-[480px]'].map(
            (style, index) => (
              <SkeletonLoading key={index} className={cn(index === 0 && 'rounded-3xl', style)} />
            ),
          )}
        </div>
      ) : (
        Object.entries(STATEMENTS).map(([languageKey, { badge, author, quote, motto }]) => (
          <FadeInMotion key={languageKey} className={cn('flex flex-col gap-3.5', languageKey !== language && 'hidden')}>
            <span
              className={cn(
                'w-fit px-6 py-2',
                'text-xs text-neutral-600 uppercase',
                'rounded-3xl border-2 border-neutral-500',
                'md:px-7',
              )}
            >
              {badge}
            </span>
            <p className="text-sm tracking-wider text-neutral-600">{author}</p>
            <p
              className={cn(
                'text-base font-bold tracking-wider',
                'xs:text-lg',
                'md:text-xl',
                isNightbringer ? 'text-red-600' : 'text-sky-600',
              )}
            >
              {quote}
            </p>
            <p className={cn('text-sm tracking-wider text-neutral-600 opacity-90', 'md:text-base')}>{motto}</p>
          </FadeInMotion>
        ))
      )}
    </div>
  );
}
