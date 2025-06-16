import React, { forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isFluid?: boolean;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, isFluid, className, ...rest } = props;

  return (
    <div ref={ref} {...rest} className={cn('mx-auto h-full w-full', !isFluid && 'max-w-[1440px] px-[25px]', className)}>
      {children}
    </div>
  );
});

export { Container };
