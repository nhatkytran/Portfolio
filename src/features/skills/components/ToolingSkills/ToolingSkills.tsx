import { STACK_SKILLS_LIGHT, TOOLING_SKILLS } from '@/features/skills/data';
import StackSkills from '@/features/skills/components/StackSkills';

/** Tooling skills component. */
export default function ToolingSkills() {
  return <StackSkills theme={STACK_SKILLS_LIGHT} title="Tooling Skills" skills={TOOLING_SKILLS} />;
}
