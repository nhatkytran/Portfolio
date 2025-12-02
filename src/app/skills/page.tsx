import HeroIntroduction from '@/shared/components/HeroIntroduction';
import FrontEndSkills from '@/features/skills/components/FrontEndSkills';
import BackEndSkills from '@/features/skills/components/BackEndSkills';
import TestingSkills from '@/features/skills/components/TestingSkills';
import OtherSkills from '@/features/skills/components/OtherSkills';
import ToolingSkills from '@/features/skills/components/ToolingSkills';

/** Skills page. */
export default function Skills() {
  return (
    <>
      <HeroIntroduction title="Skills" idiom="熟 能 生 巧" />
      <FrontEndSkills />
      <BackEndSkills />
      <TestingSkills />
      <OtherSkills />
      <ToolingSkills />
    </>
  );
}
