import { Roadmap } from '@/assets/technologies';

import frontendRoadmap from './Frontend.md?raw';
import backendRoadmap from './backend.md?raw';
import fullstackRoadmap from './full-stack.md?raw';

export const roadmapData = [
  {
    id: 'role-based-roadmap',
    title: 'Role-based Roadmap',
    Icon: Roadmap,
    documents: [
      {
        id: 'frontend',
        title: '🖥️ Frontend',
        content: frontendRoadmap,
      },
      {
        id: 'backend',
        title: '⚙️ Backend',
        content: backendRoadmap,
      },
      {
        id: 'full-stack',
        title: '🚀 Full Stack',
        content: fullstackRoadmap,
      },
    ],
  },
];
