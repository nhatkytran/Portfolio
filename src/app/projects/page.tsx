import HeroIntroduction from '@/shared/components/HeroIntroduction';
import { PROJECTS_INTRODUCTION } from '@/features/projects';

/** Projects page. */
export default function Projects() {
  return <HeroIntroduction title={PROJECTS_INTRODUCTION.title} idiom={PROJECTS_INTRODUCTION.idiom} />;
}
