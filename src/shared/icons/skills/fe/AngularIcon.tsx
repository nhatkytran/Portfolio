import { PropsWithClassName } from '@/shared/utils/types';

/** Angular icon. */
export default function AngularIcon({ className }: PropsWithClassName) {
  return (
    <svg
      height={24}
      width={24}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
    >
      <path
        fill="url(#a)"
        // eslint-disable-next-line max-len
        d="m92.4018 16.6719-3.2066 50.3536L58.5364 1l33.8654 15.6719ZM71.1664 81.7817 48.0004 95 24.834 81.7817l4.7118-11.4188h36.9089l4.7117 11.4188Zm-23.166-55.7195 12.1391 29.512H35.861l12.1394-29.512ZM6.77245 67.0255 3.59863 16.6719 37.4641 1 6.77245 67.0255Z"
      ></path>
      <path
        fill="url(#b)"
        // eslint-disable-next-line max-len
        d="m92.4018 16.6719-3.2066 50.3536L58.5364 1l33.8654 15.6719ZM71.1664 81.7817 48.0004 95 24.834 81.7817l4.7118-11.4188h36.9089l4.7117 11.4188Zm-23.166-55.7195 12.1391 29.512H35.861l12.1394-29.512ZM6.77245 67.0255 3.59863 16.6719 37.4641 1 6.77245 67.0255Z"
      ></path>
      <defs>
        <linearGradient id="a" x1="2230.03" x2="8680.49" y1="8548.35" y2="5482.97" gradientUnits="userSpaceOnUse">
          <stop stop-color="#e40035"></stop>
          <stop offset=".24" stop-color="#f60a48"></stop>
          <stop offset=".352" stop-color="#f20755"></stop>
          <stop offset=".494" stop-color="#dc087d"></stop>
          <stop offset=".745" stop-color="#9717e7"></stop>
          <stop offset="1" stop-color="#6c00f5"></stop>
        </linearGradient>
        <linearGradient id="b" x1="1945.09" x2="6356.11" y1="1134.41" y2="6166.17" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ff31d9"></stop>
          <stop offset="1" stop-color="#ff5be1" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
