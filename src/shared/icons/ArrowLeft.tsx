import { PropsWithClassName } from '@/shared/utils/types';

/**
 * Arrow left icon.
 * @param props - Props with className.
 * @param props.className - The className for the icon.
 */
export default function ArrowLeft({ className }: PropsWithClassName) {
  return (
    <svg width={24} height={24} fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#35322E"
        fillRule="evenodd"
        className={className}
        // eslint-disable-next-line max-len
        d="M9.607 5.293a1 1 0 0 1 0 1.414L5.314 11h15.585a1 1 0 1 1 0 2H5.314l4.293 4.293a1 1 0 1 1-1.415 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.415 0Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
