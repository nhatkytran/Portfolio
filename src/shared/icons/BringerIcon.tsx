import { PropsWithClassName } from '../utils/types';

/**
 * Name logo support icon.
 * @param {PropsWithClassName} props - Props with className.
 */
export default function NameLogoSupport({ className }: PropsWithClassName) {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className={className}
      viewBox="0 0 425 425"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* eslint-disable-next-line max-len */}
      <path d="M94.73,94.85h94.12V47.37h-73c-37.83,0-68.49,30.74-68.49,68.66v73.17h47.37V94.85z M179.04,212.94 l-84.31,84.51v-60.77H47.37v141.83h141.49v-47.48h-60.63l84.31-84.52L179.04,212.94z M330.34,331.03h-94.12v47.48h73 c37.83,0,68.49-30.74,68.49-68.66v-73.17h-47.37V331.03z M236.22,47.37v47.48h60.63l-84.31,84.52l33.49,33.57l84.31-84.52v60.77 h47.37V47.37H236.22z"></path>
    </svg>
  );
}
