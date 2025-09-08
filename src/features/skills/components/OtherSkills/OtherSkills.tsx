'use client';

import { OTHER_SKILLS, STACK_SKILLS_DARK } from '@/features/skills/data';
import StackSkills from '@/features/skills/components/StackSkills';

/** Other skills component. */
export default function OtherSkills() {
  return <StackSkills theme={STACK_SKILLS_DARK} title="Other Skills" skills={OTHER_SKILLS} />;
}
