import Link from 'next/link';

import TitleSkeleton from './components/TitleSkeleton';
import TitleContent from './components/TitleContent';
import LinkSkeleton from './components/LinkSkeleton';
import LinkContent from './components/LinkContent';
import CardContent from './components/CardContent';
import CardSkeleton from './components/CardSkeleton';
import QuoteSkeleton from './components/QuoteSkeleton';
import QuoteContent from './components/QuoteContent';

import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn, getSEOSkeletonLoadingKey } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { LEARNINGS } from '@/features/home/data';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import SEOSkeletonLoading from '@/shared/components/SEOSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'animate-pulse rounded-sm bg-neutral-100' });

/** Learning journey large desktop. */
export default function LearningJourneyLargeDesktop({ shouldDisplay = true }: ShouldDisplayProps) {
  const { initialLoading } = useInitialLoading({ dependencies: [shouldDisplay] });

  /**
   * Prevents the link from navigating.
   * @param event The click event.
   */
  const handleLinkPrevention = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <section className={cn('flex items-center justify-center py-20', !shouldDisplay && 'hidden')}>
      <div className="max-w-8xl flex w-full flex-col gap-14 px-9">
        <div className="relative">
          <SEOSkeletonLoading
            key={getSEOSkeletonLoadingKey(shouldDisplay)}
            skeleton={<TitleSkeleton SkeletonLoading={SkeletonLoading} />}
            content={<TitleContent />}
          />
          <Link
            href="/learning-journey"
            onClick={handleLinkPrevention}
            className={cn('absolute top-4 right-0 rounded-sm p-1', initialLoading && 'cursor-default')}
          >
            <SEOSkeletonLoading
              key={getSEOSkeletonLoadingKey(shouldDisplay)}
              skeleton={<LinkSkeleton SkeletonLoading={SkeletonLoading} />}
              content={<LinkContent />}
            />
          </Link>
        </div>
        <ul className="grid grid-cols-4 gap-5">
          {LEARNINGS.map((learning, index) => (
            <SEOSkeletonLoading
              key={`${getSEOSkeletonLoadingKey(shouldDisplay)}-${learning.name}`}
              skeleton={<CardSkeleton SkeletonLoading={SkeletonLoading} />}
              content={<CardContent learning={learning} index={index} />}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-6">
          <SEOSkeletonLoading
            key={getSEOSkeletonLoadingKey(shouldDisplay)}
            skeleton={<QuoteSkeleton SkeletonLoading={SkeletonLoading} />}
            content={<QuoteContent />}
          />
        </div>
      </div>
    </section>
  );
}
