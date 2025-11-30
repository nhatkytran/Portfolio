import { cn } from '@/shared/utils/helpers';

/** Introduction. */
export default function Introduction() {
  return (
    <p className={cn('text-center text-xs tracking-wider text-neutral-700', 'md:text-sm')}>
      Like armor, a soldier&apos;s <span className="font-bold text-blue-500">statement</span> adapts,
      <br />
      but it is always worn into battle - a shield for the <span className="font-bold text-red-500">spirit</span>
      <span className="whitespace-nowrap">
        {' '}
        and a reminder of <span className="font-bold text-green-500">purpose</span>.
      </span>
    </p>
  );
}
