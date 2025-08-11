import { cn } from '@/shared/utils/helpers';
import TechnologiesInUse from '@/features/layout/components/Footer/components/TechnologiesInUse';
import EssentialInformation from '@/features/layout/components/Footer/components/EssentialInformation';
import RiotGamesInspired from '@/features/layout/components/Footer/components/RiotGamesInspired';
import SocialMediaAccounts from '@/features/layout/components/Footer/components/SocialMediaAccounts';

/** Footer. */
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-neutral-950">
      <TechnologiesInUse />
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-16',
          'w-full px-4 pt-10 pb-5',
          'xs:px-6 xs:gap-2',
          'sm:gap-4 sm:px-9 sm:pt-14 sm:pb-7',
          'lg:pt-16 lg:pb-8',
        )}
      >
        <EssentialInformation />
        <RiotGamesInspired />
        <SocialMediaAccounts />
      </div>
    </footer>
  );
}
