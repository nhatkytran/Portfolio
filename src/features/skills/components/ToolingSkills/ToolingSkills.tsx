'use client';

import { STACK_SKILLS_LIGHT, TOOLING_SKILLS, skillsCopy } from '@/features/skills/data';
import StackSkills from '@/features/skills/components/StackSkills';

/** Tooling skills component. */
export default function ToolingSkills() {
  return <StackSkills theme={STACK_SKILLS_LIGHT} title={skillsCopy.toolingTitle} skills={TOOLING_SKILLS} />;
}
