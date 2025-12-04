import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { CV_INTRODUCTION } from '@/features/cv/data';

/** CV page. */
export default function CV() {
  return <HeroIntroduction title={CV_INTRODUCTION.title} idiom={CV_INTRODUCTION.idiom} />;
}
