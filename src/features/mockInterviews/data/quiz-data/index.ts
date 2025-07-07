import { Question } from '../../types/questions';
import { cssQuestions } from './frontend/css';
import { htmlQuestions } from './frontend/html';
import { jsQuestions } from './frontend/js';
import { nextjsQuestions } from './frontend/next';
import { reactQuestions } from './frontend/react';
import { tailwindQuestions } from './frontend/tailwind';
import { vueQuestions } from './frontend/vue';

export const sampleQuestions: Record<string, Question[]> = {
  react: reactQuestions,
  html: htmlQuestions,
  javascript: jsQuestions,
  css: cssQuestions,
  tailwind: tailwindQuestions,
  nextjs: nextjsQuestions,
  vuejs: vueQuestions,
  python: [
    {
      id: 1,
      question: 'What is the correct way to create a function in Python?',
      options: ['function myFunction():', 'def myFunction():', 'create myFunction():', 'func myFunction():'],
      correctAnswer: 1,
    },
  ],
  sql: [
    {
      id: 1,
      question: 'Which SQL statement is used to extract data from a database?',
      options: ['GET', 'EXTRACT', 'SELECT', 'OPEN'],
      correctAnswer: 2,
    },
  ],
  docker: [
    {
      id: 1,
      question: 'What is Docker?',
      options: ['A programming language', 'A containerization platform', 'A database', 'A web server'],
      correctAnswer: 1,
    },
  ],
  aws: [
    {
      id: 1,
      question: 'What does AWS stand for?',
      options: ['Amazon Web Services', 'Amazon Web Storage', 'Amazon Web Security', 'Amazon Web Solutions'],
      correctAnswer: 0,
    },
  ],
  'react-native': [
    {
      id: 1,
      question: 'What is React Native?',
      options: ['A web framework', 'A mobile app development framework', 'A database', 'A testing library'],
      correctAnswer: 1,
    },
  ],
  flutter: [
    {
      id: 1,
      question: 'What programming language is Flutter based on?',
      options: ['Java', 'JavaScript', 'Dart', 'Python'],
      correctAnswer: 2,
    },
  ],
};
