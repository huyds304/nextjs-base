import { cva, type VariantProps } from 'class-variance-authority';

import * as React from 'react';
import { Space } from '@/components/ui/_variables';
import { cn } from '@/shared/utils/cn';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
    grow: {
      true: 'flex-grow',
      false: '',
    },
  },
  defaultVariants: {
    direction: 'row',
    grow: false,
  },
});

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
  fullHeight?: boolean;
  fullWidth?: boolean;
  padding?: Space;
  gap?: number;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, direction, align, justify, wrap, grow, gap, fullHeight, fullWidth, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          flexVariants({ direction, align, justify, wrap, grow }),
          'relative',
          fullHeight && 'h-full',
          fullWidth && 'w-full',
          padding && `p-${padding}`,
          className
        )}
        style={{ gap: gap ? `${gap}px` : undefined }}
        {...props}
      />
    );
  }
);

Flex.displayName = 'Flex';

export const FlexCenter = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  return <Flex align="center" justify="center" {...props} ref={ref} />;
});

FlexCenter.displayName = 'FlexCenter';
export { Flex, flexVariants };
