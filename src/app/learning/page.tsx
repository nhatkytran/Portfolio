import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { LEARNING_INTRODUCTION } from '@/features/learning/data';

/** Learning page. */
export default function Learning() {
  return <HeroIntroduction title={LEARNING_INTRODUCTION.title} idiom={LEARNING_INTRODUCTION.idiom} />;
}
