import type { Category } from '@/types/markdown-content-types';
import introduction from './introduction.md?raw';

import htmlIntro from './html/html-intro.md?raw';
import htmlQuickReview from './html/quick-review-checklist.md?raw';
import htmlInterviewQuestions from './html/top-50-q-&-a.md?raw';
import SemanticHTMLAccessibility from './html/Semantic HTML & Accessibility.md?raw';

import cssIntro from './css/css-intro.md?raw';
import cssInterviewQuestions from './css/top-50-q-&-a.md?raw';

import jsIntro from './js/js-intro.md?raw';
import jsInterviewQuestions from './js/top-30-q-&-a.md?raw';
import JSL1andL2InterviewQuestions from './js/21-programs-inL1&L2.md?raw';
import Arrays from './js/arrays.md?raw';
import objects from './js/objects.md?raw';

import reactIntro from './react/react-intro.md?raw';
import reactInterviewQuestions from './react/interview-questions.md?raw';
import reactTsxSetup from './react/react-tsx-setup.md?raw';
import hooks from './react/hooks.md?raw';
import reactQuickReview from './react/quick-review-checklist.md?raw';
import reactFilesAndFoldersStructure from './react/files-and-folders-stracture.md?raw';

import reactOpenSourcePackages from './react-libraries-&-utilities/react open source packages.md?raw';
import reactHookFormDocs from './react-libraries-&-utilities/react-hook-form.md?raw';
import reactQuery from './react-libraries-&-utilities/react-query.md?raw';
import reactQueryHooks from './react-libraries-&-utilities/react-query-hooks-synatx.md?raw';
import reactTable from './react-libraries-&-utilities/react-table.md?raw';
import reactTableHooks from './react-libraries-&-utilities/react-table-hooks-synatx.md?raw';
import reactRouterDom from './react-libraries-&-utilities/react-router-dom.md?raw';

import stateManagementIntro from './state-management/intro.md?raw';
import reduxToolkit from './state-management/Redux Toolkit.md?raw';
import zustand from './state-management/Zustand.md?raw';
import useReducerSetup from './state-management/State Management with useReducer and useContext in TypeScript.md?raw';

import htmlCheatSheet from './cheat-sheets/html.md?raw';

export const markdownData: Category[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    icon: 'Home',
    documents: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: introduction,
      },
    ],
  },
  {
    id: 'html',
    title: 'HTML',
    icon: 'BookOpen',
    documents: [
      {
        id: 'html-intro',
        title: 'Introduction to HTML',
        content: htmlIntro,
      },
      {
        id: 'html-quick-review-checklist',
        title: 'Quick Review Checklist',
        content: htmlQuickReview,
      },
      {
        id: 'semantic-html-and-accessibility',
        title: 'Semantic HTML & Accessibility',
        content: SemanticHTMLAccessibility,
      },
      {
        id: 'html-top50q&a',
        title: 'HTML Interview Questions',
        content: htmlInterviewQuestions,
      },
    ],
  },
  {
    id: 'css',
    title: 'Css',
    icon: 'Code',
    documents: [
      {
        id: 'intro-to-css',
        title: 'Introduction to CSS',
        content: cssIntro,
      },
      {
        id: 'css-top50q&a',
        title: 'CSS Interview Questions',
        content: cssInterviewQuestions,
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: 'Code',
    documents: [
      {
        id: 'intro-to-js',
        title: 'Introduction to Javascript',
        content: jsIntro,
      },
      {
        id: 'js-top30q&a',
        title: 'Javascript Interview Questions',
        content: jsInterviewQuestions,
      },
      {
        id: 'js-l1-l2-interview',
        title: 'L1 & L2 javascript interviews Questions',
        content: JSL1andL2InterviewQuestions,
      },
      {
        id: 'js-array-methods',
        title: 'Javascript Arrays Methods',
        content: Arrays,
      },
      {
        id: 'js-objects',
        title: 'JavaScript Object Methods',
        content: objects,
      },
    ],
  },
  {
    id: 'react',
    title: 'React',
    icon: 'Code',
    documents: [
      {
        id: 'intro-to-react',
        title: 'Introduction to React',
        content: reactIntro,
      },
      {
        id: 'react-files-and-folders-structure',
        title: 'Files and Folders Structure',
        content: reactFilesAndFoldersStructure,
      },
      {
        id: 'quick-review-checklist',
        title: 'Quick Review Checklist',
        content: reactQuickReview,
      },
      {
        id: 'react-q&a',
        title: 'React Interview Questions',
        content: reactInterviewQuestions,
      },
      {
        id: 'react-tsx-setup',
        title: 'React TypeScript Setup',
        content: reactTsxSetup,
      },
      {
        id: 'react-hooks',
        title: 'Hooks in React',
        content: hooks,
      },
    ],
  },
  {
    id: 'react-libraries',
    title: 'React Libraries And Utilities',
    icon: 'Code',
    documents: [
      {
        id: 'most-useful-react-libraries',
        title: 'Most Useful React Libraries And Utilities',
        content: reactOpenSourcePackages,
      },
      {
        id: 'react-hook-form-docs',
        title: 'React Hook Form Usage',
        content: reactHookFormDocs,
      },
      {
        id: 'react-query-docs',
        title: 'React Query Usage',
        content: reactQuery,
      },
      {
        id: 'react-query-hooks-docs',
        title: 'React Query Hooks Syntax',
        content: reactQueryHooks,
      },
      {
        id: 'react-table-docs',
        title: 'React Table Usage',
        content: reactTable,
      },
      {
        id: 'react-table-hooks-docs',
        title: 'React Table Hooks Syntax',
        content: reactTableHooks,
      },
      {
        id: 'react-router-dom-docs',
        title: 'React Router Dom Usage',
        content: reactRouterDom,
      },
    ],
  },
  {
    id: 'state-management',
    title: 'State Management',
    icon: 'Code',
    documents: [
      {
        id: 'intro-to-state-management',
        title: 'Introduction',
        content: stateManagementIntro,
      },
      {
        id: 'use-reducer-setup',
        title: 'useReducer Setup',
        content: useReducerSetup,
      },
      {
        id: 'redux-toolkit',
        title: 'Redux Toolkit Setup',
        content: reduxToolkit,
      },
      {
        id: 'zustand',
        title: 'Zustand Setup',
        content: zustand,
      },
    ],
  },
  {
    id: 'cheat-sheets',
    title: 'Cheat Sheets',
    icon: 'Code',
    documents: [
      {
        id: 'html-cheat-sheet',
        title: 'Html Cheat Sheet',
        content: htmlCheatSheet,
      },
      {
        id: 'use-reducer-setup',
        title: 'useReducer Setup',
        content: useReducerSetup,
      },
      {
        id: 'redux-toolkit',
        title: 'Redux Toolkit Setup',
        content: reduxToolkit,
      },
      {
        id: 'zustand',
        title: 'Zustand Setup',
        content: zustand,
      },
    ],
  },
];
