import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import jsdoc from 'eslint-plugin-jsdoc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: { jsdoc },
    rules: {
      'lines-around-comment': ['warn', { beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true }],
      semi: ['error', 'always'],
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'max-len': ['warn', { code: 120, ignoreComments: true, ignoreUrls: true }],
      'eol-last': ['error', 'always'],
      'prefer-arrow-callback': ['warn'],
      'arrow-body-style': ['warn', 'as-needed'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      indent: ['error', 2],
      'arrow-parens': ['error', 'as-needed'],
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
        },
      ],
      'jsdoc/check-alignment': 'warn',
      'jsdoc/check-tag-names': 'warn',
      'jsdoc/check-param-names': 'warn',
    },
  },
];

export default eslintConfig;
