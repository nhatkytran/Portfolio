import localFont from 'next/font/local';

const riotRegular = localFont({
  src: '../../../public/fonts/Riot/Riot-Regular.woff2',
  variable: '--font-riot-regular',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotItalic = localFont({
  src: '../../../public/fonts/Riot/Riot-Regular-Italic.woff2',
  variable: '--font-riot-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotBold = localFont({
  src: '../../../public/fonts/Riot/Riot-Bold.woff2',
  variable: '--font-riot-bold',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotBoldItalic = localFont({
  src: '../../../public/fonts/Riot/Riot-Bold-Italic.woff2',
  variable: '--font-riot-bold-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotFonts = [riotRegular, riotItalic, riotBold, riotBoldItalic];

const spiegelRegular = localFont({
  src: '../../../public/fonts/Spiegel/Spiegel-Regular.ttf',
  variable: '--font-spiegel-regular',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const spiegelItalic = localFont({
  src: '../../../public/fonts/Spiegel/Spiegel-Regular-Italic.ttf',
  variable: '--font-spiegel-regular-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const spiegelSemiBold = localFont({
  src: '../../../public/fonts/Spiegel/Spiegel-Semi-Bold.ttf',
  variable: '--font-spiegel-semibold',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const spiegelSemiBoldItalic = localFont({
  src: '../../../public/fonts/Spiegel/Spiegel-Semi-Bold-Italic.ttf',
  variable: '--font-spiegel-semibold-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const spiegelBold = localFont({
  src: '../../../public/fonts/Spiegel/Spiegel-Bold.ttf',
  variable: '--font-spiegel-bold',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const spiegelBoldItalic = localFont({
  src: '../../../public/fonts/Spiegel/Spiegel-Bold-Italic.ttf',
  variable: '--font-spiegel-bold-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const spiegelFonts = [
  spiegelRegular,
  spiegelItalic,
  spiegelSemiBold,
  spiegelSemiBoldItalic,
  spiegelBold,
  spiegelBoldItalic,
];

/** List of fonts. */
export const fonts = [...riotFonts, ...spiegelFonts];
