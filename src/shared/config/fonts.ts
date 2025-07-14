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

const beaufortLight = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Light.ttf',
  variable: '--font-beaufort-light',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortLightItalic = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Light-Italic.ttf',
  variable: '--font-beaufort-light-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortRegular = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Regular.ttf',
  variable: '--font-beaufort-regular',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortRegularItalic = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Regular-Italic.ttf',
  variable: '--font-beaufort-regular-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortMedium = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Medium.ttf',
  variable: '--font-beaufort-medium',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortMediumItalic = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Medium-Italic.ttf',
  variable: '--font-beaufort-medium-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortBold = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Bold.ttf',
  variable: '--font-beaufort-bold',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortBoldItalic = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Bold-Italic.ttf',
  variable: '--font-beaufort-bold-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortHeavy = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Heavy.ttf',
  variable: '--font-beaufort-heavy',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortHeavyItalic = localFont({
  src: '../../../public/fonts/Beaufort/Beaufort-Heavy-Italic.ttf',
  variable: '--font-beaufort-heavy-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const beaufortFonts = [
  beaufortLight,
  beaufortLightItalic,
  beaufortRegular,
  beaufortRegularItalic,
  beaufortMedium,
  beaufortMediumItalic,
  beaufortBold,
  beaufortBoldItalic,
  beaufortHeavy,
  beaufortHeavyItalic,
];

/** List of fonts. */
export const fonts = [...riotFonts, ...spiegelFonts, ...beaufortFonts];
