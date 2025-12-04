import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { projectsIntroduction } from '@/features/projects';

/** Projects page. */
export default function Projects() {
  return <HeroIntroduction title={projectsIntroduction.title} idiom={projectsIntroduction.idiom} />;
}
