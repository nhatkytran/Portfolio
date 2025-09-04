import { PropsWithClassName } from '@/shared/utils/types';

/** Scroll to top icon. */
export default function ScrollToTopIcon({ className }: PropsWithClassName) {
  return (
    <svg width={20} height={20} className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z" />
    </svg>
  );
}
