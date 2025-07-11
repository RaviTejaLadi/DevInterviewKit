import * as React from 'react';

import { JSX } from 'react/jsx-runtime';
const HTML = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      style={{
        fill: '#e44f26',
      }}
      d="M5.902 27.201 3.655 2h24.69l-2.25 25.197L15.985 30z"
    />
    <path
      style={{
        fill: '#f1662a',
      }}
      d="m16 27.858 8.17-2.265 1.922-21.532H16z"
    />
    <path
      style={{
        fill: '#ebebeb',
      }}
      d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"
    />
    <path
      style={{
        fill: '#fff',
      }}
      d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83z"
    />
  </svg>
);
export default HTML;
