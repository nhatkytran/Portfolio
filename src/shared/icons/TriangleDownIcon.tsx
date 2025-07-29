import { PropsWithClassName } from '@/shared/utils/types';

/**
 * Triangle down icon.
 * @param props - Props with className.
 * @param props.className - The className for the icon.
 */
export default function TriangleDownIcon({ className }: PropsWithClassName) {
  return (
    <svg width={24} height={24} className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="m12.492 15-3.904-4.378h7.808L12.492 15Z"></path>
    </svg>
  );
}
