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
import eventHandling from './js/event-handling.md?raw';
import debounceAndThrottle from './js/Debouncing & Throttling.md?raw';
import variablesAndScoping from './js/Variables & Scoping.md?raw';
import dataTypesAndTypeConversion from './js/Data Types & Type Conversion.md?raw';
import webStorageApi from './js/web-storage-api.md?raw';
import loopingStatements from './js/looping-statements.md?raw';
import conditionalStatements from './js/conditional-statements.md?raw';
import promises from './js/promise-combinators.md?raw';
import asyncAwait from './js/async-await.md?raw';
import closures from './js/closures.md?raw';
import prototypesAndInheritance from './js/prototypes-And-Inheritance.md?raw';
import thisKeyword from './js/this-Keyword.md?raw';
import callApplyBind from './js/call-Apply-Bind.md?raw';
import hoisting from './js/hoisting.md?raw';
import es6Features from './js/es6Features.md?raw';
import domManipulation from './js/dom-Manipulation.md?raw';
import eventLoop from './js/eventLoop.md?raw';
import functions from './js/functions.md?raw';
import functionsBestPractices from './js/function-best-practices.md?raw';
import callbackFunctions from './js/callback-Functions.md?raw';
import errorHandling from './js/error-Handling.md?raw';
import fetchApi from './js/fetchApi.md?raw';
import modules from './js/modules.md?raw';
import designPatterns from './js/design-Patterns.md?raw';
import memoryManagement from './js/memory-Management.md?raw';
import currying from './js/currying.md?raw';
import webWorkers from './js/webWorkers.md?raw';
import strictMode from './js/strictMode.md?raw';
import generators from './js/generators.md?raw';
import proxyAndReflect from './js/proxyAndReflect.md?raw';

import tsIntro from './ts/Introduction to TypeScript.md?raw';
import tsInterviewQuestions from './ts/interview-questions-theory.md?raw';

import reactIntro from './react/react-intro.md?raw';
import reactInterviewQuestions from './react/interview-questions.md?raw';
import reactTsxSetup from './react/react-tsx-setup.md?raw';
import hooks from './react/hooks.md?raw';
import reactQuickReview from './react/quick-review-checklist.md?raw';
import reactFilesAndFoldersStructure from './react/files-and-folders-structure.md?raw';
import reactComponents from './react/react-Components.md?raw';
import reactStateManagement from './react/react-StateManagement.md?raw';
import reactLifecycle from './react/react-Lifecycle.md?raw';
import reactVirtualDom from './react/react-VirtualDom.md?raw';
import reactRouting from './react/react-Routing.md?raw';
import reactContextApi from './react/react-ContextApi.md?raw';
import reactPerformance from './react/react-Performance.md?raw';
import reactTesting from './react/react-Testing.md?raw';
import reactRedux from './react/react-Redux.md?raw';
import reactJsx from './react/react-Jsx.md?raw';
import reactErrorHandling from './react/react-ErrorHandling.md?raw';
import reactSSR from './react/react-SSR.md?raw';
import reactComponentTypes from './react/react-Component-Types.md?raw';

import reactOpenSourcePackages from './react-libraries-&-utilities/react open source packages.md?raw';
import reactHookFormDocs from './react-libraries-&-utilities/react-hook-form.md?raw';
import reactQuery from './react-libraries-&-utilities/react-query.md?raw';
import reactQueryHooks from './react-libraries-&-utilities/react-query-hooks-syntax.md?raw';
import reactTable from './react-libraries-&-utilities/react-table.md?raw';
import reactTableHooks from './react-libraries-&-utilities/react-table-hooks-syntax.md?raw';
import reactRouterDom from './react-libraries-&-utilities/react-router-dom.md?raw';
import reactWindow from './react-libraries-&-utilities/react-window.md?raw';

import stateManagementIntro from './state-management/intro.md?raw';
import reduxToolkit from './state-management/Redux Toolkit.md?raw';
import zustand from './state-management/Zustand.md?raw';
import useReducerSetup from './state-management/State Management with useReducer and useContext in TypeScript.md?raw';

