import { cn } from '@/shared/utils/helpers';
import SEOSkeletonLoading from '@/shared/components/SEOSkeletonLoading';
import Skeleton from '@/features/home/components/Hero/components/HeroContent/Skeleton';
import Content from '@/features/home/components/Hero/components/HeroContent/Content';

/** Hero content. */
export default function HeroContent() {
  return (
    <div
      className={cn(
        'max-w-8xl w-full px-4',
        'flex flex-col items-center justify-between',
        'xs:px-6',
        'md:flex-row md:px-9',
      )}
    >
      <SEOSkeletonLoading skeleton={<Skeleton />} content={<Content />} />
      <div className={cn('h-[432px]', 'md:h-0 md:flex-2')} />
    </div>
  );
}
