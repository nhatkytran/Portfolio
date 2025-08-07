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
      <div className={cn('lgx:gap-9 flex w-full max-w-6xl justify-center gap-8', 'px-4 py-16', 'xs:px-6', 'sm:px-9')}>
        {ESSENTIAL_INFORMATION.map(({ label, content, Icon }, index) => (
          <div
            key={index}
            className={cn('group relative flex w-80 gap-4', 'overflow-hidden rounded-sm bg-neutral-800 p-5')}
          >
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-neutral-900 p-4">
                <Icon />
              </div>
            </div>
            <div className="z-1 flex flex-col justify-center gap-0.5">
              <p className="font-inter font-semibold tracking-wide text-white">{label}</p>
              <p className="font-inter tracking-wider text-white">{content}</p>
            </div>
            <div
              className={cn(
                'absolute top-0 left-20 z-[0] h-1.5 w-full',
                '-rotate-75 bg-red-600 transition-all',
                'lgx:left-25',
                'group-hover:lgx:left-5 group-hover:left-10',
              )}
            />
            <div
              className={cn(
                'absolute top-0 left-25 z-[0] h-1.5 w-full',
                '-rotate-75 bg-red-600 transition-all',
                'lgx:left-30',
                'group-hover:left-20',
              )}
            />
            <div
              className={cn(
                'absolute top-0 left-35 z-[0] h-1.5 w-full',
                '-rotate-75 bg-blue-400 transition-all',
                'lgx:left-40',
                'group-hover:lgx:left-43 group-hover:left-40',
              )}
            />
          </div>
        ))}
      </div>
    </footer>
  );
}
