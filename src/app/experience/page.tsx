import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { EXPERIENCE_INTRODUCTION } from '@/features/experience/data';

/** Experience page. */
export default function Experience() {
  return <HeroIntroduction title={EXPERIENCE_INTRODUCTION.title} idiom={EXPERIENCE_INTRODUCTION.idiom} />;
}
