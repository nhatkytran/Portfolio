import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merges class names. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
