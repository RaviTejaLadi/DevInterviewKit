import Intro from './intro.md?raw';
import Traditional from './Traditional.md?raw';
import Behavioral from './Behavioral.md?raw';
import OpinionBased from './Opinion-Based.md?raw';
import Brainteaser from './Brainteaser.md?raw';
import Salary from './Salary.md?raw';

export const hrRoundTopics = [
  {
    id: 'hr-round-intro',
    title: '👋 Introduction',
    content: Intro,
  },
  {
    id: 'hr-round-traditional-questions',
    title: '📜 Traditional Questions',
    content: Traditional,
  },
  {
    id: 'hr-round-behavioral-questions',
    title: '💬 Behavioral Questions',
    content: Behavioral,
  },
  {
    id: 'hr-round-opinion-based-questions',
    title: '💭 Opinion-Based Questions',
    content: OpinionBased,
  },
  {
    id: 'hr-round-brainteaser-questions',
    title: '🧩 Brainteaser Questions',
    content: Brainteaser,
  },
  {
    id: 'hr-round-salary-based-questions',
    title: '💰 Salary Based Questions',
    content: Salary,
  },
];
