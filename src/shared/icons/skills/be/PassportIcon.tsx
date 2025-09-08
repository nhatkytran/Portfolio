import { PropsWithClassName } from '@/shared/utils/types';

/** Passport icon. */
export default function PassportIcon({ className }: PropsWithClassName) {
  return (
    <svg
      height="24"
      width="24"
      fill="none"
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#d6ff00"
        d="M11.999975 0.25c-5.1935 0 -9.4 4.2065 -9.4 9.4h4.7c0 -2.5944 2.1056 -4.7 4.7 -4.7V0.25Z"
        strokeWidth="0.25"
      ></path>
      <path
        fill="#34e27a"
        d="M21.4 9.65C21.4 4.4565 17.1935 0.25 12 0.25v4.7c2.5944 0 4.7 2.1056 4.7 4.7h4.7Z"
        strokeWidth="0.25"
      ></path>
      <path
        fill="#00b9f1"
        d="M12 19.050025c5.1935 0 9.4 -4.2065 9.4 -9.4H16.7c0 2.5944 -2.1056 4.7 -4.7 4.7v4.7Z"
        strokeWidth="0.25"
      ></path>
      <path fill="#ffffff" d="M7.299975 19.050025v-9.4h-4.7v14.1h9.4v-4.7h-4.7Z" strokeWidth="0.25"></path>
    </svg>
  );
}
