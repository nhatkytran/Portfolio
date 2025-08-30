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
        <span className="font-bold text-blue-500">Passionate</span> in code,{' '}
        <span className="font-bold text-red-500">skilled</span> in Front-end,{' '}
        <span className="font-bold text-green-500">advancing</span> to JavaScript Full-stack. A freedom lover{' '}
        <span className="font-bold text-yellow-500">thriving</span> with diverse teams, always{' '}
        <span className="font-bold text-pink-500">learning</span>, ready to deliver.
      </p>
    </div>
  );
}
