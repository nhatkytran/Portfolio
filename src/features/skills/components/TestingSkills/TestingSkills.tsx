'use client';

import { STACK_SKILLS_LIGHT, TESTING_SKILLS } from '@/features/skills/data';
import StackSkills from '@/features/skills/components/StackSkills';

/** Testing skills component. */
export default function TestingSkills() {
  return <StackSkills theme={STACK_SKILLS_LIGHT} title="Testing Skills" skills={TESTING_SKILLS} />;
}
