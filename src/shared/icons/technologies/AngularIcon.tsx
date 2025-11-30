import { PropsWithClassName } from '@/shared/utils/types';

/** Angular icon. */
export default function AngularIcon({ className }: PropsWithClassName) {
  return (
    <svg width={32} height={32} className={className} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#dd0031"
        // eslint-disable-next-line max-len
        d="M13.24 16.86h5.512l-2.757-6.54zM15.995 0.012l-15.080 5.305 2.3 19.68 12.78 6.991 12.784-6.984 2.299-19.684zM25.405 24.408h-3.515l-1.893-4.668h-8.004l-1.893 4.668h-3.517l9.413-20.864z"
      />
    </svg>
  );
}
