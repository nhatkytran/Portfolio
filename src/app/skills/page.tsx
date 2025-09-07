import HeroIntroduction from '@/shared/components/HeroIntroduction';
import FrontEndSkills from '@/features/skills/components/FrontEndSkills';
import BackEndSkills from '@/features/skills/components/BackEndSkills';
import TestingSkills from '@/features/skills/components/TestingSkills';

/** Skills page. */
export default function Skills() {
  return (
    <>
      <HeroIntroduction title="Skills" />
      <FrontEndSkills />
      <BackEndSkills />
      <TestingSkills />
    </>
  );
}
