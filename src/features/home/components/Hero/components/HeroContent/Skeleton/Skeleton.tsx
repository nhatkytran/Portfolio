import { cn } from '@/shared/utils/helpers';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'animate-pulse rounded-sm bg-neutral-800' });

/** Hero content skeleton. */
export default function Skeleton() {
  return (
    <div className={cn('flex flex-3 flex-col gap-6', 'w-full', 'sm:pr-8', 'mp:gap-8')}>
      <SkeletonLoading
        className={cn(
          'h-[36px] max-w-[160px] rounded-3xl',
          'mp:h-[40px] mp:max-w-[186px]',
          'lg:h-[44px] lg:max-w-[195px]',
        )}
      />
      <SkeletonLoading className={cn('h-[24px] max-w-[182px]', 'mp:h-[32px] mp:max-w-[205px]')} />
      <SkeletonLoading className={cn('h-[36px] max-w-[364px]', 'xs:max-w-[416px]', 'lg:h-[44px] lg:max-w-[468px]')} />
      <div className="flex flex-col gap-2">
        <SkeletonLoading className={cn('h-[28px] max-w-[460px]', 'mp:max-w-[720px]')} />
        <SkeletonLoading className={cn('h-[28px] max-w-[180px]', 'mp:max-w-[260px]')} />
      </div>
      <SkeletonLoading className={cn('h-[48px] max-w-[272px]', 'mp:h-[56px] mp:max-w-[346px]')} />
    </div>
  );
}
