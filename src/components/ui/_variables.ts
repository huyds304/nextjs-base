import { type ClassValue } from 'clsx';

export type Space =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const TextSizeClasses: Record<TextSize, ClassValue> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

export const slideBasisMap: Record<number, string> = {
  1: 'basis-full',
  2: 'basis-1/2',
  3: 'basis-1/3',
  4: 'basis-1/4',
  5: 'basis-1/5',
  6: 'basis-1/6',
};

export const DisabledClasses = 'disabled:pointer-events-none disabled:opacity-50';

export const InputClasses = {
  base: 'leading-[23px] placeholder:text-light-grey-3 font-normal text-text-color py-2 focus:outline-none bg-transparent w-full',
};

export const ButtonClasses = {
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background',
  focus:
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] active:scale-95 transition-transform duration-100',
};
