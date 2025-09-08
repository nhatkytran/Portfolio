import { useRef, useState } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { useWindowEventListener } from '@/shared/hooks';
import { type Language, LANGUAGES, CHINESE_LANGUAGE, ENGLISH_LANGUAGE } from '@/features/home/data';

// prettier-ignore
type Props = {

  /** Language. */
  readonly language: Language;

  /** Handles language change. */
  readonly onLanguageChange: (language: Language) => void;
};

/** Language selection. */
export default function LanguageSelection({ language, onLanguageChange }: Props) {
  const { isNightbringer } = useBringer();
  const languageContainerRef = useRef<HTMLDivElement>(null);
  const [languageLineWidth, setLanguageLineWidth] = useState(0);

  /**
   * Gets language text styles.
   * @param languageData The language data.
   */
  const languageTextStyles = (languageData: Language) => {
    if (languageData !== language) {
      return 'text-neutral-500';
    }
    return isNightbringer ? 'text-red-600' : 'text-sky-600';
  };

  const languageLineStyles = (() => {
    if (language === ENGLISH_LANGUAGE) {
      return 'left-0';
    }
    return language === CHINESE_LANGUAGE ? 'left-[33.33%]' : 'left-[66.67%]';
  })();

  /**
   * Handles language change.
   * @param language The language to change to.
   */
  const handleLanguage = (language: Language) => () => onLanguageChange(language);

  /** Handles language line width. */
  const handleLanguageLineWidth = () => {
    if (languageContainerRef.current != null) {
      setLanguageLineWidth(languageContainerRef.current.offsetWidth / LANGUAGES.length);
    }
  };

  useWindowEventListener({ eventName: 'resize', isInitialCall: true, handler: handleLanguageLineWidth });

  return (
    <div ref={languageContainerRef} className="relative">
      <div className="flex items-center justify-between">
        {LANGUAGES.map(languageData => (
          <button
            key={languageData}
            onClick={handleLanguage(languageData)}
            className={cn(
              'flex-1 py-3.5 text-xs tracking-widest uppercase',
              'xs:text-sm',
              languageTextStyles(languageData),
            )}
          >
            {languageData}
          </button>
        ))}
      </div>
      <span
        style={{ width: `${languageLineWidth}px` }}
        className={cn(
          'personal-statement-line-transition',
          'absolute bottom-0 left-0 block h-[2px]',
          isNightbringer ? 'bg-red-600' : 'bg-sky-600',
          languageLineStyles,
        )}
      />
    </div>
  );
}
