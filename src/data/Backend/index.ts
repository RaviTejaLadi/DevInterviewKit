import { Express, Node, System } from '@/assets/technologies';

import nodeIntro from './node/intro.md?raw';
import nodeTheory from './node/theory-questions.md?raw';
import nodeCoding from './node/coding-questions.md?raw';

import expressIntro from './express/intro.md?raw';
import expressTheory from './express/theory-questions.md?raw';
import expressCoding from './express/coding-questions.md?raw';

import webSecurity from './SystemDesign/web-security.md?raw';
import networking from './SystemDesign/networking.md?raw';
import errorLogging from './SystemDesign/logging-and-monitoring.md?raw';
import owasp from './SystemDesign/owasp.md?raw';

export const backendData = [
  {
    id: 'nodejs',
    title: 'Node.js',
    Icon: Node,
    documents: [
      {
        id: 'node-intro',
        title: 'Introduction',
        content: nodeIntro,
      },
      {
        id: 'theory-questions',
        title: 'Theory Questions',
        content: nodeTheory,
      },
      {
        id: 'coding-questions',
        title: 'Coding Questions',
        content: nodeCoding,
      },
    ],
  },
  {
    id: 'express-js',
    title: 'Express.js',
    Icon: Express,
    documents: [
      {
        id: 'express-intro',
        title: 'Introduction',
        content: expressIntro,
      },
      {
        id: 'express-theory-questions',
        title: 'Theory Questions',
        content: expressTheory,
      },
      {
        id: 'express-coding-questions',
        title: 'Coding Questions',
        content: expressCoding,
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    Icon: System,
    documents: [
      {
        id: 'web-security-intro',
        title: 'Web Security',
        content: webSecurity,
      },
      {
        id: 'networking-questions',
        title: 'Networking',
        content: networking,
      },
      {
        id: 'error-logging-questions',
        title: 'Logging & Monitoring',
        content: errorLogging,
      },
      {
        id: 'owasp',
        title: 'OWASP',
        content: owasp,
      },
    ],
  },
];
