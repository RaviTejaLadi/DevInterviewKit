import type { Section } from '@/types/markdown-content-types';
import introduction from './Welcome/introduction.md?raw';
import contentPolicy from './Welcome/content-policy.md?raw';
import contribution from './Welcome/contribution.md?raw';

import { frontendData } from './Frontend';

import Namaste from '@/assets/Icons/Namaste';
import { backendData } from './Backend';
import { databaseData } from './Database';
import { resourcesData } from './Resources';
import { humanResourcesData } from './HR Round';
import { cloudServicesData } from './Cloud';
import { dsaData } from './DSA';

export const markdownData: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
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
    id: 'human-resources-round',
    title: 'Human Resources',
    categories: humanResourcesData,
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
    id: 'cloud-services',
    title: 'Cloud Services',
    categories: cloudServicesData,
  },
  {
    id: 'algorithms',
    title: 'Data Structure and Algorithms',
    categories: dsaData,
  },
  {
    id: 'resources',
    title: 'Resources',
    categories: resourcesData,
  },
];
