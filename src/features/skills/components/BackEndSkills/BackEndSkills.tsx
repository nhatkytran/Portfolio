'use client';

import { STACK_SKILLS_DARK, BACK_END_SKILLS } from '@/features/skills/data';
import StackSkills from '@/features/skills/components/StackSkills';

/** Back-end skills component. */
export default function BackEndSkills() {
  return <StackSkills theme={STACK_SKILLS_DARK} title="Back-end Skills" skills={BACK_END_SKILLS} />;
}
