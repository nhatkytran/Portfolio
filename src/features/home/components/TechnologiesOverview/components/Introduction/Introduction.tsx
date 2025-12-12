import { cn } from '@/shared/utils/helpers';
import { technologyOverviewCopy } from '@/features/home/data';
import FullLink from '@/features/home/components/TechnologiesOverview/components/Introduction/FullLink';

/** Technologies overview introduction. */
export default function Introduction() {
  return (
    <div className={cn('w-full', 'flex flex-col items-center gap-4')}>
      <div className="flex items-center gap-4">
        <h2 className={cn('font-inter text-[26px] font-semibold text-white', 'sm:text-[32px]', 'lg:text-4xl')}>
          {technologyOverviewCopy.title}
        </h2>
        <FullLink />
      </div>
      <p
        className={cn(
          'w-full max-w-100',
          'font-inter text-center text-sm font-semibold text-neutral-200',
          'sm:text-[15px]',
          'md:max-w-full',
          'lg:text-base',
        )}
      >
        {technologyOverviewCopy.subTitle}
      </p>
    </div>
  );
}
