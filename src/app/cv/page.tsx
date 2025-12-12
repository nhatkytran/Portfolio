import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { cvIntroduction } from '@/features/cv/data';

/** CV page. */
export default function CV() {
  return <HeroIntroduction title={cvIntroduction.title} idiom={cvIntroduction.idiom} />;
}