import nextIntro from './Next/intro.md?raw';
import nextFilesAndFoldersStructure from './Next/files-and-folders-structure.md?raw';
import nextQuickReview from './Next/quick-review-checklist.md?raw';
import commonNextInterviewQuestions from './Next/common-questions.md?raw';
import pagesRouterNextInterviewQuestions from './Next/pages-router-questions.md?raw';
import appRouterNextInterviewQuestions from './Next/app-router-questions.md?raw';

import reactMachineCodingIntro from './react-machine-coding/intro.md?raw';
import reactMachineCodingEasyLevel from './react-machine-coding/level-easy.md?raw';
import reactMachineCodingMediumLevel from './react-machine-coding/level-medium.md?raw';
import reactMachineCodingHardLevel from './react-machine-coding/level-hard.md?raw';
import reactMachineCodingExpertLevel from './react-machine-coding/level-expert.md?raw';

import vueIntro from './vue/intro.md?raw';
import vueFilesAndFoldersStructure from './vue/files-and-folders-structure.md?raw';
import vueTheoryQuestions from './vue/theory-questions.md?raw';
import vueCodingQuestions from './vue/coding-questions.md?raw';
import { Css, Flow, HTML, JavaScript, NextJS, React, TypeScript, Utils, Vue } from '@/assets/technologies';

