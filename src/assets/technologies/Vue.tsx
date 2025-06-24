import * as React from 'react';
import { JSX } from 'react/jsx-runtime';
const Vue = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path d="m2 4 14 24L30 4h-5.5L16 18.5 7.5 4z" fill="#41B883" />
    <path d="M7.5 4 16 18.5 24.5 4h-5l-3.435 6.013L12.5 4z" fill="#35495E" />
  </svg>
);
export default Vue;
