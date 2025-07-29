import { PropsWithClassName } from '@/shared/utils/types';

/**
 * Close icon.
 * @param props Props with className.
 * @param props.className The className for the icon.
 */
export default function CloseIcon({ className }: PropsWithClassName) {
  return (
    <svg width={24} height={24} fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="m17.008 7.992-9.016 9.016M7.992 7.992l9.016 9.016"
      ></path>
    </svg>
  );
}