export const frontendData = [
  {
    id: 'html',
    title: 'HTML',
    Icon: HTML,
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
    title: 'CSS',
    Icon: Css,
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
    Icon: JavaScript,
    documents: [
      {
        id: 'intro-to-js',
        title: 'Introduction',
        content: jsIntro,
      },
      {
        id: 'js-top30q&a',
        title: 'Interview Questions',
        content: jsInterviewQuestions,
      },
      {
        id: 'js-l1-l2-interview',
        title: 'L1 & L2 interviews Questions',
        content: JSL1andL2InterviewQuestions,
      },
      {
        id: 'js-variables-&-scoping',
        title: '🧠 Variables & Scoping',
        content: variablesAndScoping,
      },
      {
        id: 'js-datatypes-And-TypeConversion',
        title: '🔢 Data Types & Type Conversion',
        content: dataTypesAndTypeConversion,
      },
      {
        id: 'js-functions',
        title: '📞 Functions',
        content: functions,
      },
      {
        id: 'js-functions-best-practices',
        title: '📃 Functions Best Practices',
        content: functionsBestPractices,
      },
      {
        id: 'js-array-methods',
        title: '📊 Array Methods',
        content: Arrays,
      },
      {
        id: 'js-objects',
        title: '🗃️ Object Methods',
        content: objects,
      },
      {
        id: 'js-dom-manipulation',
        title: '🖥️ DOM Manipulation',
        content: domManipulation,
      },
      {
        id: 'js-event-handling',
        title: '🎮 Event Handling',
        content: eventHandling,
      },
      {
        id: 'js-async-await',
        title: '⏳ Async/Await',
        content: asyncAwait,
      },
      {
        id: 'js-promises',
        title: '🤝 Promises Combinators',
        content: promises,
      },
      {
        id: 'js-fetch-api',
        title: '🌐 Fetch API',
        content: fetchApi,
      },
      {
        id: 'js-es6-features',
        title: '✨ ES6+ Features',
        content: es6Features,
      },
      {
        id: 'js-closures',
        title: '🔒 Closures',
        content: closures,
      },
      {
        id: 'js-this-keyword',
        title: '👈 this Keyword',
        content: thisKeyword,
      },
      {
        id: 'js-call-apply-bind',
        title: '🔗 call, apply & bind',
        content: callApplyBind,
      },
      {
        id: 'js-prototypes-inheritance',
        title: '🧬 Prototypes & Inheritance',
        content: prototypesAndInheritance,
      },
      {
        id: 'js-event-loop',
        title: '♻️ Event Loop',
        content: eventLoop,
      },
      {
        id: 'js-debouncing-&-throttling',
        title: '⏱️ Debouncing & Throttling',
        content: debounceAndThrottle,
      },
      {
        id: 'js-web-storage-api',
        title: '💾 Web Storage API',
        content: webStorageApi,
      },
      {
        id: 'js-modules',
        title: '📦 Modules (ES6)',
        content: modules,
      },
      {
        id: 'js-error-handling',
        title: '❌ Error Handling',
        content: errorHandling,
      },
      {
        id: 'js-hoisting',
        title: '🔼 Hoisting',
        content: hoisting,
      },
      {
        id: 'js-callback-functions',
        title: '📲 Callback Functions',
        content: callbackFunctions,
      },
      {
        id: 'js-looping-statements',
        title: '🔄 Looping Statements',
        content: loopingStatements,
      },
      {
        id: 'js-conditional-statements',
        title: '❓ Conditional Statements',
        content: conditionalStatements,
      },
      {
        id: 'js-currying',
        title: '🏹 Currying',
        content: currying,
      },
      {
        id: 'js-design-patterns',
        title: '🎨 Design Patterns',
        content: designPatterns,
      },
      {
        id: 'js-strict-mode',
        title: '📏 Strict Mode',
        content: strictMode,
      },
      {
        id: 'js-memory-management',
        title: '🧠 Memory Management',
        content: memoryManagement,
      },
      {
        id: 'js-web-workers',
        title: '👷 Web Workers',
        content: webWorkers,
      },
      {
        id: 'js-generators',
        title: '🌀 Generators',
        content: generators,
      },
      {
        id: 'js-proxy-reflect',
        title: '🪞 Proxy & Reflect',
        content: proxyAndReflect,
      },
    ],
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    Icon: TypeScript,
    documents: [
      {
        id: 'intro-to-ts',
        title: 'Introduction',
        content: tsIntro,
      },
      {
        id: 'ts-q-&-a',
        title: 'TypeScript Interview Questions',
        content: tsInterviewQuestions,
      },
    ],
  },
  {
    id: 'react',
    title: 'React.js',
    Icon: React,
    documents: [
      {
        id: 'intro-to-react',
        title: '👋 Introduction to React',
        content: reactIntro,
      },
      {
        id: 'react-files-and-folders-structure',
        title: '🗂️ Files and Folders Structure',
        content: reactFilesAndFoldersStructure,
      },
      {
        id: 'react-q&a',
        title: '❓ React Interview Questions',
        content: reactInterviewQuestions,
      },
      {
        id: 'quick-review-checklist',
        title: '✅ Quick Review Checklist',
        content: reactQuickReview,
      },
      {
        id: 'react-components',
        title: '⚛️ Components and Props',
        content: reactComponents,
      },
      {
        id: 'react-hooks',
        title: '🎣 Hooks in React',
        content: hooks,
      },
      {
        id: 'react-state-management',
        title: '🔄 State Management',
        content: reactStateManagement,
      },
      {
        id: 'react-jsx',
        title: '📝 JSX Syntax',
        content: reactJsx,
      },
      {
        id: 'react-routing',
        title: '🛣️ Routing with React Router',
        content: reactRouting,
      },
      {
        id: 'react-context-api',
        title: '🌐 Context API',
        content: reactContextApi,
      },
      {
        id: 'react-redux',
        title: '📦 Redux State Management',
        content: reactRedux,
      },
      {
        id: 'react-functional-vs-class',
        title: '⚖️ Functional vs Class Components',
        content: reactComponentTypes,
      },
      {
        id: 'react-lifecycle',
        title: '⏳ Component Lifecycle',
        content: reactLifecycle,
      },
      {
        id: 'react-virtual-dom',
        title: '👻 Virtual DOM',
        content: reactVirtualDom,
      },
      {
        id: 'react-performance',
        title: '⚡ Performance Optimization',
        content: reactPerformance,
      },
      {
        id: 'react-testing',
        title: '🧪 Testing in React',
        content: reactTesting,
      },
      {
        id: 'react-error-handling',
        title: '❌ Error Handling',
        content: reactErrorHandling,
      },
      {
        id: 'react-tsx-setup',
        title: '🛠️ React TypeScript Setup',
        content: reactTsxSetup,
      },
      {
        id: 'react-server-side-rendering',
        title: '🖥️ Server Side Rendering',
        content: reactSSR,
      },
    ],
  },
  {
    id: 'next-js',
    title: 'Next.js',
    Icon: NextJS,
    documents: [
      {
        id: 'next-js-intro',
        title: 'Introduction',
        content: nextIntro,
      },
      {
        id: 'next-quick-review-checklist',
        title: 'Quick Review Checklist',
        content: nextQuickReview,
      },
      {
        id: 'next-js-files-and-folders-structure',
        title: 'Files and Folders Structure',
        content: nextFilesAndFoldersStructure,
      },
      {
        id: 'common-next-js-interview-questions',
        title: 'Common Interview Questions',
        content: commonNextInterviewQuestions,
      },
      {
        id: 'pages-routers-next-js-interview-questions',
        title: 'Pages Routers Interview Questions',
        content: pagesRouterNextInterviewQuestions,
      },
      {
        id: 'app-routers-next-js-interview-questions',
        title: 'App Routers Interview Questions',
        content: appRouterNextInterviewQuestions,
      },
    ],
  },
  {
    id: 'vue-js',
    title: 'Vue.js',
    Icon: Vue,
    documents: [
      {
        id: 'vue-js-intro',
        title: 'Introduction',
        content: vueIntro,
      },
      {
        id: 'vue-js-files-and-folders-structure',
        title: 'Files and Folders Structure',
        content: vueFilesAndFoldersStructure,
      },
      {
        id: 'common-next-js-interview-questions',
        title: 'Common Interview Questions',
        content: commonNextInterviewQuestions,
      },
      {
        id: 'theory-vue-js-interview-questions',
        title: 'Theory Interview Questions',
        content: vueTheoryQuestions,
      },
      {
        id: 'coding-vue-js-interview-questions',
        title: 'coding Interview Questions',
        content: vueCodingQuestions,
      },
    ],
  },
  {
    id: 'react-machine-coding',
    title: 'React Machine Coding',
    Icon: React,
    documents: [
      {
        id: 'intro-to-react-machine-coding',
        title: 'Introduction',
        content: reactMachineCodingIntro,
      },
      {
        id: 'level-easy-react-machine-coding',
        title: 'Easy Level',
        content: reactMachineCodingEasyLevel,
      },
      {
        id: 'level-medium-react-machine-coding',
        title: 'Medium Level',
        content: reactMachineCodingMediumLevel,
      },
      {
        id: 'level-hard-react-machine-coding',
        title: 'Hard Level',
        content: reactMachineCodingHardLevel,
      },
      {
        id: 'level-expert-react-machine-coding',
        title: 'Expert Level',
        content: reactMachineCodingExpertLevel,
      },
    ],
  },
  {
    id: 'react-libraries',
    title: 'React Libraries',
    Icon: Utils,
    documents: [
      {
        id: 'most-useful-react-libraries',
        title: 'Most Useful React Libraries',
        content: reactOpenSourcePackages,
      },
      {
        id: 'react-hook-form-docs',
        title: 'React Hook Form',
        content: reactHookFormDocs,
      },
      {
        id: 'react-query-docs',
        title: 'React Query',
        content: reactQuery,
      },
      {
        id: 'react-query-hooks-docs',
        title: 'React Query Hooks',
        content: reactQueryHooks,
      },
      {
        id: 'react-table-docs',
        title: 'React Table',
        content: reactTable,
      },
      {
        id: 'react-table-hooks-docs',
        title: 'React Table Hooks',
        content: reactTableHooks,
      },
      {
        id: 'react-router-dom-docs',
        title: 'React Router Dom',
        content: reactRouterDom,
      },
      {
        id: 'react-window-docs',
        title: 'React Window',
        content: reactWindow,
      },
    ],
  },
  {
    id: 'state-management',
    title: 'State Management',
    Icon: Flow,
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
        title: 'Redux Toolkit',
        content: reduxToolkit,
      },
      {
        id: 'zustand',
        title: 'Zustand',
        content: zustand,
      },
    ],
  },
];
