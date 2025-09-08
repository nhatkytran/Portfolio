'use client';

import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useBringer, useInitialLoading } from '@/shared/hooks';
import { Skill, STACK_SKILLS_LIGHT, StackSkillsTheme } from '@/features/skills/data';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import FadeInMotion from '@/shared/components/FadeInMotion';

const SkeletonLoading = CreateSkeletonLoading({ className: 'animate-pulse rounded-sm' });

// prettier-ignore
type Props = {

  /** Theme of the stack skills. */
  readonly theme: StackSkillsTheme;

  /** Title of the stack skills. */
  readonly title: string;

  /** Skills. */
  readonly skills: readonly Skill[];
};

/** Stack skills component. */
export default function StackSkills({ theme, title, skills }: Props) {
  const { initialLoading } = useInitialLoading();
  const { isNightbringer } = useBringer();
  const isLight = theme === STACK_SKILLS_LIGHT;

  return (
    <section
      className={cn(
        'flex items-center justify-center',
        'py-10',
        'sm:py-14',
        'lg:py-20',
        isLight ? 'bg-neutral-50' : 'bg-black',
      )}
    >
      <div className={cn('flex flex-col gap-9', 'max-w-8xl w-full px-4', 'xs:px-6', 'sm:gap-11 sm:px-9', 'lg:gap-14')}>
        {initialLoading ? (
          <SkeletonLoading
            className={cn(
              'h-[30px] w-[218px]',
              'sm:h-[48px] sm:w-[268px]',
              'lg:h-[40px] lg:w-[302px]',
              isLight ? 'bg-neutral-150' : 'bg-neutral-800',
            )}
          />
        ) : (
          <FadeInMotion
            as="h2"
            className={cn(
              'font-inter text-[26px] font-semibold tracking-wider',
              'sm:text-[32px]',
              'lg:text-4xl',
              isLight ? 'text-black' : 'text-neutral-50',
            )}
          >
            {title}
          </FadeInMotion>
        )}
        <div
          className={cn(
            'grid grid-cols-2 gap-3',
            'xs:gap-4',
            'sm:grid-cols-3',
            'md:grid-cols-4',
            'mp:grid-cols-5',
            'lgx:grid-cols-6',
            'xl:grid-cols-7',
          )}
        >
          {skills.map(({ name, url, Icon }, index) =>
            initialLoading ? (
              <SkeletonLoading
                key={index}
                className={cn(
                  'h-[140px]',
                  'xxs:h-[144px]',
                  'xs:h-[152px]',
                  'lg:h-[160px]',
                  isLight ? 'bg-neutral-150' : 'bg-neutral-800',
                )}
              />
            ) : (
              <FadeInMotion key={name} transition={{ duration: index * 0.1 }}>
                <Link
                  href={url}
                  target="_blank"
                  className={cn(
                    'flex flex-col items-center gap-4',
                    'px-4 py-6 transition-all',
                    'cursor-pointer rounded-sm border-2 shadow-xs',
                    'hover:shadow-lg',
                    isLight ? 'border-neutral-100 bg-white' : 'bg-neutral-750 border-neutral-900',
                    isNightbringer
                      ? 'hover:border-red-600'
                      : isLight
                        ? 'hover:border-blue-600'
                        : 'hover:border-blue-500',
                  )}
                >
                  <Icon className={cn('size-14', 'xs:size-16', 'lg:size-18')} />
                  <p
                    className={cn(
                      'font-mark-pro-bold text-center text-[11px]',
                      'xxs:text-[13px]',
                      'lg:text-sm',
                      isLight ? 'text-neutral-900' : 'text-neutral-200',
                    )}
                  >
                    {name}
                  </p>
                </Link>
              </FadeInMotion>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
