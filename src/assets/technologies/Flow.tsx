import * as React from 'react';
import { JSX } from 'react/jsx-runtime';
const Flow = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xmlSpace="preserve" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8.707 6H7.293l3-3h1.414zm-1-3H6.293L6 3.293v1.414zm8 0h-1.414l-3 3h1.414zM25 5.707V4.293L23.293 6h1.414zM19.707 3h-1.414l-3 3h1.414zm4 0h-1.414l-3 3h1.414zM18 28.707 22.707 24h-1.414L18 27.293zm6.293.293h1.414L29 25.707v-1.414zM29 28.293l-.707.707H29zM18.707 24H18v.707zm3 5 5-5h-1.414l-5 5zm-19-5H2v.707zM13 28.293l-.707.707H13zm-11 .414L6.707 24H5.293L2 27.293zM8.293 29h1.414L13 25.707v-1.414zm-2.586 0 5-5H9.293l-5 5z"
      style={{
        fill: '#ffc5bb',
      }}
    />
    <path
      d="M29 23h-4v-8.5a.5.5 0 0 0-.5-.5h-1.995L16 9.136V7h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h9v2.129L8.505 14H6.5a.5.5 0 0 0-.5.5V23H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H7v-8h1.495l6.405 4.8a1 1 0 0 0 1.2 0l6.41-4.8H24v8h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1M6 3h19v3H6zm7 26H2v-5h11zm2.5-10-6-4.5 6-4.5 6 4.5zM29 29H18v-5h11z"
      style={{
        fill: '#265aa5',
      }}
    />
  </svg>
);
export default Flow;
