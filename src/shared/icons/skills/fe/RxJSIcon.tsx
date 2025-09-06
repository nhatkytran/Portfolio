import { PropsWithClassName } from '@/shared/utils/types';

/** RxJS icon. */
export default function RxJSIcon({ className }: PropsWithClassName) {
  return (
    <svg
      height={24}
      width={24}
      fill="none"
      className={className}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#ff0090"
        // eslint-disable-next-line max-len
        d="M7.12814 60.4245C2.30999 34.8081 15.0435 10.1026 44.2692 6.81603c-4.0302-4.30642-9.536-4.33878-12.0691-3.81492-4.4728 1.42545-4.3324 4.3198-9.4059 8.05839-5.0437 2.8808-7.5769.6747-11.2511 3.6611-3.66634 2.9642-1.1081 9.7688-2.64573 11.0917-1.52637 2.6457-6.26119 5.0026-7.12309 8.3444-.71231 4.2736 1.93341 7.3264 1.83165 10.9897.30528 3.0528-3.039113 4.779-2.55861 7.2531 1.43927 4.0421 4.21341 6.4749 5.52121 7.5963.2999.2114.61664.7319.55961.4287Z"
      ></path>
      <path
        fill="url(#a)"
        // eslint-disable-next-line max-len
        d="M59.1324 24.9647c-1.0677 0-1.9334-.8657-1.9334-1.9334 0-1.0677.8657-1.9335 1.9334-1.9335 1.0677 0 1.9334.8658 1.9334 1.9335 0 1.0677-.8657 1.9334-1.9334 1.9334ZM8.25662 63.2189C3.62641 40.9556 17.9542 22.3529 45.7003 31.5112c16.2808 9.5244 36.7612 8.9042 37.6846 2.7475 2.2796-7.3807-10.3793-22.5904-29.3064-26.55898C16.5296.373108-3.71327 40.9556 8.25662 63.2189Z"
      ></path>
      <path
        fill="url(#b)"
        // eslint-disable-next-line max-len
        d="M69.85 65.7012c5.5756.6041 10.868-.7341 15.7726-4.7318-7.4096 8.2649-16.6745 12.4203-27.305 13.551 5.0757 4.3152 9.9705 6.259 14.6532 5.427-13.0117 3.5904-23.913-.3616-37.174-13.5677-.6944 3.5551 3.0604 9.094 6.9304 12.6297-22.4548-9.735-24.4234-40.0607 2.958-47.5204C17.3011 17.8519 1.25152 44.3489 9.13692 66.0658 16.8523 82.7922 37.4121 95.6687 59.9457 92.8369c10.9453-1.3406 27.2899-8.8869 33.967-26.7711-4.7059 4.223-13.1178 7.901-16.8716 8.1831 12.7048-6.3493 19.563-17.1382 17.638-31.8842-2.6317 6.2653-6.1039 11.0771-10.4471 14.3818 9.226-14.3818 7.6428-21.8152.814-29.9848 4.8844 13.4321-1.4339 28.3399-15.196 38.9395Z"
      ></path>
      <path
        fill="url(#c)"
        // eslint-disable-next-line max-len
        d="M63.3307 81.1759c-.964-.1801 2.1853 1.2757-3.9034-.3362-6.0887-1.6118-12.2882-3.1651-23.63-14.4598-.6944 3.5551 3.0604 9.0939 6.9305 12.6296 10.4472 7.2861 3.3423 3.8784 19.2604 9.3813 1.2774-2.5426 1.3425-4.8019 1.3425-7.2149Z"
      ></path>
      <path
        fill="url(#d)"
        // eslint-disable-next-line max-len
        d="M43.0914 23.9624s1.384-2.0427 1.9227-2.964c.6602-1.1289 1.674-3.1867 1.674-3.1867s-10.6528-3.4755-13.2671-3.8996c-8.1268 2.1096-8.1564 5.5143-3.6129 10.7258.5056.58 13.2833-.6755 13.2833-.6755Z"
      ></path>
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(7084.78 0 0 5068.07 6213.87 2141.12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f80090"></stop>
          <stop offset="1" stopColor="#4d008e"></stop>
        </radialGradient>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(7181.17 0 0 5432.27 6046.96 319.107)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#57008e"></stop>
          <stop offset=".292" stopColor="#5c008e"></stop>
          <stop offset="1" stopColor="#f80090"></stop>
        </radialGradient>
        <linearGradient id="c" x1="539.407" x2="1808.79" y1="66.38" y2="2201.17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f70090"></stop>
          <stop offset=".67" stopColor="#e50090"></stop>
          <stop offset=".827" stopColor="#d6008f" stopOpacity=".2"></stop>
          <stop offset="1" stopColor="#c10090" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="d" x1="1319.98" x2="1135.76" y1="792.386" y2="439.565" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b2008f" stopOpacity=".151"></stop>
          <stop offset=".4" stopColor="#f70090" stopOpacity=".4"></stop>
          <stop offset=".649" stopColor="#f60090" stopOpacity=".892"></stop>
          <stop offset="1" stopColor="#ff0090"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
