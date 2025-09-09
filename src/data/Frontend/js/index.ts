import jsIntro from './js-intro.md?raw';
import jsInterviewQuestions from './top-30-q-&-a.md?raw';
import JSL1andL2InterviewQuestions from './21-programs-inL1&L2.md?raw';
import Arrays from './arrays.md?raw';
import objects from './objects.md?raw';
import eventHandling from './event-handling.md?raw';
import debounceAndThrottle from './Debouncing & Throttling.md?raw';
import variablesAndScoping from './Variables & Scoping.md?raw';
import dataTypesAndTypeConversion from './Data Types & Type Conversion.md?raw';
import webStorageApi from './web-storage-api.md?raw';
import loopingStatements from './looping-statements.md?raw';
import conditionalStatements from './conditional-statements.md?raw';
import promises from './promise-combinators.md?raw';
import asyncAwait from './async-await.md?raw';
import closures from './closures.md?raw';
import prototypesAndInheritance from './prototypes-And-Inheritance.md?raw';
import thisKeyword from './this-Keyword.md?raw';
import callApplyBind from './call-Apply-Bind.md?raw';
import hoisting from './hoisting.md?raw';
import es6Features from './es6Features.md?raw';
import domManipulation from './dom-Manipulation.md?raw';
import eventLoop from './eventLoop.md?raw';
import functions from './functions.md?raw';
import functionsBestPractices from './function-best-practices.md?raw';
import callbackFunctions from './callback-Functions.md?raw';
import errorHandling from './error-Handling.md?raw';
import fetchApi from './fetchApi.md?raw';
import modules from './modules.md?raw';
import designPatterns from './design-Patterns.md?raw';
import memoryManagement from './memory-Management.md?raw';
import currying from './currying.md?raw';
import webWorkers from './webWorkers.md?raw';
import strictMode from './strictMode.md?raw';
import generators from './generators.md?raw';
import proxyAndReflect from './proxyAndReflect.md?raw';
import polyfills from './polyfills.md?raw';
import { jsOOPSConcepts } from './js-oops';

export const jsCategories = [
  {
    id: 'js-interview-prep',
    title: '🎯 Interview Prep',
    documents: [
      { id: 'js-top30q&a', title: '❓ Top 30 Q&A', content: jsInterviewQuestions },
      { id: 'js-l1-l2-interview', title: '📝 L1 & L2 Interviews', content: JSL1andL2InterviewQuestions },
    ],
  },
  {
    id: 'js-fundamentals',
    title: '📚 Fundamentals',
    documents: [
      { id: 'intro-to-js', title: '📖 Introduction', content: jsIntro },
      { id: 'js-variables-&-scoping', title: '🧠 Variables & Scoping', content: variablesAndScoping },
      {
        id: 'js-datatypes-And-TypeConversion',
        title: '🔢 Data Types & Type Conversion',
        content: dataTypesAndTypeConversion,
      },
      { id: 'js-functions', title: '📞 Functions', content: functions },
      { id: 'js-functions-best-practices', title: '📃 Functions Best Practices', content: functionsBestPractices },
      { id: 'js-array-methods', title: '📊 Array Methods', content: Arrays },
      { id: 'js-objects', title: '🗃️ Object Methods', content: objects },
      { id: 'js-looping-statements', title: '🔄 Looping Statements', content: loopingStatements },
      { id: 'js-conditional-statements', title: '❓ Conditional Statements', content: conditionalStatements },
      { id: 'js-modules', title: '📦 Modules (ES6)', content: modules },
      { id: 'js-strict-mode', title: '📏 Strict Mode', content: strictMode },
    ],
  },
  {
    id: 'js-core-concepts',
    title: '🧩 Core Concepts',
    documents: [
      { id: 'js-closures', title: '🔒 Closures', content: closures },
      { id: 'js-this-keyword', title: '👈 this Keyword', content: thisKeyword },
      { id: 'js-call-apply-bind', title: '🔗 call, apply & bind', content: callApplyBind },
      { id: 'js-prototypes-inheritance', title: '🧬 Prototypes & Inheritance', content: prototypesAndInheritance },
      { id: 'js-error-handling', title: '❌ Error Handling', content: errorHandling },
      { id: 'js-hoisting', title: '🔼 Hoisting', content: hoisting },
    ],
  },
  {
    id: 'js-async-concurrency',
    title: '⏱️ Async & Concurrency',
    documents: [
      { id: 'js-async-await', title: '⏳ Async/Await', content: asyncAwait },
      { id: 'js-promises', title: '🤝 Promise Combinators', content: promises },
      { id: 'js-event-loop', title: '♻️ Event Loop', content: eventLoop },
      { id: 'js-callback-functions', title: '📲 Callback Functions', content: callbackFunctions },
      { id: 'js-debouncing-&-throttling', title: '⏱️ Debouncing & Throttling', content: debounceAndThrottle },
      { id: 'js-fetch-api', title: '🌐 Fetch API', content: fetchApi },
    ],
  },
  {
    id: 'js-dom-browser',
    title: '🖥️ DOM & Browser',
    documents: [
      { id: 'js-dom-manipulation', title: '🖥️ DOM Manipulation', content: domManipulation },
      { id: 'js-event-handling', title: '🎮 Event Handling', content: eventHandling },
      { id: 'js-web-storage-api', title: '💾 Web Storage API', content: webStorageApi },
    ],
  },
  {
    id: 'js-advanced',
    title: '🚀 Advanced',
    documents: [
      { id: 'js-es6-features', title: '✨ ES6+ Features', content: es6Features },
      { id: 'js-currying', title: '🏹 Currying', content: currying },
      { id: 'js-design-patterns', title: '🎨 Design Patterns', content: designPatterns },
      { id: 'js-memory-management', title: '🧠 Memory Management', content: memoryManagement },
      { id: 'js-web-workers', title: '👷 Web Workers', content: webWorkers },
      { id: 'js-generators', title: '🌀 Generators', content: generators },
      { id: 'js-proxy-reflect', title: '🪞 Proxy & Reflect', content: proxyAndReflect },
      { id: 'js-polyfills', title: '✨ Polyfills', content: polyfills },
    ],
  },
  {
    id: 'javascript-oops',
    title: '📖 JS OOPS',
    children: jsOOPSConcepts,
  },
];
