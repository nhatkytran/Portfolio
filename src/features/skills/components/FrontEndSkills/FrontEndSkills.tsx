import { cn } from '@/shared/utils/helpers';
import Html5Icon from '@/shared/icons/skills/fe/Html5Icon';

/** Front-end skills component. */
export default function FrontEndSkills() {
  return (
    <section className="flex items-center justify-center bg-neutral-50 py-20">
      <div className="max-w-8xl flex w-full flex-col gap-14 px-9">
        <h2 className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>
          Front-end Skills
        </h2>
        <div className={cn('grid-cols-6', 'lgx:grid-cols-7', 'grid gap-4 xl:grid-cols-8')}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col items-center gap-4',
                'bg-white px-4 py-6 transition-all',
                'cursor-pointer rounded-sm border-2 border-neutral-100 shadow-xs',
                'hover:border-red-400 hover:shadow-lg',
              )}
            >
              <Html5Icon className="size-18" />
              <p className="font-mark-pro-bold text-center text-sm text-neutral-900">HTML5</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
