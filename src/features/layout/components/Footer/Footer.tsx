import { cn } from '@/shared/utils/helpers';
import { TECHNOLOGY_ICONS } from '@/features/layout/data';
import { EnvelopIcon, MapIcon, PhoneIcon } from '@/shared/icons';

const ESSENTIAL_INFORMATION = [
  {
    label: 'Gmail',
    content: 'nhockktean2@gmail.com',
    Icon: EnvelopIcon,
  },
  {
    label: 'Location',
    content: 'Sai Gon, Vietnam',
    Icon: MapIcon,
  },
  {
    label: 'Phone',
    content: '(+84) 813 659 939',
    Icon: PhoneIcon,
  },
];

/** Footer. */
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-neutral-950">
      <div className="flex w-full items-center justify-center bg-neutral-800">
        <div
          className={cn(
            'flex w-full max-w-4xl items-center justify-between',
            'px-4 py-5',
            'xs:px-6 xs:py-6',
            'sm:px-9',
            'lg:py-7',
          )}
        >
          {TECHNOLOGY_ICONS.map((Icon, index) => (
            <Icon key={index} className={cn('size-6', 'xs:size-6.5', 'lg:size-7.5')} />
          ))}
        </div>
      </div>
      <div className={cn('flex w-full max-w-6xl justify-center gap-9', 'px-4 py-16', 'xs:px-6', 'sm:px-9')}>
        {ESSENTIAL_INFORMATION.map(({ label, content, Icon }, index) => (
          <div key={index} className="flex w-80 gap-4 rounded-sm bg-neutral-800 p-5">
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-neutral-900 p-4">
                <Icon />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-0.5">
              <p className="font-inter font-semibold tracking-wide text-white">{label}</p>
              <p className="font-inter tracking-wider text-white">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
