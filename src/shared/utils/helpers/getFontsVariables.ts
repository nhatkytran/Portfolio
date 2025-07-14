import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

const FONT_VARIABLE_CONNECTOR = ' ';

/**
 * Returns the list of fonts variables.
 * @param fonts List of fonts.
 */
export const getFontsVariables = (fonts: NextFontWithVariable[]) =>
  fonts.map(font => font.variable).join(FONT_VARIABLE_CONNECTOR);
