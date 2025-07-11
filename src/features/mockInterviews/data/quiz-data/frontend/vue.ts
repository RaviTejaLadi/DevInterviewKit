import { Question } from '@/features/mockInterviews/types/questions';

export const vueQuestions: Question[] = [
  {
    id: 1,
    question: 'What is Vue.js?',
    code: '',
    options: [
      'A JavaScript library for building user interfaces',
      'A front-end JavaScript framework',
      'A back-end programming language',
      'A CSS preprocessor',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'What is the main feature of Vue.js?',
    code: '',
    options: ['Two-way data binding', 'Virtual DOM', 'Component-based architecture', 'All of the above'],
    correctAnswer: 3,
  },
  {
    id: 3,
    question: 'Which directive is used for conditional rendering in Vue?',
    code: '',
    options: ['v-for', 'v-if', 'v-bind', 'v-model'],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'What is the purpose of v-model directive?',
    code: '',
    options: [
      'To create loops',
      'To bind data to form inputs',
      'To conditionally render elements',
      'To bind HTML attributes',
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: 'What is a Vue instance?',
    code: '',
    options: ['A single HTML element', 'The root of a Vue application', 'A JavaScript function', 'A CSS class'],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'What is the correct way to create a Vue instance?',
    code: '',
    options: ['new Vue()', 'createVue()', 'Vue.create()', 'new Vue.create()'],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: 'What is a component in Vue.js?',
    code: '',
    options: ['A reusable Vue instance', 'A JavaScript function', 'A CSS stylesheet', 'An HTML template'],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: 'How do you register a component globally in Vue?',
    code: '',
    options: ['Vue.component()', 'new Component()', 'Vue.createComponent()', 'Component.register()'],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: 'What is the purpose of computed properties?',
    code: '',
    options: [
      'To perform DOM manipulations',
      'To declare reactive properties that are calculated from other data',
      'To make HTTP requests',
      'To create event handlers',
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: 'What is Vuex used for?',
    code: '',
    options: ['Routing', 'State management', 'HTTP requests', 'Form validation'],
    correctAnswer: 1,
  },
  {
    id: 11,
    question: 'What is the main concept of Vue Router?',
    code: '',
    options: ['State management', 'Component-based routing', 'Form handling', 'HTTP requests'],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: 'What is the difference between v-if and v-show?',
    code: '',
    options: [
      'v-if removes elements from DOM, v-show toggles visibility',
      'v-if is faster than v-show',
      "v-show works with components, v-if doesn't",
      'There is no difference',
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: 'What is the purpose of the key attribute in v-for?',
    code: '',
    options: [
      'To improve performance and track node identity',
      'To style the element',
      'To bind data',
      'To create a unique route',
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: 'What is a slot in Vue?',
    code: '',
    options: [
      'A way to pass content to components',
      'A state management pattern',
      'A routing mechanism',
      'A lifecycle hook',
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: 'What is the composition API?',
    code: '',
    options: [
      'A new way to write Vue 2 components',
      'A set of additive APIs for Vue 3',
      'A state management library',
      'A routing solution',
    ],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: 'What is the purpose of the ref attribute?',
    code: '',
    options: [
      'To reference a DOM element or component instance',
      'To create a reactive reference',
      'To bind data',
      'To create a computed property',
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: 'What is a mixin in Vue?',
    code: '',
    options: [
      'A way to distribute reusable functionalities',
      'A state management pattern',
      'A routing solution',
      'A testing framework',
    ],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: 'What is the correct way to handle events in Vue?',
    code: '',
    options: [
      'Using v-event directive',
      'Using v-on or @ shorthand',
      'Using JavaScript event listeners only',
      'Using jQuery',
    ],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: 'What is the purpose of the nextTick method?',
    code: '',
    options: ['To delay code execution', 'To execute code after DOM updates', 'To create timers', 'To handle errors'],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: 'What are lifecycle hooks in Vue?',
    code: '',
    options: [
      "Functions that get called at different stages of a component's lifecycle",
      'CSS animations',
      'Routing methods',
      'State management patterns',
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: 'Which lifecycle hook is called right before destruction?',
    code: '',
    options: ['created', 'mounted', 'beforeDestroy', 'updated'],
    correctAnswer: 2,
  },
  {
    id: 22,
    question: 'What is the purpose of keep-alive?',
    code: '',
    options: ['To cache components', 'To maintain state', 'To prevent component destruction', 'All of the above'],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: 'What is a directive in Vue?',
    code: '',
    options: ['A special attribute with v- prefix', 'A component', 'A lifecycle hook', 'A state management pattern'],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: 'How do you create a custom directive?',
    code: '',
    options: ['Vue.directive()', 'new Directive()', 'Vue.createDirective()', 'Directive.register()'],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: 'What is the difference between props and data?',
    code: '',
    options: [
      'Props are passed from parent, data is internal',
      'Data is passed from parent, props are internal',
      'They are the same',
      'Props are for routing, data is for state',
    ],
    correctAnswer: 0,
  },
  {
    id: 26,
    question: 'What is the purpose of provide/inject?',
    code: '',
    options: ['Parent-child communication', 'Dependency injection', 'State management', 'Both A and B'],
    correctAnswer: 3,
  },
  {
    id: 27,
    question: 'What is a render function in Vue?',
    code: '',
    options: [
      'An alternative to templates using JavaScript',
      'A way to render server-side content',
      'A lifecycle hook',
      'A state management pattern',
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: 'What is the purpose of the v-bind directive?',
    code: '',
    options: [
      'To bind data to HTML attributes',
      'To create event listeners',
      'To conditionally render elements',
      'To create loops',
    ],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: 'What is the difference between methods and computed properties?',
    code: '',
    options: [
      'Computed are cached, methods are not',
      'Methods are cached, computed are not',
      'They are the same',
      "Computed can't return values",
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: 'What is the purpose of Vue CLI?',
    code: '',
    options: ['Standard tooling for Vue development', 'State management', 'Routing', 'Form validation'],
    correctAnswer: 0,
  },
];
