import { cva, type VariantProps } from 'class-variance-authority';
import { useTranslations } from 'next-intl';

import * as React from 'react';
import { cn } from '@/shared/utils/cn';

const headingVariants = cva('', {
  variants: {
    level: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-medium',
      h5: 'text-lg font-medium',
      titleSection: 'text-[32px] leading-[180%] font-bold text-center lg:text-left',
      title: 'text-[40px] font-bold leading-[63px]',
    },
  },
  defaultVariants: {
    level: 'h1',
  },
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  level?: NonNullable<VariantProps<typeof headingVariants>['level']>;
  trans?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h1', trans = false, children, ...props }, ref) => {
    const t = useTranslations();
    const Component = level === 'titleSection' || level === 'title' ? 'h1' : level;

    const content = trans && typeof children === 'string' ? t(children) : children;

    return (
      <Component ref={ref} className={cn(headingVariants({ level }), className)} {...props}>
        {content}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
