import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { learningJourneyCopy } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Quote content. */
export default function QuoteContent() {
  const { isNightbringer } = useBringer();

  return (
    <FadeInMotion
      as="p"
      className={cn('font-riot-bold text-sm tracking-wider', isNightbringer ? 'text-red-base' : 'text-sky-600')}
    >
      {isNightbringer ? learningJourneyCopy.nightbringerQuote : learningJourneyCopy.dawnbringerQuote}
    </FadeInMotion>
  );
}
