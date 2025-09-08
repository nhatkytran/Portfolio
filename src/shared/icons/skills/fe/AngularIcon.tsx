import { PropsWithClassName } from '@/shared/utils/types';

/** Angular icon. */
export default function AngularIcon({ className }: PropsWithClassName) {
  return (
    <svg
      height={24}
      width={24}
      fill="none"
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="angular17">
        <g id="angular17_2" clipPath="url(#clip0_790_79)">
          <path
            id="Vector"
            // eslint-disable-next-line max-len
            d="M97.1406 16.796L93.625 69.921L61.2031 -0.000854492L97.1406 16.796ZM74.4844 85.546L50.2656 99.6085L25.6562 85.546L30.3438 73.4366H69.7969L74.4844 85.546ZM50.2656 26.5616L62.7656 57.8116H37.375L50.2656 26.5616ZM6.51562 69.921L3 16.796L38.9375 -0.000854492L6.51562 69.921Z"
            fill="url(#paint0_linear_790_79)"
          />
          <path
            id="Vector_2"
            // eslint-disable-next-line max-len
            d="M97.1406 16.796L93.625 69.921L61.2031 -0.000854492L97.1406 16.796ZM74.4844 85.546L50.2656 99.6085L25.6562 85.546L30.3438 73.4366H69.7969L74.4844 85.546ZM50.2656 26.5616L62.7656 57.8116H37.375L50.2656 26.5616ZM6.51562 69.921L3 16.796L38.9375 -0.000854492L6.51562 69.921Z"
            fill="url(#paint1_linear_790_79)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_790_79"
          x1="23.7813"
          y1="90.5851"
          x2="98.7031"
          y2="54.9601"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E40035" />
          <stop offset="0.2" stopColor="#F60A48" />
          <stop offset="0.4" stopColor="#F20755" />
          <stop offset="0.5" stopColor="#DC087D" />
          <stop offset="0.7" stopColor="#9717E7" />
          <stop offset="1" stopColor="#6C00F5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_790_79"
          x1="20.3828"
          y1="11.9913"
          x2="69.4062"
          y2="67.9679"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF31D9" />
          <stop offset="1" stopColor="#FF5BE1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_790_79">
          <rect width="94.5312" height="100" fill="white" transform="translate(3 -0.000854492)" />
        </clipPath>
      </defs>
    </svg>
  );
}
