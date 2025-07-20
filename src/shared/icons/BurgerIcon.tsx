import { PropsWithClassName } from '@/shared/utils/types';

/**
 * Burger icon.
 * @param {PropsWithClassName} props - Props with className.
 */
export default function BurgerIcon({ className }: PropsWithClassName) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" className={className}>
      <path
        d="M125.6 119.08a18 18 0 0 1 18-18h12a18 18 0 0 1 18 18v12a18 18 0 0 1-18 18h-12a18 18 0 0 1-18-18Z"
        transform="translate(-125.6 -101.08)"
      />
      <path
        d="M140.6 119.08h18v2h-18Zm0 5h18v2h-18Zm0 7v-2h18v2Z"
        transform="translate(-125.6 -101.08)"
        fill="currentColor"
      />
    </svg>
  );
}
