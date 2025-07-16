import { ArrayIcon, Dsa } from '@/assets/technologies';

import dsaIntro from './dsa-intro/intro.md?raw';
import dsaRoadMap from './dsa-intro/dsa-roadmap.md?raw';
import top35 from './dsa-intro/q-and-a.md?raw';

import batch1 from './arrays/easy.md?raw';
import batch2 from './arrays/medium.md?raw';
import batch3 from './arrays/hard.md?raw';
import batch4 from './arrays/expert.md?raw';

export const dsaData = [
  {
    id: 'dsa',
    title: 'DSA Introduction',
    Icon: Dsa,
    documents: [
      {
        id: 'dsa-intro',
        title: 'Introduction',
        content: dsaIntro,
      },
      {
        id: 'dsa-roadmap',
        title: 'Roadmap',
        content: dsaRoadMap,
      },
      {
        id: 'top-35-most-asked-dsa-questions',
        title: 'Top 35 Questions',
        content: top35,
      },
    ],
  },
  {
    id: 'dsa-arrays',
    title: '[Arrays] Q&A',
    Icon: ArrayIcon,
    documents: [
      {
        id: 'dsa-arrays-batch-1',
        title: 'Batch 1 Easy',
        content: batch1,
      },
      {
        id: 'dsa-arrays-batch-2',
        title: 'Batch 2 Medium',
        content: batch2,
      },
      {
        id: 'dsa-arrays-batch-3',
        title: 'Batch 3 Hard',
        content: batch3,
      },
      {
        id: 'dsa-arrays-batch-4',
        title: 'Batch 4 Expert',
        content: batch4,
      },
    ],
  },
];
