import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      'lines-around-comment': ['warn', { beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true }],
      'semi': ['error', 'always'],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: '*', next: 'if' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'always', prev: '*', next: 'export' },
      ],
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'max-len': ['warn', { code: 120, ignoreComments: true, ignoreUrls: true }],
      'eol-last': ['error', 'always'],
      'prefer-arrow-callback': ['warn'],
      'arrow-body-style': ['warn', 'as-needed'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],
      'indent': ['error', 2],
      'arrow-parens': ['error', 'as-needed'],
    },  
  },
];

export default eslintConfig;
