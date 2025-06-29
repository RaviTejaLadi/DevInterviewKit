import * as React from 'react';
import { JSX } from 'react/jsx-runtime';

const ArrayIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1.5 2-.5.5v11l.5.5H4v-1H2V3h2V2zm13 12 .5-.5v-11l-.5-.5H12v1h2v10h-2v1z"
    />
  </svg>
);
export default ArrayIcon;
