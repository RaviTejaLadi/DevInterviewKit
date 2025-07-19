import { ArrayIcon, Dsa } from '@/assets/technologies';

import dsaRoadMap from './dsa-intro/dsa-roadmap.md?raw';
import dsaIntro from './dsa-intro/intro.md?raw';
import top35 from './Q-And-A/q-and-a.md?raw';
import top40 from './Q-And-A/top-40-array.md?raw';
import top20 from './Q-And-A/top-20-object.md?raw';
import top20string from './Q-And-A/top-20-string.md?raw';

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
    ],
  },
  {
    id: 'dsa-q-and-a',
    title: 'Q&A',
    Icon: ArrayIcon,
    documents: [
      {
        id: 'top-35-most-asked-dsa-questions',
        title: 'Top 35 General Questions',
        content: top35,
      },
      {
        id: 'dsa-arrays-questions',
        title: 'Top 40 Array Questions',
        content: top40,
      },
      {
        id: 'dsa-object-questions',
        title: 'Top 20 Objects Questions',
        content: top20,
      },
      {
        id: 'dsa-string-questions',
        title: 'Top 20 String Questions',
        content: top20string,
      },
    ],
  },
];
