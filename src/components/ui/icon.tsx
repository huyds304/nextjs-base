'use client';

import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const ArrowRightLongIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.51562 0.242188L7.10563 1.65219L12.6856 7.24219L0.515625 7.24219L0.515625 9.24219L12.6856 9.24219L7.10563 14.8322L8.51562 16.2422L16.5156 8.24219L8.51562 0.242188Z"
      fill="currentColor"
    />
  </svg>
);
