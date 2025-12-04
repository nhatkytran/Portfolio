import HeroIntroduction from '@/shared/components/HeroIntroduction';
import FrontEndSkills from '@/features/skills/components/FrontEndSkills';
import BackEndSkills from '@/features/skills/components/BackEndSkills';
import TestingSkills from '@/features/skills/components/TestingSkills';
import OtherSkills from '@/features/skills/components/OtherSkills';
import ToolingSkills from '@/features/skills/components/ToolingSkills';
import { skillsIntroduction } from '@/features/skills/data';

/** Skills page. */
export default function Skills() {
  return (
    <>
      <HeroIntroduction title={skillsIntroduction.title} idiom={skillsIntroduction.idiom} />
      <FrontEndSkills />
      <BackEndSkills />
      <TestingSkills />
      <OtherSkills />
      <ToolingSkills />
    </>
  );
}
