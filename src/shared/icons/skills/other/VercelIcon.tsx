import { PropsWithClassName } from '@/shared/utils/types';

/** Vercel icon. */
export default function VercelIcon({ className }: PropsWithClassName) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M100 93.9565L50 7L0 93.9565H100Z" fill="black" />
    </svg>
  );
}
