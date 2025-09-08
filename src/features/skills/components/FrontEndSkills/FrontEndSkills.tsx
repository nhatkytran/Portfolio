'use client';

import { FRONT_END_SKILLS, STACK_SKILLS_LIGHT } from '@/features/skills/data';
import StackSkills from '@/features/skills/components/StackSkills';

/** Front-end skills component. */
export default function FrontEndSkills() {
  return <StackSkills theme={STACK_SKILLS_LIGHT} title="Front-end Skills" skills={FRONT_END_SKILLS} />;
}
