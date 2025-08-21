import LearningJourney from '@/features/home/components/LearningJourney';
import TechnologiesOverview from '@/features/home/components/TechnologiesOverview';
import PersonalStatement from '@/features/home/components/PersonalStatement';

/** Home page. */
export default function Home() {
  return (
    <>
      <section className="h-[460px] bg-black"></section>
      <LearningJourney />
      <TechnologiesOverview />
      <PersonalStatement />
    </>
  );
}
