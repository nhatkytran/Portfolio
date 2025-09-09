import TitleSkeleton from './components/TitleSkeleton';
import TitleContent from './components/TitleContent';
import CardSkeleton from './components/CardSkeleton';
import CardContent from './components/CardContent';

import { cn } from '@/shared/utils/helpers';
import { Skill, STACK_SKILLS_LIGHT, StackSkillsTheme } from '@/features/skills/data';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import SEOSkeletonLoading from '@/shared/components/SEOSkeletonLoading';

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
        <SEOSkeletonLoading
          skeleton={<TitleSkeleton SkeletonLoading={SkeletonLoading} isLight={isLight} />}
          content={<TitleContent isLight={isLight} title={title} />}
        />
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
          {skills.map((skill, index) => (
            <SEOSkeletonLoading
              key={index}
              skeleton={<CardSkeleton SkeletonLoading={SkeletonLoading} isLight={isLight} />}
              content={<CardContent skill={skill} isLight={isLight} index={index} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
