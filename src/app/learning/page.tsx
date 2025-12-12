import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { learningIntroduction } from '@/features/learning/data';

/** Learning page. */
export default function Learning() {
  return <HeroIntroduction title={learningIntroduction.title} idiom={learningIntroduction.idiom} />;
}
