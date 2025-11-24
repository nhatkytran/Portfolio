import { cn } from '@/shared/utils/helpers';
import HeroContent from '@/features/home/components/Hero/components/HeroContent';
import HeroImage from '@/features/home/components/Hero/components/HeroImage';

/** Hero. */
export default function Hero() {
  return (
    <section className="relative">
      <div
        className={cn(
          'flex items-center justify-center',
          'bg-black py-10',
          'bg-[url("/images/hero/hero-bg.png")] bg-cover bg-left-bottom bg-no-repeat',
          'sm:py-14',
          'lg:py-20',
          'xl:pb-24',
        )}
      >
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
