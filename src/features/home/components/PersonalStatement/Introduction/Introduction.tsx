import { cn } from '@/shared/utils/helpers';

/** Introduction. */
export default function Introduction() {
  return (
    <p className="text-center text-xs tracking-wider text-neutral-700">
      Like armor, a soldier&apos;s statement adapts,
      <br />
      but it is always worn into battle
      <span className={cn('hidden', 'md:inline-block')}>, a shield for the spirit and a reminder of purpose</span>.
    </p>
  );
}
