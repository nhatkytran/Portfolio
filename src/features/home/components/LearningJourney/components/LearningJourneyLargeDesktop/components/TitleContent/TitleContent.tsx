import { learningJourneyCopy } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Title content. */
export default function TitleContent() {
  return (
    <FadeInMotion className="flex flex-col gap-4">
      <h2 className="font-inter text-4xl font-semibold">{learningJourneyCopy.largeDesktopTitle}</h2>
      <p className="font-inter text-base font-semibold text-neutral-700">{learningJourneyCopy.subTitle}</p>
    </FadeInMotion>
  );
}
