import { PropsWithClassName } from '@/shared/utils/types';

/** Webpack icon. */
export default function WebpackIcon({ className }: PropsWithClassName) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="webpack">
        <g id="webpack_2">
          <path id="Vector" d="M50.1916 0L5.99996 25V75L50.1916 100L94.3833 75V25L50.1916 0Z" fill="white" />
          <path
            id="Vector_2"
            // eslint-disable-next-line max-len
            d="M13.8917 73.2749L48.7334 92.9833V77.6333L27.0251 65.6916L13.8917 73.2749ZM11.5084 71.1166V29.8999L24.2584 37.2583V63.7499L11.5084 71.1166ZM86.6334 73.2749L51.7917 92.9833V77.6333L73.5001 65.6916L86.6334 73.2749ZM89.0167 71.1166V29.8999L76.2667 37.2583V63.7499L89.0167 71.1166ZM87.5251 27.2333L51.7917 7.0166V21.8583L74.6834 34.4499L74.8584 34.5499L87.5251 27.2333ZM13 27.2333L48.7334 7.0166V21.8583L25.8417 34.4499L25.6667 34.5499L13 27.2333Z"
            fill="#8ED6FB"
          />
          <path
            id="Vector_3"
            // eslint-disable-next-line max-len
            d="M51.7916 74.1416L73.2083 62.3666V39.0333L51.7916 51.4V74.1416ZM48.7333 74.1416L27.3166 62.3666V39.0333L48.7333 51.4V74.1416ZM71.7583 36.3333L50.2583 24.5083L28.7583 36.3333L50.2583 48.75L71.7583 36.3333Z"
            fill="#1C78C0"
          />
        </g>
      </g>
    </svg>
  );
}
