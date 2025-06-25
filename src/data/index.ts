import type { Section } from '@/types/markdown-content-types';
import introduction from './Welcome/introduction.md?raw';
import contentPolicy from './Welcome/content-policy.md?raw';
import contribution from './Welcome/contribution.md?raw';

import { frontendData } from './Frontend';

import dsaIntro from './DSA/intro.md?raw';
import levelOneDsa from './DSA/15-easy.md?raw';
import levelTwoDsa from './DSA/25-medium.md?raw';
import levelThreeDsa from './DSA/10-hard.md?raw';

import Namaste from '@/assets/Icons/Namaste';
import { Dsa, Sheets } from '@/assets/technologies';
import { backendData } from './Backend';
import { databaseData } from './Database';
import { resourcesData } from './Resources';

export const markdownData: Section[] = [
  {
    id: 'home',
    title: 'Home',
    categories: [
      {
        id: 'welcome',
        title: 'Welcome',
        Icon: Namaste,
        documents: [
          {
            id: 'introduction',
            title: 'Introduction',
            content: introduction,
          },
          {
            id: 'content-policy',
            title: 'Content Policy',
            content: contentPolicy,
          },
          {
            id: 'contribution',
            title: 'Contribution Guide',
            content: contribution,
          },
        ],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    categories: frontendData,
  },
  {
    id: 'backend',
    title: 'Backend',
    categories: backendData,
  },
  {
    id: 'database',
    title: 'Database',
    categories: databaseData,
  },
  {
    id: 'algorithms',
    title: 'Algorithms',
    categories: [
      {
        id: 'dsa',
        title: 'DSA',
        Icon: Dsa,
        documents: [
          {
            id: 'dsa-intro',
            title: 'Introduction',
            content: dsaIntro,
          },
          {
            id: 'level-one-dsa-easy',
            title: 'Level 1 - Easy',
            content: levelOneDsa,
          },
          {
            id: 'level-two-dsa-medium',
            title: 'Level 2 - Medium',
            content: levelTwoDsa,
          },
          {
            id: 'level-three-dsa-hard',
            title: 'Level 3 - Hard',
            content: levelThreeDsa,
          },
        ],
      },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    categories: resourcesData,
  },
];
