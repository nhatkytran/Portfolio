import { cn } from '@/shared/utils/helpers';

/** Freedom lover introduction. */
export default function Introduction() {
  return (
    <div className={cn('max-w-8xl flex w-full flex-col gap-4 px-4', 'xs:px-6', 'sm:px-9')}>
      <h2 className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>Freedom Lover</h2>
      <p
        className={cn(
          'max-w-[660px]',
          'font-inter text-sm font-semibold text-neutral-600',
          'sm:text-[15px]',
          'lg:text-base',
        )}
      >
        Ideologies are strategies, not destinies.{' '}
        <span className="whitespace-nowrap">
          <span className="font-bold text-blue-500">Capitalism</span>,{' '}
          <span className="font-bold text-red-600">Communism</span>, even{' '}
          <span className="font-bold text-neutral-800">Fascism</span>
        </span>{' '}
        - victory belongs to those who use them with discipline, not those who worship them.
      </p>
    </div>
  );
}
