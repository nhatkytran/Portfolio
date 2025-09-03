import { cn } from '@/shared/utils/helpers';

/** Introduction. */
export default function Introduction() {
  return (
    <p className="text-center text-xs tracking-wider text-neutral-700">
      Like armor, a soldier&apos;s statement <span className="font-bold text-blue-500">adapts</span>,
      <br />
      but it is always worn into battle
      <span className={cn('hidden', 'md:inline-block')}>
        , a shield for the <span className="font-bold text-red-500">spirit</span> and a reminder of{' '}
        <span className="font-bold text-green-500">purpose</span>
      </span>
      .
    </p>
  );
}
