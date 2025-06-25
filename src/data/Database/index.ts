import mongoIntro from './mongoDB/intro.md?raw';
import mongoTheoryQuestions from './mongoDB/theory-questions.md?raw';
import mongoCodingQuestions from './mongoDB/coding-questions.md?raw';

import { MongoDB } from '@/assets/technologies';

export const databaseData = [
  {
    id: 'mongoDB',
    title: 'Mongo DB',
    Icon: MongoDB,
    documents: [
      {
        id: 'mongo-intro',
        title: 'Introduction',
        content: mongoIntro,
      },
      {
        id: 'mongo-theory-questions',
        title: 'Theory Questions',
        content: mongoTheoryQuestions,
      },
      {
        id: 'mongo-coding-questions',
        title: 'Coding Questions',
        content: mongoCodingQuestions,
      },
    ],
  },
];
