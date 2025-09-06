import { PropsWithClassName } from '@/shared/utils/types';

/** Angular Material icon. */
export default function AngularMaterialIcon({ className }: PropsWithClassName) {
  return (
    <svg width={24} height={24} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.2 192.7">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon
            fill="#ffa726"
            points="89.4 0 89.4 0 89.4 0 0 32 13.5 150.4 89.4 192.7 89.4 192.7 89.4 192.7 165.4 150.4 179.2 32 89.4 0"
          />
          <polygon
            fill="#fb8c00"
            points="89.4 0 89.4 21.4 89.4 21.4 89.4 118.7 89.4 118.7 89.4 192.7 89.4 192.7 165.4 150.4 179.2 32 89.4 0"
          />
          <polygon fill="#ffe0b2" points="102.9 146.3 39.6 115.8 75.9 93.4 139.6 124 102.9 146.3" />
          <polygon fill="#fff3e0" points="102.9 122.8 39.6 92.2 75.9 69.9 139.6 100.5 102.9 122.8" />
          <polygon fill="#fff" points="102.9 99.3 39.6 68.7 75.9 46.3 139.6 76.9 102.9 99.3" />
        </g>
      </g>
    </svg>
  );
}
