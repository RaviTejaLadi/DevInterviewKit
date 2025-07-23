import nextIntro from './intro.md?raw';
import nextFilesAndFoldersStructure from './files-and-folders-structure.md?raw';
import nextQuickReview from './quick-review-checklist.md?raw';
import commonNextInterviewQuestions from './common-questions.md?raw';
import pagesRouterNextInterviewQuestions from './pages-router-questions.md?raw';
import appRouterNextInterviewQuestions from './app-router-questions.md?raw';

export const nextConcepts = [
  {
    id: 'next-js-intro',
    title: '📚 Introduction',
    content: nextIntro,
  },
  {
    id: 'next-quick-review-checklist',
    title: '📝 Quick Review Checklist',
    content: nextQuickReview,
  },
  {
    id: 'next-js-files-and-folders-structure',
    title: '📁 Files and Folders Structure',
    content: nextFilesAndFoldersStructure,
  },
  {
    id: 'common-next-js-interview-questions',
    title: '❓ Common Interview Questions',
    content: commonNextInterviewQuestions,
  },
  {
    id: 'pages-routers-next-js-interview-questions',
    title: '📄 Pages Routers Interview Questions',
    content: pagesRouterNextInterviewQuestions,
  },
  {
    id: 'app-routers-next-js-interview-questions',
    title: 'App Routers Interview Questions',
    content: appRouterNextInterviewQuestions,
  },
];
