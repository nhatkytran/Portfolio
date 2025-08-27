import { type Language, STATEMENTS } from '@/features/home/data';
import { cn } from '@/shared/utils/helpers';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore
type Props = {

  /** Language. */
  readonly language: Language;

  /** Whether it is translating. */
  readonly isTranslating: boolean;
};

/** Statement display. */
export default function StatementDisplay({ language, isTranslating }: Props) {
  return (
    <div className={cn('rounded-sm bg-neutral-100 px-7 py-8', 'xs:px-10 xs:py-9', 'md:gap-4 md:px-14')}>
      {isTranslating ? (
        <div className="flex flex-col gap-3.5">
          {['h-[36px] max-w-[140px]', 'h-[20px] max-w-[124px]', 'h-[28px] max-w-[350px]', 'h-[24px] max-w-[480px]'].map(
            (style, index) => (
              <span
                key={index}
                className={cn('w-full rounded-sm bg-neutral-200', index === 0 && 'rounded-3xl', style)}
              />
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
            <p className={cn('text-base font-bold tracking-wider text-red-600', 'xs:text-lg', 'md:text-xl')}>{quote}</p>
            <p className={cn('text-sm tracking-wider text-neutral-600 opacity-90', 'md:text-base')}>{motto}</p>
          </FadeInMotion>
        ))
      )}
    </div>
  );
}
