import Hero from '@/features/home/components/Hero';
import FreedomLover from '@/features/home/components/FreedomLover';
import LearningJourney from '@/features/home/components/LearningJourney';
import TechnologiesOverview from '@/features/home/components/TechnologiesOverview';
import PersonalStatement from '@/features/home/components/PersonalStatement';

/** Home page. */
export default function Home() {
  return (
    <>
      <Hero />
      <LearningJourney />
      <FreedomLover />
      <TechnologiesOverview />
      <PersonalStatement />
    </>
  );
}
