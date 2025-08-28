import Hero from '@/features/home/components/Hero';
import LearningJourney from '@/features/home/components/LearningJourney';
import TechnologiesOverview from '@/features/home/components/TechnologiesOverview';
import PersonalStatement from '@/features/home/components/PersonalStatement';

/** Home page. */
export default function Home() {
  return (
    <>
      <Hero />
      <LearningJourney />
      <TechnologiesOverview />
      <PersonalStatement />
    </>
  );
}
