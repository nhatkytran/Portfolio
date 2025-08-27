'use client';

import { useEffect, useState } from 'react';

import { type Language, ENGLISH_LANGUAGE } from '@/features/home/data';
import { cn } from '@/shared/utils/helpers';
import Introduction from '@/features/home/components/PersonalStatement/Introduction';
import LanguageSelection from '@/features/home/components/PersonalStatement/LanguageSelection';
import StatementDisplay from '@/features/home/components/PersonalStatement/StatementDisplay/StatementDisplay';
import Waves from '@/features/home/components/PersonalStatement/Waves';

const TRANSLATION_ANIMATION_DURATION = 500;

/** Personal statement. */
export default function PersonalStatement() {
  const [language, setLanguage] = useState<Language>(ENGLISH_LANGUAGE);
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  /**
   * Handles language change.
   * @param newLanguage New language.
   */
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsTranslating(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsTranslating(false), TRANSLATION_ANIMATION_DURATION);
    return () => clearTimeout(timeoutId);
  }, [language]);

  return (
    <section
      className={cn('flex flex-col items-center justify-center gap-10', 'pt-14', 'xs:gap-12', 'md:gap-14', 'lg:pt-20')}
    >
      <div
        className={cn('flex flex-col gap-6 px-4', 'font-inter w-full max-w-4xl font-semibold', 'xs:px-6', 'sm:px-9')}
      >
        <Introduction />
        <LanguageSelection language={language} onLanguageChange={handleLanguageChange} />
        <StatementDisplay language={language} isTranslating={isTranslating} />
      </div>
      <Waves />
    </section>
  );
}
