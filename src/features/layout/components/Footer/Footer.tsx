import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { TECHNOLOGY_ICONS } from '@/features/layout/data';
import { EnvelopIcon, GithubIcon, LeetCodeIcon, LinkedInIcon, MapIcon, PhoneIcon, RiotGamesIcon } from '@/shared/icons';

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

const ESSENTIAL_INFORMATION_ICON_STYLES = [
  { width: 44, height: 44 },
  { width: 54, height: 54 },
  { width: 54, height: 54 },
];

const SOCIAL_MEDIA_ACCOUNTS = [
  {
    url: '',
    Icon: LinkedInIcon,
  },
  {
    url: '',
    Icon: GithubIcon,
  },
  {
    url: '',
    Icon: LeetCodeIcon,
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
      <div
        className={cn(
          'flex w-full max-w-6xl flex-col justify-center gap-6',
          'px-4 py-10',
          'xs:px-6',
          'sm:gap-8 sm:px-9 sm:py-14',
          'lg:flex-row lg:py-16',
          'lgx:gap-9',
        )}
      >
        {ESSENTIAL_INFORMATION.map(({ label, content, Icon }, index) => (
          <div
            key={index}
            className={cn(
              'group relative flex gap-2.5',
              'overflow-hidden rounded-sm bg-neutral-800 px-3 py-4.5',
              'xxs:gap-4 xxs:px-5 xxs:py-5',
              'lg:w-80',
            )}
          >
            <div className="flex items-center justify-center">
              <div className={cn('rounded-full bg-neutral-900 p-3', 'xxs:p-4')}>
                <Icon />
              </div>
            </div>
            <div className="z-1 flex flex-col justify-center gap-0.5">
              <p className="font-inter text-[15px] font-semibold tracking-wide text-white lg:text-base">{label}</p>
              <p className="font-inter text-[15px] tracking-wider text-white lg:text-base">{content}</p>
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
                'group-hover:lgx:left-43 group-hover:left-38',
              )}
            />
            <div
              className={cn(
                'absolute top-0 right-0 hidden h-full',
                'aspect-square opacity-8',
                'sm:flex sm:items-center sm:justify-center',
                'lg:hidden',
              )}
            >
              <Icon {...ESSENTIAL_INFORMATION_ICON_STYLES[index]} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl">
        <div className="relative flex flex-col items-center justify-center gap-1.5 px-9 py-20">
          <div className="absolute top-0 left-0 z-0 flex size-full items-center justify-center opacity-10">
            <RiotGamesIcon width={452} height={150} />
          </div>
          <p className="font-riot-bold relative z-1 text-neutral-300">Inspired by Riot Games</p>
          <p className="font-inter relative z-1 text-center text-sm font-semibold text-neutral-400">
            This portfolio design was inspired by Riot&apos;s UI/UX. All rights to original assets belong to Riot Games.
            Personal, non-commercial project.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4">
            {SOCIAL_MEDIA_ACCOUNTS.map(({ url, Icon }, index) => (
              <Link key={index} href={url} className="flex items-center justify-center rounded-sm bg-neutral-800 p-2">
                <Icon className="size-7 fill-neutral-300" />
              </Link>
            ))}
          </div>
          <p className="text-center font-semibold text-neutral-600">© 2025 by Ky Tran (nhatky.tran.2002@gmail.com)</p>
        </div>
      </div>
    </footer>
  );
}
