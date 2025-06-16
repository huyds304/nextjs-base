import { cva, type VariantProps } from 'class-variance-authority';

import * as React from 'react';
import { ButtonClasses, DisabledClasses } from '@/components/ui/_variables';
import { cn } from '@/shared/utils/cn';

const buttonVariants = cva(ButtonClasses.base + ' ' + ButtonClasses.focus + ' ' + DisabledClasses, {
  variants: {
    variant: {
      solid: '',
      outline: 'border',
    },
    colorStyle: {
      primary: '',
      secondary: '',
      transparent: '',
      white: '',
    },
    size: {
      sm: 'h-9 px-3',
      md: 'h-[43px] p-2.5',
      lg: 'h-11 px-8',
      '2lg': 'h-[58px] w-[241px] p-2.5 text-[16px] font-bold',
      xl: 'py-2 lg:h-14 lg:text-lg font-bold',

      icon: 'h-10 w-10',
    },
    hasIcon: {
      true: 'flex gap-2',
      left: 'flex justify-start gap-2',
      right: 'flex',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      colorStyle: 'primary',
      className: 'bg-primary text-white hover:opacity-90',
    },
    {
      variant: 'solid',
      colorStyle: 'secondary',
      className: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    },
    {
      variant: 'solid',
      colorStyle: 'white',
      className: 'bg-white text-primary hover:opacity-90',
    },
    {
      variant: 'outline',
      colorStyle: 'primary',
      className: 'border-primary text-primary hover:bg-primary hover:text-white',
    },
    {
      variant: 'outline',
      colorStyle: 'secondary',
      className: 'border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    colorStyle: 'primary',
    size: 'md',
    radius: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, colorStyle, size, radius, leftIcon, rightIcon, children, hasIcon, ...props }, ref) => {
    const iconPosition = leftIcon ? 'left' : rightIcon ? 'right' : undefined;
    const effectiveHasIcon = hasIcon || (leftIcon || rightIcon ? iconPosition : undefined);

    return (
      <button
        className={cn(buttonVariants({ variant, colorStyle, size, radius, hasIcon: effectiveHasIcon, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
