import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { experienceIntroduction } from '@/features/experience/data';

/** Experience page. */
export default function Experience() {
  return <HeroIntroduction title={experienceIntroduction.title} idiom={experienceIntroduction.idiom} />;
}
