import { cn } from '@/shared/utils/helpers';
import FullSiteLink from '@/features/home/components/TechnologiesOverview/components/FullSiteLink';
import Introduction from '@/features/home/components/TechnologiesOverview/components/Introduction/Introduction';
import TechnologiesDisplay from '@/features/home/components/TechnologiesOverview/components/TechnologiesDisplay';

/** Technologies overview. */
export default function TechnologiesOverview() {
  return (
    <section className={cn('flex items-center justify-center', 'relative bg-black pt-16 pb-18', 'xl:pb-24')}>
      <FullSiteLink />
      <div
        className={cn(
          'max-w-8xl w-full',
          'flex flex-col items-center gap-12 px-4',
          'xs:px-6 xs:gap-14',
          'sm:px-9',
          'md:gap-16',
        )}
      >
        <Introduction />
        <div
          className={cn(
            'w-full max-w-115',
            'grid grid-cols-2 gap-x-2 gap-y-12',
            'xs:gap-x-6',
            'md:max-w-176 md:grid-cols-3',
            'mp:max-w-3xl',
          )}
        >
          <TechnologiesDisplay />
        </div>
      </div>
    </section>
  );
}
