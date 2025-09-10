import { HR, Jira } from '@/assets/technologies';
import { jiraConcepts } from './Jira';
import { hrRoundTopics } from './HR';

export const humanResourcesData = [
  {
    id: 'hr-round',
    title: 'HR Round',
    Icon: HR,
    documents: hrRoundTopics,
  },
  {
    id: 'Jira',
    title: 'Jira',
    Icon: Jira,
    documents: jiraConcepts,
  },
];
