import { Css, Flow, HTML, JavaScript, NextJS, React, TypeScript, Utils, Vue } from '@/assets/technologies';

import { jsCategories } from './js';
import { reactConcepts } from './react';
import { htmlConcepts } from './html';
import { cssConcepts } from './css';
import { nextConcepts } from './Next';
import { reactUtilsConcepts } from './react-libraries-&-utilities';
import { reactCodingConcepts } from './react-machine-coding';
import { stateManagementConcepts } from './state-management';
import { tsConcepts } from './ts';
import { vueConcepts } from './vue';
import { jsOOPSConcepts } from './js-oops';

export const frontendData = [
  {
    id: 'html',
    title: 'HTML',
    Icon: HTML,
    documents: htmlConcepts,
  },
  {
    id: 'css',
    title: 'CSS',
    Icon: Css,
    documents: cssConcepts,
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    Icon: JavaScript,
    children: jsCategories,
  },
  {
    id: 'javascript-oops',
    title: 'JS OOPS',
    Icon: JavaScript,
    documents: jsOOPSConcepts,
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    Icon: TypeScript,
    documents: tsConcepts,
  },
  {
    id: 'react',
    title: 'React.js',
    Icon: React,
    documents: reactConcepts,
  },
  {
    id: 'next-js',
    title: 'Next.js',
    Icon: NextJS,
    documents: nextConcepts,
  },
  {
    id: 'vue-js',
    title: 'Vue.js',
    Icon: Vue,
    documents: vueConcepts,
  },
  {
    id: 'react-machine-coding',
    title: 'React Machine Coding',
    Icon: React,
    documents: reactCodingConcepts,
  },
  {
    id: 'react-libraries',
    title: 'React Libraries',
    Icon: Utils,
    documents: reactUtilsConcepts,
  },
  {
    id: 'state-management',
    title: 'State Management',
    Icon: Flow,
    documents: stateManagementConcepts,
  },
];
